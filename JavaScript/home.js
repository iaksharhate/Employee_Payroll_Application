window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {

  headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
               "<th>Salary</th><th>Start Date</th><th>Actions</th>"

  const innerHtml = `${headerHtml}
  <tr>
    <td><img class="profile" src="../assets/Profile-Images/Ellipse -03.png" alt="">
    </td>
    <td>Akshar Hate</td>
    <td>Male</td>
    <td><div class="dept-label">HR</div>
    <div class="dept-label">Engineer</div></td>
    <td>400000</td>
    <td>1 Jun 2022</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
            src="../assets/Icons/delete-black-18dp.svg">
        <img id="1" onclick="update(this)" alt="edit"
            src="../assets/Icons/create-black-18dp.svg">
    </td>
  </tr>
  `;
  document.querySelector('#table-display').innerHTML = innerHtml; 
}