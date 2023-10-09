import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Pizza 9',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
    },
    {
      id: 2,
      title: 'Pizza 8',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 3,
      title: 'Pizza 7',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 4,
      title: 'Pizza 6',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 5,
      title: 'Pizza 5',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 6,
      title: 'Pizza 4',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 7,
      title: 'Pizza 3',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 8,
      title: 'Pizza 2',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 9,
      title: 'Pizza 1',
      description: 'Pizza description',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
    },
  ];
  //recipes: Recipe[] = [];
  constructor() {}

  addRecipe(recipe: Recipe) {
    this.recipes.unshift({ ...recipe, id: this.recipes.length + 1 });
    console.log(this.recipes);
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getSingleRecipe(id: number): Recipe {
    return this.recipes.find((recipe) => recipe.id === id)!;
  }
}
