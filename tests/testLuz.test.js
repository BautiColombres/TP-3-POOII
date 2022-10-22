const Luz= require('./../Luz');

var luz;
beforeEach(function () {
    luz=new Luz();
});
test("crear luz apagada",()=>{
    expect(luz.estadoActual()).toBe(0);
});
test("encender luz",()=>{
    luz.encender();
    expect(luz.estadoActual()).toBe(1);
});
test("apagar luz",()=>{
    luz.encender();
    luz.apagar();
    expect(luz.estadoActual()).toBe(0);
});
test("intensidad de la luz",()=>{
    expect(luz.estadoActual()).toBe(0);
});
