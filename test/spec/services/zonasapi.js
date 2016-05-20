'use strict';

describe('Service: zonasapi', function () {

  // load the service's module
  beforeEach(module('panelNgApp'));

  // instantiate service
  var zonasapi;
  beforeEach(inject(function (_zonasapi_) {
    zonasapi = _zonasapi_;
  }));

  it('should do something', function () {
    expect(!!zonasapi).toBe(true);
  });

});
