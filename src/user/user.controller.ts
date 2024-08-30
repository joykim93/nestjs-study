import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) {}

    @Post()
    signup(
        @Body(new ValidationPipe()) data: CreateUserDto
    ) {
        return this.userService.createUser(data);
    }

    @Post('login')
    login(
        @Body(new ValidationPipe()) data: LoginUserDto
    ) {
        return this.userService.login(data);
    }

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getUsers() {
        return this.userService.getUser();
    }
}
