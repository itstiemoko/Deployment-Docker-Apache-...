import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/confirmationDialog/confirmation-dialog.service';
import { UsersService } from 'src/app/services/users.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as es6printJS from "print-js";
import * as printJS from 'print-js';
@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
p: number = 1;
listAdmin:any =[];
loginData : any;
searchText: any;
userId: any;
fileName = "listeAdmin.xlsx";

  constructor(private serviceAdmin:UsersService,
     private confirmationDialogService: ConfirmationDialogService,
     private router:Router
     ) {

   }
   
  ngOnInit(): void {
   this.listerAdmin();
   this.loginData = JSON.parse(localStorage["isLogin"]);

  }



  public openConfirmationDialog(id:any) {
    this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
    .then((confirmed) => 

    this.serviceAdmin.deleteAdmin(id, this.userId).subscribe((data)=>{
      console.log(data); 
      this.listerAdmin();
    }))
    .catch(
      () => 
      console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  listerAdmin(){
    this.serviceAdmin.getAllAdmin().subscribe((data)=>{
      
      return this.listAdmin=data;
     
    })
  }
  deleteAdmin(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){
     let userId = this.loginData.id;
   this.serviceAdmin.deleteAdmin(id, userId).subscribe((data)=>{
     console.log(data); 
     this.listerAdmin();
   });
  }
   
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}

exportexcel(): void 
    {
       /* table id is passed over here */
       let element = document.getElementById('example4'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       // generate workbook and add the worksheet 
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       // save to file 
       XLSX.writeFile(wb, this.fileName);

    }

   


   
 
}
