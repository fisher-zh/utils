describe('isCreditCode unit test.', function(){
    it('正常统一社会信用代码', function(){
        expect( isCreditCode('914401017695297475') ).toBe( true );     
    });
    it('非正常统一社会信用代码', function(){
        expect( isCreditCode('914401017695297476') ).toBe( false );     
    });
});
