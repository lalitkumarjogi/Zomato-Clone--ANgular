import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './page/food/food.component';
import { ServingFoodComponent } from './page/serving-food/serving-food.component';
import { FoodItemComponent } from './page/food-item/food-item.component';

const routes: Routes = [
  {path:'',redirectTo:'food',pathMatch:'full'},
  {path:'food',component:FoodComponent},
  {path:'serve/:id',component:ServingFoodComponent},
  {path:'fooditem/:restaurantId/:categoryId',component:FoodItemComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
