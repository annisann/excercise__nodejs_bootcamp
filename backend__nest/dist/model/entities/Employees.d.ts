import { Departments } from './Departments';
import { Jobs } from './Jobs';
export declare class Employees {
    employeeId: number;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    hireDate: Date | null;
    salary: string | null;
    commissionPct: string | null;
    departments: Departments[];
    department: Departments;
    job: Jobs;
    employees: Employees;
}
