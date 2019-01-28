describe('isEmail unit test.', function(){
    it('正常邮箱', function(){
        expect( isEmail('test101@qq.com') ).toBe( true );     
    });
    it('非正常邮箱', function(){
        expect( isEmail('test101qq.com') ).toBe( false );     
    });
});