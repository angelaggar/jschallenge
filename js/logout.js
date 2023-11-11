let signOutButton = document.getElementById("signOutButton")

const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "../index.html";
  };

  signOutButton.addEventListener ("click", () =>{
    logOut()
  })