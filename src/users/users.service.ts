import { UsersDto } from './dto/users.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
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
        if(user.password != user.confirmPassword) {throw new BadRequestException("password didn't match")}
        if (await this.checkIfEmailExist(user.email) > 0) {
            console.log(user.email)
            throw new BadRequestException("Email already exists")
        };
        const obj= this.repository.create(user);
        try{
            return this.repository.save(obj);
        } catch(e){
            throw new BadRequestException(e)
        }
     }

     async checkIfEmailExist(email:string){
        const count = await this.repository.createQueryBuilder("user").where("user.email = :email", {email})
        .getCount() ;
        return count 
     }

}
