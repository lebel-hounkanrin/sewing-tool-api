import { Users } from './../users/entity/users.entity';
import { Artisan } from './entity/artisan.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArtisanService {
    constructor(
        @InjectRepository(Artisan)
        private artisanRepository: Repository<Artisan>
    ){}

    async create(user: Users){
        const artisan = this.artisanRepository.create();
        artisan.user = user;
        return this.artisanRepository.save(artisan);
    }

    async findAll(){
        return this.artisanRepository.find()
    }

    async findOrCreate(user: Users){
        const artisan = await this.artisanRepository.findOne({where: {"id" : user.id}})
        console.log(artisan)
        if(artisan && artisan !== null) {
            return artisan
        }
        console.log("Trying to create another one")
        return this.create(user)
    }
}
