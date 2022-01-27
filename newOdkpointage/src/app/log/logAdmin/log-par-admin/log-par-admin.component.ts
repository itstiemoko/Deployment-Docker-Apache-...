import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as es6printJS from "print-js";
import * as printJS from 'print-js';

@Component({
  selector: 'app-log-par-admin',
  templateUrl: './log-par-admin.component.html',
  styleUrls: ['./log-par-admin.component.css']
})
export class LogParAdminComponent implements OnInit {
  logAdmin:any;
  loginData:any;
  acteur="ADMIN";
  id =1;
  fileName = "listeAdmin.xlsx";
  searchText: any;

  constructor(
    private service : UsersService,
    private router :Router,
    ) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.logParAdmin();
  }
  logParAdmin(){
    this.acteur=this.acteur
    this.id=this.id
    this.service.getLogParActeur(this.id,this.acteur).subscribe((data)=>{
      this.logAdmin= data;
      console.log(data)
    })
    
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
 
 
}
