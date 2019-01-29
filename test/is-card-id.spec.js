describe('isCardID unit test.', function(){
    it('正常身份证号', function(){
        expect( isCardID('512501197203035172') ).toBe( true );     
    });
    it('非正常身份证号1', function(){
        expect( isCardID('110101199003079172') ).toBe( false );     
    });
    it('非正常身份证号2', function(){
        expect( isCardID('1234567889') ).toBe( false );     
    });
    it('非正常身份证号2', function(){
        expect( isCardID('512501202003035172') ).toBe( false );     
    });
});
