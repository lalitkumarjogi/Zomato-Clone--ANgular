import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestorantService } from 'src/app/restorant.service';

@Component({
  selector: 'app-serving-food',
  templateUrl: './serving-food.component.html',
  styleUrls: ['./serving-food.component.css']
})
export class ServingFoodComponent {
    currentCategoryId:number=0
    restorantlist:any
    constructor(private actiavtedRoute: ActivatedRoute,private http: RestorantService ,private router:Router){
     this.actiavtedRoute.params.subscribe((res:any)=>{
     debugger;
         this.currentCategoryId=res.id
         this.GetRestaurantServingByCategory()
    }) 
 }

 GetRestaurantServingByCategory(){
    this.http.GetRestaurantServingByCategoryId(this.currentCategoryId).subscribe((res:any)=>{
         this.restorantlist=res.data
    })
 }
 order(restaurantID: number){
    this.router.navigate(['fooditem',restaurantID,this.currentCategoryId])
 }



}
