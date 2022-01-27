import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuardGuard } from './guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor( 
    private route : Router,
    private guard:GuardGuard,
    ){}
  title = 'OdkPointage';
loginData:any;
loginStatus:boolean = false;
userRole:any;
  ngOnInit(): void {
    
    if(localStorage["isLogin"]){
    this.loginData=JSON.parse(localStorage["isLogin"]);
  }
  if(localStorage["userRole"]){
    this.userRole=JSON.parse(localStorage["userRole"]);
 
  }
  if(localStorage["loginStatus"]){
    this.loginStatus=JSON.parse(localStorage["loginStatus"]);
  }

  }
  logOut(){
      localStorage.removeItem('isLogin');
      localStorage.removeItem('loginStatus')
      location.replace("/");


  }
}
