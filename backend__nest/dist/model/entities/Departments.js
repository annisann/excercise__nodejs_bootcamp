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
exports.Departments = void 0;
const typeorm_1 = require("typeorm");
const Locations_1 = require("./Locations");
const Employees_1 = require("./Employees");
const JobHistory_1 = require("./JobHistory");
let Departments = class Departments {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "department_id" }),
    __metadata("design:type", Number)
], Departments.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "department_name",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], Departments.prototype, "departmentName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Locations_1.Locations, (locations) => locations.departments, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "location_id", referencedColumnName: "locationId" }]),
    __metadata("design:type", Locations_1.Locations)
], Departments.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employees_1.Employees, (employees) => employees.departments, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([
        { name: "manager_id", referencedColumnName: "employeeId" },
        { name: "manager_id", referencedColumnName: "employeeId" },
    ]),
    __metadata("design:type", Employees_1.Employees)
], Departments.prototype, "employees", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Employees_1.Employees, (employees) => employees.department),
    __metadata("design:type", Array)
], Departments.prototype, "employees2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => JobHistory_1.JobHistory, (jobHistory) => jobHistory.department),
    __metadata("design:type", Array)
], Departments.prototype, "jobHistories", void 0);
Departments = __decorate([
    (0, typeorm_1.Index)("department_id_pk", ["departmentId"], { unique: true }),
    (0, typeorm_1.Entity)("departments", { schema: "public" })
], Departments);
exports.Departments = Departments;
//# sourceMappingURL=Departments.js.map