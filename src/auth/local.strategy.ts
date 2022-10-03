import { LoginDto } from './dto/login.dto';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        private authService: AuthService
    ){
        super({"usernameField": "email"})
    }
    
    async validate(username:string, passwd:string){
        const user = await this.authService.validateUser({email: username, password: passwd })
        if(!user){
            throw new UnauthorizedException()
        }
        return user
    }
}