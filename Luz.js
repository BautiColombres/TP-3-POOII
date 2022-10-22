function Luz(){
    this.estado=0;
    this.estadoActual=function(){
        return this.estado;
    }
    this.encender=function(){
        this.estado++;
    }
    this.apagar=function(){
        if (this.estado==1){
            this.estado=0;
        }
    }
}

module.exports = Luz;