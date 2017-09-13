(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@coderbox/atoms"), require("@coderbox/forms"), require("@coderbox/hocs"), require("classnames"), require("formik"), require("lodash"), require("moment"), require("prop-types"), require("react"), require("react-avatar"), require("react-google-autocomplete"), require("react-markdown"), require("recompose"), require("styled-components"), require("styled-utils"), require("yup"));
	else if(typeof define === 'function' && define.amd)
		define("coderbox-ui", ["@coderbox/atoms", "@coderbox/forms", "@coderbox/hocs", "classnames", "formik", "lodash", "moment", "prop-types", "react", "react-avatar", "react-google-autocomplete", "react-markdown", "recompose", "styled-components", "styled-utils", "yup"], factory);
	else if(typeof exports === 'object')
		exports["coderbox-ui"] = factory(require("@coderbox/atoms"), require("@coderbox/forms"), require("@coderbox/hocs"), require("classnames"), require("formik"), require("lodash"), require("moment"), require("prop-types"), require("react"), require("react-avatar"), require("react-google-autocomplete"), require("react-markdown"), require("recompose"), require("styled-components"), require("styled-utils"), require("yup"));
	else
		root["coderbox-ui"] = factory(root["@coderbox/atoms"], root["@coderbox/forms"], root["@coderbox/hocs"], root["classnames"], root["formik"], root["lodash"], root["moment"], root["prop-types"], root["react"], root["react-avatar"], root["react-google-autocomplete"], root["react-markdown"], root["recompose"], root["styled-components"], root["styled-utils"], root["yup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__coderbox_atoms__, __WEBPACK_EXTERNAL_MODULE__coderbox_forms__, __WEBPACK_EXTERNAL_MODULE__coderbox_hocs__, __WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_formik__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_avatar__, __WEBPACK_EXTERNAL_MODULE_react_google_autocomplete__, __WEBPACK_EXTERNAL_MODULE_react_markdown__, __WEBPACK_EXTERNAL_MODULE_recompose__, __WEBPACK_EXTERNAL_MODULE_styled_components__, __WEBPACK_EXTERNAL_MODULE_styled_utils__, __WEBPACK_EXTERNAL_MODULE_yup__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AutocompleteLocation/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__("lodash");

var _reactGoogleAutocomplete = __webpack_require__("react-google-autocomplete");

var _reactGoogleAutocomplete2 = _interopRequireDefault(_reactGoogleAutocomplete);

var _styles = __webpack_require__("./src/components/AutocompleteLocation/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutocompleteLocation = function (_React$Component) {
  _inherits(AutocompleteLocation, _React$Component);

  function AutocompleteLocation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AutocompleteLocation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutocompleteLocation.__proto__ || Object.getPrototypeOf(AutocompleteLocation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      formatted_address: _this.convertAddress(_this.props.value)
    }, _this.onPlaceSelected = function (place) {
      _this.setState({ formatted_address: place.formatted_address });

      if (_this.props.onChange) {
        _this.props.onChange(_this.formatPlace(place));
      }
    }, _this.onChange = function (evt) {
      _this.setState({ formatted_address: evt.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AutocompleteLocation, [{
    key: 'convertAddress',
    value: function convertAddress(address) {
      if (!address) return '';
      return (0, _lodash.isString)(address) ? address : address.formatted_address;
    }
  }, {
    key: 'formatPlace',
    value: function formatPlace(place) {
      return {
        formatted_address: place.formatted_address,
        geometry: place.geometry
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          props = _objectWithoutProperties(_props, ['placeholder']);

      return _react2.default.createElement(
        _styles.Container,
        props,
        _react2.default.createElement(_reactGoogleAutocomplete2.default, {
          types: ['(regions)'],
          className: 'input',
          value: this.state.formatted_address,
          placeholder: placeholder,
          onChange: this.onChange,
          onPlaceSelected: this.onPlaceSelected
        })
      );
    }
  }]);

  return AutocompleteLocation;
}(_react2.default.Component);

AutocompleteLocation.defaultProps = {
  placeholder: '',
  size: 'normal'
};
exports.default = AutocompleteLocation;

/***/ }),

/***/ "./src/components/AutocompleteLocation/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  .pac-container {\n    border-radius: 4px;\n    border: 1px solid #dbdbdb;\n    box-sizing: border-box;\n    box-shadow: none;\n    margin-top: 2px;\n  }\n'], ['\n  .pac-container {\n    border-radius: 4px;\n    border: 1px solid #dbdbdb;\n    box-sizing: border-box;\n    box-shadow: none;\n    margin-top: 2px;\n  }\n']);

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledUtils = __webpack_require__("styled-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Container'
})(['width:100%;& input{font-size:inherit;font-family:', ';font-weight:400;background:white;margin:0;outline:0;padding:0 0.55rem;border:1px solid #dbdbdb;border-radius:', ';max-width:100%;width:100%;height:', ';box-sizing:border-box;appearance:none;box-shadow:inset 0 1px 2px rgba(100,100,100,0.12);}', ''], function (p) {
  return p.theme.fonts.primary;
}, function (p) {
  return p.theme.sizes.radius;
}, function (p) {
  return p.theme.sizes.height;
}, _styledUtils.withSize);

(0, _styledComponents.injectGlobal)(_templateObject);

/***/ }),

/***/ "./src/components/CompanyProfile/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _elements = __webpack_require__("./src/elements/index.js");

var _atoms = __webpack_require__("@coderbox/atoms");

var _styles = __webpack_require__("./src/components/CompanyProfile/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component(_ref) {
  var company = _ref.company;

  if (!company) return null;

  return _react2.default.createElement(
    _styles.CompanyProfile,
    null,
    _react2.default.createElement(_elements.Avatar, { src: company.logo }),
    _react2.default.createElement(
      _atoms.Title,
      null,
      company.name
    ),
    _react2.default.createElement(_elements.Location, { location: company.location }),
    _react2.default.createElement(
      'div',
      { className: 'bio' },
      _react2.default.createElement(_elements.Markdown, { source: company.shortBio, max: 0 })
    )
  );
};

Component.displayName = 'CompanyProfile';
exports.default = Component;

/***/ }),

/***/ "./src/components/CompanyProfile/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanyProfile = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyProfile = exports.CompanyProfile = _styledComponents2.default.div.withConfig({
  displayName: 'styles__CompanyProfile'
})(['font-family:', ';margin-bottom:20px;text-align:center;'], function (p) {
  return p.theme.fonts.primary;
});

/***/ }),

/***/ "./src/components/JobHeader/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _atoms = __webpack_require__("@coderbox/atoms");

var _elements = __webpack_require__("./src/elements/index.js");

var _styles = __webpack_require__("./src/components/JobHeader/styles.js");

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var job = _ref.job,
      props = _objectWithoutProperties(_ref, ['job']);

  var tags = job.technologies.slice(0, 5);

  return _react2.default.createElement(
    styles.JobHeader,
    null,
    _react2.default.createElement(_elements.Avatar, { src: job.company.logo }),
    _react2.default.createElement(
      _atoms.Title,
      null,
      job.title
    ),
    _react2.default.createElement(
      _atoms.Subtitle,
      { color: 'primary' },
      '@',
      job.company.name
    ),
    _react2.default.createElement(_elements.Location, { location: job.location }),
    job.minSalary > 0 && _react2.default.createElement(
      _atoms.Text,
      { color: 'success', tone: 1, align: 'center' },
      'min. ',
      Math.round(job.minSalary / 12),
      ' \u20AC / month'
    ),
    _react2.default.createElement(_elements.Tags, { tags: tags })
  );
};

Component.displayName = 'JobHeader';
exports.default = Component;

/***/ }),

/***/ "./src/components/JobHeader/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobHeader = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JobHeader = exports.JobHeader = _styledComponents2.default.div.withConfig({
  displayName: 'styles__JobHeader'
})(['font-family:', ';margin-bottom:20px;text-align:center;'], function (p) {
  return p.theme.fonts.primary;
});

