'use strict';

describe('Controller: DevolucionCtrl', function () {

  // load the controller's module
  beforeEach(module('panelNgApp'));

  var DevolucionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevolucionCtrl = $controller('DevolucionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DevolucionCtrl.awesomeThings.length).toBe(3);
  });
});
