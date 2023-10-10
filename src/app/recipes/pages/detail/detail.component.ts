import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private recipeService: RecipesService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe({
      next: ({ id }) => {
        const idRecipe = parseInt(id);
        const recipe = this.recipeService.getSingleRecipe(idRecipe);
        if (!recipe) {
          this.router.navigate(['/']);
          return;
        }
        this.recipe = recipe;
      },
    });
  }
}
