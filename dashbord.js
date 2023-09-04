const students = JSON.parse(localStorage.getItem("students")) || [];
const upper = document.getElementById("student");
upper.innerHTML = "";

// Loop through the first 3 students (or all students if there are less than 3)
for (let index = 0; index < Math.min(3, students.length); index++) {
  const student = students[index]; // Get the current student object

  // Create the HTML for the student information and contact icons
  const rowHTML = `
    <div class="info">
      <img src="${student.image}" alt="" style="height:30px; width:30px; border-radius:50%;" />
      <div>
        <h4>${student.firstName} ${student.lastName}</h4>
        <small>${student.course}</small>
      </div>
    </div>
    <div class="contact">
      <i class="las la-user-circle"></i>
      <i class="las la-comment"></i>
      <i class="las la-phone"></i>
    </div>`;

  // Append the created HTML to the "upper" element
  upper.innerHTML += rowHTML;
}

const teachers = JSON.parse(localStorage.getItem("student")) || [];
const teacher1 = document.getElementById("teacher");
teacher1.innerHTML = "";

// Loop through the first 3 teachers (or all teachers if there are less than 3)
for (let index = 0; index < Math.min(3, teachers.length); index++) {
  const teacher = teachers[index]; // Get the current teacher object

  // Create the HTML for the teacher information and contact icons
  const rowsHTML = `
    <div class="info">
      <img src="${teacher.image}" alt="" style="height:30px; width:30px; border-radius:50%;" />
      <div>
        <h4>${teacher.firstName} ${teacher.lastName}</h4>
        <small>${teacher.course}</small>
      </div>
    </div>
    <div class="contact">
      <i class="las la-user-circle"></i>
      <i class="las la-comment"></i>
      <i class="las la-phone"></i>
    </div>`;

  // Append the created HTML to the "teacher1" element
  teacher1.innerHTML += rowsHTML;
}
document.getElementById("numbers").innerHTML = teachers.length;
document.getElementById("number").innerHTML = students.length;
