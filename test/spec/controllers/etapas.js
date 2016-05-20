'use strict';

describe('Controller: EtapasCtrl', function () {

  // load the controller's module
  beforeEach(module('panelNgApp'));

  var EtapasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EtapasCtrl = $controller('EtapasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EtapasCtrl.awesomeThings.length).toBe(3);
  });
});
