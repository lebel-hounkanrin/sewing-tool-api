import { Module } from '@nestjs/common';
import { AtelierService } from './atelier.service';
import { AtelierController } from './atelier.controller';

@Module({
  providers: [AtelierService],
  controllers: [AtelierController]
})
export class AtelierModule {}
