import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/experience_fragments/header/header.component';
import { RecipesComponent } from './sites/recipes/recipes.component';
import { RecipeListComponent } from './sites/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './sites/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './sites/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './sites/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './sites/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
