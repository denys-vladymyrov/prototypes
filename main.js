"use strict";


(function () {

  function Student(firstname, lastname, birthyear = 0){
    this.firsname = firstname;
    this.lastname = lastname;
    this.birthyear = birthyear;
    this.marks = [];

    this.attendanceLimit = 25;
    this.attendance = new Array(this.attendanceLimit);

  }

  Student.prototype.getAge = function(){
    return new Date().getFullYear() - this.birthyear;
  };

  Student.prototype.present = function(){

    for(var i = 0; i < this.attendanceLimit; i++){
      if(this.attendance[i] === undefined){
        this.attendance[i] = true;
        return;
      }
    }

  };

  Student.prototype.absent = function(){

    for(var i = 0; i < this.attendanceLimit; i++){
      if(this.attendance[i] === undefined){
        this.attendance[i] = false;
        return;
      }
    }

  };

  Student.prototype.averageAttendance = function () {
    var totalAttendance = 0,
        totalLessons = 0;

    this.attendance.forEach(function(item, i){
      if(item === true){
        totalAttendance++;
      }
      if(item !== undefined){
        totalLessons++;
      }
    });

    return totalAttendance / totalLessons;

  };

  Student.prototype.averageMark = function () {
    return this.marks.map((item, i, arr) => item / arr.length).reduce((p, c) => c + p);
  };

  Student.prototype.summary = function(){

    var averageRating,
        averageAttendance;

    averageRating = this.averageMark();
    averageAttendance = this.averageAttendance();
    

    if(averageRating > 90 && averageAttendance > 0.9){
      return "Ути какой молодчинка!";
    }
    else if(averageRating < 90 && averageAttendance < 0.9){
      return "Редиска!";
    }
    else{
      return "Норм, но можно лучше";
    }

  };

  
  var studentDenys = new Student("Denys", "Vladymyrov", 1981);
  studentDenys.marks.push(80);
  studentDenys.marks.push(80);
  studentDenys.marks.push(100);
  studentDenys.absent();
  studentDenys.absent();
  studentDenys.present();
  studentDenys.present();
  studentDenys.present();
  studentDenys.present();
  studentDenys.present();
  studentDenys.present();
  studentDenys.present();
  studentDenys.present();
  studentDenys.present();
  studentDenys.present();
  studentDenys.present();

  console.log(studentDenys.summary());

  var studentVasya = new Student("Vasya", "Petrov", 1987);
  studentVasya.marks.push(100);
  studentVasya.marks.push(95);
  studentVasya.marks.push(100);
  studentVasya.present();
  studentVasya.present();
  studentVasya.absent();


  console.log(studentVasya.summary());
  
  
  function StudentArray() {
    this.studentsArray = [];
  }

  StudentArray.prototype.push = function(student){
    this.studentsArray.push(student);
  };

  StudentArray.prototype.attendance = function (lastname) {
    if(lastname){
      this.studentsArray.forEach(function (item, i) {
        if(item.lastname === lastname){
          console.log(lastname + " : " + item.averageAttendance());
        }
      });
    }
    else{
      var averageGroupAttendance = 0;
      this.studentsArray.forEach(function (item, i) {
        averageGroupAttendance += item.averageAttendance();
      });
      console.log("Average attendance: " + averageGroupAttendance / this.studentsArray.length);
    }
  };

  StudentArray.prototype.performance = function (lastname) {
    if(lastname){
      this.studentsArray.forEach(function (item, i) {
        if(item.lastname === lastname){
          console.log(lastname + " : " + item.averageMark());
        }
      });
    }
    else{
      var averageGroupMark = 0;
      this.studentsArray.forEach(function (item, i) {
        averageGroupMark += item.averageMark();
      });
      console.log("Average mark: " + averageGroupMark / this.studentsArray.length);
    }
  };

  var group = new StudentArray();
  group.push(studentVasya);
  group.push(studentDenys);
  group.attendance();
  group.attendance("Vladymyrov");
  group.attendance("Petrov");

  group.performance();
  group.performance("Vladymyrov");
  group.performance("Petrov");

}());


