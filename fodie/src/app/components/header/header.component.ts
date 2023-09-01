import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

// import { UserService } from 'src/app/services/user.service';
// import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allcat:any=[]

  constructor(private api: ApiService){}

    getcdata(){
    this.api.selcat().subscribe((data:any)=>{
      this.allcat=data;
    })
  }

  ngOnInit(){
    this.getcdata();
   
  }
}















  // cartQuantity=0;
  //  user!:User;
  // constructor(cartService:CartService){
  //  cartService.getCartObservable().subscribe((newCart)=>{
  //    this.cartQuantity=newCart.totalCount;
  //  })
//    userService.userObservable.subscribe((newUser)=>{
//       this.user=newUser;
//    })
//   }
//   logout(){
//    this.userService.logout();
//   }
//   get isAuth(){
//    return this.user.token;
//   }
  // }

