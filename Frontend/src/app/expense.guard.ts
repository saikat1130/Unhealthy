//  import { CanActivateFn } from '@angular/router';

// export const expenseGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {
  constructor(private _router: Router){}
   canActivate(
    next: ActivatedRouteSnapshot,
    state:RouterStateSnapshot): boolean | UrlTree{
      let url: string = state.url;

      var tk=localStorage.getItem("token");
      if(tk == null){
        return false;
      }else{
      return true;
      }
}
}