/***/ }),

/***/ "./src/components/Timeline/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__("./src/components/Timeline/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['children']);

      var className = (0, _classnames2.default)('timeline', props.className);

      return React.createElement(
        _styles.Timeline,
        _extends({}, props, { className: className }),
        children
      );
    }
  }]);

  return Component;
}(React.Component);

Component.displayName = 'Timeline';
Component.defaultProps = {
  color: 'primary'
};
exports.default = Component;

/***/ }),

/***/ "./src/components/Timeline/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledUtils = __webpack_require__("styled-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = exports.Timeline = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Timeline'
})(['position:relative;width:100%;min-height:140px;padding:2.5rem 0;margin:40px auto;box-sizing:border-box;&.hidden{display:none;}&:before,&:after{top:0;left:50%;content:"";position:absolute;transform:translateX(-50%);background:', ';z-index:0;}&:before{width:12px;height:12px;border-radius:50%;}&:after{bottom:0;width:2px;}.timeline-row:last-child:after{content:\'\';position:absolute;bottom:0;left:50%;transform:translateX(-50%);background:', ';height:12px;width:12px;border-radius:50%;}'], _styledUtils.bgColor, _styledUtils.bgColor);

/***/ }),

/***/ "./src/components/TimelineRow/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__("lodash");

var _atoms = __webpack_require__("@coderbox/atoms");

var _styles = __webpack_require__("./src/components/TimelineRow/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      icon = _ref.icon,
      isOdd = _ref.isOdd,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['title', 'subtitle', 'icon', 'isOdd', 'children']);

  var className = (0, _classnames2.default)('timeline-row', props.className);

  var childs = [React.createElement(
    _styles.Item,
    { isOdd: !isOdd, key: 0 },
    React.createElement(
      _atoms.Title,
      { size: 'large' },
      title
    ),
    React.createElement(
      _atoms.Subtitle,
      { size: 'small', color: 'gray' },
      subtitle
    )
  ), React.createElement(_atoms.Icon, { name: icon, color: props.color, isCircular: true, key: 1 }), React.createElement(
    _styles.Item,
    { key: 2 },
    React.createElement(
      _atoms.Box,
      null,
      children
    )
  )];

  if (isOdd) childs = (0, _lodash.reverse)(childs);

  return React.createElement(
    _styles.Container,
    _extends({}, props, { className: className }),
    childs.map(function (c) {
      return c;
    })
  );
};

Component.displayName = 'TimelineRow';
exports.default = Component;

/***/ }),

/***/ "./src/components/TimelineRow/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.Container = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = exports.Container = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Container'
})(['display:flex;align-items:center;margin:2.5rem 0;& > .icon{border:2px solid;margin:0 1.4rem;width:2.2em;height:2.2em;background:white;z-index:4;}']);

var Item = exports.Item = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Item'
})(['flex:100px;text-align:', ';& form{margin-top:10px;}& .box{min-height:20px;}'], function (p) {
  return p.isOdd ? 'right' : 'left';
});

/***/ }),

/***/ "./src/components/ToolbarEditDelete/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _atoms = __webpack_require__("@coderbox/atoms");

var _styles = __webpack_require__("./src/components/ToolbarEditDelete/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var index = _ref.index,
      onEdit = _ref.onEdit,
      onCancel = _ref.onCancel,
      onDelete = _ref.onDelete,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ['index', 'onEdit', 'onCancel', 'onDelete', 'color']);

  return _react2.default.createElement(
    _styles.Toolbar,
    props,
    index === 0 && _react2.default.createElement(
      _atoms.Button,
      { isIcon: true, color: color, tone: '2', size: 'small', onClick: onEdit },
      _react2.default.createElement(_atoms.Icon, { name: 'edit' })
    ),
    index === 1 && _react2.default.createElement(
      _atoms.Button,
      { isIcon: true, color: color, tone: '2', size: 'small', onClick: onCancel },
      _react2.default.createElement(_atoms.Icon, { name: 'times' })
    ),
    _react2.default.createElement(
      _atoms.Button,
      { isIcon: true, color: color, tone: '2', size: 'small', onClick: onDelete },
      _react2.default.createElement(_atoms.Icon, { name: 'trash' })
    )
  );
};

Component.displayName = 'EditDeleteToolbar';
Component.defaultProps = {
  index: 0,
  color: 'gray'
};

exports.default = Component;

/***/ }),

/***/ "./src/components/ToolbarEditDelete/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbar = exports.Toolbar = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Toolbar'
})(['position:', ';right:0;top:0;margin:0.25em;'], function (p) {
  return p.isFixed ? 'absolute' : 'relative';
});

/***/ }),

/***/ "./src/components/ToolbarNextPrev/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _atoms = __webpack_require__("@coderbox/atoms");

var _styles = __webpack_require__("./src/components/ToolbarNextPrev/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var onPrev = _ref.onPrev,
      onNext = _ref.onNext,
      props = _objectWithoutProperties(_ref, ['onPrev', 'onNext']);

  return _react2.default.createElement(
    _styles.Toolbar,
    props,
    _react2.default.createElement(
      _atoms.Group,
      null,
      _react2.default.createElement(
        _atoms.Button,
        { color: 'gray', tone: '2', isIcon: true, onClick: onPrev },
        _react2.default.createElement(_atoms.Icon, { name: 'arrow-left' })
      ),
      _react2.default.createElement(
        _atoms.Button,
        { color: 'gray', tone: '2', isIcon: true, onClick: onNext },
        _react2.default.createElement(_atoms.Icon, { name: 'arrow-right' })
      )
    )
  );
};

Component.displayName = 'ToolbarNextPrev';
exports.default = Component;

/***/ }),

/***/ "./src/components/ToolbarNextPrev/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbar = exports.Toolbar = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Toolbar'
})(['position:', ';right:0;top:0;'], function (p) {
  return p.isFixed ? 'absolute' : 'block';
});

/***/ }),

/***/ "./src/components/UserProfile/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _recompose = __webpack_require__("recompose");

var _atoms = __webpack_require__("@coderbox/atoms");

var _elements = __webpack_require__("./src/elements/index.js");

var _styles = __webpack_require__("./src/components/UserProfile/styles.js");

var s = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var profile = _ref.profile,
      props = _objectWithoutProperties(_ref, ['profile']);

  return _react2.default.createElement(
    s.Profile,
    null,
    _react2.default.createElement(_elements.Avatar, { email: profile.email }),
    _react2.default.createElement(
      _atoms.Title,
      null,
      profile.name
    ),
    _react2.default.createElement(_elements.Location, { location: profile.location }),
    profile.url && _react2.default.createElement(
      _atoms.Link,
      { href: profile.url },
      profile.url
    )
  );
};

Component.displayName = 'UserProfile';
Component.propTypes = {
  profile: (0, _propTypes.shape)({
    name: _propTypes.string,
    location: _propTypes.object,
    url: _propTypes.string
  })
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (_ref2) {
  var profile = _ref2.profile;
  return !profile;
}, (0, _recompose.renderComponent)(function () {
  return _react2.default.createElement(
    s.Profile,
    null,
    'No user to ',
    _react2.default.createElement(
      'b',
      null,
      'render profile'
    )
  );
})))(Component);

/***/ }),

/***/ "./src/components/UserProfile/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Profile = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = exports.Profile = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Profile'
})(['font-family:', ';text-align:center;'], function (p) {
  return p.theme.fonts.primary;
});

/***/ }),

/***/ "./src/components/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfile = exports.TimelineRow = exports.Timeline = exports.ToolbarEditDelete = exports.ToolbarNextPrev = exports.JobHeader = exports.CompanyProfile = exports.AutocompleteLocation = undefined;

