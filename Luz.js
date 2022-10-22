function Luz(){
    this.estado=0;
    this.estadoActual=function(){
        return this.estado;
    }
    this.encender=function(){
        this.estado++;
    }
    this.apagar=function(){
        this.estado--;
    }
}

module.exports = Luz;