import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestorantService {

  constructor(private http:HttpClient) { }
  apiEndPoint: string = "https://freeapi.miniprojectideas.com/api/zomato/";


  getAllFoods(): Observable<any> {
    return this.http.get(this.apiEndPoint + "GetAllFoodCategory")
  }

  GetRestaurantServingByCategoryId(foodCategoryId: number): Observable<any> {
    return this.http.get(this.apiEndPoint + 'GetRestaurantServingByCategoryId?categoryId=' + foodCategoryId)
  }
 
  GetFoodItemOfRestaurantByCategory(restaurantId: number, categoryId:number):Observable<any> {
    return this.http.get(this.apiEndPoint + 'GetFoodItemOfRestaurantByCategory?restaurantId='+restaurantId+'&categoryId='+categoryId)
  } 


  login(userid:any){
     return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/Login',userid)
  }

   register(user:any){
     return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/AddNewUser ',user)
   }
    addtocart(add:any){
       return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/AddToCart ',add)
    }
    GetCartItemsByCustomerIdForRestaurant(cusId:any,resId:any){
       return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetCartItemsByCustomerIdForRestaurant?customerId='+cusId+'&restaurantId='+resId)
    }
  AddnewOrder(order:any){
    return this.http.post(this.apiEndPoint + "addneworder",order );
  }


}
