let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
  empPayrollList = getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
  localStorage.removeItem('editEmp')
});

const getEmployeePayrollDataFromStorage = () => {
  return localStorage.getItem('EmployeePayrollList') ?
                      JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {

  headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
               "<th>Salary</th><th>Start Date</th><th>Actions</th>"

  if (empPayrollList.length == 0) return;
  let innerHtml = `${headerHtml}`;
  for (const employeePayrollData of empPayrollList){
    innerHtml = `${innerHtml}
    <tr>
      <td><img class="profile" src="${employeePayrollData._profilePic}" alt="">
      </td>
      <td>${employeePayrollData._name}</td>
      <td>${employeePayrollData._gender}</td>
      <td>${getDeptHtml(employeePayrollData._department)}</td>
      <td>${employeePayrollData._salary}</td>
      <td>${employeePayrollData.fullDate}</td>
      <td>
          <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete"
              src="../assets/Icons/delete-black-18dp.svg">
          <img name="${employeePayrollData._id}" onclick="update(this)" alt="edit"
              src="../assets/Icons/create-black-18dp.svg">
      </td>
    </tr>`;
  }  
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for (const dept of deptList){
      deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
  }
  return deptHtml;
}

const remove = (node) => {
  let empPayrollData = empPayrollList.find(empData => empData.id == node._id);
  if (!empPayrollData) return;
  const index = empPayrollList
                .map(empData => empData.id)
                .indexOf(empPayrollData.id);
  empPayrollList.splice(index, 1);
  localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
}