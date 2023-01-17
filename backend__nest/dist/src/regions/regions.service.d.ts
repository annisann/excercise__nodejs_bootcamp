import { Repository } from 'typeorm';
import { Regions } from 'model/entities/Regions';
export declare class RegionsService {
    private readonly regionRepository;
    constructor(regionRepository: Repository<Regions>);
    findAll(): Promise<any>;
    findRegionsbyID(id: number): Promise<any>;
    createNewRegion(newRegion: Regions): Promise<any>;
    updateRegion(regionToUpdate: Regions): Promise<any>;
    deleteRegion(idToDelete: number): Promise<any>;
}
