import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
export class UsersDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    phoneNumber: string;

    @IsNotEmpty()
    password: string; 

    @IsNotEmpty()
    confirmPassword: string;
    
}