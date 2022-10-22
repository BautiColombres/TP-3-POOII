const Cartel= require('./../Cartel');

test("crear cartel",()=>{
    const cartel=new Cartel();
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
