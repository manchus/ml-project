import { Component, OnInit  } from '@angular/core';
import { FriandisesService } from './../friandises.service';
import { friandises } from './../models/modelBD';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  id: any;

  friandisesList$:Observable<friandises[]>;

  constructor( private friandisesService : FriandisesService, private router: Router) {
    this.friandisesList$ = this.friandisesService.Friandises();

  }


  ngOnInit(): void {

    this.friandisesList$ = this.friandisesService.Friandises();

  }

  OnDeleteFriandise(id : any){
    $('#deleteFriandiseModal').modal('show');
      this.id = id;
      console.log(id);
      this.friandisesService.deleteFriandise(this.id);
      this.router.navigate(['./home']);

  }
}


