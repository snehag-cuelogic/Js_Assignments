function registerUser(event) {
   // event.preventDefault();
    if (validate()) {
        var newdata = getData();
        window.alert("You have registered successfully");
        setUser(newdata.Email);
        var allEntries = getArray();
        allEntries.push(newdata);
        setArray(allEntries);
        window.location = "./Assets/htmlPages/homepage.html";
        return true;
    } else {
       
        return false;
    }
}

//converting image in base64
function getBase64(file) {
    var reader = new FileReader();
    var path;
    reader.readAsDataURL(file);
   
    reader.onload = function () {
     path= reader.result;
     getImg(path);
   };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    return path;

 }
function getImg(path){
    return path;
}


function User(Fname, Lname, Email, Address, imgurl, pwd, gender) {
    this.Fname = Fname;
    this.Lname = Lname;
    this.Email = Email;
    this.Address = Address;
    this.imgurl = imgurl;
    this.pwd = pwd;
    this.gender = gender;
}

function getData() {
    var Fname = document.getElementById("fname").value;
    var Lname = document.getElementById("lname").value;
    var Email = document.getElementById("email").value;
    var Address = document.getElementById("address").value;
    var imgurl;
    imgurl = document.getElementById("img").files[0];
    if(imgurl != '' || imgurl != null){
        imgurl = getBase64(imgurl);
    }else imgurl= '';
   
    var pwd = document.getElementById("password").value;
    var strGender = document.getElementById("gender");
    var gender = strGender.options[strGender.selectedIndex].value;
    var newUserObj = new User(Fname, Lname, Email, Address, imgurl, pwd, gender);
    return newUserObj;
}