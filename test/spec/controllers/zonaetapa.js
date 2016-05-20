'use strict';

describe('Controller: ZonaetapaCtrl', function () {

  // load the controller's module
  beforeEach(module('panelNgApp'));

  var ZonaetapaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ZonaetapaCtrl = $controller('ZonaetapaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ZonaetapaCtrl.awesomeThings.length).toBe(3);
  });
});
