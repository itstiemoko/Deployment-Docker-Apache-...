import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-log-par-utilisateur',
  templateUrl: './log-par-utilisateur.component.html',
  styleUrls: ['./log-par-utilisateur.component.css']
})
export class LogParUtilisateurComponent implements OnInit {
  logUtilisateur :any
  loginData : any;
  id=1;
  acteur="UTILISATEUR";
  searchText:any;
  fileName = "listeAdmin.xlsx";

  constructor(
    private service: UsersService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.logParUtilisateur();
  }
  logParUtilisateur(){
    this.acteur=this.acteur
    this.id=this.id
    this.service.getLogParActeur(this.id,this.acteur).subscribe((data)=>{
      this.logUtilisateur= data;
      console.log(data)
    })
    
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
