describe('getParams unit test.', function(){
    it('正常获取参数', function(){
        expect( getParams('http://test.com/aaa?a=123&b=456&c=789', 'a') ).toBe( '123' );     
    });

    it('非正常获取参数', function(){
        expect( getParams('http://test.com/aaa?a=123&b=456&c=789', 'x') ).toBe( null );     
    });
});