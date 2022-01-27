import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  adminData: any;
  user: any;
  id: any;
  loginData:any;
  promotions:any;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:UsersService,
    public toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailUser(this.id).subscribe(data=>{
      
      this.adminData = data;
      this.loginData=JSON.parse(localStorage["isLogin"]);
    })
   

    this.promotions = this.afficherPromotions();
  }

  onUpdate(){
    console.log(this.adminData);
    let userId= this.loginData.id;
    this.service.updateUser(this.adminData.id, userId, this.adminData).subscribe(
      data=>{
       
      this.service.updateUser(this.id,userId, this.adminData).subscribe(
        (data:any)=>{
          this.showToast();
        this.router.navigateByUrl("listUsers");

      })
    })
  }

  afficherPromotions(){
    this.service.getAllPromotions().subscribe(
      (data)=>{
        
        this.promotions = data;
        
      }
    )
  }

  showToast(){
    this.toast.success(" Modification effectuer avec succes !!!");
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
