import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.css']
})
export class DetailAdminComponent implements OnInit {
  detailAdmin: any;
  id: any;
  loginData:any;

  constructor(public service: UsersService, public route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];
    this.service.detailAdmin(this.id).subscribe(data=>{
      this.detailAdmin = data;
      console.log(data);
    })
  }

  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}

}
