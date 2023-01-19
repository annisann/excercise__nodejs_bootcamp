import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from 'model/entities/Regions';
import { Users } from 'model/entities/Users';
import { RegionsController } from 'src/regions/regions.controller';
import { RegionsService } from 'src/regions/regions.service';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Regions, Users])],
  controllers: [RegionsController, UserController],
  providers: [RegionsService, UserService],
  exports: [UserService],
})
export class GlobalModule {}
