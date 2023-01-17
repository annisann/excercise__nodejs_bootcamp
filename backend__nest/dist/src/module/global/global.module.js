"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Regions_1 = require("../../../model/entities/Regions");
const Users_1 = require("../../../model/entities/Users");
const regions_controller_1 = require("../../regions/regions.controller");
const regions_service_1 = require("../../regions/regions.service");
const user_controller_1 = require("../../user/user.controller");
const user_service_1 = require("../../user/user.service");
let GlobalModule = class GlobalModule {
};
GlobalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Regions_1.Regions, Users_1.Users])],
        controllers: [regions_controller_1.RegionsController, user_controller_1.UserController],
        providers: [regions_service_1.RegionsService, user_service_1.UserService],
    })
], GlobalModule);
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map