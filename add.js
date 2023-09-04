// var fname = document.getElementById("validationDefault01").value;
// var lname = document.getElementById("validationDefault02").value;
// var Email = document.getElementById("validationDefaultEmail").value;
// var Shift = document.getElementById("validationDefault13").value;
// var Contact = document.getElementById("validationDefaultnumber").value;
// var Address = document.getElementById("validationDefault03").value;
// var Course = document.getElementById("inputState").value;
// var Fees = document.getElementsByName("validationDefault10").value;
// var Image = document.getElementById("exampleFormControlFile1").value;
// var Cv = document.getElementById("exampleFormControlFile2").value;
// function showdata() {
//   var peoplelist;
//   if (localStorage.getItem("peoplelist") == null) {
//     peoplelist = [];
//   } else {
//     peoplelist = JSON.parse(localStorage.getItem("peoplelist"));
//   }
//   var html = "";
//   peoplelist.forEach(function (element, index) {
//     html += "<tr>";
//     html +=
//       "<td height:40px; width:40px; border-radius:50%; >" +
//       element.Image +
//       "</td>";
//     html += "<td>" + element.fname + element.lname + "</td>";
//     html += "<td>" + element.Contact + "</td>";
//     html += "<td>" + element.Email + "</td>";
//     html += "<td>" + element.Address + "</td>";
//     html += "<td>" + element.Course + "</td>";
//     html += "<td>" + element.Shift + "</td>";

//     //     if("Course==Web Development || Course== Flutter"){
//     //         var totalfees = 20000;
//     //     html+="<td>"+ element.totalfees + "</td>";
//     //     }
//     //     else{
//     //         var totalfees2=15000;
//     //     html+="<td>"+ element.totalfees2 + "</td>";

//     //     }
//     //     html+="<td>"+ element.Fees + "</td>";
//     //     html+="<td>"+ element.Fees + "</td>";
//     //     if("Course==Web Development || Course== Flutter"){
//     //         var totalfees = 20000;
//     //     html+="<td>"+ (element.totalfees-element.Fees)  + "</td>";
//     //     }
//     //     else{
//     //         var totalfees2=15000;
//     //     html+="<td>"+ (element.totalfees2-element.Fees)  + "</td>";
//     //     }

//     // };
//     html +=
//       '<td><button onclick="deleteData(' +
//       index +
//       ')" class="btn btn-danger" background:red; color:white; text-align:center;><i class="las la-trash-alt"></i> </ button>' +
//       '<button onclick="updateData(' +
//       index +
//       ')" class="btn btn-danger" background:red; color:white; text-align:center;><i class="las la-pencil-alt"></i> </ button>';
//     '<button onclick="Detail(' +
//       index +
//       ')" class="btn btn-danger" background:red; color:white; text-align:center;><i class="las la-user-circle"></i> </ button>' +
//       "</td>";
//     html += "</tr>";
//   });
// }
// document.querySelector("#tablebody tbody").innerHTML = html;
// document.onload = showdata();

// function Adddata() {

//   if (localStorage.getItem("peoplelist") == null) {
//     peoplelist = [];
//   } else {
//     peoplelist = JSON.parse(localStorage.getItem("peoplelist"));
//   }
//   peoplelist.push({
//     fname: fname,
//     lname: lname,
//     Email: Email,
//     Shift: Shift,
//     Contact: Contact,
//     Address: Address,
//     Course: Course,
//     Fees: Fees,
//     Image: Image,
//     Cv: Cv,
//   });
//   localStorage.setItem("peoplelist", JSON.stringify(peoplelist));
//   showdata();
//   document.getElementById("name").value = "";
//   document.getElementById("Email").value = "";
//   document.getElementById("Shift").value = "";
//   document.getElementById("Contact").value = "";
//   document.getElementById("Address").value = "";
//   document.getElementById("Course").value = "";
//   document.getElementById("Fees").value = "";
//   document.getElementsByName("Image").value = "";
//   document.getElementById("Cv").value = "";
// }

// function storedata() {
//   document.querySelector(".container").style.display = "block";
//   const firstName = document.getElementById("validationDefault01").value;
//   const lastName = document.getElementById("validationDefault02").value;
//   const email = document.getElementById("validationDefaultEmail").value;
//   const contact = document.getElementById("validationDefaultnumber").value;
//   const address = document.getElementById("validationDefault03").value;
//   const course = document.getElementById("inputState").value;
//   const fees = document.getElementById("validationDefault10").value;
//   const shift = document.getElementById("validationDefault13").value;

//   // Create an object to store the student data
//   const studentData = {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     contact: contact,
//     address: address,
//     course: course,
//     fees: fees,
//     shift: shift,
//   };

//   // Check if data already exists in localStorage
//   let students = JSON.parse(localStorage.getItem("students")) || [];

//   // Add the new student data to the existing array
//   students.push(studentData);

//   // Save the updated array back to localStorage
//   localStorage.setItem("students", JSON.stringify(students));

//   // Retrieve data from localStorage and display it in the table
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const tableBody = document.getElementById("tablebody");
//   const students = JSON.parse(localStorage.getItem("students")) || [];

//   function displayStudents() {
//     tableBody.innerHTML = "";

