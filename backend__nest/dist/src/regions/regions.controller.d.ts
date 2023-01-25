import { Regions } from 'model/entities/Regions';
import { RegionsService } from './regions.service';
export declare class RegionsController {
    private readonly regionService;
    constructor(regionService: RegionsService);
    findAll(): Promise<any>;
    findRegionsbyID(id: number): Promise<any>;
    createNewRegion(body: Regions): Promise<any>;
    updateRegion(id: number, body: Regions): Promise<any>;
    deleteRegion(id: number): Promise<any>;
}
