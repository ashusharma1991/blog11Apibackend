import {
    Controller,
    Request,
    Post,
    UseGuards,
    Get,
    Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcryptjs';
import { AuthService } from './auth.service';
import { UserDto } from '../users/user.dto';
import { UsersService } from '../users/users.service';

@Controller('')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService,
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('user')
    getProfile(@Request() req) {
        return this.userService.findAll();
    }

    @Post('register')
    async register(@Body() userdto: UserDto) {
        const userds = {
            username: userdto.username,
            password: await bcrypt.hash(userdto.password, 10),
        };
        return await this.userService.create(userds);
    }

}
