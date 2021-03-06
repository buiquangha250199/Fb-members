/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/forgot-password/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/forgot-password/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"div.form {\\r\\n    position: relative;\\r\\n    height: 500px;\\r\\n    width: 400px;\\r\\n    background-color: #fff;\\r\\n    border-radius: 10px;\\r\\n    overflow: hidden;\\r\\n    display: block;\\r\\n    box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\ndiv.form-title {\\r\\n    text-transform: uppercase;\\r\\n    text-align: center;\\r\\n    margin-top: 85px;\\r\\n    margin-bottom: 30px;\\r\\n    font-family: Poppins-Bold;\\r\\n    font-size: 24px;\\r\\n    color: #333333;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\ninput {\\r\\n    font-family: Poppins-Medium;\\r\\n    font-size: 15px;\\r\\n    line-height: 1.5;\\r\\n    color: #666666;\\r\\n    display: block;\\r\\n    background: #e6e6e6;\\r\\n    height: 50px;\\r\\n    border-radius: 25px;\\r\\n    padding: 0px 0px 0 68px;\\r\\n}\\r\\n\\r\\n.text1{\\r\\n    font-family: Poppins-Regular;\\r\\n    font-size: 13px;\\r\\n    line-height: 1.5;\\r\\n    color: #999999;\\r\\n}\\r\\n\\r\\n.text2{\\r\\n    font-family: Poppins-Regular;\\r\\n    font-size: 13px;\\r\\n    line-height: 1.5;\\r\\n    color: #666666;\\r\\n}\\r\\n\\r\\n.text2:hover {\\r\\n    color: #57b846;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 600px) {\\r\\n   div.form {\\r\\n    width: 300px;\\r\\n    height: 400px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.input-form {\\r\\n\\tposition: relative;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-self: center;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\ndiv.icon {\\r\\n\\tfont-size: 15px;\\r\\n    display: -webkit-box;\\r\\n    display: -webkit-flex;\\r\\n    display: -moz-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    position: absolute;\\r\\n    justify-content: center;\\r\\n    border-radius: 25px;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin-left: -90px;\\r\\n    pointer-events: none;\\r\\n    color: #666666;\\r\\n    -webkit-transition: all 0.4s;\\r\\n    -o-transition: all 0.4s;\\r\\n    -moz-transition: all 0.4s;\\r\\n    transition: all 0.4s;\\r\\n}\\r\\nbutton#submit {\\r\\n    margin: auto;\\r\\n\\tmargin-bottom: 5px;\\r\\n\\tfont-family: Montserrat-Bold;\\r\\n\\tcursor: pointer;\\r\\n    font-size: 15px;\\r\\n    line-height: 1.5;\\r\\n    color: #fff;\\r\\n    text-transform: uppercase;\\r\\n    width: 259px;\\r\\n    height: 50px;\\r\\n    border-radius: 25px;\\r\\n    background: #57b846;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    padding: 0 25px;\\r\\n}\\r\\nbutton#submit:hover {\\r\\n\\tbackground-color: #333333;\\r\\n}\\r\\n\\r\\n.forgot-password{\\r\\n\\ttext-align: center;\\r\\n}\\r\\n\\r\\ndiv#create {\\r\\n    margin-top: 15px;\\r\\n    text-align: center;\\r\\n    color: #6666666;\\r\\n}\\r\\n\\r\\n#register .password {\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\ndiv.message {\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 40px;\\r\\n    width: 100%;\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.alert-false {\\r\\n    font-weight: bold;\\r\\n    text-align: center;\\r\\n    padding: 20px;\\r\\n    color: #721c24;\\r\\n    background-color: #f8d7da;\\r\\n    border-color: #f5c6cb;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.alert-true {\\r\\n    font-weight: bold;\\r\\n    text-align: center;\\r\\n    padding: 20px;\\r\\n    color: #155724;\\r\\n    background-color: #d4edda;\\r\\n    border-color: #c3e6cb;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.closebtn {\\r\\n  margin-left: 15px;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  float: right;\\r\\n  font-size: 22px;\\r\\n  line-height: 20px;\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.closebtn:hover {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.status {\\r\\n    text-transform: uppercase;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/forgot-password/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/login-page/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/login-page/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"div.form {\\r\\n    position: relative;\\r\\n    height: 500px;\\r\\n    width: 400px;\\r\\n    background-color: #fff;\\r\\n    border-radius: 10px;\\r\\n    overflow: hidden;\\r\\n    display: block;\\r\\n    box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\ndiv.form-title {\\r\\n    text-transform: uppercase;\\r\\n    text-align: center;\\r\\n    margin-top: 85px;\\r\\n    margin-bottom: 30px;\\r\\n    font-family: Poppins-Bold;\\r\\n    font-size: 24px;\\r\\n    color: #333333;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\ninput {\\r\\n    font-family: Poppins-Medium;\\r\\n    font-size: 15px;\\r\\n    line-height: 1.5;\\r\\n    color: #666666;\\r\\n    display: block;\\r\\n    background: #e6e6e6;\\r\\n    height: 50px;\\r\\n    border-radius: 25px;\\r\\n    padding: 0px 0px 0 68px;\\r\\n}\\r\\n\\r\\n.text1{\\r\\n    font-family: Poppins-Regular;\\r\\n    font-size: 13px;\\r\\n    line-height: 1.5;\\r\\n    color: #999999;\\r\\n}\\r\\n\\r\\n.text2{\\r\\n    font-family: Poppins-Regular;\\r\\n    font-size: 13px;\\r\\n    line-height: 1.5;\\r\\n    color: #666666;\\r\\n}\\r\\n\\r\\n.text2:hover {\\r\\n    color: #57b846;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 600px) {\\r\\n   div.form {\\r\\n    width: 300px;\\r\\n    height: 400px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.input-form {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-self: center;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\ndiv.icon {\\r\\n    font-size: 15px;\\r\\n    display: -webkit-box;\\r\\n    display: -webkit-flex;\\r\\n    display: -moz-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    position: absolute;\\r\\n    justify-content: center;\\r\\n    border-radius: 25px;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin-left: -90px;\\r\\n    pointer-events: none;\\r\\n    color: #666666;\\r\\n    -webkit-transition: all 0.4s;\\r\\n    -o-transition: all 0.4s;\\r\\n    -moz-transition: all 0.4s;\\r\\n    transition: all 0.4s;\\r\\n}\\r\\nbutton#submit {\\r\\n    margin: auto;\\r\\n    margin-bottom: 5px;\\r\\n    font-family: Montserrat-Bold;\\r\\n    cursor: pointer;\\r\\n    font-size: 15px;\\r\\n    line-height: 1.5;\\r\\n    color: #fff;\\r\\n    text-transform: uppercase;\\r\\n    width: 259px;\\r\\n    height: 50px;\\r\\n    border-radius: 25px;\\r\\n    background: #57b846;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    padding: 0 25px;\\r\\n}\\r\\nbutton#submit:hover {\\r\\n    background-color: #333333;\\r\\n}\\r\\n\\r\\n.forgot-password{\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\ndiv#create {\\r\\n    margin-top: 15px;\\r\\n    text-align: center;\\r\\n    color: #6666666;\\r\\n}\\r\\n\\r\\n#register .password {\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\ndiv.message {\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 40px;\\r\\n    width: 100%;\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.alert-false {\\r\\n    font-weight: bold;\\r\\n    text-align: center;\\r\\n    padding: 20px;\\r\\n    color: #721c24;\\r\\n    background-color: #f8d7da;\\r\\n    border-color: #f5c6cb;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.alert-true {\\r\\n    font-weight: bold;\\r\\n    text-align: center;\\r\\n    padding: 20px;\\r\\n    color: #155724;\\r\\n    background-color: #d4edda;\\r\\n    border-color: #c3e6cb;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.closebtn {\\r\\n  margin-left: 15px;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  float: right;\\r\\n  font-size: 22px;\\r\\n  line-height: 20px;\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.closebtn:hover {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.status {\\r\\n    text-transform: uppercase;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/login-page/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/platform-page/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/platform-page/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"platform-page .dropbtn {\\r\\n  background-color: #57b846;\\r\\n  color: #fff;\\r\\n  padding: 16px;\\r\\n  font-size: 16px;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nplatform-page .dropdown {\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n  margin-top: 65px;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nplatform-page .dropdown-content {\\r\\n  display: none;\\r\\n  cursor: pointer;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  margin-top: 45px;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background-color: #f9f9f9;\\r\\n  text-transform: capitalize;\\r\\n  min-width: 160px;\\r\\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\nplatform-page .dropdown-content span {\\r\\n  color: black;\\r\\n  padding: 12px 16px;\\r\\n  text-decoration: none;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\nplatform-page .dropdown-content span:hover {background-color: #f2f2f2}\\r\\n\\r\\nplatform-page .dropdown:hover .dropdown-content {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\nplatform-page .dropdown:hover .dropbtn {\\r\\n  background-color: #333333;\\r\\n}\\r\\n\\r\\nplatform-page input {\\r\\n  border-radius: 0;\\r\\n}\\r\\n\\r\\nplatform-page form.form-inline{\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n} \\r\\n\\r\\nplatform-page div#name-platform {\\r\\n  text-align: center;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\nplatform-page button#send {\\r\\n  height: 50px;\\r\\n  width: 100px;\\r\\n  color: #fff;\\r\\n  background-color: #57b846;\\r\\n\\r\\n}\\r\\n\\r\\nplatform-page div.form {\\r\\n  margin: 10px 0px;\\r\\n  position: relative;\\r\\n  height: 700px;\\r\\n  width: 700px;\\r\\n  background-color: #fff;\\r\\n  border-radius: 10px;\\r\\n  overflow: hidden;\\r\\n  display: block;\\r\\n  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n  -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n  -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n  -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n  -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\nplatform-page div.form-title {\\r\\n  text-transform: uppercase;\\r\\n  text-align: center;\\r\\n  margin-top: 0px;\\r\\n  margin-bottom: 30px;\\r\\n  font-family: Poppins-Bold;\\r\\n  font-size: 24px;\\r\\n  color: #333333;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nplatform-page .alert-false {\\r\\n  font-weight: bold;\\r\\n  text-align: center;\\r\\n  padding: 20px;\\r\\n  color: #721c24;\\r\\n  background-color: #f8d7da;\\r\\n  border-color: #f5c6cb;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nplatform-page .alert-true {\\r\\n  font-weight: bold;\\r\\n  text-align: center;\\r\\n  padding: 20px;\\r\\n  color: #155724;\\r\\n  background-color: #d4edda;\\r\\n  border-color: #c3e6cb;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nplatform-page div#list-groups {\\r\\n    text-align: center;\\r\\n    margin-top: 15px;\\r\\n}\\r\\n\\r\\nplatform-page a.url-fail {\\r\\n    display: block;\\r\\n    background-color: antiquewhite;\\r\\n    margin-bottom: 5px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\nplatform-page a.url-done {\\r\\n    display: block;\\r\\n    background-color: #d4edda;\\r\\n    margin-bottom: 5px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 600px) {\\r\\n  platform-page div.form {\\r\\n    width: 300px;\\r\\n    height: 600px;\\r\\n  }\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/platform-page/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/register-page/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/register-page/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"div.form {\\r\\n    position: relative;\\r\\n    height: 500px;\\r\\n    width: 400px;\\r\\n    background-color: #fff;\\r\\n    border-radius: 10px;\\r\\n    overflow: hidden;\\r\\n    display: block;\\r\\n    box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n    -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\ndiv.form-title {\\r\\n    text-transform: uppercase;\\r\\n    text-align: center;\\r\\n    margin-top: 85px;\\r\\n    margin-bottom: 30px;\\r\\n    font-family: Poppins-Bold;\\r\\n    font-size: 24px;\\r\\n    color: #333333;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\ninput {\\r\\n    font-family: Poppins-Medium;\\r\\n    font-size: 15px;\\r\\n    line-height: 1.5;\\r\\n    color: #666666;\\r\\n    display: block;\\r\\n    background: #e6e6e6;\\r\\n    height: 50px;\\r\\n    border-radius: 25px;\\r\\n    padding: 0px 0px 0 68px;\\r\\n}\\r\\n\\r\\n.text1{\\r\\n    font-family: Poppins-Regular;\\r\\n    font-size: 13px;\\r\\n    line-height: 1.5;\\r\\n    color: #999999;\\r\\n}\\r\\n\\r\\n.text2{\\r\\n    font-family: Poppins-Regular;\\r\\n    font-size: 13px;\\r\\n    line-height: 1.5;\\r\\n    color: #666666;\\r\\n}\\r\\n\\r\\n.text2:hover {\\r\\n    color: #57b846;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 600px) {\\r\\n   div.form {\\r\\n    width: 300px;\\r\\n    height: 400px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.input-form {\\r\\n\\tposition: relative;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-self: center;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\ndiv.icon {\\r\\n\\tfont-size: 15px;\\r\\n    display: -webkit-box;\\r\\n    display: -webkit-flex;\\r\\n    display: -moz-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    position: absolute;\\r\\n    justify-content: center;\\r\\n    border-radius: 25px;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin-left: -90px;\\r\\n    pointer-events: none;\\r\\n    color: #666666;\\r\\n    -webkit-transition: all 0.4s;\\r\\n    -o-transition: all 0.4s;\\r\\n    -moz-transition: all 0.4s;\\r\\n    transition: all 0.4s;\\r\\n}\\r\\nbutton#submit {\\r\\n    margin: auto;\\r\\n\\tmargin-bottom: 5px;\\r\\n\\tfont-family: Montserrat-Bold;\\r\\n\\tcursor: pointer;\\r\\n    font-size: 15px;\\r\\n    line-height: 1.5;\\r\\n    color: #fff;\\r\\n    text-transform: uppercase;\\r\\n    width: 259px;\\r\\n    height: 50px;\\r\\n    border-radius: 25px;\\r\\n    background: #57b846;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    padding: 0 25px;\\r\\n}\\r\\nbutton#submit:hover {\\r\\n\\tbackground-color: #333333;\\r\\n}\\r\\n\\r\\n.forgot-password{\\r\\n\\ttext-align: center;\\r\\n}\\r\\n\\r\\ndiv#create {\\r\\n    margin-top: 15px;\\r\\n    text-align: center;\\r\\n    color: #6666666;\\r\\n}\\r\\n\\r\\n#register .password {\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\ndiv.message {\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 40px;\\r\\n    width: 100%;\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.alert-false {\\r\\n    font-weight: bold;\\r\\n    text-align: center;\\r\\n    padding: 20px;\\r\\n    color: #721c24;\\r\\n    background-color: #f8d7da;\\r\\n    border-color: #f5c6cb;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.alert-true {\\r\\n    font-weight: bold;\\r\\n    text-align: center;\\r\\n    padding: 20px;\\r\\n    color: #155724;\\r\\n    background-color: #d4edda;\\r\\n    border-color: #c3e6cb;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.closebtn {\\r\\n  margin-left: 15px;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  float: right;\\r\\n  font-size: 22px;\\r\\n  line-height: 20px;\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.closebtn:hover {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.status {\\r\\n    text-transform: uppercase;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/register-page/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app-service/index.js":
/*!**********************************!*\
  !*** ./src/app-service/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const moduleName = \"appService\";\r\nmodule.exports = moduleName;\r\n\r\nangular.module(moduleName, [])\r\n\r\n.factory('AuthenticationService', ['$http', '$rootScope', function ($http, $rootScope) {\r\n\r\n    var service = {};\r\n\r\n    service.Login = function (username, password, callback) {\r\n\r\n        console.log('login service works.');\r\n\r\n        var req = {\r\n            method: 'POST',\r\n            url: 'https://fb-members.sellpro.vn/api/v1/accounts/login',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            data: {\r\n                'user_name': username,\r\n                'password' : password\r\n            }\r\n        }\r\n\r\n        $http(req).then(function (res) {\r\n            callback(res);\r\n\r\n        }, function (res) {\r\n            $scope.res = res.status;\r\n            console.log($scope.res);\r\n        }); \r\n\r\n    }\r\n\r\n    service.Register = function (username, password, email, callback) {\r\n\r\n        var req = {\r\n            method: 'POST',\r\n            url: 'https://fb-members.sellpro.vn/api/v1/accounts/register',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            data: {\r\n                'user_name': username,\r\n                'password' : password,\r\n                'email'    : email\r\n            }\r\n        }\r\n\r\n        $http(req).then(function (res) {\r\n            callback(res);\r\n\r\n        }, function (res) {\r\n            $scope.res = res.status;\r\n            console.log($scope.res);\r\n        }); \r\n\r\n    }\r\n\r\n    return service;\r\n    \r\n}])\r\n\r\n.factory('FacebookPlatformService', ['$http', '$rootScope', function ($http, $rootScope) {\r\n\r\n    var service = {};\r\n\r\n    service.SendCookie = function (cookie, platform_id, callback) {\r\n\r\n        let sendCookieReq = {\r\n            method: 'POST',\r\n            url: 'https://fb-members.sellpro.vn/api/v1/cookies',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n                'token': localStorage.token\r\n            },\r\n            data: {\r\n                'cookie': cookie,\r\n                'platform_id': platform_id\r\n            }\r\n\r\n        }\r\n\r\n        $http(sendCookieReq).then(function (res) {\r\n            callback(res);\r\n\r\n        }, function (res) {\r\n            $scope.res = res.status;\r\n            console.log($scope.res);\r\n        }); \r\n\r\n    }\r\n\r\n    service.SendLink = function (url, platform_id, callback) {\r\n\r\n        let sendLinkReq = {\r\n            method: 'POST',\r\n            url: 'https://fb-members.sellpro.vn/api/v1/groups',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n                'token': localStorage.token\r\n            },\r\n            data: {\r\n                'url': url,\r\n                'platform_id': platform_id\r\n            }\r\n\r\n        }\r\n\r\n        $http(sendLinkReq).then(function (res) {\r\n            callback(res);\r\n\r\n        }, function (res) {\r\n            $scope.res = res.status;\r\n            console.log($scope.res);\r\n        }); \r\n\r\n    }\r\n\r\n    return service;\r\n    \r\n}])\r\n\r\n.config(function($routeProvider, $locationProvider) {  \r\n\r\n    $routeProvider\r\n    .when(\"/api/v1/accounts/login\", {\r\n        template : '<login-page></login-page>'\r\n    })\r\n    .when(\"/api/v1/accounts/register\", {\r\n        template : '<register-page></register-page>'\r\n    })\r\n    .when(\"/api/v1/accounts/forgot-password\", {\r\n        template : '<forgot-password></forgot-password>'\r\n    })\r\n    .when(\"/api/v1/platforms\", {\r\n        template : '<platform-page></platform-page>'\r\n    })\r\n\r\n    .otherwise({ redirectTo: '/api/v1/accounts/login' });\r\n})\r\n\r\n.run(['$rootScope', '$location', '$http',\r\n    function ($rootScope, $location, $http) {\r\n        $rootScope.login = false;\r\n        $rootScope.register = false;\r\n        $rootScope.status = true;\r\n\r\n        $rootScope.$on('$locationChangeStart', function (event, next, current) {\r\n            // redirect to login page if not logged in\r\n            if ($location.path() === '/api/v1/accounts/login' && $rootScope.login) {\r\n                $location.path('/api/v1/platforms');\r\n            } \r\n\r\n            if ($location.path() === '/api/v1/platforms') {\r\n                $rootScope.login = false;\r\n            }\r\n\r\n            if ($location.path() === '/api/v1/accounts/login' && $rootScope.register) {\r\n                $rootScope.status = false;\r\n            } else {\r\n                $rootScope.status = true;\r\n            }\r\n\r\n        });\r\n    }]);\n\n//# sourceURL=webpack:///./src/app-service/index.js?");

/***/ }),

