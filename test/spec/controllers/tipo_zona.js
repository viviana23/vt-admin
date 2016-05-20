'use strict';

describe('Controller: TipoZonaCtrl', function () {

  // load the controller's module
  beforeEach(module('panelNgApp'));

  var TipoZonaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TipoZonaCtrl = $controller('TipoZonaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TipoZonaCtrl.awesomeThings.length).toBe(3);
  });
});
