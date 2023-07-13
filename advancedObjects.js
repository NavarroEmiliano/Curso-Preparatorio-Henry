/* var libro = {
  autor: "Borges",
  genero: "Policial",
  año: 1990,
};
var tienePropoedad = libro.hasOwnProperty("autor");
//console.log(tienePropoedad)
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades) */

/* var mundo = {
  continentes: 7,
  paises: 195,
  oceanos: 5,
};
for(var prop in mundo){
    console.log('Esta es la propiedad: ' + prop)
    console.log('Este es el valor: ' + mundo[prop])
} */

var mascota = {
  animal: "Perro",
  raza: "Ovejero Alemán",
  amistoso: true,
  dueño: "María López",
  info: function() {
    console.log('Mi perro es un ' + this.raza)
  }
};

mascota.info()
