import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import * as XLSX from 'xlsx';

@Component({
  selector: 'app-droit',
  templateUrl: './droit.component.html',
  styleUrls: ['./droit.component.css']
})
export class DroitComponent implements OnInit {
  loginData : any;
  fileName:"fichierExcel.xlsx";

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginData = JSON.parse(localStorage["isLogin"]);
    console.log(this.loginData);
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
