import { Component } from '@angular/core';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.css']
})
export class OptComponent {
  statusAdministration: boolean = true;

  titre:String="Les belles friandises";

  constructor() { }

  clickEvent(){
    this.statusAdministration = !this.statusAdministration;

    console.log(this.statusAdministration);
}

  ngOnInit(): void {
  }
}