var _AutocompleteLocation = __webpack_require__("./src/components/AutocompleteLocation/index.js");

var _AutocompleteLocation2 = _interopRequireDefault(_AutocompleteLocation);

var _CompanyProfile = __webpack_require__("./src/components/CompanyProfile/index.js");

var _CompanyProfile2 = _interopRequireDefault(_CompanyProfile);

var _JobHeader = __webpack_require__("./src/components/JobHeader/index.js");

var _JobHeader2 = _interopRequireDefault(_JobHeader);

var _ToolbarNextPrev = __webpack_require__("./src/components/ToolbarNextPrev/index.js");

var _ToolbarNextPrev2 = _interopRequireDefault(_ToolbarNextPrev);

var _ToolbarEditDelete = __webpack_require__("./src/components/ToolbarEditDelete/index.js");

var _ToolbarEditDelete2 = _interopRequireDefault(_ToolbarEditDelete);

var _Timeline = __webpack_require__("./src/components/Timeline/index.js");

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TimelineRow = __webpack_require__("./src/components/TimelineRow/index.js");

var _TimelineRow2 = _interopRequireDefault(_TimelineRow);

var _UserProfile = __webpack_require__("./src/components/UserProfile/index.js");

var _UserProfile2 = _interopRequireDefault(_UserProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AutocompleteLocation = _AutocompleteLocation2.default;
exports.CompanyProfile = _CompanyProfile2.default;
exports.JobHeader = _JobHeader2.default;
exports.ToolbarNextPrev = _ToolbarNextPrev2.default;
exports.ToolbarEditDelete = _ToolbarEditDelete2.default;
exports.Timeline = _Timeline2.default;
exports.TimelineRow = _TimelineRow2.default;
exports.UserProfile = _UserProfile2.default;

/***/ }),

/***/ "./src/elements/Avatar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactAvatar = __webpack_require__("react-avatar");

var _reactAvatar2 = _interopRequireDefault(_reactAvatar);

var _atoms = __webpack_require__("@coderbox/atoms");

var _styles = __webpack_require__("./src/elements/Avatar/styles.js");

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AvatarComponent = function AvatarComponent(_ref) {
  var size = _ref.size,
      isEdit = _ref.isEdit,
      props = _objectWithoutProperties(_ref, ['size', 'isEdit']);

  return _react2.default.createElement(
    styles.Avatar,
    { size: size },
    _react2.default.createElement(_reactAvatar2.default, _extends({}, props, { size: size })),
    isEdit && _react2.default.createElement(
      _atoms.Link,
      { href: 'https://en.gravatar.com/support/activating-your-account/', size: 'small' },
      'Change Picture'
    )
  );
};

AvatarComponent.defaultProps = {
  size: 100
};

exports.default = AvatarComponent;

/***/ }),

/***/ "./src/elements/Avatar/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = exports.Avatar = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Avatar'
})(['display:inline-flex;flex-direction:column;font-size:', 'px;padding:0.35em;border:1px solid;border-color:#cacaca;border-radius:', ';box-shadow:0 1px 2px rgba(0,0,0,0.12);background-color:white;text-align:center;margin:0 0 0.5rem 0;vertical-align:middle;max-width:', 'px;& img{border-radius:', ' !important;}& a{margin-top:5px;}'], function (p) {
  return p.size / 5;
}, function (p) {
  return p.theme.sizes.radius;
}, function (p) {
  return p.size;
}, function (p) {
  return p.theme.sizes.radius;
});

/***/ }),

/***/ "./src/elements/DateRange/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__("moment");

var _moment2 = _interopRequireDefault(_moment);

var _atoms = __webpack_require__("@coderbox/atoms");

var _styles = __webpack_require__("./src/elements/DateRange/styles.js");

var s = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DateRange = function DateRange(_ref) {
  var dateRange = _ref.dateRange,
      props = _objectWithoutProperties(_ref, ['dateRange']);

  var startDate = (0, _moment2.default)(dateRange.start).format('MM/YYYY');
  var endDate = dateRange.end ? (0, _moment2.default)(dateRange.end).format('MM/YYYY') : 'Present';

  return _react2.default.createElement(
    s.DateRange,
    null,
    _react2.default.createElement(
      _atoms.Text,
      { color: 'gray' },
      _react2.default.createElement(_atoms.Icon, { className: 'calendar', name: 'calendar-o' }),
      ' ',
      startDate
    ),
    _react2.default.createElement(_atoms.Icon, { color: 'gray', className: 'arrow', name: 'long-arrow-right' }),
    _react2.default.createElement(
      _atoms.Text,
      { color: 'gray' },
      endDate
    )
  );
};

exports.default = DateRange;

/***/ }),

/***/ "./src/elements/DateRange/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRange = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateRange = exports.DateRange = _styledComponents2.default.div.withConfig({
  displayName: 'styles__DateRange'
})(['display:flex;align-items:center;& .icon.arrow{margin:0 0.3rem;}& .icon.calendar{margin-right:0.3rem;width:auto;}']);

/***/ }),

/***/ "./src/elements/DaysAgo/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__("moment");

var _moment2 = _interopRequireDefault(_moment);

var _atoms = __webpack_require__("@coderbox/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DaysAgo = function DaysAgo(_ref) {
  var date = _ref.date,
      props = _objectWithoutProperties(_ref, ['date']);

  var daysAgo = (0, _moment2.default)().diff((0, _moment2.default)(date), 'days');
  var dateToDisplay = daysAgo + ' days ago';
  var justAdded = 0;

  if (daysAgo < 3) {
    dateToDisplay = 'Just added';
    justAdded = 1;
  }

  if (daysAgo > 30) {
    dateToDisplay = (0, _moment2.default)().diff((0, _moment2.default)(date), 'months') + ' month(s) ago';
  }

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _atoms.Text,
      { color: justAdded ? 'success' : 'gray', tone: justAdded },
      _react2.default.createElement(_atoms.Icon, { name: 'calendar-o' }),
      dateToDisplay
    )
  );
};

exports.default = DaysAgo;

/***/ }),

/***/ "./src/elements/Location/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _atoms = __webpack_require__("@coderbox/atoms");

var _styles = __webpack_require__("./src/elements/Location/styles.js");

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Location = function Location(_ref) {
  var location = _ref.location,
      props = _objectWithoutProperties(_ref, ['location']);

  var formattedLocation = location ? location.formatted_address : 'No Location';

  return _react2.default.createElement(
    styles.Location,
    props,
    _react2.default.createElement(_atoms.Icon, _extends({ color: 'gray', name: 'map-marker' }, props)),
    formattedLocation
  );
};

exports.default = Location;

/***/ }),

/***/ "./src/elements/Location/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Location = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Location = exports.Location = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Location'
})(['display:flex;align-items:center;justify-content:center;']);

/***/ }),

/***/ "./src/elements/Markdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("prop-types");

var _atoms = __webpack_require__("@coderbox/atoms");

var _styles = __webpack_require__("./src/elements/Markdown/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Component);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Component.__proto__ || Object.getPrototypeOf(Component)).call.apply(_ref, [this].concat(args))), _this), _this.state = { readMore: true }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Component, [{
    key: 'toggleReadMore',
    value: function toggleReadMore() {
      this.setState({ readMore: !this.state.readMore });
    }
  }, {
    key: 'transform',
    value: function transform(text) {
      var readMore = this.state.readMore;
      var max = this.props.max;


      if (!readMore || !max) return text;

      if (text.length > max) {
        return text.substring(0, max) + '...';
      }

      return text;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          source = _props.source,
          max = _props.max,
          props = _objectWithoutProperties(_props, ['source', 'max']);

      var readMore = this.state.readMore;

      var className = (0, _classnames2.default)('markdown', props.className);
      var child = _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          _atoms.Button,
          { as: 'a', color: 'primary', isOutlined: true, onClick: function onClick() {
              return _this2.toggleReadMore();
            } },
          readMore ? '+ Read More' : '- Read Less'
        )
      );

      if (source.length < max || max === 0) {
        child = null;
      }

      return _react2.default.createElement(_styles.Markdown, _extends({}, props, { source: this.transform(source), childAfter: child, className: className }));
    }
  }]);

  return Component;
}(_react2.default.Component);

