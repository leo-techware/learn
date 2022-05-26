import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RECIPES } from '../models/mock-recipes';
import { Recipe } from '../models/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeDeatil: any = new EventEmitter<Recipe>();
  recipes: Recipe[] = RECIPES;

  getRecipes(): Observable<Recipe[]> {
    const recipes = of(this.recipes);
    return recipes;
  }

  addRecipes(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  sendRecipeDetails(recipe: Recipe) {
    this.recipeDeatil.emit(recipe);
  }
}
