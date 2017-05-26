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

  Student.prototype.summary = function(){

    var totalAttendance = 0,
        totalLessons = 0,
        averageRating,
        averageAttendance;

    averageRating = this.marks.map((item, i, arr) => item / arr.length).reduce((p, c) => c + p);

    this.attendance.forEach(function(item, i){
      if(item === true){
        totalAttendance++;
      }
      if(item !== undefined){
        totalLessons++;
      }
    });

    averageAttendance = totalAttendance / totalLessons;

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

  console.log(studentVasya.summary());

}());


