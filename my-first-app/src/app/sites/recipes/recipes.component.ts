import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeComponent_selectedRecipe: Recipe = null;
  constructor() { }

  ngOnInit(): void {
  }

  recipeComponent_onSelect(recipe: Recipe) {
    this.recipeComponent_selectedRecipe = recipe;
  }

}
