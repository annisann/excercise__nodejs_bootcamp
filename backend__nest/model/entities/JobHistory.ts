import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Departments } from "./Departments";
import { Jobs } from "./Jobs";

@Index("job_history_pk", ["employeeId", "startDate"], { unique: true })
@Entity("job_history", { schema: "public" })
export class JobHistory {
  @Column("integer", { primary: true, name: "employee_id" })
  employeeId: number;

  @Column("timestamp without time zone", { primary: true, name: "start_date" })
  startDate: Date;

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department: Departments;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job: Jobs;
}
