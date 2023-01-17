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
exports.Locations = void 0;
const typeorm_1 = require("typeorm");
const Departments_1 = require("./Departments");
const Countries_1 = require("./Countries");
let Locations = class Locations {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "location_id" }),
    __metadata("design:type", Number)
], Locations.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "street_address",
        nullable: true,
        length: 40,
    }),
    __metadata("design:type", String)
], Locations.prototype, "streetAddress", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "postal_code",
        nullable: true,
        length: 12,
    }),
    __metadata("design:type", String)
], Locations.prototype, "postalCode", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "city", nullable: true, length: 30 }),
    __metadata("design:type", String)
], Locations.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "state_province",
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], Locations.prototype, "stateProvince", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Departments_1.Departments, (departments) => departments.location),
    __metadata("design:type", Array)
], Locations.prototype, "departments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Countries_1.Countries, (countries) => countries.locations, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "country_id", referencedColumnName: "countryId" }]),
    __metadata("design:type", Countries_1.Countries)
], Locations.prototype, "country", void 0);
Locations = __decorate([
    (0, typeorm_1.Index)("location_id_pk", ["locationId"], { unique: true }),
    (0, typeorm_1.Entity)("locations", { schema: "public" })
], Locations);
exports.Locations = Locations;
//# sourceMappingURL=Locations.js.map