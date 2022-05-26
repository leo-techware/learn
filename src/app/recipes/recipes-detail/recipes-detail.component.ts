import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';
import { Recipe } from '../shared/models/recipes';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: any = null;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeDeatil.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    })
  }

}
