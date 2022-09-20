import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants';

@Module({
  imports: [UsersModule,
  JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: {expiresIn:"300s"}
  })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
