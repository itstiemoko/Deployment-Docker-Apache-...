import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-liste-promotion',
  templateUrl: './liste-promotion.component.html',
  styleUrls: ['./liste-promotion.component.css']
})
export class ListePromotionComponent implements OnInit {
  listPromotion:any =[];
  loginData : any;
  fileName = "listeAdmin.xlsx";
  searchText:any;
  p: number = 1;

  constructor(private serviceAdmin:UsersService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.listerPromotion();
    this.loginData = JSON.parse(localStorage["isLogin"]);
 
   }
 
   listerPromotion(){
     this.serviceAdmin.getAllPromotions().subscribe((data)=>{
       return this.listPromotion=data;
       console.log(data);
       
     })
   }
   deletePromotion(id:any):void{
     if(confirm("Voulez-vous supprimer ??")){
      let userId = this.loginData.id;
    this.serviceAdmin.deletePromotion(id, userId).subscribe((data)=>{
      console.log(data); 
      this.listerPromotion();
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
