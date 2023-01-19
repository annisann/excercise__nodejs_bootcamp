import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(request: any): Promise<{
        message: string;
        access_token: string;
    }>;
}
