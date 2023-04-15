//Write a function to find the grade of the student based on their numbers

function calculateGrade(marks) {
    let grade;
  
    switch (true) {
      case marks >= 90 && marks <= 100:
        grade = "S grade";
        break;
      case marks >= 80 && marks < 90:
        grade = "A grade";
        break;
      case marks >= 70 && marks < 80:
        grade = "B grade";
        break;
      case marks >= 60 && marks < 70:
        grade = "C grade";
        break;
      case marks >= 50 && marks < 60:
        grade = "D grade";
        break;
      case marks >= 40 && marks < 50:
        grade = "E grade";
        break;
      case marks >= 0 && marks < 40:
        grade = "Student has failed";
        break;
      default:
        grade = "Invalid marks";
        break;
    }
  
    return grade;
  }

  