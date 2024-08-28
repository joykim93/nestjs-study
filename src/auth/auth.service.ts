import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService
    ) {}

    async validateUser(username: string, password: string) {
        const user = await this.userService.getByUsername(username);

        if (user) {
            const match = await compare(password, user.password);
            if (match) {
                return user;
            } else {
                return null;
            }
        }

        return null
    }
}
