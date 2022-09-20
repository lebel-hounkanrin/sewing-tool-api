import { UsersDto } from './dto/users.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private repository : Repository<Users>
     ){}

     async create(user: UsersDto){
        const obj= this.repository.create(user);
        return this.repository.save(obj);
     }


}
