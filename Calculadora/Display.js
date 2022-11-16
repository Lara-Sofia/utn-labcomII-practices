class Display {
    constructor(displayValorAnterior, displayValorActual) {
        //propiedades de la clase
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signosMap = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'X',
            restar: '-'
        }
    }

    //métodos
    borrar () {
        this.valorActual = this.valorActual.toString().slice(0, -1); //borra la última posición
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(numero) {
        //si hay un punto y queremos incluir otro return none
        if(numero === '.' && this.valorActual.includes('.')) return 
        //toScring = solo cadena de txt
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    
    imprimirValores() {
        //textContext, le seteo lo que tiene HTML
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent =  '${this.valorAnterior} ${this.signosMap[this.tipoOperacion]' || '';
    }

    calcular() {
        //guardamos los dos valores como nros
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);


        //si son NaN (nro vacío)
        if(isNaN (valorActual) || isNaN(valorAnterior)) return 
        this.valorActual = this.calculadora[this.tipoOperacion] (valorAnterior, valorActual); 
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    } 
}