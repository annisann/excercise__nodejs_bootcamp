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
exports.Jobs = void 0;
const typeorm_1 = require("typeorm");
const Employees_1 = require("./Employees");
const JobHistory_1 = require("./JobHistory");
let Jobs = class Jobs {
};
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "job_id", length: 10 }),
    __metadata("design:type", String)
], Jobs.prototype, "jobId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "job_title", unique: true, length: 35 }),
    __metadata("design:type", String)
], Jobs.prototype, "jobTitle", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "min_salary", precision: 8, scale: 2 }),
    __metadata("design:type", String)
], Jobs.prototype, "minSalary", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "max_salary", precision: 8, scale: 2 }),
    __metadata("design:type", String)
], Jobs.prototype, "maxSalary", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Employees_1.Employees, (employees) => employees.job),
    __metadata("design:type", Array)
], Jobs.prototype, "employees", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => JobHistory_1.JobHistory, (jobHistory) => jobHistory.job),
    __metadata("design:type", Array)
], Jobs.prototype, "jobHistories", void 0);
Jobs = __decorate([
    (0, typeorm_1.Index)("job_id_pk", ["jobId"], { unique: true }),
    (0, typeorm_1.Index)("job_title_unique", ["jobTitle"], { unique: true }),
    (0, typeorm_1.Entity)("jobs", { schema: "public" })
], Jobs);
exports.Jobs = Jobs;
//# sourceMappingURL=Jobs.js.map