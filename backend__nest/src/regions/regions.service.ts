import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Regions } from 'model/entities/Regions';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Regions)
    private readonly regionRepository: Repository<Regions>,
  ) {}

  async findAll(): Promise<any> /* output: Collection (kalo outputnya ada banyak record) */ {
    return await this.regionRepository.find();
  }

  async findRegionsbyID(id: number): Promise<any> {
    return await this.regionRepository.findOne({
      where: { regionId: id },
    });
  }

  async createNewRegion(newRegion: Regions): Promise<any> {
    return await this.regionRepository.insert({
      regionId: newRegion.regionId,
      regionName: newRegion.regionName,
    });
  }

  async updateRegion(regionToUpdate: Regions): Promise<any> {
    return await this.regionRepository.update(
      regionToUpdate.regionId,
      regionToUpdate,
    );
  }

  async deleteRegion(idToDelete: number): Promise<any> {
    return await this.regionRepository.delete({ regionId: idToDelete });
  }
}
