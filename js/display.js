class display {
  //se crea un constructor para inicializar  las variables a utilizar
  constructor(displayValueAnt, displayValueAct) {
    this.displayValueAct = displayValueAct;
    this.displayValueAnt = displayValueAnt;
    this.calc = new calcu();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      resta: "-",
      multiplicar: "*",
      dividir: "%",
    };
  }
// el valor actual lo igualamos al valor actual lo convertimos a string y utilizamos un metodo de js
//luego imprimimos los valores..
  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValue();
  }
//Lo cual inicializamos con valores nulos para que en la screen aparezca vacio
  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValue();
  }

  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValue();
  }
  //para este metodo agregamos un parametro numero
  agregarNumero(numero) {
    //si el numero es igual al punto lo incluimos y 
    if (numero === "." && this.valorActual.includes(".")) return;
    //el valor actual es igual al valor actual y convertimos a string y concatenamos el punto decimal
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValue();
  }

//imprimir el valor
  imprimirValue() {
    this.displayValueAct.textContent = this.valorActual;
    this.displayValueAnt.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  calcular() {
    //con esto tenemos que parsear a float para poder aceptas los decimales o numero enteros
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calc[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }
}
