'use strict';

describe('Controller: ContactmeCtrl', function () {

  // load the controller's module
  beforeEach(module('jackApp'));

  var ContactmeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactmeCtrl = $controller('ContactmeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