/***/ "./src/forgot-password/index.js":
/*!**************************************!*\
  !*** ./src/forgot-password/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const componentName = \"forgotPassword\";\r\nmodule.exports = componentName;\r\n\r\nconst service = __webpack_require__(/*! ../app-service */ \"./src/app-service/index.js\");\r\n\r\nangular.module(componentName, ['ngRoute', service])\r\n  .component(\"forgotPassword\", {\r\n    controller: ForgotPasswordController,\r\n    controllerAs: \"self\",\r\n    template: __webpack_require__(/*! ./template.html */ \"./src/forgot-password/template.html\"),\r\n    style: __webpack_require__(/*! ./style.css */ \"./src/forgot-password/style.css\")\r\n  });\r\n\r\nfunction ForgotPasswordController($scope, $location, AuthenticationService, $rootScope) {\r\n   console.log(\"forgotPassword works!\")\r\n\r\n}\n\n//# sourceURL=webpack:///./src/forgot-password/index.js?");

/***/ }),

/***/ "./src/forgot-password/style.css":
/*!***************************************!*\
  !*** ./src/forgot-password/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/forgot-password/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/forgot-password/style.css?");

/***/ }),

/***/ "./src/forgot-password/template.html":
/*!*******************************************!*\
  !*** ./src/forgot-password/template.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\r\\n<div class=\\\"form\\\">\\t\\r\\n\\r\\n\\t<form action=\\\"\\\">\\r\\n\\t\\t<div class=\\\"form-title\\\">\\r\\n\\t\\t\\tForgot Password?\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\t<div class=\\\"input-form\\\">\\r\\n\\t\\t\\t<div class=\\\"icon\\\">\\r\\n\\t\\t\\t\\t<i class=\\\"fas fa-envelope\\\" aria-hidden=\\\"true\\\"></i>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<input type=\\\"email\\\" placeholder=\\\"Enter your email\\\" required=\\\"\\\">\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\t<button type=\\\"submit\\\" id=\\\"submit\\\">Send</button>\\r\\n\\t</form>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/forgot-password/template.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const componentName = \"app\";\r\nmodule.exports = componentName;\r\n\r\nconst Login = __webpack_require__(/*! ./login-page */ \"./src/login-page/index.js\");\r\nconst Register = __webpack_require__(/*! ./register-page */ \"./src/register-page/index.js\");\r\nconst Platform = __webpack_require__(/*! ./platform-page */ \"./src/platform-page/index.js\");\r\nconst ForgotPassword = __webpack_require__(/*! ./forgot-password */ \"./src/forgot-password/index.js\");\r\n\r\nangular.module(componentName, ['ngRoute', Login, Register, Platform, ForgotPassword]);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/login-page/index.js":
