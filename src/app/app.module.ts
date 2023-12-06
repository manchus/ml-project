import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { LstProduitsComponent } from './lst-produits/lst-produits.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OptComponent } from './opt/opt.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LstProduitsComponent,
    DetailProduitComponent,
    StudentComponent,
    HomeComponent,
    AdminComponent,
    OptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
