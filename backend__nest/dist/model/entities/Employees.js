"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Employees_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
const typeorm_1 = require("typeorm");
const Departments_1 = require("./Departments");
const Jobs_1 = require("./Jobs");
let Employees = Employees_1 = class Employees {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'employee_id' }),
    __metadata("design:type", Number)
], Employees.prototype, "employeeId", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'first_name',
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Employees.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'last_name',
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], Employees.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'email', nullable: true, length: 25 }),
    __metadata("design:type", String)
], Employees.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'phone_number',
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Employees.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp without time zone', { name: 'hire_date', nullable: true }),
    __metadata("design:type", Date)
], Employees.prototype, "hireDate", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'salary', nullable: true, precision: 8, scale: 2 }),
    __metadata("design:type", String)
], Employees.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'commission_pct',
        nullable: true,
        precision: 2,
        scale: 2,
    }),
    __metadata("design:type", String)
], Employees.prototype, "commissionPct", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Departments_1.Departments, (departments) => departments.employees),
    __metadata("design:type", Array)
], Employees.prototype, "departments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Departments_1.Departments, (departments) => departments.employees2, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'department_id', referencedColumnName: 'departmentId' }]),
    __metadata("design:type", Departments_1.Departments)
], Employees.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Jobs_1.Jobs, (jobs) => jobs.employees, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'job_id', referencedColumnName: 'jobId' }]),
    __metadata("design:type", Jobs_1.Jobs)
], Employees.prototype, "job", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employees_1, (employees) => employees.employees, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([
        { name: 'manager_id', referencedColumnName: 'employeeId' },
        { name: 'manager_id', referencedColumnName: 'employeeId' },
    ]),
    __metadata("design:type", Employees)
], Employees.prototype, "employees", void 0);
Employees = Employees_1 = __decorate([
    (0, typeorm_1.Index)('employee_id_pk', ['employeeId'], { unique: true }),
    (0, typeorm_1.Entity)('employees', { schema: 'public' })
], Employees);
exports.Employees = Employees;
//# sourceMappingURL=Employees.js.map