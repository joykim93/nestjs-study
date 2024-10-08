import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { hash, compare } from 'bcrypt'
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getUser() {
        return this.userRepository.find();
    }

    async createUser(data: CreateUserDto) {
        const { username, name, password } = data;
        const encryptPassword = await this.encryptPassword(password);
        return this.userRepository.save({
            username,
            name,
            password: encryptPassword
        });
    }

    async getByUsername(username: string) {
        const user = await this.userRepository.findOneBy({
            username,
        });

        return user;
    }

    async login(data: LoginUserDto) {
        const { username, password } = data;

        const user = await this.userRepository.findOneBy({
            username,
        });

        if (!user) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND); 

        const match = await compare(password, user.password);

        if (!match) throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);

        const payload = {
            username,
            name: user.name
        }

        const acessToken = await jwt.sign(payload, 'secret_key', {
            expiresIn: '1h'
        })

        return {
            acessToken
        };
    }

    async encryptPassword(password: string) {
        const DEFAULT_SALT = 11;
        return hash(password, DEFAULT_SALT);
    }
}
