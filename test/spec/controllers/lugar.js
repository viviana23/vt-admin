'use strict';

describe('Controller: LugarCtrl', function () {

  // load the controller's module
  beforeEach(module('panelNgApp'));

  var LugarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LugarCtrl = $controller('LugarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LugarCtrl.awesomeThings.length).toBe(3);
  });
});
