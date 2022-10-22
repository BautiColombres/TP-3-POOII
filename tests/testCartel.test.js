const Cartel= require('./../Cartel');

test("crear cartel",()=>{
    const cartel=new Cartel();
    expect(cartel.matriz.lenght).toBe(100);
});