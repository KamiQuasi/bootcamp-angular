'use strict';

describe('Service: todos', function () {

  // load the service's module
  beforeEach(module('todoApp'));

  // instantiate service
  var todos;
  beforeEach(inject(function (_todos_) {
    todos = _todos_;
  }));

  it('should do something', function () {
    expect(!!todos).toBe(true);
  });

});
