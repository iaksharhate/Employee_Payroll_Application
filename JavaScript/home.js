window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {

  headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
               "<th>Salary</th><th>Start Date</th><th>Actions</th>"

  let innerHtml = `${headerHtml}`;
  let empPayrollList = createEmployeePayrollJSON();

  for (const employeePayrollData of empPayrollList){
    innerHtml = `${innerHtml}
    <tr>
      <td><img class="profile" src="${employeePayrollData._profilePic}" alt="">
      </td>
      <td>${employeePayrollData._name}</td>
      <td>${employeePayrollData._gender}</td>
      <td>${getDeptHtml(employeePayrollData._department)}</td>
      <td>${employeePayrollData._salary}</td>
      <td>${employeePayrollData._startDate}</td>
      <td>
          <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete"
              src="../assets/Icons/delete-black-18dp.svg">
          <img name="${employeePayrollData._id}" onclick="update(this)" alt="edit"
              src="../assets/Icons/create-black-18dp.svg">
      </td>
    </tr>
    `;
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

const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      _name: 'Akshar Hate',
      _gender: 'Male',
      _department: [
        'Engineer',
        'Finance'
      ],
      _salary: '450000',
      _startDate: '01 Jun 2022',
      _note: '',
      _id: new Date().getTime(),
      _profilePic: '../assets/Profile-Images/Ellipse -03.png'
    },
    {
      _name: 'Swati Badole',
      _gender: 'Female',
      _department: [
        'HR',
        'Sales'
      ],
      _salary: '550000',
      _startDate: '20 May 2022',
      _note: '',
      _id: new Date().getTime() + 1,
      _profilePic: '../assets/Profile-Images/Ellipse -01.png'
    }
  ];
  return empPayrollListLocal;
}