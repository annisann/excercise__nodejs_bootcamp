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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobHistory = void 0;
const typeorm_1 = require("typeorm");
const Departments_1 = require("./Departments");
const Jobs_1 = require("./Jobs");
let JobHistory = class JobHistory {
};
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "employee_id" }),
    __metadata("design:type", Number)
], JobHistory.prototype, "employeeId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { primary: true, name: "start_date" }),
    __metadata("design:type", Date)
], JobHistory.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "end_date", nullable: true }),
    __metadata("design:type", Date)
], JobHistory.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Departments_1.Departments, (departments) => departments.jobHistories, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "department_id", referencedColumnName: "departmentId" }]),
    __metadata("design:type", Departments_1.Departments)
], JobHistory.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Jobs_1.Jobs, (jobs) => jobs.jobHistories, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "job_id", referencedColumnName: "jobId" }]),
    __metadata("design:type", Jobs_1.Jobs)
], JobHistory.prototype, "job", void 0);
JobHistory = __decorate([
    (0, typeorm_1.Index)("job_history_pk", ["employeeId", "startDate"], { unique: true }),
    (0, typeorm_1.Entity)("job_history", { schema: "public" })
], JobHistory);
exports.JobHistory = JobHistory;
//# sourceMappingURL=JobHistory.js.map