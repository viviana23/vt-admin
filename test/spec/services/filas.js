'use strict';

describe('Service: filas', function () {

  // load the service's module
  beforeEach(module('panelNgApp'));

  // instantiate service
  var filas;
  beforeEach(inject(function (_filas_) {
    filas = _filas_;
  }));

  it('should do something', function () {
    expect(!!filas).toBe(true);
  });

});
