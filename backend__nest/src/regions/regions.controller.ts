import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Regions } from 'model/entities/Regions';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionService: RegionsService) {}

  // All regions
  @Get()
  async findAll() {
    return await this.regionService.findAll();
  }

  // Regions by ID
  @Get(':id')
  async findRegionsbyID(
    @Param('id')
    id: number,
  ) {
    return await this.regionService.findRegionsbyID(id);
  }

  // Add new region
  @Post('add')
  async createNewRegion(@Body() body: Regions) {
    // make sure key di body itu sama dengan yang di entity (bukan database)
    return await this.regionService.createNewRegion(body);
  }

  @Put('update/:id')
  async updateRegion(@Param('id') id: number, @Body() body: Regions) {
    return await this.regionService.updateRegion(id, body);
  }
  // @Put('update')
  // async updateRegion(@Body() body: Regions) {
  //   return await this.regionService.updateRegion(body);
  // }

  @Delete(':id')
  async deleteRegion(@Param('id') id: number) {
    return await this.regionService.deleteRegion(id);
  }
}
