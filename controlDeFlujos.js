function viajar(destino) {
  if (destino === "Brasil") {
    console.log("Gire a la Izquierda");
  } else if (destino === "Argentina") {
    console.log("Gire a la derecha");
  } else {
    console.log("Nos perdimos");
  }
}

viajar("Paraguay");

function puedeManejar(edad){
    if(edad >= 18) {
        console.log(true)
    } else {
        console.log(false)
    }
}