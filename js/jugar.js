
let alerta = document.getElementById('mensaje-modal')
let juanito = document.getElementById("nombre1")
let elias = document.getElementById("nombre2")
let ale = document.getElementById("nombre3")
let btnjuan= document.getElementById("btn-juan")
let btnelias= document.getElementById("btn-elias")
let btnale= document.getElementById("btn-ale")
let puntos=JSON.parse(localStorage.getItem("puntaje"));
let points=0;
let contador=0;

if (!puntos){
  puntos={}
}

const Juan = ()=>{
  const hora = JSON.parse(localStorage.getItem("sesion"))
  const inicio= moment(hora.time)
  const actual=moment(new Date())
  const diferencia = moment.duration(actual.diff(inicio)).asMinutes()
  if(diferencia < 2){
    if(juanito.value=="Juan Silva"){
      alerta.innerHTML = "¡Muy Bien! Acertaste "
      $('#alerta').modal('show')
      points++
    }else{
      alerta.innerHTML = "¡Has Fallado!"
      $('#alerta').modal('show')
      points--
    }
    btnjuan.disabled = true
    contador++;
    if(contador == 3){
      finDelJuego();
    }
  }else{
    alerta.innerHTML = "¡El tiempo se agotó :C! "
      $('#alerta').modal('show')
      finDelJuego();
  }
}

const Elias = ()=>{
  const hora = JSON.parse(localStorage.getItem("sesion"))
  const inicio= moment(hora.time)
  const actual=moment(new Date())
  const diferencia = moment.duration(actual.diff(inicio)).asMinutes()
  if(diferencia < 2 && contador < 3){
    if(elias.value=="Elias Pretel"){
      alerta.innerHTML = "¡Muy Bien! Acertaste "
      $('#alerta').modal('show')
      points++
    }else{
      alerta.innerHTML = "¡Has Fallado!"
      $('#alerta').modal('show')
      points--
    }
    btnelias.disabled = true
    contador++;
    if(contador == 3){
      finDelJuego();
    }
  }else{
    alerta.innerHTML = "¡El tiempo se agotó :C! "
      $('#alerta').modal('show')
      finDelJuego();
  }
}


const Ale = ()=>{
  const hora = JSON.parse(localStorage.getItem("sesion"))
  const inicio= moment(hora.time)
  const actual=moment(new Date())
  const diferencia = moment.duration(actual.diff(inicio)).asMinutes()
  if(diferencia < 2 && contador < 3){
    if(ale.value=="Alejandra Rodriguez"){
      alerta.innerHTML = "¡Muy Bien! Acertaste "
      $('#alerta').modal('show')
      points++
    }else{
      alerta.innerHTML = "¡Has Fallado!"
      $('#alerta').modal('show')
      points--
    }
    btnale.disabled = true
    contador++;
    if(contador == 3){
      finDelJuego();
    }
  }else{
    alerta.innerHTML = "¡El tiempo se agotó :C! "
      $('#alerta').modal('show')
      finDelJuego();
  }
}

const finDelJuego = () =>{
  const user = JSON.parse(localStorage.getItem("sesion"))
  puntos = {
    ...puntos,
    [user.usuario]:{
      puntaje:points
    }
  }
  localStorage.setItem("puntaje", JSON.stringify(puntos))
  alerta.innerHTML += "Fin del Juego, tu puntaje es: "+points+ " puntos!"
  $('#alerta').modal('show')

  //let mensaje = ''
  for (const key in puntos) {
    mensaje+= key + " : "+puntos[key].puntaje+" puntos <br>"
  } 
  alerta.innerHTML = mensaje
  $('#alerta').modal('show')
}

const tablaPuntaje = () =>{
  let mensaje = ''
  for (const key in puntos) {
    mensaje+= key + " : "+puntos[key].puntaje+" puntos <br>"
  } 
  alerta.innerHTML = mensaje
  $('#alerta').modal('show')
}

const perfiles=()=>{
  var win = window.open("../perfil/perfiles.html", '_blank');
  win.focus();
}



/* let calculadora = document.getElementById("caja")
caja.addEventListener("click",(e)=>{
  let temp;
  if(e.target.innerText == "_"){
    temp = teclado.value + " ";
  } 
  else if(e.target.innerText == "<-"){
    temp = (teclado.value).slice(0,(teclado.value).length-1);
  }
  else if(e.target.innerText.length< 3) {
    temp = teclado.value + e.target.innerText;
  }
  else{
    temp = teclado.value
  }
  teclado.value=temp;
}) */

const tabla = document.getElementById("contenidoTabla")
const enTabla = () => {
  tabla.innerHTML=tabla.innerHTML+`
    <tr>
      <td>${teclado.value}</td>
    </tr>
  `
}