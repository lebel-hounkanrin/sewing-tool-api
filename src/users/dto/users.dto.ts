import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
export class UsersDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    phoneNumber: string;
    
    @IsOptional()
    profile?: string;

    @IsNotEmpty()
    password: string; 

    @IsNotEmpty()
    confirmPassword: string;
    
}