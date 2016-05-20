'use strict';

describe('Service: usuariosapi', function () {

  // load the service's module
  beforeEach(module('panelNgApp'));

  // instantiate service
  var usuariosapi;
  beforeEach(inject(function (_usuariosapi_) {
    usuariosapi = _usuariosapi_;
  }));

  it('should do something', function () {
    expect(!!usuariosapi).toBe(true);
  });

});
