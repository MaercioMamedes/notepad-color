class Nota{
    constructor(titulo, texto, importante=false){
        this.titulo = titulo;
        this.texto = texto;
        this.importante = importante;
        this.urgente = false;
    }
}

let nota = new Nota("teste", "Olá mundo");
console.log(nota);