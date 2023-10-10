import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Tacos al pastor de mexico receta imperdible no te puedes quedar sin probar estos tacos con salsa de aguacate y otros sabores increibles
 */
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 9,
      title: 'Pizza Peperonni',
      ingredients: [
        { ingredient: 'tomato', selected: false },
        { ingredient: 'cheese', selected: false },
        { ingredient: 'mushrooms', selected: false },
      ],
      image:
        'https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
    },
    {
      id: 8,
      title: 'Hamburguesa',
      ingredients: [
        { ingredient: 'tomato', selected: false },
        { ingredient: 'cheese', selected: false },
        { ingredient: 'mushrooms', selected: false },
      ],
      image:
        'https://thefoodtech.com/wp-content/uploads/2023/05/sabrosa-hamburguesa-papas-fritas.jpg',
      description: 'Pizza description',
    },
    {
      id: 7,
      title: 'Hotdog',
      ingredients: [
        { ingredient: 'tomato', selected: false },
        { ingredient: 'cheese', selected: false },
        { ingredient: 'mushrooms', selected: false },
      ],
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/2023/HowToMakeAHotDog_4.jpg?w=1200&h=1800&q=82&fm=jpg&fit=crop&dm=1685065757&s=337bd14d0716fbba0780567c63066113',
      description: 'Pizza description',
    },
    {
      id: 6,
      title: 'Tacos',
      ingredients: [
        { ingredient: 'tomato', selected: false },
        { ingredient: 'cheese', selected: false },
        { ingredient: 'mushrooms', selected: false },
      ],
      image:
        'https://elespecial.com/wp-content/uploads/2016/09/dreamstime_m_34941484.jpg',
      description: 'Pizza description',
    },
    {
      id: 5,
      title: 'Burrito',
      ingredients: [
        { ingredient: 'tomato', selected: false },
        { ingredient: 'cheese', selected: false },
        { ingredient: 'mushrooms', selected: false },
      ],
      image:
        'https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg',
      description: 'Pizza description',
    },
    {
      id: 4,
      title: 'Pollo',
      ingredients: [
        { ingredient: 'tomato', selected: false },
        { ingredient: 'cheese', selected: false },
        { ingredient: 'mushrooms', selected: false },
      ],
      image: 'https://maheso.com/wp-content/uploads/pollo-frito.jpg',
      description: 'Pizza description',
    },
    {
      id: 3,
      title: 'Pizza Jamon',
      ingredients: [
        { ingredient: 'tomato', selected: false },
        { ingredient: 'cheese', selected: false },
        { ingredient: 'mushrooms', selected: false },
      ],
      image:
        'https://imag.bonviveur.com/presentacion-final-de-la-pizza-prosciutto-o-con-jamon-cocido.jpg',
      description: 'Pizza description',
    },
    {
      id: 2,
      title: 'Pizza Hongos',
      ingredients: [
        { ingredient: 'tomato', selected: false },
        { ingredient: 'cheese', selected: false },
        { ingredient: 'mushrooms', selected: false },
      ],
      image:
        'https://cheforopeza.com.mx/wp-content/uploads/2017/11/pizza-hongos-web.jpg',
      description: 'Pizza description',
    },
    {
      id: 1,
      title: 'Papas fritas',
      description: 'Pizza description',
      ingredients: [
        { ingredient: 'tomato', selected: false },
        { ingredient: 'cheese', selected: false },
        { ingredient: 'mushrooms', selected: false },
      ],
      image:
        'https://buenazo.cronosmedia.glr.pe/original/2023/07/14/64ac2271c47e4a7ef2214e02.jpg',
    },
  ];
  // recipes: Recipe[] = [];
  constructor() {}

  addRecipe(recipe: Recipe) {
    // const ingredients = recipe.ingredients.map((ingredient: string) => ({
    //   ingredient: ingredient,
    //   selected: false,
    // }));

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
