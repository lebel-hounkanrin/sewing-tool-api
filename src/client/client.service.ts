import { Client } from './entity/client.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/users/entity/users.entity';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>
    ){}

    async create(user: Users) : Promise<Client>{
        const client = this.clientRepository.create()
        client.user = user 
        return this.clientRepository.save(client);
    }
}
