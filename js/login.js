const USERS_ENDPOINT = "https://desafiodev-5e779-default-rtdb.firebaseio.com/users.json"
let inputEmail = document.getElementById ("inputEmail")
let inputPassword = document.getElementById ("inputPassword")
let Check1 = document.getElementById ("Check1")
let loginButton = document.getElementById ("loginButton")


//acceder a la base de datos de usuarios
const getAllUsers = async () =>{
    let response = await fetch(`${USERS_ENDPOINT}`)
    let data = await response.json() //este data sólo tiene un elemento 
    return data.users
}

const logIn = async () => {
    let userFound = false
    //leer los valores de los inputs
    let emailValue = inputEmail.value.trim()
    let passwordValue = inputPassword.value.trim()
    
    //comparar emailValue con email y passwordValue con password de cada objeto
    const usersArray = await getAllUsers()  
    
    usersArray.forEach((user) => {
      if (emailValue === user.email && passwordValue === user.password) {
        userFound = true
        let token = user.token
        localStorage.setItem("token", token);
        window.location.href = "../index.html";
    }
    })
    if (!userFound) {alert(
        "contraseña incorrecta"
    )}
} 

//listeners
loginButton.addEventListener("click", () =>{
    logIn()
})

inputPassword.addEventListener("keyup", (event) => {
    if (event.key === "Enter"){
        logIn()
    } 
})