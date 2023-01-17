import { Column, Entity, Index, OneToMany } from "typeorm";
import { Employees } from "./Employees";
import { JobHistory } from "./JobHistory";

@Index("job_id_pk", ["jobId"], { unique: true })
@Index("job_title_unique", ["jobTitle"], { unique: true })
@Entity("jobs", { schema: "public" })
export class Jobs {
  @Column("character varying", { primary: true, name: "job_id", length: 10 })
  jobId: string;

  @Column("character varying", { name: "job_title", unique: true, length: 35 })
  jobTitle: string;

  @Column("numeric", { name: "min_salary", precision: 8, scale: 2 })
  minSalary: string;

  @Column("numeric", { name: "max_salary", precision: 8, scale: 2 })
  maxSalary: string;

  @OneToMany(() => Employees, (employees) => employees.job)
  employees: Employees[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job)
  jobHistories: JobHistory[];
}
