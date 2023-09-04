const students = JSON.parse(localStorage.getItem("students")) || [];
for(let i=1; i<students.lenght; i++)
{
  Number(students[0].salary)+=Number(students[1].salary);
}
document.getElementById('moneyincome').innerHTML=Number(students[0].salary);
const tableBody2 = document.getElementById("tablebody2");
tableBody2.innerHTML = "";

console.log(students);
students.forEach((student, index) => {
  const rowe = `<tr>
  <td><img src=${
    student.image
  } alt=""  style="height:30px; width:30px; border-radius:50%;" /></td>
                      <td>${student.firstName} ${student.lastName}</td>
                      <td>${student.contact}</td>
                      <td>${student.course}</td>
                      ${
                        student.course === "Graphics"
                          ? `<td>${10000}</td>`
                          : `<td>${20000}</td>`
                      }

                      
                      <td>${student.fees}</td>
                      ${
                        student.course === "Graphics"
                          ? `<td>${10000 - student.fees}</td>`
                          : `<td>${20000 - student.fees}</td>`
                      }
                      
                      <td>
                          <button onclick="editStudent(${index})"style="height:30px; width:30px;  background-color:blue; border:none; border-radius:10px;" ><i class="las la-pen"></i></button>
                          <button onclick="deleteStudent(${index})"style="height:30px; width:30px;background-color:red; border:none; border-radius:10px;" ><i class="las la-trash"></i></button>
                      </td>
                      
                  </tr>`;
  tableBody2.innerHTML += rowe;
});
tablebody3;
const student = JSON.parse(localStorage.getItem("student")) || [];
const tableBody3 = document.getElementById("tablebody3");
tableBody3.innerHTML = "";

student.forEach((students, index) => {
  const row = `<tr>
  <td><img src=${
    student.image
  } alt=""  style="height:30px; width:30px; border-radius:50%;" /></td>
                      <td>${students.firstName} ${students.lastName}</td>
                      <td>${students.contact}</td>
                      <td>${students.course}</td>
                     
                        
                          <td>${students.salary}</td>
                          <td>${students.totalsalarypaid}</td>

                      
                      <td>${students.salary - students.totalsalarypaid}</td>
                     
                       
                      <td>
                          <button onclick="editStudent(${index})"style="height:30px; width:30px;  background-color:blue; border:none; border-radius:10px;" ><i class="las la-pen"></i></button>
                          <button onclick="deleteStudent(${index})"style="height:30px; width:30px;background-color:red; border:none; border-radius:10px;" ><i class="las la-trash"></i></button>
                      </td>
                      
                  </tr>`;
  tableBody3.innerHTML += row;
});
