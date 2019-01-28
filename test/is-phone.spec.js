describe('isPhone unit test.', function(){
    it('正常手机号码', function(){
        expect( isPhone('18825094866') ).toBe( true );     
    });
    it('非正常手机号码', function(){
        expect( isPhone('1882509486') ).toBe( false );     
    });
});
