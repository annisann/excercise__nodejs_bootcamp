import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: any, password: any): Promise<any>;
    login(user: any): Promise<{
        message: string;
        access_token: string;
    }>;
}