Component.displayName = 'Markdown';
Component.defaultProps = { source: '', max: 100 };
Component.propTypes = {
  source: _propTypes.string,
  max: _propTypes.number
};
exports.default = Component;

/***/ }),

/***/ "./src/elements/Markdown/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Markdown = undefined;

var _reactMarkdown = __webpack_require__("react-markdown");

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markdown = exports.Markdown = (0, _styledComponents2.default)(_reactMarkdown2.default).withConfig({
  displayName: 'styles__Markdown'
})(['font-family:', ';line-height:1.5em;p{margin-bottom:15px;}a{color:', ';text-decoration:none;}blockquote{margin:0;padding:0 0 0 6px;border-left:4px solid #E5E5E5;}ul{margin:0;padding:0 20px;li{margin-bottom:0;}}code{margin:0;padding:2px 6px;white-space:pre-wrap;background-color:#FAFAFA;border:1px solid;border-color:#dadada;border-radius:4px;}'], function (p) {
  return p.theme.fonts.primary;
}, function (p) {
  return p.theme.palettes.primary[0];
});

/***/ }),

/***/ "./src/elements/Tags/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _atoms = __webpack_require__("@coderbox/atoms");

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__("./src/elements/Tags/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var tags = _ref.tags,
      margin = _ref.margin,
      props = _objectWithoutProperties(_ref, ['tags', 'margin']);

  var className = (0, _classnames2.default)('tags', props.className);

  return _react2.default.createElement(
    _styles.Tags,
    { margin: margin, className: className },
    tags.map(function (tag) {
      return _react2.default.createElement(
        _atoms.Tag,
        _extends({}, props, { key: tag._id }),
        tag.name
      );
    })
  );
};

Component.displayName = 'Tags';
Component.defaultProps = {
  color: 'gray',
  tone: 2
};

exports.default = Component;

/***/ }),

/***/ "./src/elements/Tags/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tags = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tags = exports.Tags = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Tags'
})(['margin:', ';& .tag{margin-bottom:0.25em;}'], function (p) {
  return p.margin || '0.5em 0';
});

/***/ }),

/***/ "./src/elements/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tags = exports.Markdown = exports.Location = exports.DaysAgo = exports.DateRange = exports.Avatar = undefined;

var _Avatar = __webpack_require__("./src/elements/Avatar/index.js");

var _Avatar2 = _interopRequireDefault(_Avatar);

var _DateRange = __webpack_require__("./src/elements/DateRange/index.js");

var _DateRange2 = _interopRequireDefault(_DateRange);

var _DaysAgo = __webpack_require__("./src/elements/DaysAgo/index.js");

var _DaysAgo2 = _interopRequireDefault(_DaysAgo);

var _Location = __webpack_require__("./src/elements/Location/index.js");

var _Location2 = _interopRequireDefault(_Location);

var _Markdown = __webpack_require__("./src/elements/Markdown/index.js");

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Tags = __webpack_require__("./src/elements/Tags/index.js");

var _Tags2 = _interopRequireDefault(_Tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Avatar = _Avatar2.default;
exports.DateRange = _DateRange2.default;
exports.DaysAgo = _DaysAgo2.default;
exports.Location = _Location2.default;
exports.Markdown = _Markdown2.default;
exports.Tags = _Tags2.default;

/***/ }),

/***/ "./src/forms/EducationForm/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _yup = __webpack_require__("yup");

var _lodash = __webpack_require__("lodash");

var _formik = __webpack_require__("formik");

var _recompose = __webpack_require__("recompose");

var _forms = __webpack_require__("@coderbox/forms");

var _atoms = __webpack_require__("@coderbox/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var values = _ref.values,
      errors = _ref.errors,
      status = _ref.status,
      suggestions = _ref.suggestions,
      isSubmitting = _ref.isSubmitting,
      setFieldValue = _ref.setFieldValue,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      onCancel = _ref.onCancel,
      onSubmitComplete = _ref.onSubmitComplete,
      props = _objectWithoutProperties(_ref, ['values', 'errors', 'status', 'suggestions', 'isSubmitting', 'setFieldValue', 'handleChange', 'handleSubmit', 'onCancel', 'onSubmitComplete']);

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    status && _react2.default.createElement(
      _forms.Field,
      null,
      _react2.default.createElement(
        _atoms.Text,
        { color: 'danger', size: 'normal' },
        status
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Institution:' },
      _react2.default.createElement(
        _forms.Control,
        { hasLeftIcon: true },
        _react2.default.createElement(_atoms.Icon, { name: 'building', className: 'left' }),
        _react2.default.createElement(_forms.Dropdown, {
          isSearch: true,
          allowNew: true,
          name: 'institution',
          maxItems: 4,
          labelField: 'name',
          items: suggestions.institutions,
          value: values.institution,
          borderColor: errors['institution.name'] ? 'danger' : undefined,
          onChange: function onChange(c) {
            return setFieldValue('institution', (0, _lodash.isObject)(c) ? c : { name: c });
          },
          placeholder: 'Type institution name (eg. West University)'
        })
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Technologies:' },
      _react2.default.createElement(
        _forms.Control,
        null,
        _react2.default.createElement(_forms.Dropdown, {
          isSearch: true,
          isMultiple: true,
          name: 'technologies',
          maxItems: 4,
          labelField: 'name',
          items: suggestions.technologies,
          value: values.technologies,
          onChange: function onChange(t) {
            return setFieldValue('technologies', t);
          },
          placeholder: 'Type technologies'
        })
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Period:' },
      _react2.default.createElement(_forms.DateRange, {
        isSearch: true,
        isMultiple: true,
        name: 'timePeriod',
        range: values.timePeriod,
        label: 'In progress...',
        size: 'small',
        onChange: function onChange(d) {
          return setFieldValue('timePeriod', d);
        }
      })
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Degree:' },
      _react2.default.createElement(_forms.Dropdown, {
        name: 'degree',
        value: values.degree,
        items: ['High School', 'Bachelor’s Degree', 'Engineer’s Degree', 'Master’s Degree'],
        onChange: function onChange(d) {
          return setFieldValue('degree', d);
        }
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _atoms.Button,
        { color: 'primary', onClick: handleSubmit, isLoading: isSubmitting },
        'Save'
      ),
      _react2.default.createElement(
        _atoms.Button,
        { color: 'gray', tone: '2', onClick: function onClick(evt) {
            return onCancel(evt);
          } },
        'Cancel'
      )
    )
  );
};

var withDisplayName = (0, _recompose.setDisplayName)('PositionForm');
var withDefaultProps = (0, _recompose.defaultProps)({
  data: {},
  suggestions: { institutions: [], technologies: [] }
});
var withFormik = (0, _formik.Formik)({
  validateOnChange: true,
  validationSchema: (0, _yup.object)().shape({
    institution: (0, _yup.object)().shape({
      name: (0, _yup.string)().min(3, 'Title has to be at least 3 characters long.').required('Title is required')
    })
  }),
  mapPropsToValues: function mapPropsToValues(_ref2) {
    var data = _ref2.data;

    return _extends({}, data, {
      type: 'education'
    });
  },
  handleSubmit: function handleSubmit(values, _ref3) {
    var props = _ref3.props,
        setSubmitting = _ref3.setSubmitting;

    if (props.onSubmit) {
      props.onSubmit(values).then(function (result) {
        setSubmitting(false);
        if (props.onSubmitComplete) {
          props.onSubmitComplete();
        }
      });
    }
  }
});

exports.default = (0, _recompose.compose)(withDisplayName, withDefaultProps, withFormik)(Component);

/***/ }),

/***/ "./src/forms/LoginForm/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _yup = __webpack_require__("yup");

var _yup2 = _interopRequireDefault(_yup);

var _formik = __webpack_require__("formik");

var _recompose = __webpack_require__("recompose");

var _forms = __webpack_require__("@coderbox/forms");

var _atoms = __webpack_require__("@coderbox/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var values = _ref.values,
      errors = _ref.errors,
      status = _ref.status,
      submitting = _ref.submitting,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      props = _objectWithoutProperties(_ref, ['values', 'errors', 'status', 'submitting', 'handleChange', 'handleSubmit']);

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    status && _react2.default.createElement(
      _forms.Field,
      null,
      _react2.default.createElement(
        _atoms.Text,
        { color: 'danger', size: 'normal' },
        status
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      null,
      _react2.default.createElement(
        _forms.Control,
        { hasLeftIcon: true },
        _react2.default.createElement(_atoms.Icon, { name: 'user', className: 'left' }),
        _react2.default.createElement(_forms.Input, {
          type: 'email',
          name: 'email',
          value: values.email,
          color: errors.email ? 'danger' : null,
          onChange: handleChange,
          placeholder: 'Your email address'
        })
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      null,
      _react2.default.createElement(
        _forms.Control,
        { hasLeftIcon: true },
        _react2.default.createElement(_atoms.Icon, { name: 'lock', className: 'left' }),
        _react2.default.createElement(_forms.Input, {
          type: 'password',
          name: 'password',
          value: values.password,
          color: errors.password ? 'danger' : null,
          onChange: handleChange,
          placeholder: 'Your password'
        })
      )
    ),
    _react2.default.createElement(
      _atoms.Button,
      { color: 'primary', onClick: handleSubmit, isLoading: submitting },
      'Login'
    )
  );
};

Component.displayName = 'LoginForm';
Component.defaultProps = {
  email: '',
  password: ''
};

exports.default = (0, _recompose.compose)((0, _formik.Formik)({
  mapPropsToValues: function mapPropsToValues(p) {
    return { email: p.email || '', password: p.password || '' };
  },
  validationSchema: _yup2.default.object().shape({
    email: _yup2.default.string().email('Invalid email address').required('Email is required'),
    password: _yup2.default.string().required('Password is required')
  }),
  handleSubmit: function handleSubmit(values, _ref2) {
    var props = _ref2.props;

    if (props.onSubmit) {
      props.onSubmit(values);
    }
  }
}))(Component);

/***/ }),

