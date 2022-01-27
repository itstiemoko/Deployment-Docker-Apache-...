import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as es6printJS from "print-js";
import * as printJS from 'print-js';

@Component({
  selector: 'app-listelog',
  templateUrl: './listelog.component.html',
  styleUrls: ['./listelog.component.css']
})
export class ListelogComponent implements OnInit {
  loading: boolean =true;
  listlogs : any;
  loginData:any;
  searchText: any;
  fileName = "listeAdmin.xlsx";
  p: number = 1;
  constructor(
    private service : UsersService,
    private router : Router,
    ) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.listelog();
  }
  listelog(){
    this.service.getAlllog().subscribe((data)=>{
      this.listlogs = data;
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

   
    
 
}
