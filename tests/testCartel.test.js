const Cartel= require('./../Cartel');

test("crear cartel",()=>{
    const cartel=new Cartel();
    expect(length(cartel.matriz)).toBe(100);
});