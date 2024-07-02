(function (modules) {
			function require(filename) {
				var fn = modules[filename]
				var module = { exports: {} };
				
				fn(require, module, module.exports)
				
				return module.exports;
			}

			require('C:\Users\ao\Desktop\simplepack\src\index.js')
		})({'C:\Users\ao\Desktop\simplepack\src\index.js': function (require, module, exports) { "use strict";

var _greeting = require("./greeting.js");

document.write((0, _greeting.gretting)("ao")); },'./greeting.js': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gretting = gretting;
function gretting(name) {
  return "hello " + name;
} },})