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
        return 0;
    }
    this.encenderLuces=function(inicial,final){
        for(var i=inicial[0];i<=final[0];i++){
            for(var j=inicial[1];j<=final[1];j++){
              this.matriz[i][j].encender();
            }
        }
    }
}

module.exports = Cartel;