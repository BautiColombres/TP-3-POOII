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
    cartel.encenderLuces([0,0],[2,2]);
    expect(cartel.cuantasEncendidas()).toBe(9);
    expect(()=>{cartel.encenderLuces([5,8],[2,1])}).toThrow(new Error("La posicion inicial es mayor que la final"));
});
test("apagar posiciones deseadas",()=>{
    cartel.encenderLuces([2,1],[5,8]);
    cartel.apagarLuces([2,1],[5,8]);
    expect(cartel.cuantasEncendidas()).toBe(0);
});