/*!*********************************!*\
  !*** ./src/login-page/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const componentName = \"loginPage\";\r\nmodule.exports = componentName;\r\n\r\nconst service = __webpack_require__(/*! ../app-service */ \"./src/app-service/index.js\");\r\n\r\nangular.module(componentName, ['ngRoute', service])\r\n  .component(\"loginPage\", {\r\n    controller: LoginController,\r\n    controllerAs: \"self\",\r\n    template: __webpack_require__(/*! ./template.html */ \"./src/login-page/template.html\"),\r\n    style: __webpack_require__(/*! ./style.css */ \"./src/login-page/style.css\")\r\n  });\r\n\r\nfunction LoginController($location, AuthenticationService, $rootScope) {\r\n\r\n    let self = this;\r\n\r\n    self.title = \"Login\";\r\n\r\n    self.status = true;\r\n\r\n    self.login = function () {\r\n\r\n        AuthenticationService.Login(self.username, self.password, function (response) {\r\n            if (response.data.success) {\r\n                console.log(response.data.data.token);\r\n                localStorage.setItem(\"token\", response.data.data.token);\r\n                self.status = true;\r\n                self.message = 'success';\r\n                $rootScope.login = true;\r\n                $location.path('/api/v1/platforms');\r\n                \r\n            } else {\r\n                console.log(response.data);\r\n                self.status = false;\r\n                self.message = 'error';\r\n                self.reason = response.data.reason;\r\n            }\r\n        });\r\n\r\n        event.preventDefault();\r\n    };\r\n\r\n}\n\n//# sourceURL=webpack:///./src/login-page/index.js?");

