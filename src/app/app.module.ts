import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './page/food/food.component';
import { ServingFoodComponent } from './page/serving-food/serving-food.component';
import { FoodItemComponent } from './page/food-item/food-item.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    ServingFoodComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
