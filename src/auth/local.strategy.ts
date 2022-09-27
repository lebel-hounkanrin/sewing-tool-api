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
        super({"usernameField": "email","passwordField": "password"})
    }
    
    async validate(credentials:LoginDto){
        console.log(credentials)
        const user = this.authService.validateUser(credentials)
        if(!user){
            throw new UnauthorizedException()
        }
        return user
    }
}