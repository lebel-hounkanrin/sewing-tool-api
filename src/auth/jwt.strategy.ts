import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstant } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private userService: UsersService){
        super({
            //jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
                return request?.cookies?.Authentication
            }]),
            ignoreExpiration: false,
            secretOrKey: jwtConstant.secret,
        })
    }
    
    async validate(payload: any) {
        return this.userService.getUserByEmail(payload.username);
      }
}