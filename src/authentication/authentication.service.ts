import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
    constructor(private readonly userService: UsersService){}

    public async register(registrationDto: CreateUserDto){
        const {password} = registrationDto;
        const hashpswd = await  bcrypt.hash(password, 10);
        try {
            registrationDto.password = hashpswd;
            const user= this.userService.create(registrationDto)
            user.password = undefined;
            return user
        } catch(e){
            if (e?.code ==23505){
                throw new HttpException("User with that email already exist", HttpStatus.BAD_REQUEST)
            }
            throw new HttpException(`Something wen't wrong due to ${e}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    } 
    
    public async getAuthenticatedUser(email: string, hashpsw: string){
        try {
            const user = await this.userService.getByEmail(email);
            const isPswdMatch = bcrypt.compare(user.password, hashpsw)
            if(!isPswdMatch){
                throw new HttpException("wrong credentials provided", HttpStatus.BAD_REQUEST)
            }
            user.password = undefined;
            return user;
        } catch(e){
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }
}
