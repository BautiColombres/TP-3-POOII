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
test("aumentar intensidad luz",()=>{
    luz.encender();
    luz.encender();
    expect(luz.estadoActual()).toBe(2);
});
test("disminuir intensidad luz",()=>{
    luz.encender();
    luz.encender();
    luz.apagar();
    luz.apagar();
    expect(luz.estadoActual()).toBe(0);
});
test("error intensidad",()=>{
    for(i=0;i<10;i++){
        luz.encender();
    }
    expect(()=>{luz.encender()}).toThrow(new Error("La intensidad no puede ser mayor que 10"));
    for(i=0;i<10;i++){
        luz.apagar();
    }
    expect(()=>{luz.apagar()}).toThrow(new Error("La intensidad no puede ser menor que 0"));
});
