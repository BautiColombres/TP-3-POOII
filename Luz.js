function Luz(){
    this.estado=0;
    this.estadoActual=function(){
        return this.estado;
    }
    this.encender=function(){
        if(this.estado==10){
            throw new Error("La intensidad no puede ser mayor que 10");
        }
        this.estado++;
    }
    this.apagar=function(){
        this.estado--;
    }
}

module.exports = Luz;