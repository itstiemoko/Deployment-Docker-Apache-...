import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-pointage',
  templateUrl: './detail-pointage.component.html',
  styleUrls: ['./detail-pointage.component.css']
})
export class DetailPointageComponent implements OnInit {
  detailPointageAdmin: any;
  id: any;

  constructor(public route :ActivatedRoute, private service: UsersService  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailPointageAdmin(this.id).subscribe(data=>{
      this.detailPointageAdmin = data;
      console.log(data);
    })
  }

}