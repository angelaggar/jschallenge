//usuario logueado
const USERS_ENDPOINT = "https://desafiodev-5e779-default-rtdb.firebaseio.com/users.json"

const getAllUsers = async () =>{
    let response = await fetch(`${USERS_ENDPOINT}`)
    let data = await response.json() //este data sólo tiene un elemento 
    return data.users
}

const toggleViews = async () => {
    let loginBox = document.getElementById("loginBox")
    let loginButton = document.getElementById ("loginButton")
    let createAccountButton = document.getElementById("createAccountButton")
    let loggedBox = document.getElementById("loggedBox")

    let token = localStorage.getItem("token");

    if (token){
        loginBox.classList.add("d-none")
        loginButton.classList.add("d-none") 
        createAccountButton.classList.add("d-none")
        loggedBox.classList.remove("d-none")
       
    } else {
        loginBox.classList.remove("d-none") 
        loginButton.classList.remove("d-none") 
        createAccountButton.classList.remove("d-none")
        loggedBox.classList.add("d-none")     
    }

    const usersArray = await getAllUsers()
    usersArray.forEach((user) => {
        if (token === user.token) {
            let avatar = document.getElementById("avatar")
        avatar.src = user.picture       
      }
      })
} 

toggleViews()

 