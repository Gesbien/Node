import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infraestructure";

export class AuthRoutes{

    static get routes(): Router{
        const router = Router();
        const datasourec = new AuthDatasourceImpl();
        const authRepository = new AuthRepositoryImpl(datasourec);
        const controller = new AuthController(authRepository);
        
        // Definir todas las rutas principales
        router.post('/login', controller.loginUser)

        router.post('/register', controller.registerUser)


        return router
    }
}