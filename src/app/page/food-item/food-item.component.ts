import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestorantService } from 'src/app/restorant.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent {
  restaurantId: number = 0;
  categoryId: number = 0;
  foodItemsList: any[] = [];
  loggedUseData: any;
  cartItems: any[] = [];
  totalAmount: number  = 0;
  deliveryAddres: string = '';
  constructor(private actiavtedRoute: ActivatedRoute, private foodService: RestorantService) {
    this.actiavtedRoute.params.subscribe((res: any) => {
      debugger;
      this.categoryId = res.categoryId;
      this.restaurantId = res.restaurantId;
      this.GetFoodItemOfRestaurantByCategory();
      const localData = localStorage.getItem('zomato');
      if (localData !== null) {
        this.loggedUseData = JSON.parse(localData);
      }
      this.GetCartItemsByCustomerIdForRestaurant();
    })

  }

  GetFoodItemOfRestaurantByCategory() {
    this.foodService.GetFoodItemOfRestaurantByCategory(this.restaurantId, this.categoryId).subscribe((res: any) => {
      this.foodItemsList = res.data;
    })
  }
  GetCartItemsByCustomerIdForRestaurant() {
    this.foodService.GetCartItemsByCustomerIdForRestaurant(this.loggedUseData.userId, this.restaurantId).subscribe((res: any) => {
      this.cartItems = res.data;
      this.cartItems.forEach(element => {
        this.totalAmount =  this.totalAmount + element.price;
      });
      
    })
  }
  onOrder() {
    const obj = {
      "userId": this.loggedUseData.userId,
      "totalAmount": this.totalAmount,
      "restaurantId": this.restaurantId,
      "deliveryAddress": this.deliveryAddres
    };
    this.foodService.AddnewOrder(obj).subscribe((Res:any)=>{
      if(Res.result) {
        alert('Order Placed Success');
        this.GetCartItemsByCustomerIdForRestaurant();
        this.deliveryAddres = '';
        this.totalAmount = 0;
      }  else {
        alert("PLease Fillup Details")
      }
    })



  }
  addtoCart(itemId: number) {
    const localData = localStorage.getItem('zomato');
    if (localData == null) {
      alert('Please Login')
    } else {
      this.loggedUseData = JSON.parse(localData);
      const obj = {
        "customerId": this.loggedUseData.userId,
        "itemId": itemId,
        "quantity": 1
      };
      this.foodService.addtocart(obj).subscribe((Res: any) => {
        if (Res.result) {
          alert(Res.message);
          this.GetCartItemsByCustomerIdForRestaurant();
        } else {
          alert(Res.message)
        }
      })
    }
  }

}
