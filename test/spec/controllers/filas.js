'use strict';

describe('Controller: FilasCtrl', function () {

  // load the controller's module
  beforeEach(module('panelNgApp'));

  var FilasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilasCtrl = $controller('FilasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilasCtrl.awesomeThings.length).toBe(3);
  });
});
