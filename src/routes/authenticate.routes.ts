import { Router } from "express";

import { AuthenticateteUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateteUserController();

authenticateRoutes.post("/token", authenticateUserController.handle);

export { authenticateRoutes };
