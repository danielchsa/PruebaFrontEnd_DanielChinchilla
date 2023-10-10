import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../interfaces/recipe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  filteredRecipes: Recipe[] = [];
  lastRecipe!: Recipe;
  recipeName: string = '';

  constructor(private recipeService: RecipesService, private router: Router) {
    this.filteredRecipes = this.recipeService.getOldRecipes();
    this.lastRecipe = this.recipeService.getLastRecipe();
  }

  navigateTo() {
    this.router.navigate(['/detail', this.lastRecipe.id]);
  }

  findRecipe() {
    if (this.recipeName) {
      this.filteredRecipes = this.recipeService.getRecipeByName(
        this.recipeName.toLowerCase()
      );
    } else {
      this.filteredRecipes = this.recipeService.getOldRecipes();
    }
  }
}
