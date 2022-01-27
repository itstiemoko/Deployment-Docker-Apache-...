import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/services/serviceInterface';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  adminData: any;
  formgroup: FormGroup;
  user: any;
  id: any;
  chaine : string;
  loginData: any;
  userId:any;
  userngForm: NgForm;
  
  submitted = false;

  constructor(
    public service: UsersService,
    public  route: ActivatedRoute,
    public router : Router,
    public toast: ToastrService,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {


    // this.userId =  this.userngForm.value.userId;
    // console.log(this.userId);


    this.loginData=JSON.parse(localStorage["isLogin"]);

    this.formgroup = this.formBuilder.group({

      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      genre: ['', Validators.required],
      adresse: ['', Validators.required],
      login: ['', Validators.required],
      profile: ['', Validators.required],
      telephone: ['', Validators.required],
      etat: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePass: ['', [Validators.required, Validators.minLength(6)]],
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  }


  // ajouterAdmin(addForm: NgForm){
  //   //this.chaine = addForm.value.profile;
  //   if (addForm.valid){
  //     var obj: { [id: string]: any} = {};

     
  //      obj.id = addForm.value.profile; 
  //      addForm.value.profile = obj;
  
  //     console.log(JSON.stringify(addForm.value));
  
  //     this.service.addAdmin(addForm.value).subscribe(
        
  //       (data)=>{
  //         this.router.navigateByUrl("listAdmins");
  //         this.userId =  this.userngForm.value.userId;
  //         console.log(this.userId);
        
  //         console.log("hello world" +data);         
  //       }
  //     )
  //   }else{
  //     console.log("Not valid...")
  //   }
  // }









  get f() { return this.formgroup.controls; }




  ajouter_admin(fg : FormGroup){
    this.submitted = true;
    


    // stop here if form is invalid
    if (this.formgroup.invalid) {
        return;
    }

    var obj: { [id: string]: any} = {};
     
    obj.id = fg.value.profile; 
    fg.value.profile = obj;
     fg.value.userId =this.loginData.id
     
   console.log(JSON.stringify(fg.value));

   this.service.addAdmin(fg.value).subscribe(
     
     (data)=>{
      if(data==="email"){
        console.log("incorrect email");
        this.toast.error("Cet email existe déja ");

      }else if (data==="telephone"){
        console.log("incorrect telephone");
        this.toast.error("Ce téléphone existe déja ");

      }else if (data==="login"){
        console.log("incorrect login");
        this.toast.error("Ce login existe déja ");
      }

      else{
        this.router.navigateByUrl("/listAdmins");
        console.log("helle ++++++++++++", data);
      }

     }

   )
    
  }
  showToast(){
    this.toast.success("Ajout effectuer avec succes !!!");
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
