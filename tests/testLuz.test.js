const Luz= require('./../Luz');

var luz;
var x="parte 2";
beforeEach(function () {
    luz=new Luz();
});
test("crear luz apagada",()=>{
    expect(luz.estadoActual()).toBe("apagada");
});
test("encender luz",()=>{
    luz.encender();
    expect(luz.estadoActual()).toBe("encendida");
});
test("apagar luz",()=>{
    luz.encender();
    luz.apagar();
    expect(luz.estadoActual()).toBe("apagada");
});