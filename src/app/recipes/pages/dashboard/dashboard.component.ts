import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../interfaces/recipe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];
  lastRecipe!: Recipe;

  constructor(private recipeService: RecipesService, private router: Router) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.lastRecipe = this.recipes[0];
  }

  navigateTo() {
    this.router.navigate(['/detail', this.lastRecipe.id]);
  }
}
