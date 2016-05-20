'use strict';

describe('Controller: ListZonasCtrl', function () {

  // load the controller's module
  beforeEach(module('panelNgApp'));

  var ListZonasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListZonasCtrl = $controller('ListZonasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListZonasCtrl.awesomeThings.length).toBe(3);
  });
});
