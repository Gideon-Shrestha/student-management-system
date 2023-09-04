// function display() {
//   document.getElementById("container").style.display = "block";
// }
// function addteacher() {
//   // Get teacher data from form inputs
// const firstName = document.getElementById("validationDefault01").value;
// const lastName = document.getElementById("validationDefault02").value;
// const email = document.getElementById("validationDefaultEmail").value;
// const contact = document.getElementById("validationDefaultnumber").value;
// const address = document.getElementById("validationDefault03").value;
// const course = document.getElementById("inputState").value;
// const time = document.getElementById("validationDefault13").value;
// const image = document.getElementById("exampleFormControlFile1").value;
// const cv = document.getElementById("exampleFormControlFile2").value;
// const salary = document.getElementById("validationDefault20").value;
// const totalsalarypaid = document.getElementById("validationDefault21").value;
//   var teacher;
//   // Input validation (Optional but recommended)
// if (localStorage.getItem("teachers") == null) {
//   teachers = [];
// } else {
//   teachers = JSON.parse(localStorage.getItem("teachers"));
// }

//   // Add the new student data to the local storage array
//   teachers.push({
// firstName: firstName,
// lastName: lastName,
// email: email,
// contact: contact,
// address: address,
// course: course,

// time: time,
// image: image,
// cv: cv,
// salarydiss: salary,
// salarygive: totalsalarypaid,
//   });

//   // Save the updated array back to local storage
//   localStorage.setItem("teachers", JSON.stringify(teachers));
//   clearForm();

//   // Refresh the student table to display the updated data
//   displayteacher();
// }

// function displayteacher() {
//   const teacher = JSON.parse(localStorage.getItem("teachers")) || [];

//   const tableBody1 = document.getElementById("tablebody1");
//   tableBody1.innerHTML = "";

//   teacher.forEach((teacher, index) => {
// const row = `<tr>
//   <td><img src="${teacher.image}" alt="" style="height:30px; width:30px; border-radius:50%;" /></td>
//   <td>${teacher.firstName} ${teacher.lastName}</td>
//   <td>${teacher.contact}</td>
//   <td>${teacher.email}</td>
//   <td>${teacher.address}</td>
//   <td>${teacher.course}</td>
//   <td>${teacher.time}</td>
//   <td>
//     <button onclick="editteacher(${index})" style="height:30px; width:30px; background-color:blue; border:none; border-radius:10px; color:white;"><i class="las la-pen"></i></button>
//     <button onclick="deleteteacher(${index})" style="height:30px; width:30px; background-color:red; border:none; border-radius:10px; color:white;"><i class="las la-trash"></i></button>
//   </td>
// </tr>`;
// tableBody1.innerHTML += row;
//   });
// }

// function deleteteacher(index) {
//   const teacher = JSON.parse(localStorage.getItem("teachers")) || [];
//   teacher.splice(index, 1);
//   localStorage.setItem("teachers", JSON.stringify(teacher));
//   displayteacher();
// }

// function editteacher(index) {
//   document.getElementById("addis").style.display = "none";
//   document.getElementById("update").style.display = "block";
//   const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
//   const teacherData = teachers[index];
//   document.querySelector(".container").style.display = "block";

//   // Fill the form fields with the existing teacher data
//   document.getElementById("validationDefault01").value = teacherData.firstName;
//   document.getElementById("validationDefault02").value = teacherData.lastName;
//   document.getElementById("validationDefaultEmail").value = teacherData.email;
//   document.getElementById("validationDefaultnumber").value =
//     teacherData.contact;
//   document.getElementById("validationDefault03").value = teacherData.address;
//   document.getElementById("inputState").value = teacherData.course;
//   document.getElementById("validationDefault13").value = teacherData.time;
//   document.getElementById("exampleFormControlFile1").value = teacherData.image;
//   document.getElementById("exampleFormControlFile2").value = teacherData.cv;
//   document.getElementById("validationDefault20").value = teacherData.salarydiss;
//   document.getElementById("validationDefault21").value = teacherData.salarygive;

//   // Do not delete the existing teacher record from local storage here
//   // We only need to fill the form for editing
// }

