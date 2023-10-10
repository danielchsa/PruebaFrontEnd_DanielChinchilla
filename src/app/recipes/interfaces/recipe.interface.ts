export interface Recipe {
  id: number;
  image: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
}

interface Ingredient {
  ingredient: string;
  selected: boolean;
}
