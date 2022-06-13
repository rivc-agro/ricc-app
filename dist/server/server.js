/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/API/StrapiAPI.js":
/*!******************************!*\
  !*** ./src/API/StrapiAPI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StrapiAPI)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator.return && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar StrapiAPI = /*#__PURE__*/function () {\n  function StrapiAPI() {\n    _classCallCheck(this, StrapiAPI);\n  }\n\n  _createClass(StrapiAPI, null, [{\n    key: \"getLogo\",\n    value: function () {\n      var _getLogo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n        var response;\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"\".concat(_data_data__WEBPACK_IMPORTED_MODULE_1__.server, \"api/contents?populate=*\"), {\n                  headers: {\n                    Authorization: \"Bearer \".concat(_data_data__WEBPACK_IMPORTED_MODULE_1__.token)\n                  }\n                });\n\n              case 2:\n                response = _context.sent;\n                return _context.abrupt(\"return\", response.data);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getLogo() {\n        return _getLogo.apply(this, arguments);\n      }\n\n      return getLogo;\n    }()\n  }, {\n    key: \"getIntro\",\n    value: function () {\n      var _getIntro = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {\n        var response;\n        return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"\".concat(_data_data__WEBPACK_IMPORTED_MODULE_1__.server, \"api/intro-sections\"), {\n                  headers: {\n                    Authorization: \"Bearer \".concat(_data_data__WEBPACK_IMPORTED_MODULE_1__.token)\n                  }\n                });\n\n              case 2:\n                response = _context2.sent;\n                return _context2.abrupt(\"return\", response.data);\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function getIntro() {\n        return _getIntro.apply(this, arguments);\n      }\n\n      return getIntro;\n    }()\n  }, {\n    key: \"getBenefits\",\n    value: function () {\n      var _getBenefits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {\n        var response;\n        return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"\".concat(_data_data__WEBPACK_IMPORTED_MODULE_1__.server, \"api/benefits?populate=*\"), {\n                  headers: {\n                    Authorization: \"Bearer \".concat(_data_data__WEBPACK_IMPORTED_MODULE_1__.token)\n                  }\n                });\n\n              case 2:\n                response = _context3.sent;\n                return _context3.abrupt(\"return\", response.data);\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function getBenefits() {\n        return _getBenefits.apply(this, arguments);\n      }\n\n      return getBenefits;\n    }()\n  }]);\n\n  return StrapiAPI;\n}();\n\n\n\n//# sourceURL=webpack://ricc-app/./src/API/StrapiAPI.js?");

/***/ }),

/***/ "./src/context/index.js":
/*!******************************!*\
  !*** ./src/context/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n\n//# sourceURL=webpack://ricc-app/./src/context/index.js?");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": () => (/* binding */ server),\n/* harmony export */   \"token\": () => (/* binding */ token)\n/* harmony export */ });\nvar server = 'http://localhost:1337/';\nvar token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU0ODY2MjE3LCJleHAiOjE2NTc0NTgyMTd9.BoWbvEDPyP_Uo6Z0I5o2BeWlOH_ynRJiIci4Qqo2UxI';\n\n\n//# sourceURL=webpack://ricc-app/./src/data/data.js?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indextemplate\": () => (/* binding */ indextemplate)\n/* harmony export */ });\nvar indextemplate = function indextemplate(content, data) {\n  return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n\\n    <link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"/static/apple-touch-icon.png\\\">\\n    <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"/static/favicon-32x32.png\\\">\\n    <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"/static/favicon-16x16.png\\\">\\n    <link rel=\\\"mask-icon\\\" href=\\\"/static/safari-pinned-tab.svg\\\" color=\\\"#5bbad5\\\">\\n    <meta name=\\\"msapplication-TileColor\\\" content=\\\"#da532c\\\">\\n    <meta name=\\\"theme-color\\\" content=\\\"#ffffff\\\">\\n\\n    <meta name=\\\"description\\\" content=\\\"\\u041E\\u043F\\u0438\\u0441\\u0430\\u043D\\u0438\\u0435 \\u0441\\u0430\\u0439\\u0442\\u0430\\\">\\n    <title>\\u0413\\u043B\\u0430\\u0432\\u043D\\u0430\\u044F | RICC</title>\\n\\n    <script>\\n        window.__INITIAL_DATA__ = \".concat(data, \"\\n    </script>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n<body>\\n    <div id=\\\"reactDom\\\">\").concat(content, \"</div>\\n</body>\\n</html>\\n\");\n};\n\n//# sourceURL=webpack://ricc-app/./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _indexTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.jsx\");\n/* harmony import */ var _API_StrapiAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../API/StrapiAPI */ \"./src/API/StrapiAPI.js\");\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar data = {};\napp.use('/static/', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('./dist/client'));\n_API_StrapiAPI__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getLogo().then(function (resp) {\n  data.logo = resp.data[0].attributes.logo.data.attributes.url;\n});\n_API_StrapiAPI__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getIntro().then(function (resp) {\n  data.heading = resp.data[0].attributes.heading;\n});\n_API_StrapiAPI__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getIntro().then(function (resp) {\n  data.description = resp.data[0].attributes.description;\n});\n_API_StrapiAPI__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getBenefits().then(function (resp) {\n  var respData = resp.data;\n  data.benefits = [];\n  respData.map(function (item, i) {\n    data.benefits.push({\n      id: item.id,\n      iconURL: item.attributes.icon.data[0].attributes.url,\n      iconCaption: item.attributes.icon.data[0].attributes.caption,\n      caption: item.attributes.descr\n    });\n  });\n});\napp.get('*', function (req, res) {\n  var markup = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_shared_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    serverData: data\n  })));\n  res.send((0,_indexTemplate__WEBPACK_IMPORTED_MODULE_3__.indextemplate)(markup, serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data)));\n});\napp.listen(3000, function () {\n  console.log(\"server started on http://localhost:3000\");\n});\n\n//# sourceURL=webpack://ricc-app/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.jsx":
