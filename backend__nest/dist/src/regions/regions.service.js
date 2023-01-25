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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Regions_1 = require("../../model/entities/Regions");
let RegionsService = class RegionsService {
    constructor(regionRepository) {
        this.regionRepository = regionRepository;
    }
    async findAll() {
        return await this.regionRepository.find();
    }
    async findRegionsbyID(id) {
        return await this.regionRepository.findOne({
            where: { regionId: id },
        });
    }
    async createNewRegion(newRegion) {
        return await this.regionRepository
            .insert({
            regionName: newRegion.regionName,
        })
            .then((result) => {
            return result;
        })
            .catch((err) => {
            return err;
        });
    }
    async updateRegion(id, regionToUpdate) {
        return await this.regionRepository
            .update({ regionId: id }, regionToUpdate)
            .then((result) => {
            return result;
        })
            .catch((err) => {
            return err;
        });
    }
    async deleteRegion(idToDelete) {
        return await this.regionRepository.delete({ regionId: idToDelete });
    }
};
RegionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Regions_1.Regions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegionsService);
exports.RegionsService = RegionsService;
//# sourceMappingURL=regions.service.js.map