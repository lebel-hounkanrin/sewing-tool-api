import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule,
  PassportModule,
  JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: {expiresIn:"600s"}
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
