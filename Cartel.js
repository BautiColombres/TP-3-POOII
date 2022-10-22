const Luz= require('./Luz');

function Cartel(){
    this.matriz=[];
    for(var i=0;i<100;i++){
        this.matriz[i]=[];
        for(var j=0;j<100;j++){
            this.matriz[i][j]=new Luz();
        }
    }
    this.cuantasEncendidas=function(){
        var contador=0;
        for(var i=0;i<100;i++){
            for(var j=0;j<100;j++){
                if(this.matriz[i][j].estadoActual()=="encendida"){
                    contador++;
                }
            }
        }
        return contador;
    }
    this.encenderLuces=function(inicial,final){
        if(inicial[0]>final[0] || inicial[1]>final[1]){
            throw new Error("La posicion inicial es mayor que la final");
        }
        for(var i=inicial[0];i<=final[0];i++){
            for(var j=inicial[1];j<=final[1];j++){
              this.matriz[i][j].encender();
            }
        }
    }
    this.apagarLuces=function(){
        
    }
}

module.exports = Cartel;