import { Atelier } from './entity/atelier.entity';
import { Module } from '@nestjs/common';
import { AtelierService } from './atelier.service';
import { AtelierController } from './atelier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtisanModule } from 'src/artisan/artisan.module';

@Module({
  imports: [TypeOrmModule.forFeature([Atelier]), ArtisanModule],
  providers: [AtelierService],
  controllers: [AtelierController]
})
export class AtelierModule {}
