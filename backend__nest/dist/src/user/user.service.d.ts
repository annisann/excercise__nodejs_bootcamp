import { Users } from 'model/entities/Users';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<Users>);
    findAll(): Promise<any>;
    findBy(usernameToFind: string): Promise<any>;
    createNew(newUser: any): Promise<any>;
}
