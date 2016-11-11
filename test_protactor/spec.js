// spec.js
describe('Protractor Demo App', function() {
   it('should have a title', function() {
       browser.get('http://localhost:9000/#/');
           expect(browser.getTitle()).toEqual('Test');
    });

    it('the imput it enabled', function(){
        var foo = element(by.id('node12'));
        expect(foo.isSelected()).toBe(true);
    });
});
