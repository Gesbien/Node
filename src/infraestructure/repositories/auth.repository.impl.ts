import { UserEntity, RegisterUserDto, AuthDatasource } from '../../domain';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';
import { AuthRepository } from '../../domain/repositories/auth.repository';


export class AuthRepositoryImpl implements AuthRepository{

    constructor(
        private readonly datasource: AuthDatasource
    ) {}

    login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.datasource.login(loginUserDto)
    }
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.datasource.register(registerUserDto)
    }
    
}