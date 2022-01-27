import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-promotion',
  templateUrl: './update-promotion.component.html',
  styleUrls: ['./update-promotion.component.css']
})
export class UpdatePromotionComponent implements OnInit {
  promotionData: any;
  user: any;
  id: any;
  loginData:any;
  constructor(
    public service: UsersService,
    public  route: ActivatedRoute,
     public router : Router) { }

     ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.service.detailPromotion(this.id).subscribe(data=>{
        console.log(data);
        this.promotionData = data;
        this.loginData=JSON.parse(localStorage["isLogin"]);
      })
      console.log(this.id);
    }
    onUpdate(){
      let userId= this.loginData.id;
      this.service.updatePromotion(this.promotionData.id, userId, this.promotionData).subscribe(
        data=>{
          console.log(data);
        this.service.updatePromotion(this.id,userId, this.promotionData).subscribe(
          (data:any)=>{
          console.log(data);
          this.router.navigateByUrl("listPromotion");
  
        })
      })
    }
    logOut(){
      localStorage.removeItem('isLogin');
    this.router.navigateByUrl('/');
  }
}
