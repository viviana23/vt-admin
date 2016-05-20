'use strict';

describe('Service: eventos', function () {

  // load the service's module
  beforeEach(module('panelNgApp'));

  // instantiate service
  var eventos;
  beforeEach(inject(function (_eventos_) {
    eventos = _eventos_;
  }));

  it('should do something', function () {
    expect(!!eventos).toBe(true);
  });

});
