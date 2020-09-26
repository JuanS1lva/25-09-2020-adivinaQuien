let user = JSON.parse(localStorage.getItem("sesion"))
if(user.loggin == false){
  window.location.assign("../index.html")
}

const salir = () => {
  user = {
    loggin: false,
    usuario: "",
    time:""
  }
  localStorage.setItem("sesion", JSON.stringify(user))
  window.location.assign("../index.html")
}

