import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LstProduitsComponent } from './lst-produits/lst-produits.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'produits', component: LstProduitsComponent },
  {path: 'details', component: DetailProduitComponent },
  {path: 'etudiant', component: StudentComponent },
  {path: 'admin', component: AdminComponent },
  {path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
