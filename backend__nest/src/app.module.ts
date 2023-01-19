import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth/auth.module';
import { GlobalModule } from './module/global/global.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['./dist/model/entities/*{.ts,.js}'],
      synchronize: false,
      // autoLoadEntities: true, kalo pake, entitiesnya bisa kosong
    }),
    GlobalModule,
    AuthModule,
  ],
})
export class AppModule {}