/*!****************************!*\
  !*** ./src/shared/App.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_App_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/App.global.scss */ \"./src/styles/App.global.scss\");\n/* harmony import */ var _styles_App_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_App_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_UI_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/UI/Header/Header */ \"./src/shared/UI/Header/Header.jsx\");\n/* harmony import */ var _shared_pages_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pages/Main */ \"./src/shared/pages/Main.jsx\");\n/* harmony import */ var _shared_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/UI/Footer/Footer */ \"./src/shared/UI/Footer/Footer.jsx\");\n/* harmony import */ var _shared_UI_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/UI/Preloader/Preloader */ \"./src/shared/UI/Preloader/Preloader.jsx\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.scss */ \"./src/shared/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _pages_Demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Demo */ \"./src/shared/pages/Demo.jsx\");\n/* harmony import */ var _assets_favicon_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/favicon/apple-touch-icon.png */ \"./src/assets/favicon/apple-touch-icon.png\");\n/* harmony import */ var _assets_favicon_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/favicon/favicon-32x32.png */ \"./src/assets/favicon/favicon-32x32.png\");\n/* harmony import */ var _assets_favicon_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/favicon/favicon-16x16.png */ \"./src/assets/favicon/favicon-16x16.png\");\n/* harmony import */ var _assets_favicon_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/favicon/android-chrome-192x192.png */ \"./src/assets/favicon/android-chrome-192x192.png\");\n/* harmony import */ var _assets_favicon_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/favicon/android-chrome-512x512.png */ \"./src/assets/favicon/android-chrome-512x512.png\");\n/* harmony import */ var _assets_favicon_safari_pinned_tab_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/favicon/safari-pinned-tab.svg */ \"./src/assets/favicon/safari-pinned-tab.svg\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../context */ \"./src/context/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import '../assets/favicon/site.webmanifest';\n\n\n\n\nvar App = function App(_ref) {\n  var serverData = _ref.serverData;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(serverData),\n      _useState2 = _slicedToArray(_useState, 2),\n      APIdata = _useState2[0],\n      setAPIdata = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_15__.AppContext.Provider, {\n    value: {\n      APIdata: APIdata,\n      setAPIdata: setAPIdata\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: ['page-wrapper', (_App_scss__WEBPACK_IMPORTED_MODULE_6___default().pageBg)].join(' ')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_UI_Header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_pages_Main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    path: \"/demo\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Demo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__.Footer, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://ricc-app/./src/shared/App.jsx?");

/***/ }),

/***/ "./src/shared/UI/BenefitItem/BenefitItem.jsx":
/*!***************************************************!*\
  !*** ./src/shared/UI/BenefitItem/BenefitItem.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BenefitItem\": () => (/* binding */ BenefitItem)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar BenefitItemComponent = function BenefitItemComponent(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n    className: props.class\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    className: props.classImg,\n    src: props.srcImg,\n    alt: props.altImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: props.classCaption\n  }, props.caption));\n};\n\nvar BenefitItem = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(BenefitItemComponent);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/BenefitItem/BenefitItem.jsx?");

/***/ }),

/***/ "./src/shared/UI/Button/Button.jsx":
/*!*****************************************!*\
  !*** ./src/shared/UI/Button/Button.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.scss */ \"./src/shared/UI/Button/Button.scss\");\n/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _excluded = [\"children\"];\n\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nvar ButtonComponent = function ButtonComponent(_ref) {\n  var children = _ref.children,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", _extends({}, props, {\n    className: (_Button_scss__WEBPACK_IMPORTED_MODULE_2___default().button)\n  }), children);\n};\n\nvar Button = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(ButtonComponent);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Button/Button.jsx?");

/***/ }),

/***/ "./src/shared/UI/Footer/Footer.jsx":
/*!*****************************************!*\
  !*** ./src/shared/UI/Footer/Footer.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.scss */ \"./src/shared/UI/Footer/Footer.scss\");\n/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar FooterComponent = function FooterComponent() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"footer\", {\n    className: (_Footer_scss__WEBPACK_IMPORTED_MODULE_2___default().footer)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"site-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, \"footer\")));\n};\n\nvar Footer = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(FooterComponent);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Footer/Footer.jsx?");

/***/ }),

