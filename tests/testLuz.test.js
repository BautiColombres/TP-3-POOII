const Luz= require('./../Luz');

test("crear luz apagada",()=>{
    const luz=new Luz();
    expect(luz.estadoActual()).toBe("apagada");
});
test("encender luz",()=>{
    const luz=new Luz();
    luz.encender();
    expect(luz.estadoActual()).toBe("encendida");
});
test("encender luz",()=>{
    const luz=new Luz();
    luz.apagar();
    expect(luz.estadoActual()).toBe("apagada");
});