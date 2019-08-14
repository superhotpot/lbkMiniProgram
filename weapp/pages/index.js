"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _redux = require('../vendor.js')(1);

var _store = _interopRequireDefault(require('../store/index.js'));

var _test = _interopRequireDefault(require('../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  config: {
    navigationBarTitleText: 'test'
  },
  data: {},
  methods: {}
}, {info: {"components":{"topbar":{"path":"../components/topbar"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"topbar":{"path":"../components/topbar"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"topbar":{"path":"../components/topbar"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"topbar":{"path":"../components/topbar"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"topbar":{"path":"../components/topbar"}},"on":{}}, handlers: {}, models: {} });