/***/ }),

/***/ "./src/login-page/style.css":
/*!**********************************!*\
  !*** ./src/login-page/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/login-page/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/login-page/style.css?");

/***/ }),

/***/ "./src/login-page/template.html":
/*!**************************************!*\
  !*** ./src/login-page/template.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"form\\\" id=\\\"login\\\">  \\r\\n\\r\\n  <form action=\\\"\\\" method=\\\"POST\\\" class=\\\"loginClass\\\">\\r\\n  <div class=\\\"message\\\">\\r\\n    <div class=\\\"alert-{{self.status}}\\\" ng-hide=\\\"self.status\\\">\\r\\n      <i class=\\\"fas fa-exclamation-triangle\\\"></i> {{self.reason}} \\r\\n    </div>\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"form-title\\\">\\r\\n    {{self.title}}\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"input-form\\\">\\r\\n    <div class=\\\"icon\\\">\\r\\n      <i class=\\\"fas fa-user\\\" aria-hidden=\\\"true\\\"></i>\\r\\n    </div>\\r\\n    <input type=\\\"text\\\" placeholder=\\\"Username\\\" required=\\\"\\\" ng-model=\\\"self.username\\\">\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"input-form\\\">\\r\\n    <div class=\\\"icon\\\">\\r\\n      <i class=\\\"fa fa-lock\\\" aria-hidden=\\\"true\\\"></i>\\r\\n    </div>\\r\\n    <input type=\\\"password\\\" placeholder=\\\"Password\\\" required=\\\"\\\" ng-model=\\\"self.password\\\">\\r\\n  </div>\\r\\n  <button id=\\\"submit\\\" type=\\\"submit\\\" ng-click=\\\"self.login()\\\">Login</button>\\r\\n</form>\\r\\n\\r\\n<div class=\\\"forgot-password\\\">\\r\\n  <span class=\\\"text1\\\">Forgot</span>\\r\\n  <span>\\r\\n    <a href=\\\"#!/api/v1/accounts/forgot-password\\\" class=\\\"text2\\\">Password?</a>\\r\\n  </span>\\r\\n</div>\\r\\n\\r\\n<div id=\\\"create\\\">\\r\\n  <span>\\r\\n    <a class=\\\"text2\\\" href=\\\"#!/api/v1/accounts/register\\\">Create your account <i class=\\\"fas fa-arrow-right\\\"></i></a>\\r\\n  </span>\\r\\n</div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/login-page/template.html?");

/***/ }),

