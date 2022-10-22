const Luz= require('./../Luz');

var luz;
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
test("intensidad de la luz",()=>{
    expect(luz.estadoActual()).toBe(0);
});
