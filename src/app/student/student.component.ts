import { Component , OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { students } from 'src/app/models/modelBD';
import { StudentService } from '../student.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentsLst$ :Observable<students[]> | undefined;
  student$ :Observable<students> | undefined;
  studentSel :students={
    nom: "",
    prenom: "",
    photo: ""
  };
  studentForm !: FormGroup;
  variable :String="aaa";

  constructor(private studentService :StudentService) { }

  ngOnInit(): void{
    this.studentsLst$ = this.studentService.Students();
  }

  stdData(std:string){
  //  this.student$ = this.studentService.Student(std);
    this.studentService.Student(std).subscribe((res) => (this.studentSel = res));

}

}
