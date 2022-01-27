import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as es6printJS from "print-js";
import * as printJS from 'print-js';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {
  listUser: any ;
  loginData : any;
  fileName = "listeAdmin.xlsx";
  searchText: any;
 
  constructor(
    public service : UsersService,
    public router : Router,
    public toast: ToastrService,
    ) { }

  ngOnInit(): void {
    this.loginData = JSON.parse(localStorage["isLogin"]);
    if(this.loginData.genre == "HOMME"){
      this.toast.success("BIENVENUE Mr " + this.loginData.nom)
    }else if(this.loginData.genre == "FEMME"){
      this.toast.success("BIENVENUE Mme " + this.loginData.nom)
    }
    let user = {
        id:this.loginData.id,
        Type:this.loginData.Type
    }
    console.log(user);
    this.service.pointageByUser(user).subscribe(
      (data)=>{
        console.log(data);
        this.listUser = data
      }
    )
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

downloadPdf(){
  var element  = document.getElementById('example4')!
  html2canvas(element).then(
    (canvas) =>{
      console.log(canvas);
      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf.jsPDF()
      var imgHeight =  canvas.height * 208 / canvas.width;
      doc.addImage(imgData, 0, 0, 208, imgHeight)
      doc.save("image.pdf")
    }
  )
}
imprimerPdf() {
  console.log({
    node_module: printJS,
    es6_module: es6printJS
  });
  es6printJS("example4", "html");
}

listSemaine(date:any){
  this.service.listParSemaine(date).subscribe((result)=>
  { 
    return this.listUser=result;


  })
  }
  listJour(date:any){
    this.service.listParJour(date).subscribe((result)=>
    { 
      return this.listUser=result;
  
  
    })
    }
}
