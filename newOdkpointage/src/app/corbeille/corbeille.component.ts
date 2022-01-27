import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../confirmationDialog/confirmation-dialog.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent implements OnInit {
  listAdmin:any =[];
  listUsers:any =[];
  loginData : any;
  searchText: any;
  userId: any;
  fileName = "listeAdmin.xlsx";
  
    constructor(private service:UsersService,
       private confirmationDialogService: ConfirmationDialogService,
       private router:Router
       ) {
  
     }
     
    ngOnInit(): void {
     this.listerAdmin();
     this.listerUsers();
     this.loginData = JSON.parse(localStorage["isLogin"]);
  
    }
  
  
  
    public openConfirmationDialog(id:any) {
      this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
      .then((confirmed) => 
  
      this.service.deleteAdmin(id, this.userId).subscribe((data)=>{
        console.log(data); 
        this.listerAdmin();
      }))
      .catch(
        () => 
        console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
  
    listerAdmin(){
      this.service.getAllAdmin().subscribe((data)=>{
        
        return this.listAdmin=data;
       
      })
      
    }
    listerUsers(){
      this.service.getAllUsers().subscribe((data)=>{
        console.log(data);
        return this.listUsers=data;
      })}
    restoreAdmin(id:any):void{
      if(confirm("Voulez-vous Restorer ??")){
        
       let userId = this.loginData.id;
     this.service.restoreAdmin(id, userId).subscribe((data)=>{
       console.log(data); 
       this.listerAdmin();
     });
  }
    }
    restoreUser(id:any):void{
      if(confirm("Voulez-vous Restorer ??")){
    let userId = this.loginData.id;
    this.service.restoreUtilisateur(id, userId).subscribe((data)=>{
      console.log(data); 
      this.listerUsers();
    });
  }
}
    logOut(){
      localStorage.removeItem('isLogin');
    this.router.navigateByUrl('/');
  }
  
 

}
