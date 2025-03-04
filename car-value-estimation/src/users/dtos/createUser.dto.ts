import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    @MaxLength(30)
    password: string
}
