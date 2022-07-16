function chackAllFun() {
    if (chackUserDate()==true) {
        return true
    }
    return false
}

var userName =document.getElementById("userName")
var userLastName =document.getElementById("lastName")
function chackUserName() {
    var limit10D = /^[ A-Za-z]{10}$/
    if (limit10D.test(userName.value)&&limit10D.test(lastName.value)) {
        userName.style.borderColor="green"
        lastName.style.borderColor="green"
        return true
    }
    userName.style.borderColor="red"
    lastName.style.borderColor="red"    
    return false
}

var userDate =document.getElementById("userDate")
function chackUserDate() {
    var newDate = new Date().getFullYear()
    if (newDate-userDate.value.substr(0,4)>18) {
        return true
    }
    alert("no")
    return false
}

var userEmail =document.getElementById("userEmail")
function chackUserEmail() {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (emailRegex.test(userEmail.value)) {
    userEmail.style.borderColor="green"
        return true
    }
    userEmail.style.borderColor="red"
    return false
}

var userPhone =document.getElementById("userPhone")
function chackUserPhone() {
    var phoneRegex = /^\d{10}$/;    
    if (phoneRegex.test(userPhone.value)) {
    alert("yes")
    return true
    }
    alert("no")
    return false
}

var userPassword1 =document.getElementById("userPassword1")
function chackUserPassword() {
    if (userPassword1.value[0].UpperCase()==true) {
        alert("yes")
        return true
    }
    alert("no")
    return false
}