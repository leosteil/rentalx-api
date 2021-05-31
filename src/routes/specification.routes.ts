import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpeficicationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createSpeficiationService = new CreateSpeficicationService(
        specificationRepository
    );

    createSpeficiationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationRoutes };
