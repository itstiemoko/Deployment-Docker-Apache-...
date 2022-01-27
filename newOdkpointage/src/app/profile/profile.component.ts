import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin: any;
  loginData:any;
  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {

    this.loginData = localStorage['isLogin'];
    this.admin=JSON.parse(localStorage.getItem("isLogin") || '{}');
    console.log(this.admin);
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}


}
