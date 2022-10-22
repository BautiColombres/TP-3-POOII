const Luz= require('./Luz');

test("crear luz apagada",()=>{
    const luz=new Luz();
    expect(luz.estado()).toBe("apagada");
});