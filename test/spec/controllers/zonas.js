'use strict';

describe('Controller: ZonasCtrl', function () {

  // load the controller's module
  beforeEach(module('panelNgApp'));

  var ZonasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ZonasCtrl = $controller('ZonasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ZonasCtrl.awesomeThings.length).toBe(3);
  });
});
