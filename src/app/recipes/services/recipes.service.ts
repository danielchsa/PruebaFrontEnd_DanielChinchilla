import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [];
  constructor() {}

  addRecipe(recipe: Recipe) {
    const newRecipe = {
      ...recipe,
      id: this.recipes.length + 1,
    };
    this.recipes.unshift(newRecipe);
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }
  getLastRecipe() {
    return this.recipes[0];
  }
  getOldRecipes() {
    return this.recipes.slice(1, this.recipes.length);
  }

  getSingleRecipe(id: number): Recipe {
    return this.recipes.find((recipe) => recipe.id === id)!;
  }

  getRecipeByName(name: string): Recipe[] {
    return this.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(name)
    );
  }
}