/***/ "./src/platform-page/index.js":
/*!************************************!*\
  !*** ./src/platform-page/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const componentName = \"platformPage\";\r\nmodule.exports = componentName;\r\n\r\nconst service = __webpack_require__(/*! ../app-service */ \"./src/app-service/index.js\");\r\n\r\nangular.module(componentName, ['ngRoute', service])\r\n.component(\"platformPage\", {\r\n    controller: PlatformController,\r\n    controllerAs: \"self\",\r\n    template: __webpack_require__(/*! ./template.html */ \"./src/platform-page/template.html\"),\r\n    style: __webpack_require__(/*! ./style.css */ \"./src/platform-page/style.css\")\r\n});\r\n\r\nfunction getPlatform($http) {\r\n\r\n    let getPlatformsReq = {\r\n        method: 'GET',\r\n        url: 'https://fb-members.sellpro.vn/api/v1/platforms',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n            'token': localStorage.token\r\n        }\r\n    } \r\n\r\n    let platforms = [];\r\n\r\n    $http(getPlatformsReq).then(function (res) {\r\n\r\n        platforms.push(res.data.data.platforms);\r\n\r\n    }, function (res) {\r\n        self.res = res.status;\r\n        console.log(self.res);\r\n    });\r\n\r\n    return platforms;\r\n}\r\n\r\nfunction PlatformController($location, FacebookPlatformService, $rootScope, $http) {\r\n\r\n    let self = this;\r\n    self.hidden = true;\r\n\r\n    console.log(localStorage.token);   \r\n\r\n    self.platforms = getPlatform($http);\r\n\r\n    //////////////////////////////////////////////////////////\r\n\r\n    self.platform_id = 1;\r\n\r\n    self.setPlatformId = function (id) {\r\n        self.platform_id = id;\r\n        console.log(self.platform_id);\r\n    }\r\n\r\n    ////////////////////////////////////////////////////////\r\n\r\n    let getlistReq = {\r\n        method: 'GET',\r\n        url: 'https://fb-members.sellpro.vn/api/v1/groups/' + self.platform_id,\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n            'token': localStorage.token\r\n        }\r\n    } \r\n\r\n    $http(getlistReq).then(function (res) {\r\n        self.list = res.data.data.groups;\r\n        console.log(self.list);\r\n        \r\n\r\n    }, function (res) {\r\n        self.res = res.status;\r\n        console.log(self.res);\r\n    });\r\n\r\n\r\n    //////////////////////////////////////////////////////////\r\n\r\n    self.csv_link = \"https://fb-members.sellpro.vn/api/v1/files/1575886906698_members.csv\";\r\n\r\n    self.getCsvFile = function (group_id) {\r\n        let getCsvFileReq = {\r\n        method: 'GET',\r\n        url: 'https://fb-members.sellpro.vn/api/v1/members/' + self.group_id,\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n            'token': localStorage.token\r\n        }\r\n    } \r\n\r\n    $http(getCsvFileReq).then(function (res) {\r\n        console.log(res.data.data.csv_link);\r\n        self.csv_link = res.data.data.csv_link;\r\n\r\n    }, function (res) {\r\n        self.res = res.status;\r\n        console.log(self.res);\r\n    });\r\n    }\r\n\r\n    //////////////////////////////////////////////////////////\r\n\r\n    self.sendCookie = function () {\r\n        FacebookPlatformService.SendCookie(self.cookie, self.platform_id, function (response) {\r\n            if (response.data.success) {\r\n                self.hidden = false;\r\n                self.typeAlert = true;\r\n                self.iconMsg = 'fas fa-check-circle';\r\n                self.msg = \"Success!\";\r\n                self.cookie = null;\r\n                console.log(response.data);\r\n            } else {\r\n                self.hidden = false;\r\n                self.typeAlert = false;\r\n                self.iconMsg = 'fas fa-exclamation-triangle';\r\n                self.msg = response.data.reason;\r\n                console.log(response.data);\r\n            }\r\n        });\r\n\r\n        //event.preventDefault();\r\n    };\r\n\r\n    ////////////////////////////////////////////////////////////////\r\n\r\n    self.sendLink = function () {\r\n        FacebookPlatformService.SendLink(self.link, self.platform_id, function (response) {\r\n            if (response.data.success) {\r\n                self.hidden = false;\r\n                self.typeAlert = true;\r\n                self.iconMsg = 'fas fa-check-circle';\r\n                self.msg = 'Success!';\r\n                self.link = null;\r\n                console.log(response.data);\r\n\r\n                let getlistReq = {\r\n                    method: 'GET',\r\n                    url: 'https://fb-members.sellpro.vn/api/v1/groups/' + self.platform_id,\r\n                    headers: {\r\n                        'Content-Type': 'application/json',\r\n                        'token': localStorage.token\r\n                    }\r\n                } \r\n\r\n                $http(getlistReq).then(function (res) {\r\n                    self.list = res.data.data.groups;\r\n\r\n                }, function (res) {\r\n                    self.res = res.status;\r\n                    console.log(self.res);\r\n                });\r\n                \r\n            } else {\r\n                self.hidden = false;\r\n                self.typeAlert = false;\r\n                self.iconMsg = 'fas fa-exclamation-triangle';\r\n                self.msg = response.data.reason;\r\n                console.log(response.data);\r\n            }\r\n        });\r\n\r\n        //event.preventDefault();\r\n    };\r\n\r\n}\n\n//# sourceURL=webpack:///./src/platform-page/index.js?");

