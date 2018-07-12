import { Component, OnInit } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  // students: Student[] = [];
  student: Student = new Student();
  students: Map<number,Student> = new Map;
  selectedStudent: Student = new Student();
  errMsg: string = "";
  updateMsg: string = "";
  updateFlag: boolean = false;
  constructor() {}

  ngOnInit() {
    this.student.school = "";
    this.student.id = null;
    this.student.address = "";
    this.student.name = "";
  }
  createStudent(){
    console.log("obj: ",this.student);
    if (this.student.id && this.student.name) {
    let obj = new Student();
    obj.address = this.student.address;
    obj.id = this.student.id;
    obj.name = this.student.name;
    obj.school = this.student.school;
    this.students.set(obj.id,obj);
    this.student.school = "";
    this.student.id = null;
    this.student.address = "";
    this.student.name = "";
    this.errMsg = "";
    }else{
      this.errMsg = "Name and Id fields are required.";
    }
    console.log("students: ",this.students);
    
  }
  getKeys(map){
    return Array.from(map.values());
  }
  deleteStudent(obj,_event){
    this.students.delete(obj.id);
    _event.preventDefault();
  }
  selectStudent(obj,_event){
    this.selectedStudent.name = obj.name;
    this.selectedStudent.address = obj.address;
    this.selectedStudent.school = obj.school;
    this.selectedStudent.id = obj.id;
    _event.preventDefault();
  }
  updateStudent(_event){
    if (this.selectedStudent.name) {
      this.students.set(this.selectedStudent.id,this.selectedStudent);
      this.updateMsg = "Student updated successfully.";
      this.updateFlag = true;
    }else{
      this.updateMsg = "*Name field is required.";
      this.updateFlag = false;
    }
    console.log(this.selectedStudent.name,this.students.get(this.selectedStudent.id));
    _event.preventDefault();
    _event.stopPropagation();
  }
  getUpdateMsgclass(){
    if (this.updateFlag == true) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
