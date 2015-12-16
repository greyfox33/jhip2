// e2e.spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000');  // address setup by Grunt
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});