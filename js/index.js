const displayValueAnt= document.getElementById('value-ant');
const displayValueAct= document.getElementById('value-act');
const botonesNum= document.querySelectorAll('.numb');
const botonesOperadores= document.querySelectorAll('.operador');

//con dis podemos llamar a display con todos sus metodos
const dis = new display(displayValueAnt,displayValueAct);

// Evento que activa y presenta los numeros en pantalla
botonesNum.forEach(boton => {
    boton.addEventListener('click', () => dis.agregarNumero(boton.innerHTML));

});
// Evento que activa los botones de operacion 
botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => dis.computar(boton.value));
});


//clase padre donde se llaman las funciones y se crean los eventos