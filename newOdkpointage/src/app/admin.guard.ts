import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
      let loginData =localStorage["isLogin"];
      if(loginData){
      let userRole =localStorage["userRole"];
      console.log("treyrwefgrker"+userRole);
      if(userRole == 1 || userRole == 2 ){
       // location.replace("/accueil");
        return true;
      
      }
      
      this.router.navigate(["/userSpace"]);
    return false;
    
  }
  this.router.navigate(["/"]);
  return false;
}
}
  

