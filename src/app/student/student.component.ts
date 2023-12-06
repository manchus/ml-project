import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { students } from 'src/app/models/modelBD';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentsLst$ :Observable<students[]> | undefined;
  student$ :Observable<students> | undefined;

  constructor(private studentService :StudentService) { }

  ngOnInit(): void{
    this.studentsLst$ = this.studentService.Students();

    this.student$ = this.studentService.Student('CarDi');

    console.log(this.studentsLst$);
    console.log(this.student$);
  }

}
