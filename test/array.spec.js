describe('array unit test.', function(){
    it('最大值', function(){
        expect( arrayMax([1, 12, 8]) ).toBe( 12 );     
    });

    it('最小值', function(){
        expect( arrayMin([1, 12, 8]) ).toBe( 1 );     
    });

    it('合并数组', function(){
        expect( arrayConcat([1, 12, 8], [3, 5]) ).toEqual( [1, 12, 8, 3, 5] );     
    });
});