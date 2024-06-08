let DATA= "secret data of website";

class User{
    constructor(fullName,email){
        this.fullName = fullName;
        this.email = email;
    }
    viewData(){
        console.log("view website data=", DATA);
    }
}

class Admin extends User{
    constructor(fullName,email, gender){
        super(fullName, email);
        this.gender = gender;
    }
    editData(){
        DATA = "data updated";
        console.log("edit website data=", DATA);
    }

}

let diya = new Admin("diya", "diya@","female");
let dev = new User("dev", "dev@");