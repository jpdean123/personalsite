'use strict';

describe('Controller: InterestsCtrl', function () {

  // load the controller's module
  beforeEach(module('jackApp'));

  var InterestsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterestsCtrl = $controller('InterestsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
