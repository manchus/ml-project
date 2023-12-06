import { FriandisesService } from './../friandises.service';
import { friandises } from './../models/modelBD';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { faCandyCane } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


//import * as $ from 'jquery';
declare var $: any;


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  id: any;
  friandisesList$:Observable<friandises[]>;
  friandisesForm!: FormGroup;
  static ngOnInit: any;

  faCandyCane = faCandyCane;
  faPlusCircle = faPlusCircle;

  constructor(private formBuilder: FormBuilder, private friandisesService : FriandisesService,private router: Router) {
    this.friandisesList$ = this.friandisesService.Friandises();

  }

  ngOnInit(): void {

    this.friandisesList$ = this.friandisesService.Friandises();
    this.initFriandidesForm();
  }

  initFriandidesForm() {
    this.friandisesForm = this.formBuilder.group({
      brand: ['', Validators.required],
      cat: ['', Validators.required],
      compagnie: ['', Validators.required],
      price: ['', Validators.required]


    });
  }


  onSubmitFriandisesForm(){

    const newFriand :friandises= this.friandisesForm.value;
    this.friandisesService.createFriandise(newFriand);
    this.friandisesForm.reset();
    $('#propertiesFormModal').modal('hide');
    $('#confirm').modal('show');

}
retourHome(){

  this.router.navigate(['./home']);

}
OnDeleteFriandise(id : any){
  $('#deleteFriandiseModal').modal('show');
    this.id = id;
    console.log(id);

}
OnConfirmDeleteFriandise(){
  $('#deleteFriandiseModal').modal('hide');
this.friandisesService.deleteFriandise(this.id);
console.log(this.id);
this.router.navigate(['./home']);

}

}
