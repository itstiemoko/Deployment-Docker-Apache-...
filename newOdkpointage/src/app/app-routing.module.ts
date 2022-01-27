import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './Utilisateur/list-users/list-users.component';
import { AddUsersComponent } from './Utilisateur/add-users/add-users.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { ListAdminComponent } from './Admin/list-admin/list-admin.component';
import { DetailAdminComponent } from './Admin/detail-admin/detail-admin.component';
import { UpdateAdminComponent } from './Admin/update-admin/update-admin.component';
import { DetailUserComponent } from './listUsers/detail-user/detail-user.component';
import { UpdateUserComponent } from './Utilisateur/update-user/update-user.component';
import { GuardGuard } from './guard.guard';
import { UpdatePromotionComponent } from './promotion/update-promotion/update-promotion.component';
import { LogParUtilisateurComponent } from './log/logUtilisateur/log-par-utilisateur/log-par-utilisateur.component';
import { LogParAdminComponent } from './log/logAdmin/log-par-admin/log-par-admin.component';
import { LogParSuperAdminComponent } from './log/logSuper/log-par-super-admin/log-par-super-admin.component';
import { ListelogComponent } from './log/listelog/listelog.component';
import { UserSpaceComponent } from './user-space/user-space.component';
import { ProfileComponent } from './profile/profile.component';
import { UserPromotionComponent } from './user-promotion/user-promotion.component';
import { GroupeComponent } from './groupe/groupe.component';
import { ListPointageComponent } from './PointageAdministrateur/list-pointage/list-pointage.component';
import { DetailPointageComponent } from './PointageAdministrateur/detail-pointage/detail-pointage.component';
import { ListePromotionComponent } from './promotion/liste-promotion/liste-promotion.component';
import { AddPromotionComponent } from './promotion/add-promotion/add-promotion.component';
import { DetailPromotionComponent } from './promotion/detail-promotion/detail-promotion.component';
import { AdminGuard } from './admin.guard';
import { LoginGuard } from './login.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';






const routes: Routes = [
  { path: 'accueil', component: AccueilComponent,canActivate:[AdminGuard]},
  { path: 'login',component: LoginComponent,canActivate:[LoginGuard]},
  { path: 'listUsers',component:ListUsersComponent,canActivate:[AdminGuard]},
  { path: 'addUsers', component:AddUsersComponent,canActivate:[AdminGuard]},
  { path: 'addAdmin',component:AddAdminComponent,canActivate:[AdminGuard]},
  { path: 'addPromotion',component:AddPromotionComponent,canActivate:[AdminGuard]},
  { path: 'detailPromotion/:id',component:DetailPromotionComponent,canActivate:[GuardGuard]},
  { path: 'listPromotion',component:ListePromotionComponent,canActivate:[AdminGuard]},
  { path: 'updatePromotion/:id',component:UpdatePromotionComponent,canActivate:[AdminGuard]},
  { path: 'detailAdmin/:id',component:DetailAdminComponent,canActivate:[AdminGuard]},
  { path: 'updateAdmin/:id',component:UpdateAdminComponent,canActivate:[AdminGuard]},
  { path: 'detailUser/:id',component:DetailUserComponent,canActivate:[AdminGuard]},
  { path: 'updateUser/:id',component:UpdateUserComponent,canActivate:[AdminGuard]},
  { path: 'listAdmins', component: ListAdminComponent,canActivate:[AdminGuard]},
  { path: 'listPointage', component:ListPointageComponent,canActivate:[AdminGuard]},
  { path: 'detailPointage/:id', component: DetailPointageComponent,canActivate:[AdminGuard]},
  { path: 'logUtilisateur', component:LogParUtilisateurComponent,canActivate:[AdminGuard]},
  { path: 'logAdmin', component:LogParAdminComponent,canActivate:[AdminGuard]},
  { path: 'logSuper', component:LogParSuperAdminComponent,canActivate:[AdminGuard]},
  { path: 'log', component:ListelogComponent,canActivate:[AdminGuard]},
  { path:'userSpace', component:UserSpaceComponent,canActivate:[GuardGuard]},
  { path: 'profile', component:ProfileComponent,canActivate:[AdminGuard]},
  { path: 'userPromotion/:id', component:UserPromotionComponent,canActivate:[GuardGuard]},
  { path: 'groupe', component:GroupeComponent, canActivate:[GuardGuard]},
  { path: 'userProfile',component:UserProfileComponent, canActivate:[GuardGuard]},
  { path: 'corbeille', component:CorbeilleComponent, canActivate:[AdminGuard]},
  { path: '**', redirectTo: '/login', pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
