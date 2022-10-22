function Luz(){
    this.estado=0;
    this.estadoActual=function(){
        if(this.estado==0){
            return "apagada";
        }
        else if(this.estado==1){
            return "encendida";
        }
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