/***/ "./src/shared/UI/Header/Header.jsx":
/*!*****************************************!*\
  !*** ./src/shared/UI/Header/Header.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.scss */ \"./src/shared/UI/Header/Header.scss\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button_Button_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button.jsx */ \"./src/shared/UI/Button/Button.jsx\");\n/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo/Logo */ \"./src/shared/UI/Logo/Logo.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar HeaderComponent = function HeaderComponent() {\n  var NavItems = [{\n    name: \"Benefits\",\n    link: \"#Benefits\"\n  }, {\n    name: \"RICC\",\n    link: \"#RICC\"\n  }, {\n    name: \"Contact us\",\n    link: \"#contactUs\"\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"header\", {\n    className: (_Header_scss__WEBPACK_IMPORTED_MODULE_2___default().header)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Header_scss__WEBPACK_IMPORTED_MODULE_2___default().container) + ' site-container'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n    className: [(_Header_scss__WEBPACK_IMPORTED_MODULE_2___default().logo), 'logo'].join(' '),\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__.Logo, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", {\n    className: (_Header_scss__WEBPACK_IMPORTED_MODULE_2___default().btns)\n  }, NavItems.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n      key: item.name,\n      className: (_Header_scss__WEBPACK_IMPORTED_MODULE_2___default().btnItem)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"a\", {\n      className: (_Header_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),\n      href: item.link\n    }, item.name));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n    className: (_Header_scss__WEBPACK_IMPORTED_MODULE_2___default().btnItem)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n    className: (_Header_scss__WEBPACK_IMPORTED_MODULE_2___default().demoBtn),\n    to: \"/demo\"\n  }, \"Try Demo\")))));\n};\n\nvar Header = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(HeaderComponent);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Header/Header.jsx?");

/***/ }),

/***/ "./src/shared/UI/Icons/ArrowRight.jsx":
/*!********************************************!*\
  !*** ./src/shared/UI/Icons/ArrowRight.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar ArrowRight = function ArrowRight(_ref) {\n  var props = _extends({}, _ref);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", _extends({}, props, {\n    viewBox: \"0 0 19 8\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5H18V3.5H0V4.5Z\",\n    fill: \"currentColor\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowRight);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Icons/ArrowRight.jsx?");

/***/ }),

/***/ "./src/shared/UI/Icons/IconPolygons.jsx":
/*!**********************************************!*\
  !*** ./src/shared/UI/Icons/IconPolygons.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar IconPolygons = function IconPolygons(_ref) {\n  var props = _extends({}, _ref);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", _extends({}, props, {\n    viewBox: \"0 0 181 148\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M154.795 94.8927L166.411 74.7719L189.645 74.7719L201.262 94.8927L189.645 115.014L166.411 115.014L154.795 94.8927Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M117.685 30.2365L129.302 10.1157L152.536 10.1157L164.152 30.2365L152.536 50.3573L129.302 50.3573L117.685 30.2365Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M80.4275 94.9259L92.0443 74.8051L115.278 74.8051L126.894 94.9259L115.278 115.047L92.0443 115.047L80.4275 94.9259Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M43.3181 30.2697L54.9349 10.1489L78.1684 10.1489L89.7851 30.2697L78.1684 50.3905L54.9349 50.3905L43.3181 30.2697Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M117.396 73.59L129.013 53.4692L152.246 53.4692L163.863 73.59L152.247 93.7108L129.013 93.7108L117.396 73.59Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M43.3689 73.59L54.9857 53.4692L78.2192 53.4692L89.8359 73.59L78.2192 93.7108L54.9857 93.7108L43.3689 73.59Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M117.345 116.82L128.962 96.6997L152.196 96.6997L163.812 116.82L152.196 136.941L128.962 136.941L117.345 116.82Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M80.2342 52.1642L91.8509 32.0434L115.084 32.0434L126.701 52.1642L115.084 72.285L91.8509 72.285L80.2342 52.1642Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M5.80837 52.1642L17.4251 32.0434L40.6586 32.0434L52.2754 52.1642L40.6586 72.285L17.4251 72.285L5.80837 52.1642Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M154.797 51.6623L166.413 31.5415L189.647 31.5415L201.264 51.6623L189.647 71.7831L166.413 71.7831L154.797 51.6623Z\",\n    fill: \"#33549F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    opacity: \"0.05\",\n    d: \"M154.797 9.18179L166.413 -10.939L189.647 -10.939L201.264 9.18179L189.647 29.3026L166.413 29.3026L154.797 9.18179Z\",\n    fill: \"#33549F\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPolygons);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Icons/IconPolygons.jsx?");

/***/ }),

/***/ "./src/shared/UI/Icons/ShevronLeft.jsx":
/*!*********************************************!*\
  !*** ./src/shared/UI/Icons/ShevronLeft.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar ShevronLeft = function ShevronLeft(_ref) {\n  var props = _extends({}, _ref);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", _extends({}, props, {\n    viewBox: \"0 0 10 18\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M9 1L1 9L9 17\",\n    stroke: \"white\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShevronLeft);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Icons/ShevronLeft.jsx?");

/***/ }),

/***/ "./src/shared/UI/Icons/ShevronRight.jsx":
/*!**********************************************!*\
  !*** ./src/shared/UI/Icons/ShevronRight.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar ShevronRight = function ShevronRight(_ref) {\n  var props = _extends({}, _ref);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", _extends({}, props, {\n    viewBox: \"0 0 10 18\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M1 1L9 9L1 17\",\n    stroke: \"white\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShevronRight);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Icons/ShevronRight.jsx?");

/***/ }),

