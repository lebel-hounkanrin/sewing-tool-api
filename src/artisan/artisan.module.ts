import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtisanService } from './artisan.service';
import { Artisan } from './entity/artisan.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Artisan])],
  providers: [ArtisanService]
})
export class ArtisanModule {}
