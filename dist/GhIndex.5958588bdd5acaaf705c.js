webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _comm = __webpack_require__(169);

	var _Navigator = __webpack_require__(177);

	var _Navigator2 = _interopRequireDefault(_Navigator);

	__webpack_require__(178);

	var _GhIndexObj = __webpack_require__(180);

	var _GhIndexObj2 = _interopRequireDefault(_GhIndexObj);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import { Router, Route, hashHistory } from 'react-router'


	var GhIndex = function (_BaseComponent) {
	    _inherits(GhIndex, _BaseComponent);

	    function GhIndex() {
	        _classCallCheck(this, GhIndex);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(GhIndex).call(this));
	    }

	    _createClass(GhIndex, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.state = {
	                initData: null
	            };

	            this.obj = new _GhIndexObj2.default(this);
	            this.obj.init();
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(_Navigator2.default, { initialRoute: this._getInitRoute() });
	        }
	    }, {
	        key: '_getInitRoute',
	        value: function _getInitRoute() {
	            return {
	                name: 'home',
	                page: this._getHome()
	            };
	        }
	    }, {
	        key: '_getHome',
	        value: function _getHome() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    { className: 'title' },
	                    '干货集中营'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    this.getState().initData ? _react2.default.createElement(List, { root: this, data: this.getState().initData.results }) : '努力加载中....'
	                )
	            );
	        }
	    }]);

	    return GhIndex;
	}(_comm.BaseComponent);

	var List = function (_BaseComponent2) {
	    _inherits(List, _BaseComponent2);

	    function List() {
	        _classCallCheck(this, List);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	    }

	    _createClass(List, [{
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var data = this.getProps().data;

	            return _react2.default.createElement(
	                'ul',
	                { className: 'list' },
	                data.map(function (one) {
	                    return _react2.default.createElement(
	                        'li',
	                        { onClick: function onClick() {
	                                //let path = `/repos`;
	                                //
	                                //this.getRootProps().history.push({
	                                //    pathname: path,
	                                //    state: {aaa:'11'}
	                                //});

	                                (0, _reactDom.render)(_react2.default.createElement(Repos, { a: _this3.getRoot() }), document.getElementById('a'));
	                            } },
	                        one.desc
	                    );
	                })
	            );
	        }
	    }]);

	    return List;
	}(_comm.BaseComponent);

	(0, _reactDom.render)(_react2.default.createElement(GhIndex, null), document.getElementById('content'));

	//import Repos from './Repos'
	//render((
	//    <Router history={hashHistory} >
	//        <Route path="/" component={GhIndex}/>
	//        {/* add the routes here */}
	//        <Route path="/repos" component={Repos}/>
	//    </Router>
	//), document.getElementById('content'))

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _comm = __webpack_require__(169);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GhIndexObj = function (_BaseLogicObj) {
	    _inherits(GhIndexObj, _BaseLogicObj);

	    function GhIndexObj(root) {
	        _classCallCheck(this, GhIndexObj);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(GhIndexObj).call(this, root));
	    }

	    _createClass(GhIndexObj, [{
	        key: 'init',
	        value: function init() {
	            var _this2 = this;

	            document.getElementById('loading').className = '';
	            fetch('https://raw.githubusercontent.com/cnsnake11/helloapi/master/android_1').then(function (res) {
	                return res.json();
	            }).then(function (res) {
	                _this2.setState({ initData: res });
	            });
	        }
	    }]);

	    return GhIndexObj;
	}(_comm.BaseLogicObj);

	exports.default = GhIndexObj;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseComponent = function (_Component) {
	    _inherits(BaseComponent, _Component);

	    function BaseComponent() {
	        _classCallCheck(this, BaseComponent);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseComponent).apply(this, arguments));
	    }

	    _createClass(BaseComponent, [{
	        key: 'getProps',
	        value: function getProps() {
	            return this.props;
	        }
	    }, {
	        key: 'getState',
	        value: function getState() {
	            return this.state;
	        }
	    }, {
	        key: 'getRefs',
	        value: function getRefs() {
	            return this.refs;
	        }

	        // root不保证一定有

	    }, {
	        key: 'getRoot',
	        value: function getRoot() {
	            return this.props.root;
	        }
	    }, {
	        key: 'setRootState',
	        value: function setRootState(state) {
	            if (!this.getRoot()) {
	                throw new Error('root is not defined!');
	            }

	            this.getRoot().setState(state);
	        }
	    }, {
	        key: 'getRootState',
	        value: function getRootState() {
	            if (!this.getRoot()) {
	                throw new Error('root is not defined!');
	            }

	            return this.getRoot().state;
	        }
	    }, {
	        key: 'getRootProps',
	        value: function getRootProps() {
	            if (!this.getRoot()) {
	                throw new Error('root is not defined!');
	            }

	            return this.getRoot().props;
	        }
	    }]);

	    return BaseComponent;
	}(_react.Component);

	module.exports = BaseComponent;

/***/ },

/***/ 175:
/***/ function(module, exports) {

	
	'use strict';

	/**
	 * 业务逻辑对象基类
	 * 封装了对this.root的初始化和校验
	 * 提供了一系列取值赋值接口
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseLogicObj = function () {
	    function BaseLogicObj(root) {
	        _classCallCheck(this, BaseLogicObj);

	        if (!root) {
	            console.error('实例化BaseLogicObj必须传入root组件对象.');
	        }
	        this.root = root;
	    }

	    _createClass(BaseLogicObj, [{
	        key: 'getRoot',
	        value: function getRoot() {
	            return this.root;
	        }
	    }, {
	        key: 'getState',
	        value: function getState() {
	            return this.root.state;
	        }
	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            this.root.setState(state);
	        }
	    }, {
	        key: 'getRefs',
	        value: function getRefs() {
	            return this.root.refs;
	        }
	    }, {
	        key: 'getProps',
	        value: function getProps() {
	            return this.root.props;
	        }
	    }]);

	    return BaseLogicObj;
	}();

	module.exports = BaseLogicObj;

/***/ },

/***/ 170:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(170);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(174);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 引入fetch，自动绑定到window，其它js不用引入了

	/**
	 * 统一的对外发布出口
	 * 业务使用只require这一个类即可
	 */
	var BbtReact = {

	    // base
	    BaseLogicObj: __webpack_require__(175),
	    BaseComponent: __webpack_require__(176)

	};

	// view
	//Navigator: require('./view/Navigator'), // 不知道为什么不好用，有空再解决

	module.exports = BbtReact;

/***/ },

/***/ 181:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _BaseComponent2 = __webpack_require__(176);

	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

	__webpack_require__(181);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var winW = window.screen.availWidth;
	var winH = window.screen.availHeight;

	var Navigator1 = function (_BaseComponent) {
	    _inherits(Navigator1, _BaseComponent);

	    function Navigator1() {
	        _classCallCheck(this, Navigator1);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Navigator1).apply(this, arguments));
	    }

	    _createClass(Navigator1, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            //alert(document.body.offsetHeight);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'bbt_nav_wrapper' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'bbt_nav_page', id: 'bbt_nav_page_home' },
	                    this.props.initialRoute.page
	                )
	            );
	        }
	    }, {
	        key: 'push',
	        value: function push(route) {}
	    }, {
	        key: 'pop',
	        value: function pop() {}
	    }, {
	        key: '_init',
	        value: function _init() {}
	    }, {
	        key: '_renderScene',
	        value: function _renderScene(route) {}
	    }]);

	    return Navigator1;
	}(_BaseComponent3.default);

	exports.default = Navigator1;

/***/ }

});