/***/ }),

/***/ "./src/platform-page/style.css":
/*!*************************************!*\
  !*** ./src/platform-page/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/platform-page/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/platform-page/style.css?");

/***/ }),

/***/ "./src/platform-page/template.html":
/*!*****************************************!*\
  !*** ./src/platform-page/template.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"form\\\">\\r\\n\\r\\n  <div class=\\\"message\\\">\\r\\n    <div class=\\\"alert-{{self.typeAlert}}\\\" ng-hide=\\\"self.hidden\\\">\\r\\n      <i class=\\\"{{self.iconMsg}}\\\"></i> {{self.msg}} \\r\\n    </div>\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"dropdown\\\">\\r\\n    <button class=\\\"dropbtn\\\">Select platform <i class=\\\"fas fa-arrow-down\\\"></i></button>\\r\\n    <div class=\\\"dropdown-content\\\" ng-repeat=\\\"p in self.platforms\\\">\\r\\n      <span ng-click=\\\"self.setPlatformId(p.id)\\\">{{p.name}}</span>\\r\\n\\r\\n    </div>\\r\\n  </div>\\r\\n\\r\\n  <div id=\\\"name-platform\\\">\\r\\n\\r\\n    <div class=\\\"form-title\\\">\\r\\n      Facebook\\r\\n    </div>\\r\\n    <form action=\\\"#!/api/v1/platforms\\\" method=\\\"GET\\\" accept-charset=\\\"utf-8\\\" class=\\\"form-inline\\\">\\r\\n      <div class=\\\"input-form\\\">\\r\\n        <div class=\\\"icon\\\">\\r\\n          <i class=\\\"fas fa-cookie\\\"></i>\\r\\n        </div>\\r\\n        <input type=\\\"text\\\" placeholder=\\\"Cookie\\\" required=\\\"\\\" ng-model=\\\"self.cookie\\\"> \\r\\n      </div>\\r\\n      <button type=\\\"submit\\\" id=\\\"send\\\" ng-click=\\\"self.sendCookie()\\\">Send Cookie</button>\\r\\n    </form>\\r\\n\\r\\n    <form action=\\\"\\\" method=\\\"GET\\\" accept-charset=\\\"utf-8\\\" class=\\\"form-inline\\\">\\r\\n      <div class=\\\"input-form\\\">\\r\\n        <div class=\\\"icon\\\">\\r\\n          <i class=\\\"fas fa-link\\\"></i>\\r\\n        </div>\\r\\n        <input type=\\\"text\\\" placeholder=\\\"Group link\\\" required=\\\"\\\" ng-model=\\\"self.link\\\">\\r\\n      </div>\\r\\n      <button type=\\\"submit\\\" id=\\\"send\\\" ng-click=\\\"self.sendLink()\\\">Send Link</button>\\r\\n    </form>\\r\\n  </div>\\r\\n\\r\\n  <div id=\\\"list-groups\\\">\\r\\n    <div><h3 class=\\\"form-title\\\">List Groups</h3></div>\\r\\n    <div class=\\\"list\\\">\\r\\n      <a ng-repeat=\\\"g in self.list\\\" ng-click=\\\"self.getCsvFile(g.id)\\\" class=\\\"url-{{g.status}}\\\" href=\\\"{{self.csv_link}}\\\">{{g.url}}</a>\\r\\n    </div>\\r\\n  </div>\\r\\n  \\r\\n\\r\\n</div>\\r\\n\\r\\n\";\n\n//# sourceURL=webpack:///./src/platform-page/template.html?");

/***/ }),