/***/ "./src/forms/PositionForm/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _yup = __webpack_require__("yup");

var _lodash = __webpack_require__("lodash");

var _formik = __webpack_require__("formik");

var _recompose = __webpack_require__("recompose");

var _forms = __webpack_require__("@coderbox/forms");

var _atoms = __webpack_require__("@coderbox/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var values = _ref.values,
      errors = _ref.errors,
      status = _ref.status,
      suggestions = _ref.suggestions,
      isSubmitting = _ref.isSubmitting,
      setFieldValue = _ref.setFieldValue,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      onCancel = _ref.onCancel,
      onSubmitComplete = _ref.onSubmitComplete,
      props = _objectWithoutProperties(_ref, ['values', 'errors', 'status', 'suggestions', 'isSubmitting', 'setFieldValue', 'handleChange', 'handleSubmit', 'onCancel', 'onSubmitComplete']);

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    status && _react2.default.createElement(
      _forms.Field,
      null,
      _react2.default.createElement(
        _atoms.Text,
        { color: 'danger', size: 'normal' },
        status
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Title:' },
      _react2.default.createElement(
        _forms.Control,
        { hasLeftIcon: true },
        _react2.default.createElement(_atoms.Icon, { name: 'info', className: 'left' }),
        _react2.default.createElement(_forms.Dropdown, {
          isSearch: true,
          allowNew: true,
          name: 'title',
          maxItems: 4,
          labelField: 'name',
          items: suggestions.titles,
          value: values.title,
          borderColor: errors['title.name'] ? 'danger' : undefined,
          onChange: function onChange(c) {
            return setFieldValue('title', (0, _lodash.isObject)(c) ? c : { name: c });
          },
          placeholder: 'Type title(eg. Web Developer)'
        })
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Company:' },
      _react2.default.createElement(
        _forms.Control,
        { hasLeftIcon: true },
        _react2.default.createElement(_atoms.Icon, { name: 'building', className: 'left' }),
        _react2.default.createElement(_forms.Dropdown, {
          isSearch: true,
          allowNew: true,
          name: 'company',
          maxItems: 4,
          labelField: 'name',
          items: suggestions.companies,
          value: values.company,
          borderColor: errors['company.name'] ? 'danger' : undefined,
          onChange: function onChange(c) {
            return setFieldValue('company', (0, _lodash.isObject)(c) ? c : { name: c });
          },
          placeholder: 'Type company name'
        })
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Technologies:' },
      _react2.default.createElement(
        _forms.Control,
        null,
        _react2.default.createElement(_forms.Dropdown, {
          isSearch: true,
          isMultiple: true,
          accentColor: 'primary',
          name: 'technologies',
          maxItems: 4,
          labelField: 'name',
          items: suggestions.technologies,
          value: values.technologies,
          onChange: function onChange(t) {
            return setFieldValue('technologies', t);
          },
          placeholder: 'Type technologies'
        })
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Period:' },
      _react2.default.createElement(_forms.DateRange, {
        isSearch: true,
        isMultiple: true,
        name: 'timePeriod',
        size: 'small',
        range: values.timePeriod,
        onChange: function onChange(d) {
          return setFieldValue('timePeriod', d);
        }
      })
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Responsabilities:' },
      _react2.default.createElement(_forms.Textarea, {
        rows: 10,
        name: 'responsabilities',
        value: values.responsabilities,
        onChange: handleChange,
        placeholder: 'Description ?' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _atoms.Button,
        { color: 'primary', onClick: handleSubmit, isLoading: isSubmitting },
        'Save'
      ),
      _react2.default.createElement(
        _atoms.Button,
        { color: 'gray', tone: '2', onClick: function onClick(evt) {
            return onCancel(evt);
          } },
        'Cancel'
      )
    )
  );
};

var withDisplayName = (0, _recompose.setDisplayName)('PositionForm');
var withDefaultProps = (0, _recompose.defaultProps)({
  data: {},
  suggestions: { companies: [], technologies: [], titles: [] }
});

var withFormik = (0, _formik.Formik)({
  validateOnChange: true,
  validationSchema: (0, _yup.object)().shape({
    title: (0, _yup.object)().shape({
      name: (0, _yup.string)().min(3, 'Title has to be at least 3 characters long.').required('Title is required')
    }),
    company: (0, _yup.object)().shape({
      name: (0, _yup.string)().min(3, 'Title has to be at least 3 characters long.').required('Title is required')
    })
  }),
  mapPropsToValues: function mapPropsToValues(_ref2) {
    var data = _ref2.data;

    return _extends({}, data, {
      type: 'position'
    });
  },
  handleSubmit: function handleSubmit(values, _ref3) {
    var props = _ref3.props,
        setSubmitting = _ref3.setSubmitting;

    if (props.onSubmit) {
      props.onSubmit(values).then(function (result) {
        setSubmitting(false);
        if (props.onSubmitComplete) {
          props.onSubmitComplete();
        }
      });
    }
  }
});

exports.default = (0, _recompose.compose)(withDisplayName, withDefaultProps, withFormik)(Component);

/***/ }),

/***/ "./src/forms/UserProfileForm/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _yup = __webpack_require__("yup");

var _formik = __webpack_require__("formik");

var _recompose = __webpack_require__("recompose");

var _forms = __webpack_require__("@coderbox/forms");

var _atoms = __webpack_require__("@coderbox/atoms");

var _components = __webpack_require__("./src/components/index.js");

var _elements = __webpack_require__("./src/elements/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var data = _ref.data,
      values = _ref.values,
      errors = _ref.errors,
      status = _ref.status,
      isSubmitting = _ref.isSubmitting,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      onCancel = _ref.onCancel,
      onSubmitComplete = _ref.onSubmitComplete,
      props = _objectWithoutProperties(_ref, ['data', 'values', 'errors', 'status', 'isSubmitting', 'handleChange', 'handleSubmit', 'onCancel', 'onSubmitComplete']);

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    status && _react2.default.createElement(
      _forms.Field,
      null,
      _react2.default.createElement(
        _atoms.Text,
        { color: 'danger', size: 'normal' },
        status
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { align: 'center' },
      _react2.default.createElement(_elements.Avatar, { email: data.email, isEdit: true })
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Name:' },
      _react2.default.createElement(
        _forms.Control,
        { hasLeftIcon: true },
        _react2.default.createElement(_atoms.Icon, { name: 'user', className: 'left' }),
        _react2.default.createElement(_forms.Input, {
          name: 'name',
          value: values.name,
          color: errors.name ? 'danger' : null,
          onChange: handleChange,
          placeholder: 'Your name (eg. Darth Vader)'
        })
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Location:' },
      _react2.default.createElement(
        _forms.Control,
        { hasLeftIcon: true },
        _react2.default.createElement(_atoms.Icon, { name: 'map-marker', className: 'left' }),
        _react2.default.createElement(_components.AutocompleteLocation, {
          name: 'location',
          value: values.location,
          color: errors.location ? 'danger' : null,
          onChange: function onChange(loc) {
            return props.setFieldValue('location', loc);
          },
          placeholder: 'Where do you live ?'
        })
      )
    ),
    _react2.default.createElement(
      _forms.Field,
      { label: 'Personal website:' },
      _react2.default.createElement(
        _forms.Control,
        { hasLeftIcon: true },
        _react2.default.createElement(_atoms.Icon, { name: 'globe', className: 'left' }),
        _react2.default.createElement(_forms.Input, {
          name: 'url',
          value: values.url,
          color: errors.url ? 'danger' : null,
          onChange: handleChange,
          placeholder: 'Your personal website'
        })
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _atoms.Button,
        { color: 'primary', onClick: handleSubmit, isLoading: isSubmitting },
        'Save'
      ),
      _react2.default.createElement(
        _atoms.Button,
        { color: 'gray', tone: '2', onClick: function onClick(evt) {
            return onCancel(evt);
          } },
        'Cancel'
      )
    )
  );
};

var withDefaultProps = (0, _recompose.defaultProps)({ data: {} });
var withDisplayName = (0, _recompose.setDisplayName)('UserProfileForm');
var withFormik = (0, _formik.Formik)({
  mapPropsToValues: function mapPropsToValues(_ref2) {
    var data = _ref2.data;
    return {
      name: data.name,
      location: data.location,
      url: data.url
    };
  },
  validationSchema: (0, _yup.object)().shape({
    name: (0, _yup.string)().min(3, 'Name has to be at least 3 characters long.').required('Name is required')
  }),
  handleSubmit: function handleSubmit(values, _ref3) {
    var props = _ref3.props,
        setSubmitting = _ref3.setSubmitting;

    if (props.onSubmit) {
      props.onSubmit(values).then(function (result) {
        setSubmitting(false);
        if (props.onSubmitComplete) {
          props.onSubmitComplete();
        }
      });
    }
  }
});

exports.default = (0, _recompose.compose)(withDisplayName, withDefaultProps, withFormik)(Component);

/***/ }),

/***/ "./src/forms/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileForm = exports.EducationForm = exports.PositionForm = exports.LoginForm = undefined;

var _LoginForm = __webpack_require__("./src/forms/LoginForm/index.js");

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _PositionForm = __webpack_require__("./src/forms/PositionForm/index.js");

var _PositionForm2 = _interopRequireDefault(_PositionForm);

var _EducationForm = __webpack_require__("./src/forms/EducationForm/index.js");

var _EducationForm2 = _interopRequireDefault(_EducationForm);

var _UserProfileForm = __webpack_require__("./src/forms/UserProfileForm/index.js");

var _UserProfileForm2 = _interopRequireDefault(_UserProfileForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LoginForm = _LoginForm2.default;
exports.PositionForm = _PositionForm2.default;
exports.EducationForm = _EducationForm2.default;
exports.UserProfileForm = _UserProfileForm2.default;

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfile = exports.TimelineRow = exports.Timeline = exports.ToolbarEditDelete = exports.ToolbarNextPrev = exports.JobHeader = exports.CompanyProfile = exports.AutocompleteLocation = exports.UserProfileForm = exports.EducationForm = exports.PositionForm = exports.LoginForm = exports.EducationItem = exports.PositionItem = exports.EditableItem = exports.JobItem = exports.Item = exports.Tags = exports.Markdown = exports.Location = exports.DaysAgo = exports.DateRange = exports.Avatar = undefined;

var _Avatar = __webpack_require__("./src/elements/Avatar/index.js");

var _Avatar2 = _interopRequireDefault(_Avatar);

var _DateRange = __webpack_require__("./src/elements/DateRange/index.js");

var _DateRange2 = _interopRequireDefault(_DateRange);

var _DaysAgo = __webpack_require__("./src/elements/DaysAgo/index.js");

var _DaysAgo2 = _interopRequireDefault(_DaysAgo);

var _Location = __webpack_require__("./src/elements/Location/index.js");

var _Location2 = _interopRequireDefault(_Location);

var _Markdown = __webpack_require__("./src/elements/Markdown/index.js");

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Tags = __webpack_require__("./src/elements/Tags/index.js");

var _Tags2 = _interopRequireDefault(_Tags);

var _Item = __webpack_require__("./src/items/Item/index.js");

var _Item2 = _interopRequireDefault(_Item);

var _EditableItem = __webpack_require__("./src/items/EditableItem/index.js");

var _EditableItem2 = _interopRequireDefault(_EditableItem);

var _JobItem = __webpack_require__("./src/items/JobItem/index.js");

var _JobItem2 = _interopRequireDefault(_JobItem);

var _PositionItem = __webpack_require__("./src/items/PositionItem/index.js");

var _PositionItem2 = _interopRequireDefault(_PositionItem);

var _EducationItem = __webpack_require__("./src/items/EducationItem/index.js");

var _EducationItem2 = _interopRequireDefault(_EducationItem);

var _LoginForm = __webpack_require__("./src/forms/LoginForm/index.js");

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _PositionForm = __webpack_require__("./src/forms/PositionForm/index.js");

var _PositionForm2 = _interopRequireDefault(_PositionForm);

var _EducationForm = __webpack_require__("./src/forms/EducationForm/index.js");

var _EducationForm2 = _interopRequireDefault(_EducationForm);

var _UserProfileForm = __webpack_require__("./src/forms/UserProfileForm/index.js");

var _UserProfileForm2 = _interopRequireDefault(_UserProfileForm);

var _AutocompleteLocation = __webpack_require__("./src/components/AutocompleteLocation/index.js");

var _AutocompleteLocation2 = _interopRequireDefault(_AutocompleteLocation);

var _CompanyProfile = __webpack_require__("./src/components/CompanyProfile/index.js");

var _CompanyProfile2 = _interopRequireDefault(_CompanyProfile);

var _JobHeader = __webpack_require__("./src/components/JobHeader/index.js");

var _JobHeader2 = _interopRequireDefault(_JobHeader);

var _ToolbarNextPrev = __webpack_require__("./src/components/ToolbarNextPrev/index.js");

var _ToolbarNextPrev2 = _interopRequireDefault(_ToolbarNextPrev);

var _ToolbarEditDelete = __webpack_require__("./src/components/ToolbarEditDelete/index.js");

var _ToolbarEditDelete2 = _interopRequireDefault(_ToolbarEditDelete);

var _Timeline = __webpack_require__("./src/components/Timeline/index.js");

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TimelineRow = __webpack_require__("./src/components/TimelineRow/index.js");

var _TimelineRow2 = _interopRequireDefault(_TimelineRow);

var _UserProfile = __webpack_require__("./src/components/UserProfile/index.js");

var _UserProfile2 = _interopRequireDefault(_UserProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components


// forms
exports.Avatar = _Avatar2.default;
exports.DateRange = _DateRange2.default;
exports.DaysAgo = _DaysAgo2.default;
exports.Location = _Location2.default;
exports.Markdown = _Markdown2.default;
exports.Tags = _Tags2.default;
exports.Item = _Item2.default;
exports.JobItem = _JobItem2.default;
exports.EditableItem = _EditableItem2.default;
exports.PositionItem = _PositionItem2.default;
exports.EducationItem = _EducationItem2.default;
exports.LoginForm = _LoginForm2.default;
exports.PositionForm = _PositionForm2.default;
exports.EducationForm = _EducationForm2.default;
exports.UserProfileForm = _UserProfileForm2.default;
exports.AutocompleteLocation = _AutocompleteLocation2.default;
exports.CompanyProfile = _CompanyProfile2.default;
exports.JobHeader = _JobHeader2.default;
exports.ToolbarNextPrev = _ToolbarNextPrev2.default;
exports.ToolbarEditDelete = _ToolbarEditDelete2.default;
exports.Timeline = _Timeline2.default;
exports.TimelineRow = _TimelineRow2.default;
exports.UserProfile = _UserProfile2.default;

// items
// elements

/***/ }),

/***/ "./src/items/EditableItem/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _atoms = __webpack_require__("@coderbox/atoms");

var _hocs = __webpack_require__("@coderbox/hocs");

var _utils = __webpack_require__("./src/utils.js");

var _components = __webpack_require__("./src/components/index.js");

var _styles = __webpack_require__("./src/items/EditableItem/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          stack = _props.stack,
          onSave = _props.onSave,
          onDelete = _props.onDelete,
          suggestions = _props.suggestions,
          props = _objectWithoutProperties(_props, ['data', 'stack', 'onSave', 'onDelete', 'suggestions']);

      var className = (0, _classnames2.default)('timeline', props.className);
      var factory = this.props.factory || new _utils.Factory();
      var Item = factory.createItem(data);
      var Form = factory.createForm(data, {
        onSubmit: function onSubmit(formData) {
          return onSave(formData);
        },
        onSubmitComplete: function onSubmitComplete() {
          return stack.setIndex(0);
        },
        onCancel: function onCancel() {
          return stack.setIndex(0);
        },
        suggestions: suggestions
      });

      return React.createElement(
        _styles.EditableItem,
        _extends({}, props, { className: className }),
        React.createElement(
          _atoms.Stack,
          { index: stack.index },
          Item,
          Form
        ),
        React.createElement(_components.ToolbarEditDelete, {
          isFixed: true,
          index: stack.index,
          onEdit: function onEdit() {
            return stack.setIndex(1);
          },
          onDelete: function (_onDelete) {
            function onDelete() {
              return _onDelete.apply(this, arguments);
            }

            onDelete.toString = function () {
              return _onDelete.toString();
            };

            return onDelete;
          }(function () {
            return onDelete(data);
          }),
          onCancel: function onCancel() {
            return stack.setIndex(0);
          } })
      );
    }
  }]);

  return Component;
}(React.Component);

