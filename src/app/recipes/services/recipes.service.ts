import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Tacos al pastor de mexico receta imperdible no te puedes quedar sin probar estos tacos con salsa de aguacate y otros sabores increibles
 */
export class RecipesService {
  recipes1: Recipe[] = [
    {
      id: 9,
      title: 'Pizza Peperonni',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
    },
    {
      id: 8,
      title: 'Hamburguesa',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 7,
      title: 'Hotdog',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/2023/HowToMakeAHotDog_4.jpg?w=1200&h=1800&q=82&fm=jpg&fit=crop&dm=1685065757&s=337bd14d0716fbba0780567c63066113',
      description: 'Pizza description',
    },
    {
      id: 6,
      title: 'Tacos',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 5,
      title: 'Burrito',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 4,
      title: 'Pollo',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 3,
      title: 'Pizza Jamon',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 2,
      title: 'Pizza Hongos',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
      description: 'Pizza description',
    },
    {
      id: 1,
      title: 'Papas fritas',
      description: 'Pizza description',
      ingredients: ['tomato', 'cheese', 'mushrooms'],
      image:
        'https://www.revistaneo.com/sites/default/files/2022-07/02%20Taz%C3%B3n%20Pollo%20Parrillada-45-OkLC.png',
    },
  ];
  recipes: Recipe[] = [];
  constructor() {}

  addRecipe(recipe: Recipe) {
    const newRecipe = { ...recipe, id: this.recipes.length + 1 };
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
