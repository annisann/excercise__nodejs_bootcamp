import { Departments } from "./Departments";
import { Jobs } from "./Jobs";
export declare class JobHistory {
    employeeId: number;
    startDate: Date;
    endDate: Date | null;
    department: Departments;
    job: Jobs;
}
