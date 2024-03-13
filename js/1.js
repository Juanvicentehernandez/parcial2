   
const motocicleta = {
    nombre: "Vort-x",
    cilindraje:"300cc",
    linea: "Deportiva",
    especificaciones:{
        peso_max: 250,
        capacidad_max: 300,
        transmision: "manual"
    },
    fabricacion:{
        lugar:"mexico",
        tipo_de_combustible:"gasolina"
    }
  };
  
  let mensaje = "Tienes una motocicleta llamada " + motocicleta.nombre + " de linea "  + motocicleta.linea +" con cilindraje " + motocicleta.cilindraje+ ".";
  document.getElementById("demo").innerHTML = mensaje;
  