/***/ "./src/shared/UI/Logo/Logo.jsx":
/*!*************************************!*\
  !*** ./src/shared/UI/Logo/Logo.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logo\": () => (/* binding */ Logo)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _API_StrapiAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../API/StrapiAPI */ \"./src/API/StrapiAPI.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context */ \"./src/context/index.js\");\n\n\n\n\n\nvar LogoComponent = function LogoComponent() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.AppContext),\n      APIdata = _useContext.APIdata,\n      setAPIdata = _useContext.setAPIdata;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    className: \"logo__img\",\n    src: 'http://localhost:1337' + APIdata.logo,\n    alt: \"RICC Logo\"\n  });\n};\n\nvar Logo = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(LogoComponent);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Logo/Logo.jsx?");

/***/ }),

/***/ "./src/shared/UI/Preloader/Preloader.jsx":
/*!***********************************************!*\
  !*** ./src/shared/UI/Preloader/Preloader.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/img/logo.svg */ \"./src/assets/img/logo.svg\");\n/* harmony import */ var _Preloader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Preloader.scss */ \"./src/shared/UI/Preloader/Preloader.scss\");\n/* harmony import */ var _Preloader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Preloader_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Preloader = function Preloader() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_Preloader_scss__WEBPACK_IMPORTED_MODULE_2___default().preloader)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    alt: \"Company Logo\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Preloader/Preloader.jsx?");

/***/ }),

/***/ "./src/shared/UI/SlideNav/SliderNav.jsx":
/*!**********************************************!*\
  !*** ./src/shared/UI/SlideNav/SliderNav.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icons_ShevronLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/ShevronLeft */ \"./src/shared/UI/Icons/ShevronLeft.jsx\");\n/* harmony import */ var _Icons_ShevronRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/ShevronRight */ \"./src/shared/UI/Icons/ShevronRight.jsx\");\n/* harmony import */ var _SlideNav_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SlideNav.scss */ \"./src/shared/UI/SlideNav/SlideNav.scss\");\n/* harmony import */ var _SlideNav_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SlideNav_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar SliderNav = function SliderNav() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_SlideNav_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderNav)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: (_SlideNav_scss__WEBPACK_IMPORTED_MODULE_3___default().btn)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons_ShevronLeft__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    width: \"10\",\n    height: \"18\",\n    className: (_SlideNav_scss__WEBPACK_IMPORTED_MODULE_3___default().btnIcon)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: [(_SlideNav_scss__WEBPACK_IMPORTED_MODULE_3___default().btn), (_SlideNav_scss__WEBPACK_IMPORTED_MODULE_3___default().isActive)].join(' ')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons_ShevronRight__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    width: \"10\",\n    height: \"18\",\n    className: (_SlideNav_scss__WEBPACK_IMPORTED_MODULE_3___default().btnIcon)\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderNav);\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/SlideNav/SliderNav.jsx?");

/***/ }),

/***/ "./src/shared/pages/Demo.jsx":
/*!***********************************!*\
  !*** ./src/shared/pages/Demo.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", {\n    className: \"page-main main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"site-container grid-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grid-container__block\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grid-container__block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Demo Page\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demo);\n\n//# sourceURL=webpack://ricc-app/./src/shared/pages/Demo.jsx?");

/***/ }),

/***/ "./src/shared/pages/Main.jsx":
/*!***********************************!*\
  !*** ./src/shared/pages/Main.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sections_Benefits_Benefits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/Benefits/Benefits */ \"./src/shared/pages/sections/Benefits/Benefits.jsx\");\n/* harmony import */ var _sections_Intro_Intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/Intro/Intro */ \"./src/shared/pages/sections/Intro/Intro.jsx\");\n/* harmony import */ var _sections_Types_Types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/Types/Types */ \"./src/shared/pages/sections/Types/Types.jsx\");\n\n\n\n\n\nvar Main = function Main() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", {\n    className: \"page-main main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"site-container grid-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grid-container__block\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grid-container__block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sections_Intro_Intro__WEBPACK_IMPORTED_MODULE_2__.Intro, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sections_Benefits_Benefits__WEBPACK_IMPORTED_MODULE_1__.Benefits, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sections_Types_Types__WEBPACK_IMPORTED_MODULE_3__.Types, null))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://ricc-app/./src/shared/pages/Main.jsx?");

/***/ }),

