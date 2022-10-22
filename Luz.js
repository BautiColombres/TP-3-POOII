function Luz(){
    this.estado=0;
    this.estadoActual=function(){
        return this.estado;
    }
    this.encender=function(){
        if (this.estado==0){
            this.estado=1;
        }
    }
    this.apagar=function(){
        if (this.estado==1){
            this.estado=0;
        }
    }
}

module.exports = Luz;