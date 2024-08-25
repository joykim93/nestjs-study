import { IsEmail, IsNotEmpty, IsPhoneNumber, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @MinLength(2)
    @MaxLength(10)
    @IsNotEmpty()
    username: string;

    @MinLength(8)
    @IsNotEmpty()
    password: string;

    @MinLength(2)
    @IsNotEmpty()
    name: string;

    // @IsEmail()
    // email:string;

    // @IsPhoneNumber('KR')
    // phoneNumber:string;
}