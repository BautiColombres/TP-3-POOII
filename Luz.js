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
        if(this.estado==0){
            throw new Error("La intensidad no puede ser menor que 0");
        }
        this.estado--;
    }
}

module.exports = Luz;