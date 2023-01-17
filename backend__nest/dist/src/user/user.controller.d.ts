import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<any>;
    find(username: string): Promise<any>;
    create(body: JSON): Promise<any>;
}
