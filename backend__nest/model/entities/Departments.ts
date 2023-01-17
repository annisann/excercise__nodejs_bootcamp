import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Locations } from "./Locations";
import { Employees } from "./Employees";
import { JobHistory } from "./JobHistory";

@Index("department_id_pk", ["departmentId"], { unique: true })
@Entity("departments", { schema: "public" })
export class Departments {
  @PrimaryGeneratedColumn({ type: "integer", name: "department_id" })
  departmentId: number;

  @Column("character varying", {
    name: "department_name",
    nullable: true,
    length: 30,
  })
  departmentName: string | null;

  @ManyToOne(() => Locations, (locations) => locations.departments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location: Locations;

  @ManyToOne(() => Employees, (employees) => employees.departments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "manager_id", referencedColumnName: "employeeId" },
    { name: "manager_id", referencedColumnName: "employeeId" },
  ])
  employees: Employees;

  @OneToMany(() => Employees, (employees) => employees.department)
  employees2: Employees[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department)
  jobHistories: JobHistory[];
}
