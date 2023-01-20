import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: any): Promise<"Wrong password" | "User not found!" | {
        message: string;
        access_token: string;
    }>;
}
