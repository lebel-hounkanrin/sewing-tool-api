import { ArtisanService } from './../artisan/artisan.service';
import { Users } from 'src/users/entity/users.entity';
import { Atelier } from './entity/atelier.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtelierDto } from './dto/atelier.dto';

@Injectable()
export class AtelierService {
    constructor(
        @InjectRepository(Atelier)
        private atelierRepository: Repository<Atelier>,
        private arisanService: ArtisanService
    ){}

    async create(user: Users, atelierDto: AtelierDto): Promise<Atelier>{
        const atelier = this.atelierRepository.create(atelierDto);
        const artisan = await this.arisanService.findOrCreate(user);
        atelier.owner = artisan;
        return this.atelierRepository.save(atelier)
    }
}