//     students.forEach((student, index) => {
//       const row = document.createElement("tr");
//       row.innerHTML = `
//         <td><img src="${student.image}" alt="Student Image" width="50px" height="50px"></td>
//         <td>${student.firstName} ${student.lastName}</td>
//         <td>${student.contact}</td>
//         <td>${student.email}</td>
//         <td>${student.address}</td>
//         <td>${student.course}</td>
//         <td>${student.shift}</td>
//         <td>
//           <button onclick="editStudent(${index})">Edit</button>
//           <button onclick="deleteStudent(${index})">Delete</button>
//         </td>
//       `;
//       tableBody.appendChild(row);
//     });
//   }

//   displayStudents();

//   // Function to edit a student's data
//   function editStudent(index) {
//     // Get the student data using students[index]
//     const student = students[index];

//     // Update the form with the student data
//     document.getElementById("validationDefault01").value = student.firstName;
//     document.getElementById("validationDefault02").value = student.lastName;
//     document.getElementById("validationDefaultEmail").value = student.email;
//     document.getElementById("validationDefaultnumber").value = student.contact;
//     document.getElementById("validationDefault03").value = student.address;
//     document.getElementById("inputState").value = student.course;
//     document.getElementById("validationDefault10").value = student.fees;
//     document.getElementById("validationDefault13").value = student.shift;
//   }

//   // Function to delete a student's data
//   function deleteStudent(index) {
//     students.splice(index, 1);
//     localStorage.setItem("students", JSON.stringify(students));
//     displayStudents();
//   }
// });

// Function to add a new student to local storage
function display() {
  document.querySelector(".container").style.display = "block";
}
function addStudent() {
  const firstName = document.getElementById("validationDefault01").value;
  const lastName = document.getElementById("validationDefault02").value;
  const email = document.getElementById("validationDefaultEmail").value;
  const contact = document.getElementById("validationDefaultnumber").value;
  const address = document.getElementById("validationDefault03").value;
  const course = document.getElementById("inputState").value;
  const fees = document.getElementById("validationDefault10").value;
  const time = document.getElementById("validationDefault13").value;
  const image = document.getElementById("exampleFormControlFile1").value;
  const cv = document.getElementById("exampleFormControlFile2").value;

  // Check if local storage already has student data
  if (localStorage.getItem("students") == null) {
    students = [];
  } else {
    students = JSON.parse(localStorage.getItem("students"));
  }

  // Add the new student data to the local storage array
  students.push({
    firstName: firstName,
    lastName: lastName,
    email: email,
    contact: contact,
    address: address,
    course: course,
    fees: fees,
    time: time,
    image: image,
    cv: cv,
  });

  // Save the updated array back to local storage
  localStorage.setItem("students", JSON.stringify(students));
  clearForm();

  // Refresh the student table to display the updated data
  displayStudents();
}

const students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
  const tableBody = document.getElementById("tablebody");
  tableBody.innerHTML = "";
  students.forEach((student, index) => {
    const row = `<tr>
    <td><img src="${student.image}" alt=""  style="height:30px; width:30px; border-radius:50%;" /></td>
                        <td>${student.firstName} ${student.lastName}</td>
                        <td>${student.contact}</td>
                        <td>${student.email}</td>
                        <td>${student.address}</td>
                        <td>${student.course}</td>
                        <td>${student.time}</td>
                        <td>
                            <button onclick="editStudent(${index})"style="height:30px; width:30px;  background-color:blue; border:none; border-radius:10px;" ><i class="las la-pen"></i></button>
                            <button onclick="deleteStudent(${index})"style="height:30px; width:30px;background-color:red; border:none; border-radius:10px;" ><i class="las la-trash"></i></button>
                        </td>
                    </tr>`;
    tableBody.innerHTML += row;
  });
}

// Function to delete a student record from local storage
function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

// Function to edit a student record
function editStudent(index) {
  document.getElementById("addis").style.display = "none";
  document.getElementById("update").style.display = "block";
  const student = students[index];
  document.querySelector(".container").style.display = "block";

  // Fill the form fields with the existing student data
  document.getElementById("validationDefault01").value = student.firstName;
  document.getElementById("validationDefault02").value = student.lastName;
  document.getElementById("validationDefaultEmail").value = student.email;
  document.getElementById("validationDefaultnumber").value = student.contact;
  document.getElementById("validationDefault03").value = student.address;
  document.getElementById("inputState").value = student.course;
  document.getElementById("validationDefault10").value = student.fees;
  document.getElementById("validationDefault13").value = student.shift;
  document.getElementById("exampleFormControlFile1").value = student.image;
  document.getElementById("exampleFormControlFile2").value = student.cv;

  // Delete the existing student record from local storage
  deleteStudent(index);
}

// Load existing student records when the page loads
document.addEventListener("DOMContentLoaded", () => {
  displayStudents();
});
console.log(students);

document.getElementById("numbers").innerHTML = students.length;

// Function to filter students by course
function filterStudentsByCourse() {
  const selectedCourse = document.getElementById("inputState").value;
  const tableRows = document.querySelectorAll("#tablebody tr");

  // Loop through all table rows
  tableRows.forEach((row) => {
    const courseCell = row.querySelector("td:nth-child(6)");

    // Show or hide row based on selected course
    if (selectedCourse === "All" || courseCell.textContent === selectedCourse) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
}
