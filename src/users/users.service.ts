import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}
    async getByEmail(email:string): Promise<User>{
        const user = await this.userRepository.findOneBy({email})
        return user
    }

    create(userDto: CreateUserDto){
        const user: User = this.userRepository.create(userDto);
        return user
    }
}
