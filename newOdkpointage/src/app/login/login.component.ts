import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginInfo:any;
  constructor(private service: UsersService,
    public toast: ToastrService, public router: Router) { }

  ngOnInit(): void {
    
  }
  
  onLogin(form :NgForm){
    this.service.login1(form.value["username"],form.value["password"]).subscribe((res)=>{
      if(res){

        console.log(res);
        this.loginInfo = res;
        let loginStatus = true
        //this.router.navigate(["/accueil"]);
        location.replace("/accueil");
        localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
        localStorage.setItem('userRole', JSON.stringify(this.loginInfo.profile.id));
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
      }else{
        this.service.login2(form.value["username"],form.value["password"]).subscribe((res)=>{
          if(res){
            console.log(res);
            this.loginInfo = res;
            let loginStatus = true
            //this.router.navigate(["/userSpace"]);
            location.replace("/userSpace");
            localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
            localStorage.setItem('userRole', JSON.stringify(this.loginInfo.Type));
            localStorage.setItem('loginStatus', JSON.stringify(loginStatus));

          }else {
            this.toast.error("Login ou mot de passe incorrect");
            this.router.navigate(["/login"])
            let loginStatus = false;
            localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
            console.log("login non connecter");
          
        } 
        
      }, 
      error=>{
        this.toast.error(error);
      }
      )
    }
  })
}
}
