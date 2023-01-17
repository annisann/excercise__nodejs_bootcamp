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
exports.Countries = void 0;
const typeorm_1 = require("typeorm");
const Regions_1 = require("./Regions");
const Locations_1 = require("./Locations");
let Countries = class Countries {
};
__decorate([
    (0, typeorm_1.Column)("character", { primary: true, name: "country_id", length: 2 }),
    __metadata("design:type", String)
], Countries.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "country_name",
        nullable: true,
        length: 40,
    }),
    __metadata("design:type", String)
], Countries.prototype, "countryName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Regions_1.Regions, (regions) => regions.countries, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "region_id", referencedColumnName: "regionId" }]),
    __metadata("design:type", Regions_1.Regions)
], Countries.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Locations_1.Locations, (locations) => locations.country),
    __metadata("design:type", Array)
], Countries.prototype, "locations", void 0);
Countries = __decorate([
    (0, typeorm_1.Index)("country_id_pk", ["countryId"], { unique: true }),
    (0, typeorm_1.Entity)("countries", { schema: "public" })
], Countries);
exports.Countries = Countries;
//# sourceMappingURL=Countries.js.map