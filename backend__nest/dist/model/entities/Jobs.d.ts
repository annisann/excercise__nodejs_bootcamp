import { Employees } from "./Employees";
import { JobHistory } from "./JobHistory";
export declare class Jobs {
    jobId: string;
    jobTitle: string;
    minSalary: string;
    maxSalary: string;
    employees: Employees[];
    jobHistories: JobHistory[];
}
