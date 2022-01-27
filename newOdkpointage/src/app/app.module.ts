import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './Utilisateur/list-users/list-users.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAdminComponent } from './Admin/list-admin/list-admin.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { UpdateAdminComponent } from './Admin/update-admin/update-admin.component';
import { AddUsersComponent } from './Utilisateur/add-users/add-users.component';
import { DetailUserComponent } from './listUsers/detail-user/detail-user.component';
import { UpdateUserComponent } from './Utilisateur/update-user/update-user.component';
import { UpdatePromotionComponent } from './promotion/update-promotion/update-promotion.component';
import { ListePromotionComponent } from './promotion/liste-promotion/liste-promotion.component';
import { ListPointageComponent } from './PointageAdministrateur/list-pointage/list-pointage.component';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmationDialogComponent } from './confirmationDialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmationDialog/confirmation-dialog.service';
import { UserSpaceComponent } from './user-space/user-space.component';
import { ProfileComponent } from './profile/profile.component';
import { ListelogComponent } from './log/listelog/listelog.component';
import { LogParUtilisateurComponent } from './log/logUtilisateur/log-par-utilisateur/log-par-utilisateur.component';
import { LogParAdminComponent } from './log/logAdmin/log-par-admin/log-par-admin.component';
import { LogParSuperAdminComponent } from './log/logSuper/log-par-super-admin/log-par-super-admin.component';

import { UserPromotionComponent } from './user-promotion/user-promotion.component';
import { GroupeComponent } from './groupe/groupe.component';


import { DroitComponent } from './droit/droit.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddPromotionComponent } from './promotion/add-promotion/add-promotion.component';
import { DetailPromotionComponent } from './promotion/detail-promotion/detail-promotion.component';
import { DetailPointageComponent } from './PointageAdministrateur/detail-pointage/detail-pointage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderModule } from 'ngx-order-pipe';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { NgxPaginationModule } from 'ngx-pagination'; 
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {MenuItem} from 'primeng/api';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    ListUsersComponent,
    ListAdminComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    AddUsersComponent,
    DetailUserComponent,
    UpdateUserComponent,
    DetailPromotionComponent,
    AddPromotionComponent,
    UpdatePromotionComponent,
    ListePromotionComponent,
    ListPointageComponent,
    ConfirmationDialogComponent,
    UserSpaceComponent,
    ProfileComponent,
    ListelogComponent,
    LogParUtilisateurComponent,
    LogParAdminComponent,
    LogParSuperAdminComponent,
     DroitComponent,
    UserPromotionComponent,
    GroupeComponent,
    DetailPointageComponent,
    UserProfileComponent,
    CorbeilleComponent,
    

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule
  
    
    

  
  ],
  providers: [
    DatePipe,
   
    
    ConfirmationDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