/***/ "./src/register-page/index.js":
/*!************************************!*\
  !*** ./src/register-page/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const componentName = \"registerPage\";\r\nmodule.exports = componentName;\r\n\r\nconst service = __webpack_require__(/*! ../app-service */ \"./src/app-service/index.js\");\r\n\r\nangular.module(componentName, ['ngRoute', service])\r\n  .component(\"registerPage\", {\r\n    controller: RegisterController,\r\n    controllerAs: \"self\",\r\n    template: __webpack_require__(/*! ./template.html */ \"./src/register-page/template.html\"),\r\n    style: __webpack_require__(/*! ./style.css */ \"./src/register-page/style.css\")\r\n  });\r\n\r\nfunction RegisterController($location, AuthenticationService, $rootScope) {\r\n    let self = this;\r\n\r\n    self.title = \"Register\";\r\n\r\n    self.status = true;\r\n\r\n    self.register = function () {\r\n\r\n        AuthenticationService.Register(self.username, self.password, self.email, function (response) {\r\n            if (response.data.success) {\r\n                console.log(response.data);\r\n                self.status = true;\r\n                $rootScope.register = true;\r\n\r\n                $location.path('/api/v1/accounts/login');\r\n                \r\n            } else {\r\n                console.log(response.data);\r\n                self.status = false;\r\n                self.reason = response.data.reason;\r\n            }\r\n        });\r\n\r\n        event.preventDefault();\r\n    };\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/register-page/index.js?");

