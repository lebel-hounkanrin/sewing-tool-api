import { IsNotEmpty, IsUUID } from "class-validator";

export class AtelierDto {

    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsUUID()
    ownerId: string

    @IsNotEmpty()
    ifu:string

    @IsNotEmpty()
    pays: string

    @IsNotEmpty()
    ville: string

    @IsNotEmpty()
    quartier: string
}