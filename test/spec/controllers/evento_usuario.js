'use strict';

describe('Controller: EventoUsuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('panelNgApp'));

  var EventoUsuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventoUsuarioCtrl = $controller('EventoUsuarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventoUsuarioCtrl.awesomeThings.length).toBe(3);
  });
});
