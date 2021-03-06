class EmployeePayrollData {
    
    get id() { return this._id; }

    set id(id) {
        this._id = id;
    }

    get name() { return this._name; }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!!!';    
    }

    get profilePic() { return this._profilePic; }

    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender() { return this._gender; }

    set gender(gender){
        let genderRegex = RegExp('^[female|male]+$');
        if(genderRegex.test(gender))
            this._gender = gender;
        else
            throw "Gender is incorrect!!";
    }

    get department() { return this._department; }

    set department(department){
        this._department = department;
    }

    get salary() { return this._salary; }

    set salary(salary){
        let salaryRegx = RegExp('^[1-9][0-9]*$');
        if(salaryRegx.test(salary))
            this._salary =salary;
        else
            throw "Salary is incorrect !!!"
    }

    get note() { return this._note; }

    set note(note){
        this._note = note;
    }

    get startDate() { return this._startDate; }

    set startDate(startDate) {
        var today = new Date();
        const one_month_ago = new Date(today.setDate(today.getDate()-30));
        today = new Date();
        if(today < startDate || startDate < one_month_ago) {
            throw 'Start date is invalid';
        }
        else {
            this._startDate = startDate;
        }
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const employeeDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "Name = " + this.name + ", Profile Image = " + this.profilePic 
                + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = "
                + this.salary + ", Start Date = " + this.fullDate + ", Notes = " + this.note;
    }
}