import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  detailUser: any;
  id: any;
  loginData:any;

  constructor(public service: UsersService, public route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];
    this.service.detailUser(this.id).subscribe(data=>{
      this.detailUser = data;
      console.log(data);
    })
  }

  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}


}