// document.addEventListener("DOMContentLoaded", () => {
//   displayteacher();
// });
function display() {
  document.querySelector(".container").style.display = "block";
}
function addStudent() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;
  const course = document.getElementById("course").value;

  const image = document.getElementById("studentImage").value;
  const cv = document.getElementById("studentCV").value;
  const salary = document.getElementById("offeredSalary").value;
  const totalsalarypaid = document.getElementById("paidSalary").value;

  // Check if local storage already has student data
  if (localStorage.getItem("student") == null) {
    localStorage.setItem("student", "[]");
  } else {
    student = JSON.parse(localStorage.getItem("student"));
  }

  // Add the new student data to the local storage array
  student.push({
    firstName: firstName,
    lastName: lastName,
    email: email,
    contact: contact,
    address: address,
    course: course,
    image: image,
    cv: cv,
    salarydiss: salary,
    salarygive: totalsalarypaid,
  });

  // Save the updated array back to local storage
  localStorage.setItem("student", JSON.stringify(student));
  
  clearForm();

  // Refresh the student table to display the updated data
  displayStudents();
}

function displayStudents() {
  const student = JSON.parse(localStorage.getItem("student")) || [];
  const tableBody1 = document.getElementById("tablebody1");
  tableBody1.innerHTML = "";

  student.forEach((students, index) => {
    const row = `<tr>
    <td><img src="${students.image}" alt="" style="height:30px; width:30px; border-radius:50%;" /></td>
    <td>${students.firstName} ${students.lastName}</td>
    <td>${students.contact}</td>
    <td>${students.email}</td>
    <td>${students.address}</td>
    <td>${students.course}</td>
   
    <td>
      <button onclick="editStudent(${index})" style="height:30px; width:30px; background-color:blue; border:none; border-radius:10px; color:white;"><i class="las la-pen"></i></button>
      <button onclick="deleteStudent(${index})" style="height:30px; width:30px; background-color:red; border:none; border-radius:10px; color:white;"><i class="las la-trash"></i></button>
    </td>
  </tr>`;
    tableBody1.innerHTML += row;
  });
}

// Function to delete a student record from local storage
function deleteStudent(index) {
  const student = JSON.parse(localStorage.getItem("student")) || [];
  student.splice(index, 1);
  localStorage.setItem("student", JSON.stringify(student));
  displayStudents();
}

// Function to edit a student record
function editStudent(index) {
  const student = JSON.parse(localStorage.getItem("student")) || [];
  document.getElementById("addis").style.display = "none";
  document.getElementById("update").style.display = "block";
  const students = student[index];
  document.querySelector(".container").style.display = "block";

  // Fill the form fields with the existing student data
  document.getElementById("validationDefault01").value = students.firstName;
  document.getElementById("validationDefault02").value = students.lastName;
  document.getElementById("validationDefaultEmail").value = students.email;
  document.getElementById("validationDefaultnumber").value = students.contact;
  document.getElementById("validationDefault03").value = students.address;
  document.getElementById("inputState").value = students.course;
  document.getElementById("validationDefault10").value =
    students.totalsalarypaid;
  document.getElementById("validationDefault13").value = students.shift;
  document.getElementById("exampleFormControlFile1").value =
    students.salarydiss;
  document.getElementById("exampleFormControlFile2").value = students.cv;

  // Delete the existing student record from local storage
  deleteStudent(index);
}
const student = JSON.parse(localStorage.getItem("student")) || [];
document.getElementById("numbers").innerHTML = student.length;

// Load existing student records when the page loads
document.addEventListener("DOMContentLoaded", () => {
  displayStudents();
});

// Function to add a new teacher to local storage
// function display() {
//   document.getElementById("container").style.display = "block";
// }
// function addTeacher() {
//   const firstName = document.getElementById("validationDefault01").value;
//   const lastName = document.getElementById("validationDefault02").value;
//   const email = document.getElementById("validationDefaultEmail").value;
//   const contact = document.getElementById("validationDefaultnumber").value;
//   const address = document.getElementById("validationDefault03").value;
//   const course = document.getElementById("inputState").value;
//   const salaryOffered = document.getElementById("validationDefault20").value;
//   const salaryPaid = document.getElementById("validationDefault21").value;

//   // Check if local storage already has teacher data
//   if (localStorage.getItem("teachers") == null) {
//     teachers = [];
//   } else {
//     teachers = JSON.parse(localStorage.getItem("teachers"));
//   }

