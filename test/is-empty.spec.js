describe('isEmpty unit test.', function(){
    it('空数组', function(){
        expect( isEmpty([]) ).toBe( true );     
    });
    it('数组', function(){
        expect( isEmpty([1, 2]) ).toBe( false );     
    });
    it('空对象', function(){
        expect( isEmpty({}) ).toBe( true );     
    });
    it('对象', function(){
        expect( isEmpty({a: 1}) ).toBe( false );     
    });
    it('非法参数', function(){
        expect( isEmpty(123) ).toBe( false );     
    });
});