Component.displayName = 'EditableItem';
Component.defaultProps = {
  color: 'primary'
};
exports.default = (0, _hocs.withStack)(Component);

/***/ }),

/***/ "./src/items/EditableItem/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableItem = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditableItem = exports.EditableItem = _styledComponents2.default.div.withConfig({
  displayName: 'styles__EditableItem'
})(['position:relative;min-height:80px;& form{margin-top:15px;}']);

/***/ }),

/***/ "./src/items/EducationItem/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _proptypes = __webpack_require__("./src/proptypes.js");

var _atoms = __webpack_require__("@coderbox/atoms");

var _elements = __webpack_require__("./src/elements/index.js");

var _ = __webpack_require__("./src/items/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component(_ref) {
  var data = _ref.data;
  var institution = data.institution,
      degree = data.degree,
      technologies = data.technologies,
      timePeriod = data.timePeriod;


  return _react2.default.createElement(
    _.Item,
    { image: institution.logo },
    _react2.default.createElement(_elements.DateRange, { dateRange: timePeriod }),
    _react2.default.createElement(
      _atoms.Title,
      { size: 'large' },
      degree
    ),
    _react2.default.createElement(
      _atoms.Subtitle,
      { size: 'normal', color: 'gray' },
      _react2.default.createElement(
        _atoms.Link,
        null,
        '@',
        institution.name
      )
    ),
    _react2.default.createElement(_elements.Tags, { tags: technologies })
  );
};

