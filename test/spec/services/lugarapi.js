'use strict';

describe('Service: lugarapi', function () {

  // load the service's module
  beforeEach(module('panelNgApp'));

  // instantiate service
  var lugarapi;
  beforeEach(inject(function (_lugarapi_) {
    lugarapi = _lugarapi_;
  }));

  it('should do something', function () {
    expect(!!lugarapi).toBe(true);
  });

});
