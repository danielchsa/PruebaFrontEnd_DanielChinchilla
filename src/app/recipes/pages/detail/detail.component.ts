import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  recipe!: Recipe;

  constructor(
    private activedRoute: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe({
      next: ({ id }) => {
        const idRecipe = parseInt(id);
        this.recipe = this.recipeService.getSingleRecipe(idRecipe);
        console.log(this.recipe);
      },
    });
  }

  ver() {
    const t = this.recipe.ingredients.filter((item) => item.selected);
    console.log(t);
  }
}