/***/ }),

/***/ "./src/register-page/style.css":
/*!*************************************!*\
  !*** ./src/register-page/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/register-page/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/register-page/style.css?");

/***/ }),

/***/ "./src/register-page/template.html":
/*!*****************************************!*\
  !*** ./src/register-page/template.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"form\\\" id=\\\"registerForm\\\">\\r\\n\\r\\n  <form action=\\\"#!/api/v1/accounts/login\\\" id=\\\"register\\\" method=\\\"POST\\\">\\r\\n  <div class=\\\"message\\\">\\r\\n    <div class=\\\"alert-{{self.status}}\\\" ng-hide=\\\"self.status\\\">\\r\\n      <i class=\\\"fas fa-exclamation-triangle\\\"></i> {{self.reason}} \\r\\n    </div>\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"form-title\\\">\\r\\n    {{self.title}}\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"input-form\\\">\\r\\n    <div class=\\\"icon\\\">\\r\\n      <i class=\\\"fas fa-user\\\" aria-hidden=\\\"true\\\"></i>\\r\\n    </div>\\r\\n    <input type=\\\"text\\\" placeholder=\\\"Username\\\" required=\\\"\\\" ng-model=\\\"self.username\\\">\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"input-form\\\">\\r\\n    <div class=\\\"icon\\\">\\r\\n      <i class=\\\"fa fa-lock\\\" aria-hidden=\\\"true\\\"></i>\\r\\n    </div>\\r\\n    <input type=\\\"password\\\" placeholder=\\\"Password\\\" required=\\\"\\\" ng-model=\\\"self.password\\\">\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"input-form\\\">\\r\\n    <div class=\\\"icon\\\">\\r\\n      <i class=\\\"fas fa-envelope\\\" aria-hidden=\\\"true\\\"></i>\\r\\n    </div>\\r\\n    <input type=\\\"email\\\" placeholder=\\\"Email\\\" required=\\\"\\\" ng-model=\\\"self.email\\\">\\r\\n  </div>\\r\\n  \\r\\n  <button type=\\\"submit\\\" id=\\\"submit\\\" ng-click=\\\"self.register()\\\">Sign up now</button>\\r\\n</form> \\r\\n\\r\\n  \\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/register-page/template.html?");

/***/ })

/******/ });