Component.displayName = 'EducationItem';
Component.propTypes = {
  data: _proptypes.education.isRequired
};

exports.default = Component;

/***/ }),

/***/ "./src/items/Item/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("prop-types");

var _atoms = __webpack_require__("@coderbox/atoms");

var _elements = __webpack_require__("./src/elements/index.js");

var _styles = __webpack_require__("./src/items/Item/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(_ref) {
  var image = _ref.image,
      tag = _ref.tag,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['image', 'tag', 'children']);

  var className = (0, _classnames2.default)('item', props.className);
  return _react2.default.createElement(
    _styles.Item,
    { className: className },
    _react2.default.createElement(
      _styles.ItemLeft,
      null,
      _react2.default.createElement(_elements.Avatar, { src: image, size: 60 }),
      tag
    ),
    _react2.default.createElement(
      _styles.ItemContent,
      null,
      children
    )
  );
};

Component.displayName = 'Item';
Component.propTypes = {
  image: _propTypes.string,
  tag: _propTypes.element
};

exports.default = Component;

/***/ }),

/***/ "./src/items/Item/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemContent = exports.ItemLeft = exports.Item = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = exports.Item = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Item'
})(['display:flex;']);

var ItemLeft = exports.ItemLeft = _styledComponents2.default.div.withConfig({
  displayName: 'styles__ItemLeft'
})(['margin:0;padding:0;text-align:center;width:80px;& .tag{padding:0 0.35rem;}']);

var ItemContent = exports.ItemContent = _styledComponents2.default.div.withConfig({
  displayName: 'styles__ItemContent'
})(['display:block;margin-left:0;padding-left:1.5em;.subtitle{margin-bottom:0.5em !important;}']);

/***/ }),

/***/ "./src/items/JobItem/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _proptypes = __webpack_require__("./src/proptypes.js");

var _propTypes = __webpack_require__("prop-types");

var _atoms = __webpack_require__("@coderbox/atoms");

var _elements = __webpack_require__("./src/elements/index.js");

var _ = __webpack_require__("./src/items/index.js");

var _styles = __webpack_require__("./src/items/JobItem/styles.js");