//   // Add the new teacher to the array
//   teachers.push({
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     contact: contact,
//     address: address,
//     course: course,
//     time: time,
//     image: image,
//     cv: cv,
//     salarydiss: salaryOffered,
//     salarygive: salaryPaid,
//   });

//   // Store the updated teachers array in local storage
//   localStorage.setItem("teachers", JSON.stringify(teachers));

//   // Clear the form fields after adding
//   clearForm();

//   // Display the updated table
//   displayTeachers();
// }

// // Function to display teachers in the table
// function displayTeachers() {
//   const tableBody = document.getElementById("tablebody1");
//   tableBody.innerHTML = "";

//   // Retrieve teachers data from local storage
//   let teachers = JSON.parse(localStorage.getItem("teachers")) || [];

//   // Loop through each teacher and add to the table
//   teachers.forEach((teacher, index) => {
//     const row = tableBody.insertRow();
//     row.innerHTML = `
//         <td>${teacher.firstName} ${teacher.lastName}</td>
//         <td>${teacher.contact}</td>
//         <td>${teacher.email}</td>
//         <td>${teacher.course}</td>
//         <td>${teacher.salaryOffered}</td>
//         <td>${teacher.salaryPaid}</td>
//         <td>
//           <button onclick="editTeacher(${index})">Edit</button>
//           <button onclick="deleteTeacher(${index})">Delete</button>
//         </td>
//       `;
//   });
// }

// // Function to delete a teacher from local storage
// function deleteTeacher(index) {
//   let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
//   teachers.splice(index, 1);
//   localStorage.setItem("teachers", JSON.stringify(teachers));
//   displayTeachers();
// }

// // Function to edit a teacher's details
// function editTeacher(index) {
//   let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
//   const teacher = teachers[index];

//   // Pre-fill the form with teacher data for editing
//   document.getElementById("validationDefault01").value = teacher.firstName;
//   document.getElementById("validationDefault02").value = teacher.lastName;
//   document.getElementById("validationDefaultEmail").value = teacher.email;
//   document.getElementById("validationDefaultnumber").value = teacher.contact;
//   document.getElementById("validationDefault03").value = teacher.address;
//   document.getElementById("inputState").value = teacher.course;
//   document.getElementById("validationDefault20").value = teacher.salaryOffered;
//   document.getElementById("validationDefault21").value = teacher.salaryPaid;

//   // Hide the "Add" button and show the "Update" button
//   document.getElementById("addis").style.display = "none";
//   document.getElementById("update").style.display = "block";

//   // Store the index of the teacher being edited in the update button
//   document.getElementById("update").setAttribute("data-index", index);
// }

// // Function to update a teacher's details
// function updateTeacher() {
//   const index = document.getElementById("update").getAttribute("data-index");
//   const firstName = document.getElementById("validationDefault01").value;
//   const lastName = document.getElementById("validationDefault02").value;
//   const email = document.getElementById("validationDefaultEmail").value;
//   const contact = document.getElementById("validationDefaultnumber").value;
//   const address = document.getElementById("validationDefault03").value;
//   const course = document.getElementById("inputState").value;
//   const salaryOffered = document.getElementById("validationDefault20").value;
//   const salaryPaid = document.getElementById("validationDefault21").value;

//   let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
//   teachers[index] = {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     contact: contact,
//     address: address,
//     course: course,
//     time: time,
//     image: image,
//     cv: cv,
//     salarydiss: salary,
//     salarygive: totalsalarypaid,
//   };
//   localStorage.setItem("teachers", JSON.stringify(teachers));

//   // Clear the form fields after updating
//   document.getElementById("validationDefault01").value = "";
//   document.getElementById("validationDefault02").value = "";
//   document.getElementById("validationDefaultEmail").value = "";
//   document.getElementById("validationDefaultnumber").value = "";
//   document.getElementById("validationDefault03").value = "";
//   document.getElementById("inputState").value = "Choose...";
//   document.getElementById("validationDefault20").value = "";
//   document.getElementById("validationDefault21").value = "";

//   // Hide the "Update" button and show the "Add" button
//   document.getElementById("addis").style.display = "block";
//   document.getElementById("update").style.display = "none";

//   // Display the updated table
//   displayTeachers();
// }

// // Display the table when the page loads
// displayTeachers();
