const Cartel= require('./../Cartel');

test("crear cartel",()=>{
    const cartel=new Cartel();
    var cont=0;
    for(var fila=0;fila<100;fila++){
        if(cartel.matriz[fila].length==100){
            cont++;
        }
    }
    expect(cartel.matriz.length).toBe(100);
    expect(cont).toBe(100);
});