/***/ "./src/shared/pages/sections/Benefits/Benefits.jsx":
/*!*********************************************************!*\
  !*** ./src/shared/pages/sections/Benefits/Benefits.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Benefits\": () => (/* binding */ Benefits)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _API_StrapiAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../API/StrapiAPI */ \"./src/API/StrapiAPI.js\");\n/* harmony import */ var _Benefits_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Benefits.scss */ \"./src/shared/pages/sections/Benefits/Benefits.scss\");\n/* harmony import */ var _Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Benefits_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UI_BenefitItem_BenefitItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../UI/BenefitItem/BenefitItem */ \"./src/shared/UI/BenefitItem/BenefitItem.jsx\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../context */ \"./src/context/index.js\");\n\n\n\n\n\n\n\nvar BenefitsComponent = function BenefitsComponent() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.AppContext),\n      APIdata = _useContext.APIdata,\n      setAPIdata = _useContext.setAPIdata;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"section\", {\n    className: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().benefits)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().headingContainer)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().headingBlock)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h2\", {\n    className: [(_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().heading), 'site-second-heading'].join(' ')\n  }, \"Benefits of business intelligence\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \"in agriculture\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().headingBlock)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", {\n    className: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().headingText)\n  }, \"Business analysis with BI help you to use data effectively to manage your farm with maximum benefit.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().bodyContainer)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().bodyContainerBlock)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().bodyContainerBlock)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", {\n    className: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().list)\n  }, APIdata.benefits.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_BenefitItem_BenefitItem__WEBPACK_IMPORTED_MODULE_4__.BenefitItem, {\n      key: item.id,\n      class: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().item),\n      classImg: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().itemImg),\n      srcImg: 'http://localhost:1337' + item.iconURL,\n      altImg: item.iconCaption,\n      classCaption: (_Benefits_scss__WEBPACK_IMPORTED_MODULE_3___default().itemCaption),\n      caption: item.caption\n    });\n  })))));\n};\n\nvar Benefits = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(BenefitsComponent);\n\n//# sourceURL=webpack://ricc-app/./src/shared/pages/sections/Benefits/Benefits.jsx?");

/***/ }),

/***/ "./src/shared/pages/sections/Intro/Intro.jsx":
/*!***************************************************!*\
  !*** ./src/shared/pages/sections/Intro/Intro.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Intro\": () => (/* binding */ Intro)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _intro_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro.scss */ \"./src/shared/pages/sections/Intro/intro.scss\");\n/* harmony import */ var _intro_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_intro_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _API_StrapiAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../API/StrapiAPI */ \"./src/API/StrapiAPI.js\");\n/* harmony import */ var _UI_Icons_ArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../UI/Icons/ArrowRight */ \"./src/shared/UI/Icons/ArrowRight.jsx\");\n/* harmony import */ var _UI_Icons_IconPolygons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UI/Icons/IconPolygons */ \"./src/shared/UI/Icons/IconPolygons.jsx\");\n/* harmony import */ var _assets_img_intro_btn_tablet_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/img/intro-btn-tablet.png */ \"./src/assets/img/intro-btn-tablet.png\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../context */ \"./src/context/index.js\");\n\n\n\n\n\n\n\n\n\nvar introComponent = function introComponent() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_7__.AppContext),\n      APIdata = _useContext.APIdata,\n      setAPIdata = _useContext.setAPIdata;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"section\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().intro)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().container)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().block)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().headingText)\n  }, \"Business intelligence \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \" in agriculture\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().block)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().heading)\n  }, APIdata.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().text)\n  }, APIdata.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().btns)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDemo)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDemoImg),\n    src: _assets_img_intro_btn_tablet_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    alt: \"tablet\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDemoSmallText)\n  }, \"try the demo now\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDemoText)\n  }, \"Try demo\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: [(_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDemo), (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().modMore)].join(' ')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_Icons_IconPolygons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    width: \"181\",\n    height: \"148\",\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDemoImg)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_Icons_ArrowRight__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    width: \"19\",\n    height: \"8\",\n    className: ['icon', 'icon-arrow', (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDemoIcon)].join(' ')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: (_intro_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDemoText)\n  }, \"Know more about our solution\"))))));\n};\n\nvar Intro = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(introComponent);\n\n//# sourceURL=webpack://ricc-app/./src/shared/pages/sections/Intro/Intro.jsx?");

/***/ }),

/***/ "./src/shared/pages/sections/Types/Types.jsx":
/*!***************************************************!*\
  !*** ./src/shared/pages/sections/Types/Types.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Types\": () => (/* binding */ Types)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UI_SlideNav_SliderNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/SlideNav/SliderNav */ \"./src/shared/UI/SlideNav/SliderNav.jsx\");\n/* harmony import */ var _Types_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Types.scss */ \"./src/shared/pages/sections/Types/Types.scss\");\n/* harmony import */ var _Types_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Types_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_img_typesImage_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/img/typesImage.jpg */ \"./src/assets/img/typesImage.jpg\");\n/* harmony import */ var _assets_img_btnLines_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/img/btnLines.svg */ \"./src/assets/img/btnLines.svg\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ \"swiper/react\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar TypesComponent = function TypesComponent() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"section\", {\n    className: [(_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().types), (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().container)].join(' ')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h2\", {\n    className: [(_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().heading), 'site-second-heading'].join(' ')\n  }, \"It can be used for any types of farms\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \" and productions\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderContainer)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderContainerBlock)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_SlideNav_SliderNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderContainerBlock)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().slider),\n    spaceBetween: 50,\n    slidesPerView: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemImageWrapper)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_btnLines_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().btnBgLine),\n    alt: \"Crop production farms\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_typesImage_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().img),\n    alt: \"Crop production farms\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemCaption)\n  }, \"Crop production farms\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemImageWrapper)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_btnLines_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().btnBgLine),\n    alt: \"Crop production farms\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_typesImage_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().img),\n    alt: \"Crop production farms\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemCaption)\n  }, \"Crop production farms\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemImageWrapper)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_btnLines_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().btnBgLine),\n    alt: \"Crop production farms\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_typesImage_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().img),\n    alt: \"Crop production farms\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemCaption)\n  }, \"Crop production farms\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemImageWrapper)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_btnLines_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().btnBgLine),\n    alt: \"Crop production farms\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_typesImage_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().img),\n    alt: \"Crop production farms\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemCaption)\n  }, \"Crop production farms\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemImageWrapper)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_btnLines_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().btnBgLine),\n    alt: \"Crop production farms\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _assets_img_typesImage_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().img),\n    alt: \"Crop production farms\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: (_Types_scss__WEBPACK_IMPORTED_MODULE_3___default().itemCaption)\n  }, \"Crop production farms\")))))));\n};\n\nvar Types = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(TypesComponent);\n\n//# sourceURL=webpack://ricc-app/./src/shared/pages/sections/Types/Types.jsx?");

