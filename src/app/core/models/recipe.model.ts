import { IngredientModel } from "./ingredient.model";

export interface RecipeModel {
    _id: number;
    name: string;
    description: string;
    imagePath: string;    
    ingredients?: IngredientModel[];
}