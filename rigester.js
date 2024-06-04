let users = []

function getFieldValue(id){
    return document.getElementById(id).value
}
function validateEmail(email) {
    // Define the regular expression for a valid email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    return regex.test(email);
}



const notify = (msg , type) => {
    let color = ''
    switch(type){
     case "success":
         color = "linear-gradient(to right, #1d976c, #93f9b9)"
         break;
         case "error":
             color = "linear-gradient(to right, #ed213a, #93291e)"
             break;
             default:
                 color = "#000"    
    }
     
    Toastify({
     text: msg,
     duration: 3000,
     close: true,
     gravity: "bottom", // top or bottom
     position: "left", // left, center or right
     stopOnFocus: true, // Prevents dismissing of toast on hover
     style: {
       background: color,
     }
   }).showToast();
}

//Handle Rigster
const handleRegister = ( ) =>{
    let email = getFieldValue("email")
    let password = getFieldValue("password")
    // console.log(name , password)
    if(validateEmail(email) === false){
        notify("enter the right Email" , "error")
        return
    }
    const check = users.find(element => element.email === user.usermail)
if (check){
    return notify("You are already Registered","error")
}
    
    if(password.length<8){
        notify(" Pasword must be of 8 character", "error")
        return
    }
    

    let user = {
       email,
       password,
    }
    // console.log(user)
    users.push(user)
    notify("You are registered sucessfully", "success")
    localStorage.setItem('users',JSON.stringify(users))
    console.log(users)
}

//Hnadle Login
const handlelogin = () => {
    storedUsers = localStorage.getItem("users")
    storedUsers = JSON.parse(storedUsers)
    users = storedUsers
    console.log(users)
let usermail = getFieldValue("useremail")
let password = getFieldValue("userpassword")

let user = {
    usermail,
    password,
}
// console.log(user)
const tra = users.find(element => element.email === user.usermail && element.password === user.password  )
if (!tra){
    return notify("User Not Found","error")
}
if (tra){
     notify("LogIn Successfully","success")
     //Navigating to todo app
    window.location.replace("todo.html")
}

}
