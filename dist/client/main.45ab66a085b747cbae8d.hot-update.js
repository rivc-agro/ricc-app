"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatericc_app"]("main",{

/***/ "./src/shared/UI/Header/Header.jsx":
/*!*****************************************!*\
  !*** ./src/shared/UI/Header/Header.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Header = void 0;\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst Header_scss_1 = __importDefault(__webpack_require__(/*! ./Header.scss */ \"./src/shared/UI/Header/Header.scss\"));\r\nconst Button_jsx_1 = __webpack_require__(/*! ../Button/Button.jsx */ \"./src/shared/UI/Button/Button.jsx\");\r\nconst HeaderComponent = () => {\r\n    const NavItems = [\r\n        {\r\n            name: \"Benefits\",\r\n            link: \"#Benefits\"\r\n        },\r\n        {\r\n            name: \"RICC\",\r\n            link: \"#RICC\",\r\n        },\r\n        {\r\n            name: \"Contact us\",\r\n            link: \"#contactUs\"\r\n        }\r\n    ];\r\n    return (react_1.default.createElement(\"header\", { className: Header_scss_1.default.header },\r\n        react_1.default.createElement(\"div\", { className: Header_scss_1.default.container + ' site-container' },\r\n            react_1.default.createElement(\"a\", { className: Header_scss_1.default.logo, href: \"\" },\r\n                react_1.default.createElement(\"img\", { className: \"logo__img\", src: \"\", alt: \"RICC Logo\" })),\r\n            react_1.default.createElement(\"ul\", { className: Header_scss_1.default.btns },\r\n                NavItems.map(item => react_1.default.createElement(\"li\", { key: item.name, className: Header_scss_1.default.btnItem },\r\n                    react_1.default.createElement(\"a\", { className: Header_scss_1.default.btn, href: item.link }, item.name))),\r\n                react_1.default.createElement(\"li\", { className: Header_scss_1.default.btnItem },\r\n                    react_1.default.createElement(Button_jsx_1.Button, null, \"Try Demo\"))))));\r\n};\r\nexports.Header = (0, root_1.hot)(HeaderComponent);\r\n\n\n//# sourceURL=webpack://ricc-app/./src/shared/UI/Header/Header.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8d7f95bff1da0c7d8a4d"; }
/******/ }();
/******/ 
/******/ }
);