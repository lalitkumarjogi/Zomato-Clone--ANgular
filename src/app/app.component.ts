import { Component } from '@angular/core';
import { RestorantService } from './restorant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggeduserdata:any
 constructor(private http:RestorantService,private router:Router){
   const localdata=localStorage.getItem('zomato')
    if(localdata !=null){
     this.loggeduserdata=JSON.parse(localdata)
         
    }
 }
 loginobj={
  "userName": "",
  "password": ""
}
registerobj=
{
  "userId": 0,
  "userName": "",
  "role": "Customer",
  "password": "",
  "mobileNo": "",
  "emailId": "",
  "restaurantId": 0
}
regitseruser(){
     this.http.register(this.registerobj).subscribe((res:any)=>{
           if(res.result){
             alert("user register success")
             localStorage.setItem('zomato',JSON.stringify(res.data));
             this.loggeduserdata=res.data
             this.closeregisterpop()

           }else{
             alert(res.message)
           }
     })
}


 loginuser(){
    this.http.login(this.loginobj).subscribe((res:any)=>{
       console.log(res.data)
         if(res.result){
           alert("user login success")
           localStorage.setItem('zomato',JSON.stringify(res.data));
       this.loggeduserdata=res.data
       this.closeloginpop()
         }
          else{
             alert(res.message)
          }
    })
 }
 logoff(){
    localStorage.removeItem('zomato')
    this.router.navigate([''])
    this.loggeduserdata=null
 }



  registerpop(){
    const login=document.getElementById('id02')
    if(login !=null){
      login.style.display="block"
    }
  }
  closeregisterpop(){
    const login=document.getElementById('id02')
    if(login !=null){
      login.style.display="none"
    }
  }

  loginpop(){
     const login=document.getElementById('id01')
      if(login !=null){
        login.style.display="block"
      }
  }
  closeloginpop(){
     const login=document.getElementById('id01')
      if(login !=null){
        login.style.display="none"
      }
  }
}
