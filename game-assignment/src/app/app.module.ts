import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EvenComponent } from 'src/sites/even/even.component';
import { GameControlComponent } from 'src/sites/game-control/game-control.component';
import { OddComponent } from 'src/sites/odd/odd.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
