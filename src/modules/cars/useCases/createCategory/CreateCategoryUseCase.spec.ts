import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategegoriesRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoriesRepositoryInMemory
        );
    });

    it("should be able to create a new category", async () => {
        const category = {
            name: "Category Test",
            description: "Category description Teste",
        };

        await createCategoryUseCase.execute(category);

        const createdCategory = await categoriesRepositoryInMemory.findByName(
            category.name
        );

        expect(createdCategory).toHaveProperty("id");
    });

    it("should not be able to create a new category with same name", async () => {
        expect(async () => {
            const category = {
                name: "Category Test",
                description: "Category description Teste",
            };

            await createCategoryUseCase.execute(category);
            await createCategoryUseCase.execute(category);
        }).rejects.toBeInstanceOf(AppError);
    });
});
