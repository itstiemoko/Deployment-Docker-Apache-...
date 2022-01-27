import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-list-pointage',
  templateUrl: './list-pointage.component.html',
  styleUrls: ['./list-pointage.component.css']
})
export class ListPointageComponent implements OnInit {
  listPointage:any =[];
 pointage : any;
  date : any;
  loginData :any
  fileName = "listeAdmin.xlsx";
  searchText : any
  p: number = 1;
  constructor(
    private serviceAdmin: UsersService,
    private datepipe: DatePipe,
    private router:Router,

    ) { }

  ngOnInit(): void {
      this.loginData = JSON.parse(localStorage['isLogin']);
    console.log(this.listPointage);
  }
  listerPointage(){
    this.serviceAdmin.AllPointageAdmin().subscribe((data)=>{
      return this.listPointage=data;
    })
  }

listJour(date:any){
this.serviceAdmin.listParJour(date).subscribe((result)=>
{ 
  return this.listPointage=result;


})
}
listSemaine(date:any){
  this.serviceAdmin.listParSemaine(date).subscribe((result)=>
  { 
    return this.listPointage=result;


  })
  }
  listMois(date:any){
    //this.date =this.datepipe.transform(this.date, 'yyyy-MM');
    this.serviceAdmin.listParMois(date).subscribe((result)=>
    { console.log(this.date);
      return this.listPointage=result;


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

}