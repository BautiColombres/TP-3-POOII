const Cartel= require('./../Cartel');
const Luz= require('./../Luz');

var cartel;
beforeEach(function () {
    cartel=new Cartel();
});
test("crear cartel",()=>{
    var contadorColumnas=0;
    var contadorLuces=0;
    for(var fila=0;fila<100;fila++){
        if(cartel.matriz[fila].length==100){
            contadorColumnas++;
        }
        for(var columna=0;columna<100;columna++){
            if(cartel.matriz[fila][columna] instanceof Luz){
                contadorLuces++;
            }
        }
    }
    expect(cartel.matriz.length).toBe(100);
    expect(contadorColumnas).toBe(100);
    expect(contadorLuces).toBe(10000);
});
test("cuantas luces hay encendidas",()=>{
    expect(cartel.cuantasEncendidas()).toBe(0);
});
test("encender posiciones deseadas",()=>{
    cartel.encenderLuces();
    var aux=false;
    if(cartel.cuantasEncendidas()>0){
        aux=true;
    }
    expect(aux).toBe(true);
});
