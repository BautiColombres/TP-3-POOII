const Luz= require('./../Luz');

function Cartel(){
    this.matriz=[];
    for(var i=0;i<100;i++){
        this.matriz[i]=[];
        for(var j=0;j<100;j++){
            this.matriz[i][j]=new Luz();
        }
    }
}

module.exports = Cartel;