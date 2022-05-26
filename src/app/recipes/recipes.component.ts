import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeService } from './shared/services/recipe.service';
import { Recipe } from './shared/models/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @ViewChild(AddRecipeComponent) addRecipeComponent: any;

  recipes: Recipe[] = [];
  dataSubmitted: boolean = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipesList();
  }

  getRecipesList() {
    this.recipeService.getRecipes().subscribe((recipes:any) => {
      this.recipes = recipes;
    })
  }

  addRecipe(event: Recipe) {
    this.recipeService.addRecipes(event);
  }

  introduceChiled() {
    this.addRecipeComponent.whoIamI();
  }

  showRecipeDeatil(recipe: Recipe) {
    this.recipeService.sendRecipeDetails(recipe)
  }

}