var s = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component(_ref) {
  var data = _ref.data,
      showTag = _ref.showTag,
      showDesc = _ref.showDesc;
  var _id = data._id,
      company = data.company,
      location = data.location,
      title = data.title,
      minSalary = data.minSalary,
      technologies = data.technologies,
      createdAt = data.createdAt,
      description = data.description,
      published = data.published;

  var tag = showTag ? _react2.default.createElement(
    _atoms.Tag,
    { color: 'success', tone: 1, size: 'small' },
    published ? 'published' : 'draft'
  ) : null;

  return _react2.default.createElement(
    s.JobItem,
    null,
    _react2.default.createElement(
      _.Item,
      { image: company.logo, tag: tag },
      _react2.default.createElement(_elements.DaysAgo, { date: createdAt }),
      _react2.default.createElement(
        _atoms.Link,
        { href: '/app/jobs/' + _id },
        _react2.default.createElement(
          _atoms.Title,
          { size: 'large', color: 'black' },
          title
        )
      ),
      _react2.default.createElement(
        _atoms.Subtitle,
        { size: 'normal', color: 'gray' },
        _react2.default.createElement(
          _atoms.Link,
          null,
          '@',
          company.name
        ),
        ', ',
        location && location.formatted_address
      ),
      _react2.default.createElement(
        _atoms.Text,
        { color: 'success', tone: 1 },
        'min. ',
        minSalary,
        ' \u20AC / month'
      ),
      _react2.default.createElement(_elements.Tags, { tags: technologies }),
      showDesc && _react2.default.createElement(_elements.Markdown, { source: description })
    )
  );
};

Component.displayName = 'JobItem';
Component.propTypes = {
  data: _proptypes.job,
  showTag: _propTypes.bool,
  showDesc: _propTypes.bool
};

exports.default = Component;

/***/ }),

/***/ "./src/items/JobItem/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobItem = undefined;

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JobItem = exports.JobItem = _styledComponents2.default.div.withConfig({
  displayName: 'styles__JobItem'
})(['']);

/***/ }),

/***/ "./src/items/PositionItem/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _proptypes = __webpack_require__("./src/proptypes.js");

var _atoms = __webpack_require__("@coderbox/atoms");

var _elements = __webpack_require__("./src/elements/index.js");

var _ = __webpack_require__("./src/items/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component(_ref) {
  var data = _ref.data;
  var company = data.company,
      responsabilities = data.responsabilities,
      title = data.title,
      technologies = data.technologies,
      timePeriod = data.timePeriod;


  return _react2.default.createElement(
    _.Item,
    { image: company.logo },
    _react2.default.createElement(_elements.DateRange, { dateRange: timePeriod }),
    _react2.default.createElement(
      _atoms.Title,
      { size: 'large' },
      title.name
    ),
    _react2.default.createElement(
      _atoms.Subtitle,
      { size: 'normal', color: 'gray' },
      _react2.default.createElement(
        _atoms.Link,
        null,
        '@',
        company.name
      )
    ),
    _react2.default.createElement(_elements.Tags, { tags: technologies }),
    _react2.default.createElement(_elements.Markdown, { source: responsabilities })
  );
};

Component.displayName = 'PositionItem';
Component.propTypes = {
  data: _proptypes.position
};

exports.default = Component;

/***/ }),

/***/ "./src/items/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EducationItem = exports.PositionItem = exports.JobItem = exports.EditableItem = exports.Item = undefined;

var _Item = __webpack_require__("./src/items/Item/index.js");

var _Item2 = _interopRequireDefault(_Item);

var _EditableItem = __webpack_require__("./src/items/EditableItem/index.js");

var _EditableItem2 = _interopRequireDefault(_EditableItem);

var _JobItem = __webpack_require__("./src/items/JobItem/index.js");

var _JobItem2 = _interopRequireDefault(_JobItem);

var _PositionItem = __webpack_require__("./src/items/PositionItem/index.js");

var _PositionItem2 = _interopRequireDefault(_PositionItem);

var _EducationItem = __webpack_require__("./src/items/EducationItem/index.js");

var _EducationItem2 = _interopRequireDefault(_EducationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Item = _Item2.default;
exports.EditableItem = _EditableItem2.default;
exports.JobItem = _JobItem2.default;
exports.PositionItem = _PositionItem2.default;
exports.EducationItem = _EducationItem2.default;

/***/ }),

/***/ "./src/proptypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestions = exports.job = exports.position = exports.education = exports.user = exports.dateRange = exports.equal = exports.company = exports.title = exports.technology = undefined;

var _propTypes = __webpack_require__("prop-types");

var technology = exports.technology = (0, _propTypes.shape)({
  _id: _propTypes.number,
  name: _propTypes.string.isRequired
});

var title = exports.title = (0, _propTypes.shape)({
  _id: _propTypes.number,
  name: _propTypes.string.isRequired
});

var company = exports.company = (0, _propTypes.shape)({
  _id: _propTypes.number,
  name: _propTypes.string.isRequired,
  logo: _propTypes.string,
  shortBio: _propTypes.string
});

var equal = exports.equal = function equal(value) {
  return function (props, name, component) {
    if (props[name] === value) return;
    return new Error('Invali prop ' + name + ' supplied to ' + component + '. It must equal "' + value + '".');
  };
};

var dateRange = exports.dateRange = (0, _propTypes.shape)({
  start: _propTypes.string.isRequired,
  end: _propTypes.string
});

var user = exports.user = (0, _propTypes.shape)({
  name: _propTypes.string,
  website: _propTypes.string,
  location: _propTypes.object
});

var education = exports.education = (0, _propTypes.shape)({
  _id: _propTypes.number,
  institution: (0, _propTypes.shape)({ logo: _propTypes.string, name: _propTypes.string }),
  technologies: (0, _propTypes.arrayOf)(technology),
  timePeriod: dateRange,
  degree: _propTypes.string,
  type: equal('education')
});

var position = exports.position = (0, _propTypes.shape)({
  _id: _propTypes.number,
  company: company,
  title: title,
  responsabilities: _propTypes.string,
  technologies: (0, _propTypes.arrayOf)(technology),
  timePeriod: dateRange,
  type: equal('position')
});

var job = exports.job = (0, _propTypes.shape)({
  _id: _propTypes.number,
  title: _propTypes.string,
  description: _propTypes.string,
  paid: _propTypes.bool,
  published: _propTypes.bool,
  teamWork: _propTypes.bool,
  minSalary: _propTypes.number,
  technologies: (0, _propTypes.arrayOf)(technology),
  company: company,
  type: equal('job')
});

var suggestions = exports.suggestions = (0, _propTypes.shape)({
  technologies: (0, _propTypes.arrayOf)(technology),
  companies: (0, _propTypes.arrayOf)(company)
});

/***/ }),

/***/ "./src/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Factory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _forms = __webpack_require__("./src/forms/index.js");

var _items = __webpack_require__("./src/items/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Factory = exports.Factory = function Factory() {
  var _this = this;

  _classCallCheck(this, Factory);

  this.createFromMap = function (map) {
    return function (data, props) {
      var type = map[data.type];

      if (!type) return;
      return _react2.default.createElement(type, _extends({ data: data }, props));
    };
  };

  this.createItem = function (data, props) {
    return _this.createFromMap(_this.items)(data, props);
  };

  this.createForm = function (data, props) {
    return _this.createFromMap(_this.forms)(data, props);
  };

  this.items = {
    'position': _items.PositionItem,
    'education': _items.EducationItem
  };

  this.forms = {
    'position': _forms.PositionForm,
    'education': _forms.EducationForm
  };
};

/***/ }),

/***/ "@coderbox/atoms":
/***/ (function(module, exports) {

module.exports = require("@coderbox/atoms");

/***/ }),

/***/ "@coderbox/forms":
/***/ (function(module, exports) {

module.exports = require("@coderbox/forms");

/***/ }),

/***/ "@coderbox/hocs":
/***/ (function(module, exports) {

module.exports = require("@coderbox/hocs");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "formik":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-avatar":
/***/ (function(module, exports) {

module.exports = require("react-avatar");

/***/ }),

/***/ "react-google-autocomplete":
/***/ (function(module, exports) {

module.exports = require("react-google-autocomplete");

/***/ }),

/***/ "react-markdown":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "recompose":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-utils":
/***/ (function(module, exports) {

module.exports = require("styled-utils");

/***/ }),

/***/ "yup":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
});
//# sourceMappingURL=coderbox-ui.js.map