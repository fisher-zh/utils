describe('isEmpty unit test.', function(){
    it('空数组', function(){
        expect( isEmpty([]) ).toBe( true );     
    });
    it('空对象', function(){
        expect( isEmpty({}) ).toBe( true );     
    });
});