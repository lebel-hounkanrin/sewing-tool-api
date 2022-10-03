import { Users } from './../users/entity/users.entity';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException, Injectable} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt"
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService:JwtService){}

    async validateUser(user: LoginDto){
        const validatedUser = await this.usersService.getUserByEmail(user.email);
        if (!validatedUser) throw new BadRequestException("invalid email or password")
        const result = await bcrypt.compare(user.password, validatedUser.password);
        if (!result) throw new BadRequestException("invalid email or password")
        return validatedUser
    }

    async login(user: LoginDto){
        //const validatedUser = await this.validateUser(user)
        const payload = {username: user.email, sub: user.password}
        const access_token= this.jwtService.sign(payload)
        return `Authentication=${access_token}; HttpOnly=true; Path=/; Max-Age=60s`
    }

}