/***/ }),

/***/ "./src/styles/App.global.scss":
/*!************************************!*\
  !*** ./src/styles/App.global.scss ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/Montserrat-Light.woff2 */ \"./src/assets/fonts/Montserrat-Light.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/fonts/Montserrat-Light.woff */ \"./src/assets/fonts/Montserrat-Light.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../assets/fonts/Montserrat-Regular.woff2 */ \"./src/assets/fonts/Montserrat-Regular.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../assets/fonts/Montserrat-Regular.woff */ \"./src/assets/fonts/Montserrat-Regular.woff\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../assets/fonts/Montserrat-Medium.woff2 */ \"./src/assets/fonts/Montserrat-Medium.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../assets/fonts/Montserrat-Medium.woff */ \"./src/assets/fonts/Montserrat-Medium.woff\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../assets/fonts/Montserrat-Bold.woff2 */ \"./src/assets/fonts/Montserrat-Bold.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../assets/fonts/Montserrat-Bold.woff */ \"./src/assets/fonts/Montserrat-Bold.woff\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\n// Module\nexports.push([module.id, \":root{--color-primary:#33549f;--color-white:#fff;--color-dark:#191919;--color-purple-text:#a1b3e3;--color-accent1:#2966ff;--color-accent2:#a82f93;--color-page-bg:#06112e;--color-gradient:linear-gradient(90deg,#c824ab -14.84%,#2966ff 115.23%);--main-ff:\\\"Montserrat\\\",sans-serif;--font-heading-h1:300 7rem/100% var(--main-ff);--font-heading-h2:700 4rem/100% var(--main-ff);--font-heading-h3:300 3rem/111% var(--main-ff);--font-btn-s:400 1.2rem/1.5rem var(--main-ff);--font-btn-m:400 1.6rem/2rem var(--main-ff);--font-body:400 1.6rem/2rem var(--main-ff);--font-body-M:400 2.4rem/3.1rem var(--main-ff);--content-padding:60px;--grid-offset:20px;--header-height:14rem;--transition:200ms}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}[hidden]{display:none}body{line-height:1}menu,ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\\\"\\\";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\\\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\\\") format(\\\"woff\\\")}:root{--swiper-theme-color:#007aff}.swiper-container{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{-webkit-box-sizing:content-box;box-sizing:content-box;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;width:100%;z-index:1}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{margin:0 auto;-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-slide{-ms-flex-negative:0;flex-shrink:0;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;width:100%}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}@font-face{font-display:swap;font-family:Montserrat;font-style:normal;font-weight:300;src:url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"),url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\")}@font-face{font-display:swap;font-family:Montserrat;font-style:normal;font-weight:400;src:url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff2\\\"),url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"woff\\\")}@font-face{font-display:swap;font-family:Montserrat;font-style:normal;font-weight:500;src:url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format(\\\"woff2\\\"),url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format(\\\"woff\\\")}@font-face{font-display:swap;font-family:Montserrat;font-style:normal;font-weight:700;src:url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format(\\\"woff2\\\"),url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format(\\\"woff\\\")}*,:after,:before{-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;line-height:1.2}@media screen and (max-width:1536px){html{font-size:9px}}@media screen and (max-width:1199px){html{font-size:8px}}@media screen and (max-width:767px){html{font-size:10px}}@media screen and (max-width:310px){html{font-size:8px}}body{background-color:var(--color-page-bg);color:var(--color-white);font:var(--font-body)}ol,ul{list-style:none}ol{counter-reset:ordered-list}ol>li{counter-increment:ordered-list}ol>li:before{content:counter(ordered-list,decimal-leading-zero) \\\".\\\"}input,textarea{background-color:transparent;border:none;border-radius:0;-webkit-box-shadow:none;box-shadow:none;display:block;font:inherit;outline:none;width:100%}input:not([type=checkbox]):not([type=radio]){-moz-appearance:none;appearance:none;-webkit-appearance:none}textarea{-webkit-box-shadow:none;box-shadow:none;display:block;height:20rem;overflow:auto;resize:none;width:100%}textarea::-webkit-scrollbar{background-color:var(--color-grey-300);width:.2rem}textarea::-webkit-scrollbar-thumb{background:var(--color-grey-600)}textarea::-webkit-scrollbar-button{display:none}textarea::-webkit-scrollbar-track{background-color:var(--color-grey-300)}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}input[type=search]{-webkit-appearance:textfield;outline-offset:-2px}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input[type=search]::-webkit-search-cancel-button{-webkit-appearance:none;display:none}button{-webkit-appearance:none;border:none;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font:inherit;margin:0;outline:none;padding:0;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a,button{background-color:transparent;-webkit-transition:color .2s;-o-transition:color .2s;transition:color .2s}a{color:inherit;text-decoration:none}svg{-ms-flex-negative:0;fill:currentColor;display:block;flex-shrink:0;-webkit-transition:fill .2s;-o-transition:fill .2s;transition:fill .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}img{height:auto;max-width:100%;vertical-align:middle}.list-rest{list-style:none;margin:0;padding:0}.visually-hidden{clip:rect(0 0 0 0);height:1px;margin:-1px;position:absolute;width:1px}.site-container{margin-left:auto;margin-right:auto;max-width:1680px;padding-left:var(--content-padding);padding-right:var(--content-padding);width:100%}.page-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100vh;overflow:hidden}.page-main{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.button-reset{background-color:transparent;border:none;border-radius:0;margin:0;padding:0}.js-focus-visible button:focus:not(.focus-visible){outline:none}button{color:inherit}button:focus{outline:none}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,select:-webkit-autofill,select:-webkit-autofill:focus,select:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{background-color:transparent}.grid-container{display:grid;gap:var(--grid-offset);grid-template-columns:repeat(12,1fr)}.grid-container__block:first-child{grid-column:span 1}.grid-container__block:nth-child(2){grid-column:span 11}.disable-scroll{height:100vh;left:0;overflow:hidden;position:fixed;top:0;width:100%}.logo{max-width:12.6rem;width:100%}.logo img{display:block;height:auto;width:100%}.site-second-heading{font:var(--font-heading-h2);text-transform:uppercase}.site-second-heading span{font-weight:300}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ricc-app/./src/styles/App.global.scss?");

