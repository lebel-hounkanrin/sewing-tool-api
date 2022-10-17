import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtisanService } from './artisan.service';
import { Artisan } from './entity/artisan.entity';
import { ArtisanController } from './artisan.controller';

@Module({
  imports : [TypeOrmModule.forFeature([Artisan])],
  providers: [ArtisanService],
  controllers: [ArtisanController],
  exports: [ArtisanService]
})
export class ArtisanModule {}
