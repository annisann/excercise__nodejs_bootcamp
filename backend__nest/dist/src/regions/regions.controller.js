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
exports.RegionsController = void 0;
const common_1 = require("@nestjs/common");
const Regions_1 = require("../../model/entities/Regions");
const regions_service_1 = require("./regions.service");
let RegionsController = class RegionsController {
    constructor(regionService) {
        this.regionService = regionService;
    }
    async findAll() {
        return this.regionService.findAll();
    }
    async findRegionsbyID(id) {
        return this.regionService.findRegionsbyID(id);
    }
    async createNewRegion(body) {
        return await this.regionService.createNewRegion(body);
    }
    async updateRegion(body) {
        return await this.regionService.updateRegion(body);
    }
    async deleteRegion(id) {
        return await this.regionService.deleteRegion(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "findRegionsbyID", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Regions_1.Regions]),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "createNewRegion", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Regions_1.Regions]),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "updateRegion", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "deleteRegion", null);
RegionsController = __decorate([
    (0, common_1.Controller)('regions'),
    __metadata("design:paramtypes", [regions_service_1.RegionsService])
], RegionsController);
exports.RegionsController = RegionsController;
//# sourceMappingURL=regions.controller.js.map