/***/ }),

/***/ "./src/shared/App.scss":
/*!*****************************!*\
  !*** ./src/shared/App.scss ***!
  \*****************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"pageBg\": \"App-pageBg--3myPg\"\n};\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/App.scss?");

/***/ }),

/***/ "./src/shared/UI/Button/Button.scss":
/*!******************************************!*\
  !*** ./src/shared/UI/Button/Button.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"Button-button--2h14w\"\n};\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Button/Button.scss?");

/***/ }),

/***/ "./src/shared/UI/Footer/Footer.scss":
/*!******************************************!*\
  !*** ./src/shared/UI/Footer/Footer.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"footer\": \"Footer-footer--1BsWj\"\n};\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Footer/Footer.scss?");

/***/ }),

/***/ "./src/shared/UI/Header/Header.scss":
/*!******************************************!*\
  !*** ./src/shared/UI/Header/Header.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header-header--nNTur\",\n\t\"container\": \"Header-container--2RO7d\",\n\t\"logo\": \"Header-logo--245Bb\",\n\t\"btns\": \"Header-btns--3o9FD\",\n\t\"btnItem\": \"Header-btnItem--ku5St\",\n\t\"btn\": \"Header-btn--2ezXD\",\n\t\"demoBtn\": \"Header-demoBtn--3kxdv\"\n};\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Header/Header.scss?");

/***/ }),

/***/ "./src/shared/UI/Preloader/Preloader.scss":
/*!************************************************!*\
  !*** ./src/shared/UI/Preloader/Preloader.scss ***!
  \************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"preloader\": \"Preloader-preloader--1rF2P\"\n};\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Preloader/Preloader.scss?");

/***/ }),

/***/ "./src/shared/UI/SlideNav/SlideNav.scss":
/*!**********************************************!*\
  !*** ./src/shared/UI/SlideNav/SlideNav.scss ***!
  \**********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"sliderNav\": \"SlideNav-sliderNav--SH-Ke\",\n\t\"btn\": \"SlideNav-btn--1Tnzl\",\n\t\"isActive\": \"SlideNav-isActive--3oA88\",\n\t\"btnIcon\": \"SlideNav-btnIcon--F9JyI\"\n};\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/SlideNav/SlideNav.scss?");

/***/ }),

/***/ "./src/shared/pages/sections/Benefits/Benefits.scss":
/*!**********************************************************!*\
  !*** ./src/shared/pages/sections/Benefits/Benefits.scss ***!
  \**********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"benefits\": \"Benefits-benefits--1JSPw\",\n\t\"headingContainer\": \"Benefits-headingContainer--3baxc\",\n\t\"headingBlock\": \"Benefits-headingBlock--2v8a-\",\n\t\"heading\": \"Benefits-heading--1H7Le\",\n\t\"headingText\": \"Benefits-headingText--hoSTU\",\n\t\"bodyContainer\": \"Benefits-bodyContainer--303wk\",\n\t\"bodyContainerBlock\": \"Benefits-bodyContainerBlock--1aCZD\",\n\t\"list\": \"Benefits-list--346QJ\",\n\t\"item\": \"Benefits-item--2ynda\",\n\t\"itemImg\": \"Benefits-itemImg--psL-2\",\n\t\"itemCaption\": \"Benefits-itemCaption--2sU64\"\n};\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/pages/sections/Benefits/Benefits.scss?");

/***/ }),

