import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private student: Student;

  constructor() { }

  ngOnInit() {
    this.student = {
      firstName: 'Luis',
      lastName: 'Aviles',
      jobDescription: 'Software Engineer'
    }
  }
}
