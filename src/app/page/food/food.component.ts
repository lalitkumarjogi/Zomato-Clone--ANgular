import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestorantService } from 'src/app/restorant.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{
 fooditem:any
  constructor(private http:RestorantService,private router:Router){}
   ngOnInit(): void {
     this.loadallfoodcatoegory()
   }
  loadallfoodcatoegory(){
     this.http.getAllFoods().subscribe((res:any)=>{
        this.fooditem=res.data

     })
  }

  naviagefooditem(ids:any){
       this.router.navigate(['serve',ids])
  }
 
}