/***/ "./src/shared/pages/sections/Intro/intro.scss":
/*!****************************************************!*\
  !*** ./src/shared/pages/sections/Intro/intro.scss ***!
  \****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"intro\": \"intro-intro--lNZY6\",\n\t\"container\": \"intro-container--6ekhR\",\n\t\"block\": \"intro-block--1H2Dh\",\n\t\"headingText\": \"intro-headingText--2YgZZ\",\n\t\"heading\": \"intro-heading--3h8jE\",\n\t\"text\": \"intro-text--KDhGy\",\n\t\"btns\": \"intro-btns--3GRPj\",\n\t\"btnDemo\": \"intro-btnDemo--ikq5I\",\n\t\"modMore\": \"intro-modMore--2pkTX\",\n\t\"btnDemoImg\": \"intro-btnDemoImg--2scX-\",\n\t\"btnDemoSmallText\": \"intro-btnDemoSmallText--BCnmz\",\n\t\"btnDemoText\": \"intro-btnDemoText--23-Hx\",\n\t\"btnDemoIcon\": \"intro-btnDemoIcon--3hoX2\"\n};\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/pages/sections/Intro/intro.scss?");

/***/ }),

/***/ "./src/shared/pages/sections/Types/Types.scss":
/*!****************************************************!*\
  !*** ./src/shared/pages/sections/Types/Types.scss ***!
  \****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"types\": \"Types-types--3wCWo\",\n\t\"heading\": \"Types-heading--1_jEa\",\n\t\"sliderContainer\": \"Types-sliderContainer--2Xcla\",\n\t\"sliderContainerBlock\": \"Types-sliderContainerBlock--1uRPo\",\n\t\"item\": \"Types-item--3pPWk\",\n\t\"itemImageWrapper\": \"Types-itemImageWrapper--pDeg0\",\n\t\"img\": \"Types-img--3xe9E\",\n\t\"itemCaption\": \"Types-itemCaption--1VroJ\",\n\t\"btnBgLine\": \"Types-btnBgLine--3KxeY\",\n\t\"slider\": \"Types-slider--21ZNx\"\n};\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/pages/sections/Types/Types.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://ricc-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://ricc-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Bold.woff":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Montserrat-Bold.woff ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Montserrat-Bold.woff\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/fonts/Montserrat-Bold.woff?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Bold.woff2":
/*!************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Bold.woff2 ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Montserrat-Bold.woff2\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/fonts/Montserrat-Bold.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Light.woff":
/*!************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Light.woff ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Montserrat-Light.woff\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/fonts/Montserrat-Light.woff?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Light.woff2":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Light.woff2 ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Montserrat-Light.woff2\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/fonts/Montserrat-Light.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Medium.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Medium.woff ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Montserrat-Medium.woff\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/fonts/Montserrat-Medium.woff?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Medium.woff2":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Medium.woff2 ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Montserrat-Medium.woff2\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/fonts/Montserrat-Medium.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.woff":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.woff ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Montserrat-Regular.woff\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/fonts/Montserrat-Regular.woff?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.woff2":
/*!***************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.woff2 ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Montserrat-Regular.woff2\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/fonts/Montserrat-Regular.woff2?");

/***/ }),

/***/ "./src/assets/favicon/android-chrome-192x192.png":
/*!*******************************************************!*\
  !*** ./src/assets/favicon/android-chrome-192x192.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"android-chrome-192x192.png\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/favicon/android-chrome-192x192.png?");

/***/ }),

/***/ "./src/assets/favicon/android-chrome-512x512.png":
/*!*******************************************************!*\
  !*** ./src/assets/favicon/android-chrome-512x512.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"android-chrome-512x512.png\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/favicon/android-chrome-512x512.png?");

/***/ }),

/***/ "./src/assets/favicon/apple-touch-icon.png":
/*!*************************************************!*\
  !*** ./src/assets/favicon/apple-touch-icon.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"apple-touch-icon.png\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/favicon/apple-touch-icon.png?");

/***/ }),

/***/ "./src/assets/favicon/favicon-16x16.png":
/*!**********************************************!*\
  !*** ./src/assets/favicon/favicon-16x16.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"favicon-16x16.png\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/favicon/favicon-16x16.png?");

/***/ }),

/***/ "./src/assets/favicon/favicon-32x32.png":
/*!**********************************************!*\
  !*** ./src/assets/favicon/favicon-32x32.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"favicon-32x32.png\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/favicon/favicon-32x32.png?");

/***/ }),

/***/ "./src/assets/favicon/safari-pinned-tab.svg":
/*!**************************************************!*\
  !*** ./src/assets/favicon/safari-pinned-tab.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"safari-pinned-tab.svg\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/favicon/safari-pinned-tab.svg?");

/***/ }),

/***/ "./src/assets/img/btnLines.svg":
/*!*************************************!*\
  !*** ./src/assets/img/btnLines.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"btnLines.svg\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/img/btnLines.svg?");

/***/ }),

/***/ "./src/assets/img/intro-btn-tablet.png":
/*!*********************************************!*\
  !*** ./src/assets/img/intro-btn-tablet.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"intro-btn-tablet.png\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/img/intro-btn-tablet.png?");

/***/ }),

/***/ "./src/assets/img/logo.svg":
/*!*********************************!*\
  !*** ./src/assets/img/logo.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"logo.svg\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/img/logo.svg?");

/***/ }),

/***/ "./src/assets/img/typesImage.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/typesImage.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"typesImage.jpg\");\n\n//# sourceURL=webpack://ricc-app/./src/assets/img/typesImage.jpg?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-loader/root");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("serialize-javascript");

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("swiper/react");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;