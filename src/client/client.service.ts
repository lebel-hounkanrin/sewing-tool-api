import { Client } from './entity/client.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>
    ){}

    async create() : Promise<Client>{
        return 
    }
}
