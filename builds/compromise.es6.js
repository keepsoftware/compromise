/* compromise v11.5.0
   http://compromise.cool
   MIT
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlp = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
/* efrt trie-compression v2.0.3  github.com/nlp-compromise/efrt  - MIT */
!function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
module.exports={
  "author": "Spencer Kelly <spencermountain@gmail.com> (http://spencermounta.in)",
  "name": "compromise",
  "description": "natural language processing in the browser",
  "version": "11.5.0",
  "main": "./builds/compromise.js",
  "types": "./compromise.d.ts",
  "repository": {
    "type": "git",
    "url": "git://github.com/nlp-compromise/compromise.git"
  },
  "scripts": {
    "test": "tape \"./test/unit/**/*.test.js\" | tap-dot",
    "testb": "TESTENV=prod tape \"./test/unit/**/*.test.js\" | tap-dot",
    "buildTest": "TESTENV=prod node ./scripts/test.js",
    "test:types": "tsc --project test/types",
    "browserTest": "node ./scripts/browserTest.js",
    "benchmark": "node ./scripts/benchmark.js",
    "build": "node ./scripts/build/index.js",
    "pack": "node ./scripts/pack.js",
    "prepublishOnly": "node ./scripts/prepublish",
    "postpublish": "node ./scripts/postpublish",
    "demo": "node ./scripts/demo.js",
    "watch": "amble ./scratch.js",
    "filesize": "node ./scripts/filesize.js",
    "coverage": "node ./scripts/postpublish/coverage.js",
    "lint": "node ./scripts/prepublish/linter.js"
  },
  "files": [
    "builds/",
    "docs/"
  ],
  "dependencies": {
    "efrt-unpack": "2.0.3"
  },
  "devDependencies": {
    "amble": "0.0.5",
    "babel-preset-es2015": "^6.24.0",
    "babelify": "7.3.0",
    "babili": "0.0.11",
    "browserify": "13.0.1",
    "browserify-glob": "^0.2.0",
    "chalk": "^1.1.3",
    "codacy-coverage": "^2.0.3",
    "compromise-plugin": "0.0.8",
    "derequire": "^2.0.3",
    "eslint": "^3.1.1",
    "gaze": "^1.1.1",
    "nyc": "^8.4.0",
    "shelljs": "^0.7.2",
    "tap-dot": "^1.0.5",
    "tape": "^4.6.0",
    "uglify-js": "2.7.0"
  },
  "license": "MIT"
}

},{}],3:[function(_dereq_,module,exports){
'use strict';
const tagset = _dereq_('./tags');

// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const c = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  black: '\x1b[30m'
};
//dont use colors on client-side
if (typeof module === 'undefined') {
  Object.keys(c).forEach(k => {
    c[k] = '';
  });
}

//coerce any input into a string
exports.ensureString = input => {
  if (typeof input === 'string') {
    return input;
  } else if (typeof input === 'number') {
    return String(input);
  }
  return '';
};
//coerce any input into a string
exports.ensureObject = input => {
  if (typeof input !== 'object') {
    return {};
  }
  if (input === null || input instanceof Array) {
    return {};
  }
  return input;
};

exports.titleCase = str => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

//shallow-clone an object
exports.copy = o => {
  let o2 = {};
  o = exports.ensureObject(o);
  Object.keys(o).forEach(k => {
    o2[k] = o[k];
  });
  return o2;
};
exports.extend = (obj, a) => {
  obj = exports.copy(obj);
  const keys = Object.keys(a);
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = a[keys[i]];
  }
  return obj;
};

//colorization
exports.green = function(str) {
  return c.green + str + c.reset;
};
exports.red = function(str) {
  return c.red + str + c.reset;
};
exports.blue = function(str) {
  return c.blue + str + c.reset;
};
exports.magenta = function(str) {
  return c.magenta + str + c.reset;
};
exports.cyan = function(str) {
  return c.cyan + str + c.reset;
};
exports.yellow = function(str) {
  return c.yellow + str + c.reset;
};
exports.black = function(str) {
  return c.black + str + c.reset;
};
exports.printTag = function(tag) {
  if (tagset[tag]) {
    const color = tagset[tag].color || 'blue';
    return exports[color](tag);
  }
  return tag;
};
exports.printTerm = function(t) {
  const tags = Object.keys(t.tags);
  for (let i = 0; i < tags.length; i++) {
    if (tagset[tags[i]]) {
      const color = tagset[tags[i]].color || 'black';
      return exports[color](t.out('text'));
    }
  }
  return c.reset + t.plaintext + c.reset;
};

exports.leftPad = function(str, width, char) {
  char = char || ' ';
  str = str.toString();
  while (str.length < width) {
    str += char;
  }
  return str;
};

exports.isArray = function(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

},{"./tags":133}],4:[function(_dereq_,module,exports){
(function (global){
'use strict';
const buildText = _dereq_('./text/build');
const pkg = _dereq_('../package.json');
const log = _dereq_('./log');
const unpack = _dereq_('./world/unpack');
let world = _dereq_('./world');
let w = world.w;

//the main function
const nlp = function(str, lex) {
  if (lex) {
    w.plugin({
      words: lex
    });
  }
  let doc = buildText(str, w);
  doc.tagger();
  return doc;
};

//this is used, atleast, for testing the packing
nlp.unpack = function(plugin) {
  return unpack(plugin);
};
//this is handy
nlp.version = pkg.version;
//turn-on some debugging
nlp.verbose = function(str) {
  log.enable(str);
};
//same as main method, except with no POS-tagging.
nlp.tokenize = function(str) {
  return buildText(str);
};

//uncompress user-submitted lexicon
nlp.plugin = function(plugin) {
  w.plugin(plugin);
};
//contribute words to the lexicon
nlp.addWords = function(lex) {
  w.plugin({
    words: lex
  });
};
nlp.addTags = function(tags) {
  w.plugin({
    tags: tags
  });
};
nlp.addRegex = function(regex) {
  w.plugin({
    regex: regex
  });
};
nlp.addPatterns = function(patterns) {
  w.plugin({
    patterns: patterns
  });
};
nlp.addPlurals = function(plurals) {
  w.plugin({
    plurals: plurals
  });
};
nlp.addConjugations = function(conj) {
  w.plugin({
    conjugations: conj
  });
};

//make a weird, half-copy of this method
nlp.clone = function() {
  let w2 = world.reBuild();
  //this is weird, but it's okay
  var nlp2 = function(str, lex) {
    if (lex) {
      w2.plugin({
        words: lex
      });
    }
    let doc = buildText(str, w2);
    doc.tagger();
    return doc;
  };
  nlp2.tokenize = nlp.tokenize;
  nlp2.verbose = nlp.verbose;
  nlp2.version = nlp.version;
  ['Words', 'Tags', 'Regex', 'Patterns', 'Plurals', 'Conjugations'].forEach((fn) => {
    nlp2['add' + fn] = function(obj) {
      w2['add' + fn](obj);
    };
  });
  return nlp2;
};

//and then all-the-exports...
if (typeof self !== 'undefined') {
  self.nlp = nlp; // Web Worker
} else if (typeof window !== 'undefined') {
  window.nlp = nlp; // Browser
} else if (typeof global !== 'undefined') {
  global.nlp = nlp; // NodeJS
}
//don't forget amd!
if (typeof define === 'function' && define.amd) {
  define(nlp);
}
//then for some reason, do this too!
if (typeof module !== 'undefined') {
  module.exports = nlp;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../package.json":2,"./log":6,"./text/build":185,"./world":209,"./world/unpack":217}],5:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../fns');

// const colors = {
//   'Person': '#6393b9',
//   'Pronoun': '#81acce',
//   'Noun': 'steelblue',
//   'Verb': 'palevioletred',
//   'Adverb': '#f39c73',
//   'Adjective': '#b3d3c6',
//   'Determiner': '#d3c0b3',
//   'Preposition': '#9794a8',
//   'Conjunction': '#c8c9cf',
//   'Value': 'palegoldenrod',
//   'Expression': '#b3d3c6'
// };

const tag = (t, pos, reason) => {
  let title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ->   ' + pos;
  title += fns.leftPad((reason || ''), 15);
  console.log('%c' + title, ' color: #a2c99c');
};
const untag = (t, pos, reason) => {
  let title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ~*   ' + pos;
  title += '    ' + (reason || '');
  console.log('%c' + title, ' color: #b66a6a');
};
module.exports = {
  tag: tag,
  untag: untag,
};

},{"../fns":3}],6:[function(_dereq_,module,exports){
'use strict';
const client = _dereq_('./client');
const server = _dereq_('./server');

let enable = false;

module.exports = {
  enable: (str) => {
    if (str === undefined) {
      str = true;
    }
    enable = str;
  },
  tag: (t, pos, reason) => {
    if (enable === true || enable === 'tagger') {
      if (typeof window !== 'undefined') {
        client.tag(t, pos, reason);
      } else {
        server.tag(t, pos, reason);
      }
    }
  },
  unTag: (t, pos, reason) => {
    if (enable === true || enable === 'tagger') {
      if (typeof window !== 'undefined') {
        client.untag(t, pos, reason);
      } else {
        server.untag(t, pos, reason);
      }
    }
  }
};

},{"./client":5,"./server":7}],7:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../fns');

//use weird bash escape things for some colors
const tag = (t, pos, reason) => {
  let title = t.normal || '[' + t.silent_term + ']';
  title = fns.yellow(title);
  title = fns.leftPad('\'' + title + '\'', 20);
  title += '  ->   ' + fns.printTag(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.cyan(reason || '') + ')');
};

const untag = function(t, pos, reason) {
  let title = '-' + t.normal + '-';
  title = fns.red(title);
  title = fns.leftPad(title, 20);
  title += '  ~*   ' + fns.red(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.red(reason || '') + ')');
};

module.exports = {
  tag: tag,
  untag: untag,
};

},{"../fns":3}],8:[function(_dereq_,module,exports){
module.exports = {
  fns: _dereq_('./fns'),
  Terms: _dereq_('./terms'),
};

},{"./fns":3,"./terms":161}],9:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
//the Acronym() subset class

const methods = {
  data: function() {
    return this.terms().list.map(ts => {
      let t = ts.terms[0];
      let parsed = t.text
        .toUpperCase()
        .replace(/\./g)
        .split('');
      return {
        periods: parsed.join('.'),
        normal: parsed.join(''),
        text: t.text
      };
    });
  }
};

const find = function(r, n) {
  r = r.match('#Acronym');
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187}],10:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const fns = _dereq_('./methods');
//the Adjectives() subset class

//is this an adjective we want to goof-around with?
const shouldConvert = function(str, words) {
  if (!str || str.length <= 3) {
    return false;
  }
  if (words[str] === 'Comparable') {
    return true;
  }
  if (words[str] === 'Adjective') {
    return false;
  }
  //has space
  if (str.indexOf(' ') !== -1) {
    return false;
  }
  return true;
};

const methods = {
  data: function() {
    return this.list.map(ts => {
      const str = ts.out('normal');
      let obj = {
        normal: str,
        text: this.out('text'),
        comparative: 'more ' + str,
        superlative: 'most ' + str,
        adverbForm: null,
        nounForm: null
      // verbForm: null
      };
      if (shouldConvert(str, this.world().words) === true) {
        obj.comparative = fns.toComparative(str) || obj.comparative;
        obj.superlative = fns.toSuperlative(str) || obj.superlative;
        obj.adverbForm = fns.toAdverb(str);
        obj.nounForm = fns.toNoun(str);
      // obj.verbForm = fns.toVerb(str);
      }
      return obj;
    });
  }
};

const find = function(r, n) {
  r = r.match('#Adjective');
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./methods":11}],11:[function(_dereq_,module,exports){
'use strict';
module.exports = {
  toNoun: _dereq_('./toNoun'),
  toSuperlative: _dereq_('./toSuperlative'),
  toComparative: _dereq_('./toComparative'),
  toAdverb: _dereq_('./toAdverb'),
  toVerb: _dereq_('./toVerb')
};

},{"./toAdverb":12,"./toComparative":13,"./toNoun":14,"./toSuperlative":15,"./toVerb":16}],12:[function(_dereq_,module,exports){
//turn 'quick' into 'quickly'
'use strict';
const not_matches = [/airs$/, /ll$/, /ee.$/, /ile$/, /y$/];
const irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toAdverb;

const transforms = [
  {
    reg: /al$/i,
    repl: 'ally'
  },
  {
    reg: /ly$/i,
    repl: 'ly'
  },
  {
    reg: /(.{3})y$/i,
    repl: '$1ily'
  },
  {
    reg: /que$/i,
    repl: 'quely'
  },
  {
    reg: /ue$/i,
    repl: 'uly'
  },
  {
    reg: /ic$/i,
    repl: 'ically'
  },
  {
    reg: /ble$/i,
    repl: 'bly'
  },
  {
    reg: /l$/i,
    repl: 'ly'
  }
];

const adj_to_adv = function(str) {
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }
  for (let i = 0; i < not_matches.length; i++) {
    if (not_matches[i].test(str) === true) {
      return null;
    }
  }
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return str + 'ly';
};
// console.log(adj_to_adv('good'));

module.exports = adj_to_adv;

},{"../../../world/more-data/irregularAdjectives":212}],13:[function(_dereq_,module,exports){
//turn 'quick' into 'quickly'
'use strict';
const do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /old$/, /oud$/, /e[ae]p$/];
const dont_rules = [/ary$/, /ous$/];
const irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toComparative;

const transforms = [
  {
    reg: /y$/i,
    repl: 'ier'
  },
  {
    reg: /([aeiou])t$/i,
    repl: '$1tter'
  },
  {
    reg: /([aeou])de$/i,
    repl: '$1der'
  },
  {
    reg: /nge$/i,
    repl: 'nger'
  }
];

const to_comparative = function(str) {
  //known-irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  //known-transforms
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  //dont-patterns
  for (let i = 0; i < dont_rules.length; i++) {
    if (dont_rules[i].test(str) === true) {
      return null;
    }
  }
  //do-patterns
  for (let i = 0; i < do_rules.length; i++) {
    if (do_rules[i].test(str) === true) {
      return str + 'er';
    }
  }
  //easy-one
  if (/e$/.test(str) === true) {
    return str + 'r';
  }
  return str + 'er';
// return null;
};

// console.log(to_comparative('big'));

module.exports = to_comparative;

},{"../../../world/more-data/irregularAdjectives":212}],14:[function(_dereq_,module,exports){
'use strict';
//convert 'cute' to 'cuteness'
const irregulars = {
  clean: 'cleanliness',
  naivety: 'naivety',
  hurt: 'hurt'
};

const transforms = [
  {
    reg: /y$/,
    repl: 'iness'
  },
  {
    reg: /le$/,
    repl: 'ility'
  },
  {
    reg: /ial$/,
    repl: 'y'
  },
  {
    reg: /al$/,
    repl: 'ality'
  },
  {
    reg: /ting$/,
    repl: 'ting'
  },
  {
    reg: /ring$/,
    repl: 'ring'
  },
  {
    reg: /bing$/,
    repl: 'bingness'
  },
  {
    reg: /sing$/,
    repl: 'se'
  },
  {
    reg: /ing$/,
    repl: 'ment'
  },
  {
    reg: /ess$/,
    repl: 'essness'
  },
  {
    reg: /ous$/,
    repl: 'ousness'
  }
];

const to_noun = function(w) {
  if (irregulars.hasOwnProperty(w)) {
    return irregulars[w];
  }
  const lastChar = w.charAt(w.length - 1);
  if (lastChar === 'w' || lastChar === 's') {
    return null;
  }
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(w) === true) {
      return w.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return w + 'ness';
};

module.exports = to_noun;
// console.log(to_noun("great"))

},{}],15:[function(_dereq_,module,exports){
//turn 'quick' into 'quickest'
'use strict';
const do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /oud$/, /...p$/];
const dont_rules = [/ary$/];
const irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toSuperlative;

const transforms = [
  {
    reg: /y$/i,
    repl: 'iest'
  },
  {
    reg: /([aeiou])t$/i,
    repl: '$1ttest'
  },
  {
    reg: /([aeou])de$/i,
    repl: '$1dest'
  },
  {
    reg: /nge$/i,
    repl: 'ngest'
  },
  {
    reg: /([aeiou])te$/i,
    repl: '$1test'
  }
];

const to_superlative = function(str) {
  //irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  //known transforms
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  //dont-rules
  for (let i = 0; i < dont_rules.length; i++) {
    if (dont_rules[i].test(str) === true) {
      return null;
    }
  }
  //do-rules
  for (let i = 0; i < do_rules.length; i++) {
    if (do_rules[i].test(str) === true) {
      if (str.charAt(str.length - 1) === 'e') {
        return str + 'st';
      }
      return str + 'est';
    }
  }
  return str + 'est';
};

module.exports = to_superlative;
// console.log(to_superlative("great"))

},{"../../../world/more-data/irregularAdjectives":212}],16:[function(_dereq_,module,exports){
'use strict';
//turn an adjective like 'soft' into a verb like 'soften'
//(don't do words like 'green' -> 'greenen')

const irregulars = {
  red: 'redden',
  sad: 'sadden',
  fat: 'fatten'
};

const toVerb = str => {
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }
  if (/e$/.test(str) === true) {
    return str + 'n';
  }
  return str + 'en';
};
module.exports = toVerb;

},{}],17:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const toAdjective = _dereq_('./toAdjective');

//the () subset class

const methods = {
  data: function() {
    return this.terms().list.map(ts => {
      let t = ts.terms[0];
      return {
        adjectiveForm: toAdjective(t.normal),
        normal: t.normal,
        text: t.text
      };
    });
  }
};

const find = function(r, n) {
  r = r.splitAfter('#Comma');
  r = r.match('#Adverb+');
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./toAdjective":18}],18:[function(_dereq_,module,exports){
//turns 'quickly' into 'quick'
'use strict';
const irregulars = {
  'idly': 'idle',
  'sporadically': 'sporadic',
  'basically': 'basic',
  'grammatically': 'grammatical',
  'alphabetically': 'alphabetical',
  'economically': 'economical',
  'conically': 'conical',
  'politically': 'political',
  'vertically': 'vertical',
  'practically': 'practical',
  'theoretically': 'theoretical',
  'critically': 'critical',
  'fantastically': 'fantastic',
  'mystically': 'mystical',
  'pornographically': 'pornographic',
  'fully': 'full',
  'jolly': 'jolly',
  'wholly': 'whole'
};

const transforms = [{
  'reg': /bly$/i,
  'repl': 'ble'
}, {
  'reg': /gically$/i,
  'repl': 'gical'
}, {
  'reg': /([rsdh])ically$/i,
  'repl': '$1ical'
}, {
  'reg': /ically$/i,
  'repl': 'ic'
}, {
  'reg': /uly$/i,
  'repl': 'ue'
}, {
  'reg': /ily$/i,
  'repl': 'y'
}, {
  'reg': /(.{3})ly$/i,
  'repl': '$1'
}];

const toAdjective = function(str) {
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return str;
};

// console.log(toAdjective('quickly'))
module.exports = toAdjective;

},{}],19:[function(_dereq_,module,exports){
'use strict';

//the plumbing to turn two words into a contraction
const combine = (a, b) => {
  b.whitespace.after = a.whitespace.after;
  a.whitespace.after = '';
  b.whitespace.before = '';
  a.silent_term = a.text;
  b.silent_term = b.text;
  b.text = '';
  a.tag('Contraction', 'new-contraction');
  b.tag('Contraction', 'new-contraction');
};

const irregulars = {
  can: 'can\'t',
  will: 'won\'t'
};

const contract = function(ts) {
  if (ts.expanded === false || ts.match('#Contraction').found) {
    return ts;
  }
  //he is -> he's
  ts.match('(#Noun|#QuestionWord) is').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'s';
    ls.contracted = true;
  });
  //he did -> he'd
  ts.match('#PronNoun did').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  });
  //how do -> how'd
  ts.match('#QuestionWord (did|do)').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  });
  //he would -> he'd
  ts.match('#Noun (could|would)').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  });
  //they are -> they're
  ts.match('(they|we|you) are').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'re';
    ls.contracted = true;
  });
  //i am -> i'm
  ts.match('i am').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'m';
    ls.contracted = true;
  });
  //they will -> they'll
  ts.match('(#Noun|#QuestionWord) will').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ll';
    ls.contracted = true;
  });
  //they have -> they've
  ts.match('(they|we|you|i) have').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ve';
    ls.contracted = true;
  });
  //is not -> isn't
  ts.match('(#Copula|#Modal|do|does|have|has|can|will) not').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    //can't, won't
    if (irregulars.hasOwnProperty(ls.terms[0].text) === true) {
      ls.terms[0].text = irregulars[ls.terms[0].text];
    } else {
      ls.terms[0].text += 'n\'t';
    }
    ls.contracted = true;
  });
  return ts;
};

module.exports = contract;

},{}],20:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const contract = _dereq_('./contract');
const expand = _dereq_('./expand');

const ContractionCl = function(arr, world, original) {
  Terms.call(this, arr, world, original);
};

//Inherit properties
ContractionCl.prototype = Object.create(Terms.prototype);

ContractionCl.prototype.data = function() {
  let expanded = expand(this.clone());
  let contracted = contract(this.clone());
  return {
    text: this.out('text'),
    normal: this.out('normal'),
    expanded: {
      normal: expanded.out('normal'),
      text: expanded.out('text')
    },
    contracted: {
      normal: contracted.out('normal'),
      text: contracted.out('text')
    },
    isContracted: Boolean(this.contracted)
  };
};
ContractionCl.prototype.expand = function() {
  return expand(this);
};
ContractionCl.prototype.contract = function() {
  return contract(this);
};
module.exports = ContractionCl;

},{"../../paths":8,"./contract":19,"./expand":21}],21:[function(_dereq_,module,exports){
'use strict';
//turn `i'd` into `i would`
const expand = function(ts) {
  if (ts.contracted === false) {
    return ts;
  }
  ts.terms.forEach((t) => {
    if (t.silent_term) {
      //this term also needs a space now too
      if (!t.text) {
        t.whitespace.before = ' ';
      }
      t._text = t.silent_term;
      //handle (some) capitalization
      if (t.tags.TitleCase) {
        t.toTitleCase();
      }
      t.normalize();
      t.silent_term = null;
      t.unTag('Contraction', 'expanded');
    }
  });
  return ts;
};
module.exports = expand;

},{}],22:[function(_dereq_,module,exports){
'use strict';
//find contractable, expanded-contractions
const find = (r) => {
  let remain = r.not('#Contraction');
  let m = remain.match('(#Noun|#QuestionWord) (#Copula|did|do|have|had|could|would|will)');
  m.concat(remain.match('(they|we|you|i) have'));
  m.concat(remain.match('i am'));
  m.concat(remain.match('(#Copula|#Modal|do|does|have|has|can|will) not'));
  m.list.forEach((ts) => {
    ts.expanded = true;
  });
  return m;
};
module.exports = find;

},{}],23:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const ContractionCl = _dereq_('./contraction');
const findPossible = _dereq_('./findPossible');
//the Contractions() subset class

const methods = {
  contract: function() {
    this.list.forEach(ts => ts.contract());
    return this;
  },
  expand: function() {
    this.list.forEach(ts => ts.expand());
    return this;
  },
  contracted: function() {
    this.list = this.list.filter(ts => {
      return ts.contracted;
    });
    return this;
  },
  expanded: function() {
    this.list = this.list.filter(ts => {
      return !ts.contracted;
    });
    return this;
  }
};

const find = function(r, n) {
  //find currently-contracted
  let found = r.match('#Contraction #Contraction #Contraction?');
  found.list = found.list.map(ts => {
    let c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = true;
    return c;
  });
  //find currently-expanded
  let expanded = findPossible(r);
  expanded.list.forEach(ts => {
    let c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = false;
    found.list.push(c);
  });
  found.sort('chronological');
  //get nth element
  if (typeof n === 'number') {
    found = found.get(n);
  }
  return found;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./contraction":20,"./findPossible":22}],24:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const parseDate = _dereq_('./parseDate');

const _Date = function(arr, world, refText) {
  Terms.call(this, arr, world, refText);
  this.month = this.match('#Month');
};

//Inherit properties
_Date.prototype = Object.create(Terms.prototype);

_Date.prototype.data = function() {
  return {
    text: this.out('text'),
    normal: this.out('normal'),
    date: parseDate(this)
  };
};

module.exports = _Date;

},{"../../paths":8,"./parseDate":28}],25:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Date = _dereq_('./date');
const weekdays = _dereq_('./weekday');
const months = _dereq_('./month');
//the Dates() subset class
const methods = {
  toShortForm: function() {
    this.match('#Month')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        months.toShortForm(t);
      });
    this.match('#WeekDay')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        weekdays.toShortForm(t);
      });
    return this;
  },
  toLongForm: function() {
    this.match('#Month')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        months.toLongForm(t);
      });
    this.match('#WeekDay')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        weekdays.toLongForm(t);
      });
    return this;
  }
};

const find = function(r, n) {
  let dates = r.match('#Date+');
  if (typeof n === 'number') {
    dates = dates.get(n);
  }
  dates.list = dates.list.map(ts => {
    return new Date(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return dates;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./date":24,"./month":27,"./weekday":31}],26:[function(_dereq_,module,exports){
//follow the javascript scheme
//january is 0
exports.longMonths = {
  'january': 0,
  'february': 1,
  'march': 2,
  'april': 3,
  'may': 4,
  'june': 5,
  'july': 6,
  'august': 7,
  'september': 8,
  'october': 9,
  'november': 10,
  'december': 11,
};
exports.shortMonths = {
  'jan': 0,
  'feb': 1,
  'mar': 2,
  'apr': 3,
  'may': 4,
  'jun': 5,
  'jul': 6,
  'aug': 7,
  'sep': 8,
  'oct': 9,
  'nov': 10,
  'dec': 11,
  //extra ones
  'febr': 1,
  'sept': 8,
};

},{}],27:[function(_dereq_,module,exports){
'use strict';
const data = _dereq_('./data');
const shortMonths = data.shortMonths;
const longMonths = data.longMonths;
const titleCase = str => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};
module.exports = {
  index: function (t) {
    if (t.tags.Month) {
      if (longMonths[t.normal] !== undefined) {
        return longMonths[t.normal];
      }
      if (shortMonths[t.normal] !== undefined) {
        return shortMonths[t.normal];
      }
    }
    return null;
  },
  toShortForm: function (t) {
    if (t.tags.Month !== undefined) {
      if (longMonths[t.normal] !== undefined) {
        let shorten = Object.keys(shortMonths);
        let punct = t.endPunctuation() || '';
        t.text = shorten[longMonths[t.normal]] + punct;
        if (t.tags.TitleCase) {
          t.text = titleCase(t.text);
        }
      }
    }
    t.dirty = true;
    return t;
  },
  toLongForm: function (t) {
    if (t.tags.Month !== undefined) {
      if (shortMonths[t.normal] !== undefined) {
        let longer = Object.keys(longMonths);
        let punct = t.endPunctuation() || '';
        t.text = longer[shortMonths[t.normal]] + punct;
        if (t.tags.TitleCase) {
          t.text = titleCase(t.text);
        }
      }
    }
    t.dirty = true;
    return t;
  }

};

},{"./data":26}],28:[function(_dereq_,module,exports){
'use strict';
const parseTime = _dereq_('./parseTime');
const weekdays = _dereq_('./weekday');
const months = _dereq_('./month');
//a hugely-conservative and incomplete first-pass for parsing written-dates

//validate a day-of-month
const isDate = (num) => {
  if (num && num < 31 && num > 0) {
    return true;
  }
  return false;
};

//please change this in one thousand years
const isYear = (num) => {
  if (num && num > 1000 && num < 3000) {
    return true;
  }
  return false;
};

//
const parseDate = (r) => {
  let result = {
    month: null,
    date: null,
    weekday: null,
    year: null,
    named: null,
    time: null,
  };
  let m = r.match('(#Holiday|today|tomorrow|yesterday)');
  if (m.found) {
    result.named = m.out('normal');
  }
  m = r.match('#Month');
  if (m.found) {
    result.month = months.index(m.list[0].terms[0]);
  }
  m = r.match('#WeekDay');
  if (m.found) {
    result.weekday = weekdays.index(m.list[0].terms[0]);
  }
  m = r.match('#Time');
  if (m.found) {
    result.time = parseTime(r);
    r.not('#Time'); //unsure
  }
  //january fifth 1992
  m = r.match('#Month #Value #Year');
  if (m.found) {
    let numbers = m.values().numbers();
    if (isDate(numbers[0])) {
      result.date = numbers[0];
    }
    let year = parseInt(r.match('#Year').out('normal'), 10);
    if (isYear(year)) {
      result.year = year;
    }
  }
  if (!m.found) {
    //january fifth,  january 1992
    m = r.match('#Month #Value');
    if (m.found) {
      let numbers = m.values().numbers();
      let num = numbers[0];
      if (isDate(num)) {
        result.date = num;
      }
    }
    //january 1992
    m = r.match('#Month #Year');
    if (m.found) {
      let num = parseInt(r.match('#Year').out('normal'), 10);
      if (isYear(num)) {
        result.year = num;
      }
    }
  }

  //fifth of january
  m = r.match('#Value of #Month');
  if (m.found) {
    let num = m.values().numbers()[0];
    if (isDate(num)) {
      result.date = num;
    }
  }
  return result;
};
module.exports = parseDate;

},{"./month":27,"./parseTime":29,"./weekday":31}],29:[function(_dereq_,module,exports){
'use strict';
const ampm = /([12]?[0-9]) ?(am|pm)/i;
const hourMin = /([12]?[0-9]):([0-9][0-9]) ?(am|pm)?/i;
//
const isHour = (num) => {
  if (num && num > 0 && num < 25) {
    return true;
  }
  return false;
};
const isMinute = (num) => {
  if (num && num > 0 && num < 60) {
    return true;
  }
  return false;
};


const parseTime = (r) => {
  let result = {
    logic: null,
    hour: null,
    minute: null,
    second: null,
    timezone: null
  };

  let logic = r.match('(by|before|for|during|at|until|after) #Time').firstTerm();
  if (logic.found) {
    result.logic = logic.out('normal');
  }

  let time = r.match('#Time');
  time.terms().list.forEach((ts) => {
    let t = ts.terms[0];
    //3pm
    let m = t.text.match(ampm);
    if (m !== null) {
      result.hour = parseInt(m[1], 10);
      if (m[2] === 'pm') {
        result.hour += 12;
      }
      if (isHour(result.hour) === false) {
        result.hour = null;
      }
    }
    //3:15
    m = t.text.match(hourMin);
    if (m !== null) {
      result.hour = parseInt(m[1], 10);
      result.minute = parseInt(m[2], 10);
      if (!isMinute(result.minute)) {
        result.minute = null;
      }
      if (m[3] === 'pm') {
        result.hour += 12;
      }
      if (isHour(result.hour) === false) {
        result.hour = null;
      }
    }
  });
  return result;
};
module.exports = parseTime;

},{}],30:[function(_dereq_,module,exports){
//follow the javascript scheme
//sunday is 0
exports.longDays = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6,
};
exports.shortDays = {
  'sun': 0,
  'mon': 1,
  'tues': 2,
  'wed': 3,
  'weds': 3,
  'thurs': 4,
  'fri': 5,
  'sat': 6,
};

},{}],31:[function(_dereq_,module,exports){
'use strict';
const data = _dereq_('./data');
const shortDays = data.shortDays;
const longDays = data.longDays;

module.exports = {
  index: function (t) {
    if (t.tags.WeekDay) {
      if (longDays[t.normal] !== undefined) {
        return longDays[t.normal];
      }
      if (shortDays[t.normal] !== undefined) {
        return shortDays[t.normal];
      }
    }
    return null;
  },
  toShortForm: function (t) {
    if (t.tags.WeekDay) {
      if (longDays[t.normal] !== undefined) {
        let shorten = Object.keys(shortDays);
        t.text = shorten[longDays[t.normal]];
      }
    }
    return t;
  },
  toLongForm: function (t) {
    if (t.tags.WeekDay) {
      if (shortDays[t.normal] !== undefined) {
        let longer = Object.keys(longDays);
        t.text = longer[shortDays[t.normal]];
      }
    }
    return t;
  }
};

},{"./data":30}],32:[function(_dereq_,module,exports){
'use strict';
const Ngrams = _dereq_('./index');
const getGrams = _dereq_('./getGrams');

//like an n-gram, but only the endings of matches
const EndGrams = function(arr, world, original) {
  Ngrams.call(this, arr, world, original);
};

//Inherit properties
EndGrams.prototype = Object.create(Ngrams.prototype);

//like an n-gram, but only the startings of matches
EndGrams.find = function(r, n, size) {
  let opts = {
    size: [1, 2, 3, 4],
    edge: 'end'
  };
  //only look for bigrams, for example
  if (size) {
    opts.size = [size];
  }
  //fetch them
  let arr = getGrams(r, opts);
  r = new EndGrams(arr);
  //default sort
  r.sort();
  //grab top one, or something
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};
module.exports = EndGrams;

},{"./getGrams":33,"./index":35}],33:[function(_dereq_,module,exports){
'use strict';
const Gram = _dereq_('./gram');

//do all grams of one size, on one termList
const getGrams = function(fts, n) {
  let terms = fts.terms;
  if (terms.length < n) {
    return [];
  }
  let arr = [];
  for(let i = 0; i < terms.length - n + 1; i++) {
    let gram = new Gram(terms.slice(i, i + n));
    arr.push(gram);
  }
  return arr;
};

//left-sided grams
const startGram = function(fts, n) {
  let terms = fts.terms;
  if (terms.length < n) {
    return [];
  }
  let arr = [
    new Gram(terms.slice(0, n)),
  ];
  return arr;
};

//right-sided grams
const endGram = function(fts, n) {
  let terms = fts.terms;
  if (terms.length < n) {
    return [];
  }
  let arr = [
    new Gram(terms.slice(terms.length - n, terms.length))
  ];
  return arr;
};

//ngrams are consecutive terms of a specific size
const buildGrams = function(r, options) {
  options = options || {};
  options.size = options.size || [1, 2, 3];
  if (typeof options.size === 'number') {
    options.size = [options.size];
  }
  let obj = {};
  //collect and count all grams
  options.size.forEach((size) => {
    r.list.forEach((ts) => {
      let grams = [];
      if (options.edge === 'start') {
        grams = startGram(ts, size);
      } else if (options.edge === 'end') {
        grams = endGram(ts, size);
      } else {
        grams = getGrams(ts, size);
      }
      grams.forEach((g) => {
        if (obj.hasOwnProperty(g.key)) {
          obj[g.key].inc();
        } else {
          obj[g.key] = g;
        }
      });
    });
  });

  //flatten to an array
  let arr = Object.keys(obj).map((k) => obj[k]);
  return arr;
};

module.exports = buildGrams;

},{"./gram":34}],34:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;

//this is one-or-more terms together, sorted by frequency
const Gram = function(arr, world, original) {
  Terms.call(this, arr, world, original);
  //string to sort/uniq by
  this.key = this.out('normal');
  //bigram/trigram/etc
  this.size = arr.length;
  //number of occurances
  this.count = 1;
};

//Inherit properties
Gram.prototype = Object.create(Terms.prototype);

Gram.prototype.inc = function() {
  this.count += 1;
};

module.exports = Gram;

},{"../../paths":8}],35:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const getGrams = _dereq_('./getGrams');

const sort = function(r) {
  r.list = r.list.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    }
    //(tie-braker)
    if (a.count === b.count && (a.size > b.size || a.key.length > b.key.length)) {
      return -1;
    }
    return 1;
  });
  return r;
};

//the Ngrams() subset class
const methods = {
  data: function() {
    return this.list.map(ts => {
      return {
        normal: ts.out('normal'),
        count: ts.count,
        size: ts.size
      };
    });
  },
  unigrams: function() {
    this.list = this.list.filter(g => g.size === 1);
    return this;
  },
  bigrams: function() {
    this.list = this.list.filter(g => g.size === 2);
    return this;
  },
  trigrams: function() {
    this.list = this.list.filter(g => g.size === 3);
    return this;
  },
  //default sort the ngrams
  sort: function() {
    return sort(this);
  }
};

const find = function(r, obj) {
  let sizes = [];
  //support .ngrams(3), for compat
  if (typeof obj === 'number') {
    obj = {
      n: obj
    };
  }
  obj = obj || {};
  let max = obj.max || 4;
  for (let i = 1; i <= max; i++) {
    sizes.push(i);
  }
  //only look for bigrams, for example
  if (obj.size) {
    sizes = [obj.size];
  }
  let opts = {
    size: sizes
  };
  //fetch them
  let arr = getGrams(r, opts);
  r = new Text(arr);
  //default sort
  r = sort(r);
  //grab top one, or something
  if (obj.n !== undefined) {
    r = r.get(obj.n);
  }
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./getGrams":33}],36:[function(_dereq_,module,exports){
'use strict';
const Ngrams = _dereq_('./index');
const getGrams = _dereq_('./getGrams');

const StartGrams = function(arr, world, original) {
  Ngrams.call(this, arr, world, original);
};

//Inherit properties
StartGrams.prototype = Object.create(Ngrams.prototype);

//like an n-gram, but only the startings of matches
StartGrams.find = function(r, n, size) {
  let opts = {
    size: [1, 2, 3, 4],
    edge: 'start'
  };
  //only look for bigrams, for example
  if (size) {
    opts.size = [size];
  }
  //fetch them
  let arr = getGrams(r, opts);
  r = new StartGrams(arr);
  //default sort
  r.sort();
  //grab top one, or something
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};

module.exports = StartGrams;

},{"./getGrams":33,"./index":35}],37:[function(_dereq_,module,exports){
'use strict';

//certain words can't be plural, like 'peace'
const hasPlural = function(t) {
  //end quick
  if (!t.tags.Noun) {
    return false;
  }
  if (t.tags.Plural) {
    return true;
  }
  //is it potentially plural?
  const noPlural = ['Pronoun', 'Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday'];
  for (let i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  }
  //terms known as un-inflectable, like 'peace'
  if (t.tags.Uncountable === true) {
    return false;
  }
  return true;
};

module.exports = hasPlural;

},{}],38:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Noun = _dereq_('./noun');

//the () subset class
const methods = {
  isPlural: function() {
    this.list = this.list.filter(ts => ts.isPlural());
    return this;
  },
  hasPlural: function() {
    return this.list.map(ts => ts.hasPlural());
  },
  toPlural: function() {
    this.list.forEach(ts => ts.toPlural());
    return this;
  },
  toSingular: function(verbose) {
    this.list.forEach(ts => ts.toSingular(verbose));
    return this;
  },
  articles: function() {
    return this.list.map(ts => {
      return {
        text: ts.out('text'),
        normal: ts.out('normal'),
        article: ts.article()
      };
    });

  }
};

//nouns that we don't want in these results, for weird reasons
const stopWords = '(there|these)';

const find = function(r, n) {
  r = r.clauses();
  r = r.match('#Noun+ (of|by)? the? #Noun+?');
  r = r.not('#Pronoun');
  r = r.not(stopWords);
  r = r.not('(#Month|#WeekDay)'); //allow Durations, Holidays
  //allow possessives like "spencer's", but not generic ones like,
  r = r.not('(my|our|your|their|her|his)');
  r = r.not('(of|for|by|the)$');
  if (typeof n === 'number') {
    r = r.get(n);
  }
  r.list = r.list.map(ts => {
    return new Noun(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./noun":46}],39:[function(_dereq_,module,exports){
'use strict';
const rules = _dereq_('./methods/data/indicators');
const prep = /([a-z]*) (of|in|by|for) [a-z]/;
const hasPlural = _dereq_('./hasPlural');

const knownPlural = {
  i: false,
  he: false,
  she: false,
  we: true,
  they: true
};

//is it potentially plural?
const noPlural = ['Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday', 'Possessive'];
//first, try to guess based on existing tags
const couldEvenBePlural = function(t) {
  if (hasPlural(t) === false) {
    return false;
  }
  for (let i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  }
  return true;
};

/** returns true, false, or null */
const isPlural = function(t, world) {
  if (t.tags.Plural) {
    return true;
  }
  if (t.tags.Singular) {
    return false;
  }
  let str = t.normal;
  //whitelist a few easy ones
  if (knownPlural.hasOwnProperty(str) === true) {
    return knownPlural[str];
  }
  //check given irregulars
  if (world.plurals && world.plurals.hasOwnProperty(str) === true) {
    return false;
  }
  //check opposite-ones
  if (world.cache.toSingular && world.cache.toSingular.hasOwnProperty(str) === true) {
    return true;
  }
  //inspect the existing tags to see if a plural is valid
  if (couldEvenBePlural(t) === false) {
    return null;
  }
  //handle 'mayors of chicago'
  const preposition = str.match(prep);
  if (preposition !== null) {
    str = preposition[1];
  }
  //check the suffix-type rules for indications
  for (let i = 0; i < rules.plural_indicators.length; i++) {
    if (rules.plural_indicators[i].test(str) === true) {
      return true;
    }
  }
  for (let i = 0; i < rules.singular_indicators.length; i++) {
    if (rules.singular_indicators[i].test(str) === true) {
      return false;
    }
  }
  // a fallback 'looks check plural' rule..
  if (/s$/.test(str) === true && /ss$/.test(str) === false && str.length > 3) {
    //needs some lovin'
    return true;
  }
  return false;
};

module.exports = isPlural;
// console.log(is_plural('octopus'))

},{"./hasPlural":37,"./methods/data/indicators":41}],40:[function(_dereq_,module,exports){
'use strict';

//chooses an indefinite aricle 'a/an' for a word
const irregulars = {
  'hour': 'an',
  'heir': 'an',
  'heirloom': 'an',
  'honest': 'an',
  'honour': 'an',
  'honor': 'an',
  'uber': 'an' //german u
};
//pronounced letters of acronyms that get a 'an'
const an_acronyms = {
  a: true,
  e: true,
  f: true,
  h: true,
  i: true,
  l: true,
  m: true,
  n: true,
  o: true,
  r: true,
  s: true,
  x: true
};
//'a' regexes
const a_regexs = [
  /^onc?e/i, //'wu' sound of 'o'
  /^u[bcfhjkqrstn][aeiou]/i, // 'yu' sound for hard 'u'
  /^eul/i
];

const makeArticle = function(t) {
  let str = t.normal;
  //no 'the john smith', but 'a london hotel'
  if (t.tags.Person) {
    return '';
  }
  //no a/an if it's plural
  if (t.tags.Plural) {
    return 'the';
  }
  //explicit irregular forms
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  //spelled-out acronyms
  let firstLetter = str.substr(0, 1);
  if (t.isAcronym() && an_acronyms.hasOwnProperty(firstLetter)) {
    return 'an';
  }
  //'a' regexes
  for (let i = 0; i < a_regexs.length; i++) {
    if (a_regexs[i].test(str)) {
      return 'a';
    }
  }
  //basic vowel-startings
  if (/^[aeiou]/i.test(str)) {
    return 'an';
  }
  return 'a';
};

module.exports = makeArticle;

},{}],41:[function(_dereq_,module,exports){
'use strict';
//similar to plural/singularize rules, but not the same
const plural_indicators = [
  /(^v)ies$/i,
  /ises$/i,
  /ives$/i,
  /(antenn|formul|nebul|vertebr|vit)ae$/i,
  /(octop|vir|radi|nucle|fung|cact|stimul)i$/i,
  /(buffal|tomat|tornad)oes$/i,
  /(analy|ba|diagno|parenthe|progno|synop|the)ses$/i,
  /(vert|ind|cort)ices$/i,
  /(matr|append)ices$/i,
  /(x|ch|ss|sh|s|z|o)es$/i,
  /men$/i,
  /news$/i,
  /.tia$/i,
  /(^f)ves$/i,
  /(lr)ves$/i,
  /(^aeiouy|qu)ies$/i,
  /(m|l)ice$/i,
  /(cris|ax|test)es$/i,
  /(alias|status)es$/i,
  /ics$/i
];

//similar to plural/singularize rules, but not the same
const singular_indicators = [
  /(ax|test)is$/i,
  /(octop|vir|radi|nucle|fung|cact|stimul)us$/i,
  /(octop|vir)i$/i,
  /(rl)f$/i,
  /(alias|status)$/i,
  /(bu)s$/i,
  /(al|ad|at|er|et|ed|ad)o$/i,
  /(ti)um$/i,
  /(ti)a$/i,
  /sis$/i,
  /(?:(^f)fe|(lr)f)$/i,
  /hive$/i,
  /(^aeiouy|qu)y$/i,
  /(x|ch|ss|sh|z)$/i,
  /(matr|vert|ind|cort)(ix|ex)$/i,
  /(m|l)ouse$/i,
  /(m|l)ice$/i,
  /(antenn|formul|nebul|vertebr|vit)a$/i,
  /.sis$/i,
  /^(?!talis|.*hu)(.*)man$/i
];
module.exports = {
  singular_indicators: singular_indicators,
  plural_indicators: plural_indicators
}

},{}],42:[function(_dereq_,module,exports){
//patterns for turning 'bus' to 'buses'
module.exports = [
  [/(ax|test)is$/i, '$1es'],
  [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, '$1i'],
  [/(octop|vir)i$/i, '$1i'],
  [/(kn|l|w)ife$/i, '$1ives'],
  [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i, '$1ves'],
  [/^(dwar|handkerchie|hoo|scar|whar)f$/i, '$1ves'],
  [/(alias|status)$/i, '$1es'],
  [/(bu)s$/i, '$1ses'],
  [/(al|ad|at|er|et|ed|ad)o$/i, '$1oes'],
  [/([ti])um$/i, '$1a'],
  [/([ti])a$/i, '$1a'],
  [/sis$/i, 'ses'],
  [/(hive)$/i, '$1s'],
  [/([^aeiouy]|qu)y$/i, '$1ies'],
  [/(x|ch|ss|sh|s|z)$/i, '$1es'],
  [/(matr|vert|ind|cort)(ix|ex)$/i, '$1ices'],
  [/([m|l])ouse$/i, '$1ice'],
  [/([m|l])ice$/i, '$1ice'],
  [/^(ox)$/i, '$1en'],
  [/^(oxen)$/i, '$1'],
  [/(quiz)$/i, '$1zes'],
  [/(antenn|formul|nebul|vertebr|vit)a$/i, '$1ae'],
  [/(sis)$/i, 'ses'],
  [/^(?!talis|.*hu)(.*)man$/i, '$1men'],
  [/(.*)/i, '$1s']
].map(function(a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

},{}],43:[function(_dereq_,module,exports){
//patterns for turning 'dwarves' to 'dwarf'
module.exports = [
  [/([^v])ies$/i, '$1y'],
  [/ises$/i, 'isis'],
  [/(kn|[^o]l|w)ives$/i, '$1ife'],
  [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i, '$1f'],
  [/^(dwar|handkerchie|hoo|scar|whar)ves$/i, '$1f'],
  [/(antenn|formul|nebul|vertebr|vit)ae$/i, '$1a'],
  [/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i, '$1us'],
  [/(buffal|tomat|tornad)(oes)$/i, '$1o'],
  // [/(analy|diagno|parenthe|progno|synop|the)ses$/i, '$1sis'],
  [/(..[aeiou]s)es$/i, '$1'],
  [/(vert|ind|cort)(ices)$/i, '$1ex'],
  [/(matr|append)(ices)$/i, '$1ix'],
  [/(x|ch|ss|sh|z|o)es$/i, '$1'],
  [/men$/i, 'man'],
  [/(n)ews$/i, '$1ews'],
  [/([ti])a$/i, '$1um'],
  [/([^aeiouy]|qu)ies$/i, '$1y'],
  [/(s)eries$/i, '$1eries'],
  [/(m)ovies$/i, '$1ovie'],
  [/([m|l])ice$/i, '$1ouse'],
  [/(cris|ax|test)es$/i, '$1is'],
  [/(alias|status)es$/i, '$1'],
  [/(ss)$/i, '$1'],
  [/(ics)$/i, '$1'],
  [/s$/i, '']
].map(function(a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

},{}],44:[function(_dereq_,module,exports){
'use strict';
// const irregulars = require('../../../lexicon/uncompressed/irregularPlurals').toPlural;
const pluralRules = _dereq_('./data/pluralRules');

//turn 'shoe' into 'shoes'
const pluralize = function(str, world) {
  const irregulars = world.plurals || {};
  //irregular
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }
  //regular rule-based inflector
  for (let i = 0; i < pluralRules.length; i++) {
    if (pluralRules[i].reg.test(str) === true) {
      return str.replace(pluralRules[i].reg, pluralRules[i].repl);
    }
  }
  return null;
};

module.exports = pluralize;

},{"./data/pluralRules":42}],45:[function(_dereq_,module,exports){
'use strict';
const singleRules = _dereq_('./data/singleRules');

//turn 'shoes' into 'shoe'
const toSingle = function(str, world) {
  //reverse it //TODO: cache in world object somewhere
  let irregulars = world.cache.toSingular || {};
  //check irregulars
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }
  if (world && world.plurals) {
    //given irregulars
    let keys = Object.keys(world.plurals);
    for (let i = 0; i < keys.length; i++) {
      if (world.plurals[keys[i]] === str) {
        return keys[i];
      }
    }
  }

  //inflect first word of preposition-phrase
  if (/([a-z]*) (of|in|by|for) [a-z]/.test(str) === true) {
    const first = (str.match(/^([a-z]*) (of|in|by|for) [a-z]/) || [])[1];
    if (first) {
      const better_first = toSingle(first); //recursive
      return better_first + str.replace(first, '');
    }
  }

  //regular rule-based inflector
  for (let i = 0; i < singleRules.length; i++) {
    if (singleRules[i].reg.test(str) === true) {
      return str.replace(singleRules[i].reg, singleRules[i].repl);
    }
  }
  return null;
};

module.exports = toSingle;
// console.log(toSingle('days'))

},{"./data/singleRules":43}],46:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const hasPlural = _dereq_('./hasPlural');
const isPlural = _dereq_('./isPlural');
const makeArticle = _dereq_('./makeArticle');
const pluralize = _dereq_('./methods/pluralize');
const singularize = _dereq_('./methods/singularize');

const methods = {
  article: function() {
    return makeArticle(this.main);
  },
  isPlural: function() {
    return isPlural(this.main, this.world);
  },
  hasPlural: function() {
    return hasPlural(this.main);
  },
  toPlural: function(verbose) {
    let t = this.main;
    if (hasPlural(t) && !isPlural(t, this.world)) {
      t.text = pluralize(t.normal, this.world, verbose) || t.text;
      t.unTag('Singular', 'toPlural');
      t.tag('Plural', 'toPlural');
    }
    return this;
  },
  toSingular: function(verbose) {
    let t = this.main;
    if (isPlural(t, this.world)) {
      t.text = singularize(t.normal, this.world, verbose) || t.text;
      t.unTag('Plural', 'toSingular');
      t.tag('Singular', 'toSingular');
    }
    return this;
  },
  data: function() {
    let t = this.main;
    let singular = t.text;
    if (isPlural(t, this.world)) {
      singular = singularize(t.normal, this.world) || t.text;
    }
    let plural = t.text;
    if (hasPlural(t) && !isPlural(t, this.world)) {
      plural = pluralize(t.normal, this.world) || t.text;
    }
    //support 'mayors of chicago'
    let qualifier = '';
    if (this.qualifier) {
      qualifier = this.qualifier.out('normal');
      singular += ' ' + qualifier;
      plural += ' ' + qualifier;
    }
    return {
      text: this.out('text'),
      normal: this.out('normal'),
      article: this.article(),
      main: t.normal,
      qualifier: qualifier,
      singular: singular,
      plural: plural
    };
  }
};

const Noun = function(arr, world, refText) {
  Terms.call(this, arr, world, refText);
  //support 'mayor of chicago' as one noun-phrase
  this.main = this.match('[#Noun+] (of|by|for)');
  if (this.main.found) {
    this.main = this.main.list[0].terms[0];
  } else {
    this.main = this.terms[this.terms.length - 1];
  }
  //'of chicago'
  this.qualifier = this.match(this.main.normal + ' [.+]').list[0];
};
Noun.prototype = Object.create(Terms.prototype);

Object.keys(methods).forEach(k => {
  Noun.prototype[k] = methods[k];
});
module.exports = Noun;

},{"../../paths":8,"./hasPlural":37,"./isPlural":39,"./makeArticle":40,"./methods/pluralize":44,"./methods/singularize":45}],47:[function(_dereq_,module,exports){
'use strict';
// make a statistical assumption about the gender of the person based on their given name
// used for pronoun resolution only.
// not intended for classification, or discrimination of people.
const gender = function (firstName) {
  if (!firstName) {
    return null;
  }
  //statistical guesses
  if (/.(i|ee|[a|e]y|a)$/.test(firstName) === true) { //this is almost-always true
    return 'Female';
  }
  if (/[ou]$/.test(firstName) === true) { //if it ends in a 'oh or uh', male
    return 'Male';
  }
  if (/(nn|ll|tt)/.test(firstName) === true) { //if it has double-consonants, female
    return 'Female';
  }
  // name not recognized, or recognized as of indeterminate gender
  return null;
};
module.exports = gender;

},{}],48:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Person = _dereq_('./person');
//this is used for pronoun and honorifics, and not intented for more-than grammatical use (see #117)

//the () subset class
const methods = {
  pronoun: function() {
    return this.list.map(ts => ts.pronoun());
  },
  firstNames: function() {
    return this.match('#FirstName');
  },
  lastNames: function() {
    return this.match('#LastName');
  }
};

const find = function(r, n) {
  let people = r.clauses();
  people = people.match('#Person+');
  if (typeof n === 'number') {
    people = people.get(n);
  }
  people.list = people.list.map(ts => {
    return new Person(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return people;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./person":49}],49:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const guessGender = _dereq_('./guessGender');

const Person = function(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  this.firstName = this.match('#FirstName+');
  this.middleName = this.match('#Acronym+');
  this.honorifics = this.match('#Honorific');
  this.lastName = this.match('#LastName+');
  //assume first-last
  if (!this.firstName.found && this.length > 1) {
    let m = this.not('(#Acronym|#Honorific)');
    this.firstName = m.first();
    this.lastName = m.last();
  }
  return this;
};
//Inherit properties
Person.prototype = Object.create(Terms.prototype);

const methods = {
  data: function() {
    return {
      text: this.out('text'),
      normal: this.out('normal'),
      firstName: this.firstName.out('normal'),
      middleName: this.middleName.out('normal'),
      lastName: this.lastName.out('normal'),
      genderGuess: this.guessGender(),
      pronoun: this.pronoun(),
      honorifics: this.honorifics.out('array')
    };
  },
  guessGender: function() {
    //try known honorifics
    if (this.honorifics.match('(mr|mister|sr|sir|jr)').found) {
      return 'Male';
    }
    if (this.honorifics.match('(mrs|miss|ms|misses|mme|mlle)').found) {
      return 'Female';
    }
    //try known first-names
    if (this.firstName.match('#MaleName').found) {
      return 'Male';
    }
    if (this.firstName.match('#FemaleName').found) {
      return 'Female';
    }
    //look-for regex clues
    let str = this.firstName.out('normal');
    return guessGender(str);
  },
  pronoun: function() {
    let str = this.firstName.out('normal');
    let g = this.guessGender(str);
    if (g === 'Male') {
      return 'he';
    }
    if (g === 'Female') {
      return 'she';
    }
    return 'they';
  },
  root: function() {
    let first = this.firstName.out('root');
    let last = this.lastName.out('root');
    if (first && last) {
      return first + ' ' + last;
    }
    return last || first || this.out('root');
  }
};

Object.keys(methods).forEach(k => {
  Person.prototype[k] = methods[k];
});
module.exports = Person;

},{"../../paths":8,"./guessGender":47}],50:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Sentence = _dereq_('./sentence');
//the Sentences() subset class
const methods = {
  /** conjugate the main/first verb*/
  toPastTense: function() {
    this.list = this.list.map(ts => {
      ts = ts.toPastTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toPresentTense: function() {
    this.list = this.list.map(ts => {
      ts = ts.toPresentTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toFutureTense: function() {
    this.list = this.list.map(ts => {
      ts = ts.toFutureTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  /** negative/positive */
  toNegative: function() {
    this.list = this.list.map(ts => {
      ts = ts.toNegative();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toPositive: function() {
    this.list = this.list.map(ts => {
      ts = ts.toPositive();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },

  /** look for 'was _ by' patterns */
  isPassive: function() {
    this.list = this.list.filter(ts => {
      return ts.isPassive();
    });
    return this;
  },
  /** add a word to the start */
  prepend: function(str) {
    this.list = this.list.map(ts => {
      return ts.prepend(str);
    });
    return this;
  },
  /** add a word to the end */
  append: function(str) {
    this.list = this.list.map(ts => {
      return ts.append(str);
    });
    return this;
  },

  /** convert between question/statement/exclamation*/
  toExclamation: function() {
    this.list.forEach(ts => {
      ts.setPunctuation('!');
    });
    return this;
  },
  toQuestion: function() {
    this.list.forEach(ts => {
      ts.setPunctuation('?');
    });
    return this;
  },
  toStatement: function() {
    this.list.forEach(ts => {
      ts.setPunctuation('.');
    });
    return this;
  }
};

const find = function(r, n) {
  r = r.all();
  if (typeof n === 'number') {
    r = r.get(n);
  }
  r.list = r.list.map(ts => {
    return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./sentence":52}],51:[function(_dereq_,module,exports){
'use strict';

//is this sentence asking a question?
const isQuestion = function(ts) {
  //if it has a question mark..
  let endPunct = ts.endPunctuation();
  if (/\?/.test(endPunct) === true) {
    return true;
  }
  //try to actually figure this out without a question-mark
  if (ts.has('#QuestionWord')) {
    return true;
  }

  //is it, do you - start of sentence
  if (ts.has('^(do|does|did|is|was|can|could|will|would|may) #Noun')) {
    return true;
  }
  //these are a little more loose..
  if (ts.has('^(have|must) you')) {
    return true;
  }

  let clauses = ts.match('*').splitAfter('#Comma');
  //is wayne gretskzy alive
  if (clauses.has('(do|does|is|was) #Noun+ #Adverb? (#Adjective|#Infinitive)$')) {
    return true;
  }
  //not a question, then
  return false;
};
module.exports = isQuestion;

},{}],52:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const toNegative = _dereq_('./toNegative');
const toPositive = _dereq_('./toPositive');
const Verb = _dereq_('../verbs/verb');
const insert = _dereq_('./smartInsert');

//decide on main subject-verb-object
const parse = function(s) {
  //strip conditions first
  let conditions = s.match('#Condition');
  let tmp = s.not('#Condition');
  //choose the verb first
  let verb = tmp.match('#VerbPhrase+').first(); //this should be much smarter
  let vb = verb.out('normal');
  //get subj noun left-of the verb
  let subject = tmp.match('#Determiner? #Adjective+? #Noun ' + vb).first().not('#VerbPhrase');
  //get obj noun right-of the verb
  let object = tmp.match(vb + ' #Preposition? #Determiner? #Noun').first().not('#VerbPhrase');
  s.conditions = conditions;
  s.subject = subject;
  s.verb = verb;
  s.object = object;
  if (s.verb.found) {
    s.verb = new Verb(s.verb.list[0].terms, s.world, s.refText, s.refTerms);
  }
  return s;
};

const fixContraction = function(contr) {
  if (contr.found) {
    contr.contractions().expand();
  }
};

const killContraction = function(s) {
  s.terms = s.terms.filter(t => {
    if (t.silent_term) {
      if (t.silent_term === 'am' || t.silent_term === 'will' || t.silent_term === 'did') {
        return false;
      }
      t.text = t.silent_term;
      t.silent_term = null;
      t.unTag('Contraction');
      if (t.tags.TitleCase === true) {
        t.toTitleCase();
      }
    }
    return true;
  });
};

//if the subject of thr sentence is plural, use infinitive form of verb
// (he goes / i go)
const useInfinitive = function(s) {
  if (s.subject.found && s.subject.has('(i|we)')) {
    return true;
  }
  return false;
};

const methods = {
  /** inflect the main/first noun*/
  toSingular: function() {
    let nouns = this.match('#Noun').match('!#Pronoun').firstTerm();
    nouns.things().toSingular();
    return this;
  },
  toPlural: function() {
    let nouns = this.match('#Noun').match('!#Pronoun').firstTerm();
    nouns.things().toPlural();
    return this;
  },

  /** find the first important verbPhrase. returns a Term object */
  mainVerb: function() {
    parse(this); //re-parse
    if (this.verb.found) {
      return this.verb;
    }
    return null;
  },

  /** sentence tense conversion**/
  toPastTense: function() {
    let verb = this.mainVerb();
    if (verb) {
      //this is really ugly..
      let start = verb.out('root');
      verb.toPastTense();
      //support "i'm going"
      let contr = this.match('#Contraction ' + start);
      fixContraction(contr);
      let end = verb.out('root');
      // this.replace(start, end)
      let r = this.parentTerms.replace(start, end);
      return r;
    }
    return this;
  },
  toPresentTense: function() {
    let verb = this.mainVerb();
    if (verb) {
      let start = verb.out('normal');
      //plural/singular stuff
      if (useInfinitive(this) === true) {
        if (this.has('(am|will|did) ' + start)) {
          killContraction(this);
        }
        verb.toInfinitive();
      } else {
        verb.toPresentTense();
        let contr = this.match('#Contraction ' + start);
        fixContraction(contr);
      }
      //support "i'm going"
      let end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }
    return this;
  },
  toFutureTense: function() {
    let verb = this.mainVerb();
    if (verb) {
      let start = verb.clone(); //.out('root');
      verb.toFutureTense();
      //support "i'm going"
      let contr = this.match('#Contraction ' + start.out('normal'));
      fixContraction(contr);
      let end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }
    return this;
  },

  /** negation **/
  isNegative: function() {
    return this.match('#Negative').list.length === 1;
  },
  toNegative: function() {
    if (this.isNegative()) {
      return this;
    }
    return toNegative(this);
  },
  toPositive: function() {
    if (!this.isNegative()) {
      return this;
    }
    return toPositive(this);
  },

  /** smarter insert methods*/
  append: function(str) {
    return insert.append(this, str);
  },
  prepend: function(str) {
    return insert.prepend(this, str);
  },

  /** punctuation */
  setPunctuation: function(punct) {
    let last = this.terms[this.terms.length - 1];
    last.setPunctuation(punct);
  },
  getPunctuation: function() {
    let last = this.terms[this.terms.length - 1];
    return last.getPunctuation();
  },
  /** look for 'was _ by' patterns */
  isPassive: function() {
    return this.match('was #Adverb? #PastTense #Adverb? by').found; //haha
  }
};

const Sentence = function(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  parse(this);
};
//Terms inheritence
Sentence.prototype = Object.create(Terms.prototype);
//add-in methods
Object.keys(methods).forEach(k => {
  Sentence.prototype[k] = methods[k];
});
module.exports = Sentence;

},{"../../paths":8,"../verbs/verb":91,"./smartInsert":53,"./toNegative":54,"./toPositive":55}],53:[function(_dereq_,module,exports){
'use strict';
const hasCapital = /^[A-Z]/;

//sticking words at the start sentence-sensitive
const prepend = (ts, str) => {
  let firstTerm = ts.terms[0];
  ts.insertAt(0, str);
  //handle titlecase of first-word
  if (hasCapital.test(firstTerm.text)) {
    //is it titlecased because it should be?
    if (firstTerm.needsTitleCase() === false) {
      firstTerm.toLowerCase();
    }
    let newTerm = ts.terms[0];
    newTerm.toTitleCase();
  }
  return ts;
};

//sticking words on end sentence-sensitive
const append = (ts, str) => {
  let endTerm = ts.terms[ts.terms.length - 1];
  //move the sentence punctuation to the end
  let punct = ts.endPunctuation();
  if (punct) {
    endTerm.killPunctuation();
  }
  ts.insertAt(ts.terms.length, str);
  let newTerm = ts.terms[ts.terms.length - 1];
  if (punct) {
    newTerm.text += punct;
  }
  //move over sentence-ending whitespace too
  if (endTerm.whitespace.after) {
    newTerm.whitespace.after = endTerm.whitespace.after;
    endTerm.whitespace.after = '';
  }
  return ts;
};

module.exports = {
  append: append,
  prepend: prepend
};

},{}],54:[function(_dereq_,module,exports){
'use strict';

//these terms are nicer ways to negate a sentence
//ie. john always walks -> john always doesn't walk
const logicalNegate = {
  everyone: 'no one',
  everybody: 'nobody',
  someone: 'no one',
  somebody: 'nobody',
  // everything:"nothing",
  always: 'never'
};

//different rule for i/we/they/you + infinitive
//that is, 'i walk' -> 'i don\'t walk', not 'I not walk'
const toNegative = ts => {
  let lg = ts.match('(everyone|everybody|someone|somebody|always)').first();
  if (lg.found && logicalNegate[lg.out('normal')]) {
    let found = lg.out('normal');
    // ts = ts.replace(found, logicalNegate[found]);
    ts = ts.match(found).replaceWith(logicalNegate[found]).list[0];
    return ts.parentTerms;
  }
  //negate the main verb of the sentence
  let vb = ts.mainVerb();
  if (vb) {
    vb.toNegative();
  }
  return ts;
};
module.exports = toNegative;

},{}],55:[function(_dereq_,module,exports){
'use strict';

//ie. john never walks -> john always walks
//nobody/noone are ambiguous logically (somebody? / everybody?)
const logical = {
  'never': 'always',
  'nothing': 'everything',
};

const toPositive = (ts) => {
  let m = ts.match('(never|nothing)').first();
  if (m.found) {
    let str = m.out('normal');
    if (logical[str]) {
      ts = ts.match(str).replaceWith(logical[str], true).list[0];
      return ts.parentTerms;
    }
  }
  //otherwise just remove 'not'
  ts.delete('#Negative');
  return ts;
};
module.exports = toPositive;

},{}],56:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Terms = _dereq_('../../paths').Terms;

//the Terms() subset class
//this is just a wrapper around the actual Term class,
//which is buried in `ts.terms[0]`
const methods = {
  data: function() {
    return this.list.map(ts => {
      let t = ts.terms[0];
      return {
        spaceBefore: t.whitespace.before,
        text: t.text,
        spaceAfter: t.whitespace.after,
        normal: t.normal,
        implicit: t.silent_term,
        bestTag: t.bestTag(),
        tags: Object.keys(t.tags)
      };
    });
  }
};

const find = function(r, n) {
  let list = [];
  //make a Terms Object for every Term
  r.list.forEach(ts => {
    ts.terms.forEach(t => {
      list.push(new Terms([t], ts.world, r));
    });
  });
  r = new Text(list, r.world, r.parent);
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../paths":8,"../../text":187}],57:[function(_dereq_,module,exports){
const numOrdinal = _dereq_('./numOrdinal');
const textOrdinal = _dereq_('./textOrdinal');
const textCardinal = _dereq_('./textCardinal');
const niceNumber = _dereq_('./niceNumber');

//make all the number formats
const fmt = {
  nice: function(num) {
    return niceNumber(num);
  },
  ordinal: function(num) {
    return numOrdinal(num);
  },
  cardinal: function(num) {
    return String(num);
  },
  niceOrdinal: function(num) {
    num = numOrdinal(num);
    num = niceNumber(num);
    return num;
  },
  text: function(num) {
    return textCardinal(num).join(' ');
  },
  textOrdinal: function(num) {
    return textOrdinal(num);
  }
};
module.exports = fmt;

},{"./niceNumber":58,"./numOrdinal":59,"./textCardinal":60,"./textOrdinal":61}],58:[function(_dereq_,module,exports){
'use strict';
//put a comma or two in
const niceNumber = function (num) {
  if (!num && num !== 0) {
    return null;
  }
  num = String(num);
  let x = num.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
};
module.exports = niceNumber;

},{}],59:[function(_dereq_,module,exports){
'use strict';

//turn a number like 5 into an ordinal like 5th
const numOrdinal = function(num) {
  if (!num && num !== 0) {
    return null;
  }
  //the teens are all 'th'
  let tens = num % 100;
  if (tens > 10 && tens < 20) {
    return String(num) + 'th';
  }
  //the rest of 'em
  const mapping = {
    0: 'th',
    1: 'st',
    2: 'nd',
    3: 'rd'
  };
  let str = String(num);
  let last = str.slice(str.length - 1, str.length);
  if (mapping[last]) {
    str += mapping[last];
  } else {
    str += 'th';
  }
  return str;
};

module.exports = numOrdinal;

},{}],60:[function(_dereq_,module,exports){
'use strict';
// turns an integer/float into a textual number, like 'fifty-five'
const tens_mapping = [
  ['ninety', 90],
  ['eighty', 80],
  ['seventy', 70],
  ['sixty', 60],
  ['fifty', 50],
  ['forty', 40],
  ['thirty', 30],
  ['twenty', 20]
];
const ones_mapping = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];
const sequence = [
  [1000000000, 'million'],
  [100000000, 'hundred million'],
  [1000000, 'million'],
  [100000, 'hundred thousand'],
  [1000, 'thousand'],
  [100, 'hundred'],
  [1, 'one']
];

//turn number into an array of magnitudes, like [[5, million], [2, hundred]]
const breakdown_magnitudes = function(num) {
  let working = num;
  let have = [];
  sequence.forEach((a) => {
    if (num >= a[0]) {
      let howmany = Math.floor(working / a[0]);
      working -= howmany * a[0];
      if (howmany) {
        have.push({
          unit: a[1],
          count: howmany
        });
      }
    }
  });
  return have;
};

//turn numbers from 100-0 into their text
const breakdown_hundred = function(num) {
  let arr = [];
  for (let i = 0; i < tens_mapping.length; i++) {
    if (num >= tens_mapping[i][1]) {
      num -= tens_mapping[i][1];
      arr.push(tens_mapping[i][0]);
    }
  }
  //(hopefully) we should only have 20-0 now
  if (ones_mapping[num]) {
    arr.push(ones_mapping[num]);
  }
  return arr;
};

/** print-out 'point eight nine'*/
const handle_decimal = (num) => {
  const names = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  let arr = [];
  //parse it out like a string, because js math is such shit
  let decimal = String(num).match(/\.([0-9]+)/);
  if (!decimal || !decimal[0]) {
    return arr;
  }
  arr.push('point');
  let decimals = decimal[0].split('');
  for (let i = 0; i < decimals.length; i++) {
    arr.push(names[decimals[i]]);
  }
  return arr;
};

/** turns an integer into a textual number */
const to_text = function(num) {
  let arr = [];
  //handle negative numbers
  if (num < 0) {
    arr.push('negative');
    num = Math.abs(num);
  }
  //break-down into units, counts
  let units = breakdown_magnitudes(num);
  //build-up the string from its components
  for (let i = 0; i < units.length; i++) {
    let unit_name = units[i].unit;
    if (unit_name === 'one') {
      unit_name = '';
      //put an 'and' in here
      if (arr.length > 1) {
        arr.push('and');
      }
    }
    arr = arr.concat(breakdown_hundred(units[i].count));
    arr.push(unit_name);
  }
  //also support decimals - 'point eight'
  arr = arr.concat(handle_decimal(num));
  //remove empties
  arr = arr.filter((s) => s);
  if (arr.length === 0) {
    arr[0] = '';
  }
  return arr;
};

module.exports = to_text;

// console.log(to_text(-1000.8));

},{}],61:[function(_dereq_,module,exports){
'use strict';
const textValue = _dereq_('./textCardinal');
const ordinalWord = _dereq_('../../../world/more-data/numbers').toOrdinal;
//
const textOrdinal = num => {
  let words = textValue(num);
  //convert the last number to an ordinal
  let last = words[words.length - 1];
  words[words.length - 1] = ordinalWord[last] || last;
  return words.join(' ');
};

module.exports = textOrdinal;

},{"../../../world/more-data/numbers":214,"./textCardinal":60}],62:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Value = _dereq_('./value');
const parse = _dereq_('./parse');

//the Values() subset class
const methods = {
  noDates: function() {
    return this.not('#Date');
  },
  noUnits: function() {
    return this.not('#Unit');
  },
  units: function() {
    return this.match('#Unit+');
  },
  /** five -> 5 */
  numbers: function() {
    return this.list.map(ts => {
      return ts.number();
    });
  },
  /** five -> '5' */
  toNumber: function() {
    this.list = this.list.map(ts => {
      return ts.toNumber();
    });
    return this;
  },
  /**5 -> 'five' */
  toText: function() {
    this.list = this.list.map(ts => {
      return ts.toText();
    });
    return this;
  },
  /**5th -> 5 */
  toCardinal: function() {
    this.list = this.list.map(ts => {
      return ts.toCardinal();
    });
    return this;
  },
  /**5 -> 5th */
  toOrdinal: function() {
    this.list = this.list.map(ts => {
      return ts.toOrdinal();
    });
    return this;
  },
  /**5900 -> 5,900 */
  toNice: function() {
    this.list = this.list.map(ts => {
      return ts.toNice();
    });
    return this;
  },
  /**seven === 7th */
  isEqual: function(num) {
    num = parse(num);
    this.list = this.list.filter(ts => {
      return num !== null && ts.number() === num;
    });
    return this;
  },
  /**eight > 7th */
  greaterThan: function(num) {
    num = parse(num);
    this.list = this.list.filter(ts => {
      return num !== null && ts.number() > num;
    });
    return this;
  },
  /**five < 7th */
  lessThan: function(num) {
    num = parse(num);
    this.list = this.list.filter(ts => {
      return num !== null && ts.number() < num;
    });
    return this;
  },
  between: function(min, max) {
    if (min === undefined || max === undefined) {
      return this;
    }
    min = parse(min);
    max = parse(max);
    this.list = this.list.filter(ts => {
      let n = ts.number();
      return n > min && n < max;
    });
    return this;
  },
  /**seven + 2 = 'nine' */
  add: function(n) {
    this.list = this.list.map(ts => {
      return ts.add(n);
    });
    return this;
  },
  /**seven - 2 = 'five' */
  subtract: function(n) {
    this.list = this.list.map(ts => {
      return ts.subtract(n);
    });
    return this;
  },
  /**seven -> 'eight' */
  increment: function() {
    this.list = this.list.map(ts => {
      return ts.add(1);
    });
    return this;
  },
  /**seven -> 'eight' */
  decrement: function() {
    this.list = this.list.map(ts => {
      return ts.subtract(1);
    });
    return this;
  }
};

const find = function(r, n) {
  const tens = 'twenty|thirty|fourty|fifty|sixty|seventy|eighty|ninety';
  const teens = 'eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen';
  r = r.match('#Value+ #Unit?');
  // r = r.match('#Value+ #Unit?');

  //three-length
  if (r.has('#Value #Value #Value') && !r.has('#Multiple')) {
    //twenty-five-twenty
    if (r.has('(' + tens + ') #Cardinal #Cardinal')) {
      r.splitAfter('(' + tens + ') #Cardinal');
    }
  }

  //two-length ones
  if (r.has('#Value #Value')) {
    //june 21st 1992 is two seperate values
    if (r.has('#NumericValue #NumericValue')) {
      r.splitOn('#Year');
    }
    //sixty fifteen
    if (r.has('(' + tens + ') (' + teens + ')')) {
      r.splitAfter('(' + tens + ')');
    }
    //"72 82"
    let double = r.match('#Cardinal #Cardinal');
    if (double.found && !r.has('(point|decimal)')) {
      //not 'two hundred'
      if (!double.has('#Cardinal (#Multiple|point|decimal)')) {
        //one proper way, 'twenty one', or 'hundred one'
        if (!double.has('(' + tens + ') #Cardinal') && !double.has('#Multiple #Value')) {
          r.splitAfter(double.terms(0).out('normal'));
        }
      }
    }
    //seventh fifth
    if (r.match('#Ordinal #Ordinal').match('#TextValue').found && !r.has('#Multiple')) {
      //the one proper way, 'twenty first'
      if (!r.has('(' + tens + ') #Ordinal')) {
        r.splitAfter('#Ordinal');
      }
    }
    //fifth five
    if (r.has('#Ordinal #Cardinal')) {
      r.splitBefore('#Cardinal+');
    }
    //five 2017 (support '5 hundred', and 'twenty 5'
    if (
      r.has('#TextValue #NumericValue') &&
      !r.has('(' + tens + '|#Multiple)')
    ) {
      r.splitBefore('#NumericValue+');
    }
  }
  //5-8
  if (r.has('#NumberRange')) {
    r.splitAfter('#NumberRange');
  }
  r.splitAfter('#Comma');
  if (typeof n === 'number') {
    r = r.get(n);
  }
  let world = r.world();
  r.list = r.list.map(ts => {
    return new Value(ts.terms, world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./parse":63,"./value":71}],63:[function(_dereq_,module,exports){
'use strict';
const parseText = _dereq_('./parseText');
// 2.5, $5.50, 3,432, etc -
const numeric = /^-?(\$|€|¥|£)?\.?[0-9]+[0-9,\.]*(st|nd|rd|th|rth|%)?$/;

const parseString = function(str) {
  if (numeric.test(str) === true) {
    //clean up a number, like '$4,342.00'
    str = str.replace(/,/g, '');
    str = str.replace(/^[\$|€|¥|£]/g, '');
    str = str.replace(/%$/, '');
    str = str.replace(/(st|nd|rd|th|rth)$/g, '');
    let num = parseFloat(str);
    if (num || num === 0) {
      return num;
    }
  }
  return parseText(str);
};

//turn it all into a number
const parse = function(val) {
  if (val === null || val === undefined || typeof val === 'number') {
    return val;
  }
  if (typeof val === 'string') {
    return parseString(val);
  }
  //numerical values can only be one term
  if (val.terms.length === 1 && val.terms[0].tags.TextValue !== true) {
    let str = val.terms[0].normal;
    return parseString(str);
  }
  return parseText(val.out('normal'));
};
module.exports = parse;

},{"./parseText":66}],64:[function(_dereq_,module,exports){
const numbers = _dereq_('../../../world/more-data/numbers');
const fns = _dereq_('../paths').fns;

//setup number-word data
const ones = fns.extend(numbers.ordinal.ones, numbers.cardinal.ones);
const teens = fns.extend(numbers.ordinal.teens, numbers.cardinal.teens);
const tens = fns.extend(numbers.ordinal.tens, numbers.cardinal.tens);
const multiples = fns.extend(numbers.ordinal.multiples, numbers.cardinal.multiples);
module.exports = {
  ones: ones,
  teens: teens,
  tens: tens,
  multiples: multiples
};

},{"../../../world/more-data/numbers":214,"../paths":70}],65:[function(_dereq_,module,exports){
'use strict';

//support global multipliers, like 'half-million' by doing 'million' then multiplying by 0.5
const findModifiers = str => {
  const mults = [
    {
      reg: /^(minus|negative)[\s\-]/i,
      mult: -1
    },
    {
      reg: /^(a\s)?half[\s\-](of\s)?/i,
      mult: 0.5
    }
    //  {
    //   reg: /^(a\s)?quarter[\s\-]/i,
    //   mult: 0.25
    // }
  ];
  for (let i = 0; i < mults.length; i++) {
    if (mults[i].reg.test(str) === true) {
      return {
        amount: mults[i].mult,
        str: str.replace(mults[i].reg, '')
      };
    }
  }
  return {
    amount: 1,
    str: str
  };
};

module.exports = findModifiers;

},{}],66:[function(_dereq_,module,exports){
'use strict';
const findModifiers = _dereq_('./findModifiers');
const words = _dereq_('./data');
const isValid = _dereq_('./validate');
const parseDecimals = _dereq_('./parseDecimals');
const parseNumeric = _dereq_('./parseNumeric');
const improperFraction = /^([0-9,\. ]+)\/([0-9,\. ]+)$/;

//some numbers we know
const casualForms = {
  // 'a few': 3,
  'a couple': 2,
  'a dozen': 12,
  'two dozen': 24,
  zero: 0
};

// a 'section' is something like 'fifty-nine thousand'
// turn a section into something we can add to - like 59000
const section_sum = obj => {
  return Object.keys(obj).reduce((sum, k) => {
    sum += obj[k];
    return sum;
  }, 0);
};

//turn a string into a number
const parse = function(str) {
  //convert some known-numbers
  if (casualForms.hasOwnProperty(str) === true) {
    return casualForms[str];
  }
  //'a/an' is 1
  if (str === 'a' || str === 'an') {
    return 1;
  }
  const modifier = findModifiers(str);
  str = modifier.str;
  let last_mult = null;
  let has = {};
  let sum = 0;
  let isNegative = false;
  const terms = str.split(/[ -]/);
  for (let i = 0; i < terms.length; i++) {
    let w = terms[i];
    w = parseNumeric(w);
    if (!w || w === 'and') {
      continue;
    }
    if (w === '-' || w === 'negative') {
      isNegative = true;
      continue;
    }
    if (w.charAt(0) === '-') {
      isNegative = true;
      w = w.substr(1);
    }
    //decimal mode
    if (w === 'point') {
      sum += section_sum(has);
      sum += parseDecimals(terms.slice(i + 1, terms.length));
      sum *= modifier.amount;
      return sum;
    }
    //improper fraction
    const fm = w.match(improperFraction);
    if (fm) {
      const num = parseFloat(fm[1].replace(/[, ]/g, ''));
      const denom = parseFloat(fm[2].replace(/[, ]/g, ''));
      if (denom) {
        sum += num / denom || 0;
      }
      continue;
    }
    //prevent mismatched units, like 'seven eleven'
    if (isValid(w, has) === false) {
      return null;
    }
    //buildOut section, collect 'has' values
    if (/^[0-9\.]+$/.test(w)) {
      has['ones'] = parseFloat(w); //not technically right
    } else if (words.ones[w]) {
      has['ones'] = words.ones[w];
    } else if (words.teens[w]) {
      has['teens'] = words.teens[w];
    } else if (words.tens[w]) {
      has['tens'] = words.tens[w];
    } else if (words.multiples[w]) {
      let mult = words.multiples[w];
      //something has gone wrong : 'two hundred five hundred'
      if (mult === last_mult) {
        return null;
      }
      //support 'hundred thousand'
      //this one is tricky..
      if (mult === 100 && terms[i + 1] !== undefined) {
        // has['hundreds']=
        const w2 = terms[i + 1];
        if (words.multiples[w2]) {
          mult *= words.multiples[w2]; //hundredThousand/hundredMillion
          i += 1;
        }
      }
      //natural order of things
      //five thousand, one hundred..
      if (last_mult === null || mult < last_mult) {
        sum += (section_sum(has) || 1) * mult;
        last_mult = mult;
        has = {};
      } else {
        //maybe hundred .. thousand
        sum += section_sum(has);
        last_mult = mult;
        sum = (sum || 1) * mult;
        has = {};
      }
    }
  }
  //dump the remaining has values
  sum += section_sum(has);
  //post-process add modifier
  sum *= modifier.amount;
  sum *= isNegative ? -1 : 1;
  //dont return 0, if it went straight-through
  if (sum === 0) {
    return null;
  }
  return sum;
};

module.exports = parse;

},{"./data":64,"./findModifiers":65,"./parseDecimals":67,"./parseNumeric":68,"./validate":69}],67:[function(_dereq_,module,exports){
'use strict';
const words = _dereq_('./data');

//concatenate into a string with leading '0.'
const parseDecimals = function(arr) {
  let str = '0.';
  for (let i = 0; i < arr.length; i++) {
    let w = arr[i];
    if (words.ones[w] !== undefined) {
      str += words.ones[w];
    } else if (words.teens[w] !== undefined) {
      str += words.teens[w];
    } else if (words.tens[w] !== undefined) {
      str += words.tens[w];
    } else if (/^[0-9]$/.test(w) === true) {
      str += w;
    } else {
      return 0;
    }
  }
  return parseFloat(str);
};

module.exports = parseDecimals;

},{"./data":64}],68:[function(_dereq_,module,exports){
'use strict';
//parse a string like "4,200.1" into Number 4200.1
const parseNumeric = str => {
  //remove ordinal - 'th/rd'
  str = str.replace(/1st$/, '1');
  str = str.replace(/2nd$/, '2');
  str = str.replace(/3rd$/, '3');
  str = str.replace(/([4567890])r?th$/, '$1');
  //remove prefixes
  str = str.replace(/^[$€¥£¢]/, '');
  //remove suffixes
  str = str.replace(/[%$€¥£¢]$/, '');
  //remove commas
  str = str.replace(/,/g, '');
  //split '5kg' from '5'
  str = str.replace(/([0-9])([a-z]{1,2})$/, '$1');
  return str;
};

module.exports = parseNumeric;

},{}],69:[function(_dereq_,module,exports){
'use strict';
const words = _dereq_('./data');

//prevent things like 'fifteen ten', and 'five sixty'
const isValid = (w, has) => {
  if (words.ones[w]) {
    if (has.ones || has.teens) {
      return false;
    }
  } else if (words.teens[w]) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  } else if (words.tens[w]) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  }
  return true;
};
module.exports = isValid;

},{"./data":64}],70:[function(_dereq_,module,exports){
module.exports = _dereq_('../../paths');

},{"../../paths":8}],71:[function(_dereq_,module,exports){
'use strict';
const paths = _dereq_('../../paths');
const Terms = paths.Terms;
const parse = _dereq_('./parse');
const fmt = _dereq_('./format');

// const unpackRange = function(ts) {
//   if (ts.has('#NumberRange')) {
//     ts.terms.forEach(t => {
//       if (t.silent_term && !t._text) {
//         t.text = t.silent_term;
//       }
//     });
//   }
//   return ts;
// };

const parseValue = function(ts) {
  ts.val = ts.match('#Value+');
  // ts.val = unpackRange(ts.val);
  ts.val = ts.val.list[0];
  ts.unit = ts.match('#Unit+');
  if (ts.unit.found) {
    ts.unit = ts.unit.list[0];
  }
  return ts;
};

const isPercent = function(val, unit) {
  //pre-tagged
  if (val.has('#Percent') || unit.has('#Percent')) {
    return true;
  }
  // 'five percent'
  if (unit.out('normal') === 'percent') {
    return true;
  }
  //'5%'
  if (val.out('normal').match(/%$/) !== null) {
    return true;
  }
  return false;
};

//set the text as the same num format
const setNumber = function(ts, num) {
  let str = ts.val.out();
  if (ts.has('#Ordinal')) {
    if (ts.has('#TextValue')) {
      str = fmt.textOrdinal(num); //ordinal text
    } else {
      str = fmt.ordinal(num); //ordinal number
    }
  } else if (ts.has('#TextValue')) {
    str = fmt.text(num); //cardinal text
  } else if (ts.has('#NiceNumber')) {
    str = fmt.nice(num); //8,929 number
  } else {
    str = fmt.cardinal(num); //cardinal number
  }
  //add the unit at the end
  if (ts.unit.found) {
    str += ts.unit.out('text');
  }
  ts = ts.replaceWith(str, true);
  return parseValue(ts);
};

const Value = function(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  parseValue(this);
};

//Terms inheritence
Value.prototype = Object.create(Terms.prototype);

const methods = {
  data: function() {
    let num = parse(this.val);
    return {
      number: num,
      nice: fmt.nice(num),
      ordinal: fmt.ordinal(num),
      niceOrdinal: fmt.niceOrdinal(num),
      text: fmt.text(num),
      textOrdinal: fmt.textOrdinal(num),
      unit: this.unit.out('normal')
    };
  },
  number: function() {
    return parse(this.val);
  },
  // /** five -> '5' */
  toNumber: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#Ordinal')) {
        str = fmt.ordinal(num);
      } else {
        str = String(num);
        //convert 'five percent' -> '5%'
        if (isPercent(this.val, this.unit)) {
          str = str + '%';
          this.unit.delete();
        }
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('NumericValue');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  // /**5 -> 'five' */
  toText: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#Ordinal')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.text(num);
        //add percent
        if (isPercent(this.val, this.unit)) {
          str = str + ' percent';
        }
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('TextValue');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  //
  // /**5th -> 5 */
  toCardinal: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#TextValue')) {
        str = fmt.text(num);
      } else {
        str = num;
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('Cardinal');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  //
  // /**5 -> 5th */
  toOrdinal: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#TextValue')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.ordinal(num);
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('Ordinal');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  //
  // /**5900 -> 5,900 */
  toNice: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#Ordinal')) {
        str = fmt.niceOrdinal(num);
      } else {
        str = fmt.nice(num);
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('NumericValue');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  /** seven + 2 = nine */
  add: function(n) {
    if (!n) {
      return this;
    }
    let num = parse(this.val) || 0;
    num += n; //add it
    return setNumber(this, num);
  },
  /** seven - 2 = five */
  subtract: function(n) {
    if (!n) {
      return this;
    }
    let num = parse(this.val) || 0;
    num -= n; //subtract it
    return setNumber(this, num);
  },
  /**seven -> 'eight' */
  increment: function() {
    return this.add(1);
  },
  /**seven -> 'six' */
  decrement: function() {
    return this.subtract(1);
  }
};

Object.keys(methods).forEach(k => {
  Value.prototype[k] = methods[k];
});
module.exports = Value;

},{"../../paths":8,"./format":57,"./parse":63}],72:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Verb = _dereq_('./verb');

//the () subset class
const methods = {
  conjugation: function(verbose) {
    return this.list.map(ts => {
      return ts.conjugation(verbose);
    });
  },
  conjugate: function(verbose) {
    return this.list.map(ts => {
      return ts.conjugate(verbose);
    });
  },

  /** plural/singular **/
  isPlural: function() {
    this.list = this.list.filter(ts => {
      return ts.isPlural();
    });
    return this;
  },
  isSingular: function() {
    this.list = this.list.filter(ts => {
      return !ts.isPlural();
    });
    return this;
  },

  /** negation **/
  isNegative: function() {
    this.list = this.list.filter(ts => {
      return ts.isNegative();
    });
    return this;
  },
  isPositive: function() {
    this.list = this.list.filter(ts => {
      return !ts.isNegative();
    });
    return this;
  },
  toNegative: function() {
    this.list = this.list.map(ts => {
      return ts.toNegative();
    });
    return this;
  },
  toPositive: function() {
    this.list.forEach(ts => {
      ts.toPositive();
    });
    return this;
  },

  /** tense **/
  toPastTense: function() {
    this.list.forEach(ts => {
      ts.toPastTense();
    });
    return this;
  },
  toPresentTense: function() {
    this.list.forEach(ts => {
      ts.toPresentTense();
    });
    return this;
  },
  toFutureTense: function() {
    this.list.forEach(ts => {
      ts.toFutureTense();
    });
    return this;
  },
  toInfinitive: function() {
    this.list.forEach(ts => {
      ts.toInfinitive();
    });
    return this;
  },
  asAdjective: function() {
    return this.list.map(ts => ts.asAdjective());
  }
};


const find = function(r, n) {
  r = r.match('(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+');
  r = r.splitAfter('#Comma');
  r = r.if('#Verb'); //this should be (much) smarter
  if (typeof n === 'number') {
    r = r.get(n);
  }
  r.list = r.list.map(ts => {
    return new Verb(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return new Text(r.list, this.world, this.parent);
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":187,"./verb":91}],73:[function(_dereq_,module,exports){
'use strict';
const predict = _dereq_('./methods/predict');
const isPlural = _dereq_('./methods/isPlural');

//'walking' - aka progressive
const isContinuous = function(ts) {
  return ts.match('#Gerund').found;
};

//will not walk
const isNegative = function(ts) {
  let negs = ts.match('#Negative').list;
  if (negs.length === 2) {
    return false;
  }
  if (negs.length === 1) {
    return true;
  }
  return false;
};

//been walked by..
const isPassive = function(ts) {
  if (ts.match('is being #PastTense').found) {
    return true;
  }
  if (ts.match('(had|has) been #PastTense').found) {
    return true;
  }
  if (ts.match('will have been #PastTense').found) {
    return true;
  }
  return false;
};

//had walked
const isPerfect = function(ts) {
  if (ts.match('^(had|have) #PastTense')) {
    return true;
  }
  return false;
};

//should walk, could walk
const getModal = function(ts) {
  let modal = ts.match('#Modal');
  if (!modal.found) {
    return null;
  }
  return modal.out('normal');
};

//past/present/future
const getTense = function(ts) {
  //look at the preceding words
  if (ts.auxiliary.found) {
    //'will'
    if (ts.match('will have #PastTense').found) {
      return 'Past';
    }
    if (ts.auxiliary.match('will').found) {
      return 'Future';
    }
    //'was'
    if (ts.auxiliary.match('was').found) {
      return 'Past';
    }
  }
  //look at the main verb tense
  if (ts.verb) {
    const tenses = {
      PastTense: 'Past',
      FutureTense: 'Future',
      FuturePerfect: 'Future',
    };
    let tense = predict(ts.verb); //yikes
    return tenses[tense] || 'Present';
  }
  return 'Present';
};

// const isImperative = function(ts) {};
// const isConditional = function(ts) {};

// detect signals in Auxiliary verbs
// 'will' -> future, 'have'->perfect, modals, negatives, adverbs
const interpret = (ts) => {
  let isNeg = isNegative(ts);
  // let aux = ts.Auxiliary.clone();
  // aux = aux.not('(#Negative|#Adverb)');
  let obj = {
    negative: isNeg,
    continuous: isContinuous(ts),
    passive: isPassive(ts),
    perfect: isPerfect(ts),
    plural: isPlural(ts),
    modal: getModal(ts),
    tense: getTense(ts),
  };
  return obj;
};
module.exports = interpret;

},{"./methods/isPlural":83,"./methods/predict":84}],74:[function(_dereq_,module,exports){
'use strict';
const checkIrregulars = _dereq_('./irregulars');
const suffixPass = _dereq_('./suffixes');
const toActor = _dereq_('./toActor');
const generic = _dereq_('./generic');
const predict = _dereq_('../predict');
const toInfinitive = _dereq_('../toInfinitive');
const toBe = _dereq_('./toBe');

//turn a verb into all it's forms
const conjugate = function(t, world) {
  //handle is/was/will-be specially
  if (t.normal === 'is' || t.normal === 'was' || t.normal === 'will') {
    return toBe();
  }

  //dont conjugate didn't
  if (t.tags.Contraction) {
    t.text = t.silent_term;
  }
  let all = {
    PastTense: null,
    PresentTense: null,
    Infinitive: null,
    Gerund: null,
    Actor: null
  };
  //first, get its current form
  let form = predict(t);
  if (form) {
    all[form] = t.normal;
  }
  if (form !== 'Infinitive') {
    all['Infinitive'] = toInfinitive(t, world) || '';
  }
  //check irregular forms
  const irregObj = checkIrregulars(all['Infinitive'], world) || {};
  Object.keys(irregObj).forEach(k => {
    if (irregObj[k] && !all[k]) {
      all[k] = irregObj[k];
    }
  });
  //ok, send this infinitive to all conjugators
  let inf = all['Infinitive'] || t.normal;

  //check suffix rules
  const suffObj = suffixPass(inf);
  Object.keys(suffObj).forEach(k => {
    if (suffObj[k] && !all[k]) {
      all[k] = suffObj[k];
    }
  });
  //ad-hoc each missing form
  //to Actor
  if (!all.Actor) {
    all.Actor = toActor(inf);
  }

  //use fallback, generic transformations
  Object.keys(all).forEach(k => {
    if (!all[k] && generic[k]) {
      all[k] = generic[k](all);
    }
  });

  return all;
};

module.exports = conjugate;

},{"../predict":84,"../toInfinitive":87,"./generic":77,"./irregulars":79,"./suffixes":80,"./toActor":81,"./toBe":82}],75:[function(_dereq_,module,exports){
module.exports = [
  {
    reg: /(eave)$/i,
    repl: {
      pr: '$1s',
      pa: '$1d',
      gr: 'eaving',
      ar: '$1r'
    }
  },
  {
    reg: /(ink)$/i,
    repl: {
      pr: '$1s',
      pa: 'unk',
      gr: '$1ing',
      ar: '$1er'
    }
  },
  {
    reg: /(end)$/i,
    repl: {
      pr: '$1s',
      pa: 'ent',
      gr: '$1ing',
      ar: '$1er'
    }
  },
  {
    reg: /(ide)$/i,
    repl: {
      pr: '$1s',
      pa: 'ode',
      gr: 'iding',
      ar: 'ider'
    }
  },
  {
    reg: /(ake)$/i,
    repl: {
      pr: '$1s',
      pa: 'ook',
      gr: 'aking',
      ar: '$1r'
    }
  },
  {
    reg: /(eed)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing',
      ar: '$1er'
    }
  },

  {
    reg: /(e)(ep)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1pt',
      gr: '$1$2ing',
      ar: '$1$2er'
    }
  }, {
    reg: /(a[tg]|i[zn]|ur|nc|gl|is)e$/i,
    repl: {
      pr: '$1es',
      pa: '$1ed',
      gr: '$1ing',
      prt: '$1en'
    }
  }, {
    reg: /([i|f|rr])y$/i,
    repl: {
      pr: '$1ies',
      pa: '$1ied',
      gr: '$1ying'
    }
  }, {
    reg: /([td]er)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /([bd]l)e$/i,
    repl: {
      pr: '$1es',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /(ish|tch|ess)$/i,
    repl: {
      pr: '$1es',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /(ion|end|e[nc]t)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /(om)e$/i,
    repl: {
      pr: '$1es',
      pa: 'ame',
      gr: '$1ing'
    }
  }, {
    reg: /(.eat)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /([aeiu])([pt])$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1$2',
      gr: '$1$2$2ing'
    }
  }, {
    reg: /(er)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /(en)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing'
    },
  }, {
    reg: /(ed)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ded',
      ar: '$1der',
      gr: '$1ding'
    },
  },
  {
    reg: /(..)(ow)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1ew',
      gr: '$1$2ing',
      prt: '$1$2n'
    }
  },
  {
    reg: /(..)([cs]h)$/i,
    repl: {
      pr: '$1$2es',
      pa: '$1$2ed',
      gr: '$1$2ing'
    },
  },
  {
    reg: /([^aeiou][ou])(g|d)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1$2$2ed',
      gr: '$1$2$2ing'
    },
  },
  {
    reg: /([^aeiou][aeiou])(b|t|p|m)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1$2$2ed',
      gr: '$1$2$2ing'
    },
  },
  {
    reg: /([aeiou]zz)$/i,
    repl: {
      pr: '$1es',
      pa: '$1ed',
      gr: '$1ing'
    }
  }
];

},{}],76:[function(_dereq_,module,exports){
'use strict';
const checkIrregulars = _dereq_('./irregulars');
const suffixPass = _dereq_('./suffixes');
const generic = _dereq_('./generic');
//this method is the same as regular conjugate, but optimised for use in the lexicon during warm-up.
//it's way faster because it knows input is already infinitive

const want = ['Gerund', 'PastTense', 'PresentTense'];

const fasterConjugate = function(inf, world) {
  let all = {
    Infinitive: inf
  };
  //check irregulars list
  if (world && world.conjugations) {
    const irregObj = checkIrregulars(all['Infinitive'], world);
    if (irregObj !== null) {
      Object.keys(irregObj).forEach(k => {
        if (irregObj[k] && !all[k]) {
          all[k] = irregObj[k];
        }
      });
    }
  }
  //check suffix rules
  const suffObj = suffixPass(inf);
  Object.keys(suffObj).forEach(k => {
    if (suffObj[k] && !all[k]) {
      all[k] = suffObj[k];
    }
  });
  for (let i = 0; i < want.length; i++) {
    if (all[want[i]] === undefined) {
      all[want[i]] = generic[want[i]](all);
    }
  }
  return all;
};
module.exports = fasterConjugate;
// console.log(fasterConjugate('repeat'));

},{"./generic":77,"./irregulars":79,"./suffixes":80}],77:[function(_dereq_,module,exports){
'use strict';
//non-specifc, 'hail-mary' transforms from infinitive, into other forms
const hasY = /[bcdfghjklmnpqrstvwxz]y$/;
const generic = {

  Gerund: (o) => {
    const inf = o.Infinitive;
    if (inf.charAt(inf.length - 1) === 'e') {
      return inf.replace(/e$/, 'ing');
    }
    return inf + 'ing';
  },

  PresentTense: (o) => {
    const inf = o.Infinitive;
    if (inf.charAt(inf.length - 1) === 's') {
      return inf + 'es';
    }
    if (hasY.test(inf) === true) {
      return inf.slice(0, -1) + 'ies';
    }
    return inf + 's';
  },

  PastTense: (o) => {
    const inf = o.Infinitive;
    if (inf.charAt(inf.length - 1) === 'e') {
      return inf + 'd';
    }
    if (inf.substr(-2) === 'ed') {
      return inf;
    }
    if (hasY.test(inf) === true) {
      return inf.slice(0, -1) + 'ied';
    }
    return inf + 'ed';
  },

  // FutureTense: (o) => {
  //   return 'will ' + o.Infinitive;
  // },
  //
  // PerfectTense: (o) => {
  //   return 'have ' + (o.Participle || o.PastTense);
  // },
  //
  // Pluperfect: (o) => {
  //   if (o.PastTense) {
  //     return 'had ' + o.PastTense;
  //   }
  //   return null;
  // },
  // FuturePerfect: (o) => {
  //   if (o.PastTense) {
  //     return 'will have ' + o.PastTense;
  //   }
  //   return null;
  // }

};

module.exports = generic;

},{}],78:[function(_dereq_,module,exports){
'use strict';
const conjugate = _dereq_('./conjugate');
const toBe = _dereq_('./toBe');

//conjugation using auxillaries+adverbs and stuff
const multiWordConjugate = (vb, verbose) => {
  // if (vb.verb.tags.Contraction) {
  //   console.log(vb.verb.silent_term);
  // }
  let isNegative = vb.negative.found;
  let isPlural = vb.isPlural();
  //handle 'to be' verb seperately
  if (vb.verb.tags.Copula || (vb.verb.normal === 'be' && vb.auxiliary.match('will').found)) {
    return toBe(isPlural, isNegative);
  }
  let obj = conjugate(vb.verb, vb.world, verbose);
  //apply particles
  if (vb.particle.found) {
    Object.keys(obj).forEach(k => {
      obj[k] = obj[k] + vb.particle.out();
    });
  }
  //apply negative
  if (isNegative) {
    obj.PastTense = 'did not ' + obj.Infinitive;
    obj.PresentTense = 'does not ' + obj.Infinitive;
  }
  //future Tense is pretty straightforward
  if (!obj.FutureTense) {
    if (isNegative) {
      obj.FutureTense = 'will not ' + obj.Infinitive;
    } else {
      obj.FutureTense = 'will ' + obj.Infinitive;
    }
  }
  //apply adverbs
  if (vb.adverbs.found) {
    //does the adverb go at the start or end?
    let isFirst = vb.first().match('#Adverb').found;
    Object.keys(obj).forEach(k => {
      if (isFirst) {
        obj[k] = vb.adverbs.out() + ' ' + obj[k];
      } else {
        obj[k] = obj[k] + vb.adverbs.out();
      }
    });
  }
  return obj;
};
module.exports = multiWordConjugate;

},{"./conjugate":74,"./toBe":82}],79:[function(_dereq_,module,exports){
'use strict';
// let irregulars = require('../../../../lexicon/uncompressed/irregularVerbs').irregulars; //weeee!
const fns = _dereq_('../../../../fns'); //weeee!
const forms = ['Participle', 'Gerund', 'PastTense', 'PresentTense', 'FuturePerfect', 'PerfectTense', 'Actor'];

const checkIrregulars = function(str, world) {
  const irregulars = world.conjugations;
  const infArr = Object.keys(irregulars);
  //check irregulars in world
  if (world && world.conjugations && world.conjugations.hasOwnProperty(str) === true) {
    return world.conjugations[str];
  }
  //fast infinitive lookup
  if (irregulars.hasOwnProperty(str) === true) {
    let obj = fns.copy(irregulars[str]);
    obj.Infinitive = str;
    return obj;
  }
  //longer check of known-verb forms
  for (let i = 0; i < infArr.length; i++) {
    for (let o = 0; o < forms.length; o++) {
      let irObj = irregulars[infArr[i]];
      if (irObj[forms[o]] === str) {
        let obj = fns.copy(irObj);
        obj.Infinitive = infArr[i];
        return obj;
      }
    }
  }
  return {};
};

module.exports = checkIrregulars;
// console.log(checkIrregulars('bit'));

},{"../../../../fns":3}],80:[function(_dereq_,module,exports){
'use strict';
const rules = _dereq_('./data/rules');
const mapping = {
  pr: 'PresentTense',
  pa: 'PastTense',
  gr: 'Gerund',
  prt: 'Participle',
  ar: 'Actor',
};
const keys = Object.keys(mapping);

//check suffix rules
const suffixPass = function(inf) {
  let found = {};
  for(let i = 0; i < rules.length; i++) {
    if (rules[i].reg.test(inf) === true) {
      let obj = rules[i].repl;
      for(let o = 0; o < keys.length; o++) {
        if (obj.hasOwnProperty(keys[o]) === true) {
          let key = mapping[keys[o]];
          // console.log(rules[i]);
          found[key] = inf.replace(rules[i].reg, obj[keys[o]]);
        }
      }
      return found;
    }
  }
  return found;
};

module.exports = suffixPass;

},{"./data/rules":75}],81:[function(_dereq_,module,exports){
'use strict';
//turn 'walk' into 'walker'
const irregulars = {
  'tie': 'tier',
  'dream': 'dreamer',
  'sail': 'sailer',
  'run': 'runner',
  'rub': 'rubber',
  'begin': 'beginner',
  'win': 'winner',
  'claim': 'claimant',
  'deal': 'dealer',
  'spin': 'spinner'
};
const dont = {
  'aid': 1,
  'fail': 1,
  'appear': 1,
  'happen': 1,
  'seem': 1,
  'try': 1,
  'say': 1,
  'marry': 1,
  'be': 1,
  'forbid': 1,
  'understand': 1,
  'bet': 1
};
const rules = [{
  'reg': /e$/i,
  'repl': 'er'
}, {
  'reg': /([aeiou])([mlgp])$/i,
  'repl': '$1$2$2er'
}, {
  'reg': /([rlf])y$/i,
  'repl': '$1ier'
}, {
  'reg': /^(.?.[aeiou])t$/i,
  'repl': '$1tter'
}];

const toActor = function(inf) {
  //check blacklist
  if (dont[inf]) {
    return null;
  }
  //check irregulars
  if (irregulars.hasOwnProperty(inf)) {
    return irregulars[inf];
  }
  //try rules
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].reg.test(inf) === true) {
      return inf.replace(rules[i].reg, rules[i].repl);
    }
  }
  //yup,
  return inf + 'er';
};

module.exports = toActor;

},{}],82:[function(_dereq_,module,exports){
'use strict';
//too many special cases for is/was/will be
const toBe = (isPlural, isNegative) => {
  let obj = {
    PastTense: 'was',
    PresentTense: 'is',
    FutureTense: 'will be',
    Infinitive: 'is',
    Gerund: 'being',
    Actor: '',
    PerfectTense: 'been',
    Pluperfect: 'been',
  };
  if (isPlural) {
    obj.PastTense = 'were';
    obj.PresentTense = 'are';
    obj.Infinitive = 'are';
  }
  if (isNegative) {
    obj.PastTense += ' not';
    obj.PresentTense += ' not';
    obj.FutureTense = 'will not be';
    obj.Infinitive += ' not';
    obj.PerfectTense = 'not ' + obj.PerfectTense;
    obj.Pluperfect = 'not ' + obj.Pluperfect;
  }
  return obj;
};
module.exports = toBe;

},{}],83:[function(_dereq_,module,exports){
'use strict';
//sometimes you can tell if a verb is plural/singular, just by the verb
// i am / we were
//othertimes you need its noun 'we walk' vs 'i walk'
const isPlural = (vb) => {
  if (vb.match('(are|were|does)').found) {
    return true;
  }
  if (vb.match('(is|am|do|was)').found) {
    return false;
  }
  //consider its prior noun
  let noun = vb.getNoun();
  if (noun && noun.found) {
    if (noun.match('#Plural').found) {
      return true;
    }
    if (noun.match('#Singular').found) {
      return false;
    }
  }
  return null;
};
module.exports = isPlural;

},{}],84:[function(_dereq_,module,exports){
'use strict';
const suffix_rules = _dereq_('./suffix_rules');

const goodTypes = {
  Infinitive: true,
  Gerund: true,
  PastTense: true,
  PresentTense: true,
  FutureTense: true,
  PerfectTense: true,
  Pluperfect: true,
  FuturePerfect: true,
  Participle: true
};

const predictForm = function(term) {
  //do we already know the form?
  const keys = Object.keys(goodTypes);
  for (let i = 0; i < keys.length; i++) {
    if (term.tags[keys[i]]) {
      return keys[i];
    }
  }
  //consult our handy suffix rules
  const arr = Object.keys(suffix_rules);
  for (let i = 0; i < arr.length; i++) {
    const substr = term.normal.substr(-arr[i].length);
    if (substr === arr[i] && term.normal.length > arr[i].length) {
      return suffix_rules[arr[i]];
    }
  }
  return null;
};

module.exports = predictForm;

},{"./suffix_rules":85}],85:[function(_dereq_,module,exports){
'use strict';
//suffix signals for verb tense, generated from test data
const compact = {
  'Gerund': [
    'ing'
  ],
  'Actor': [
    'erer'
  ],
  'Infinitive': [
    'ate',
    'ize',
    'tion',
    'rify',
    'then',
    'ress',
    'ify',
    'age',
    'nce',
    'ect',
    'ise',
    'ine',
    'ish',
    'ace',
    'ash',
    'ure',
    'tch',
    'end',
    'ack',
    'and',
    'ute',
    'ade',
    'ock',
    'ite',
    'ase',
    'ose',
    'use',
    'ive',
    'int',
    'nge',
    'lay',
    'est',
    'ain',
    'ant',
    'ent',
    'eed',
    'er',
    'le',
    'own',
    'unk',
    'ung',
    'en'
  ],
  'PastTense': [
    'ed',
    'lt',
    'nt',
    'pt',
    'ew',
    'ld'
  ],
  'PresentTense': [
    'rks',
    'cks',
    'nks',
    'ngs',
    'mps',
    'tes',
    'zes',
    'ers',
    'les',
    'acks',
    'ends',
    'ands',
    'ocks',
    'lays',
    'eads',
    'lls',
    'els',
    'ils',
    'ows',
    'nds',
    'ays',
    'ams',
    'ars',
    'ops',
    'ffs',
    'als',
    'urs',
    'lds',
    'ews',
    'ips',
    'es',
    'ts',
    'ns',
    's'
  ]
};
const suffix_rules = {};
const keys = Object.keys(compact);
const l = keys.length;

for (let i = 0; i < l; i++) {
  let l2 = compact[keys[i]].length;
  for (let o = 0; o < l2; o++) {
    suffix_rules[compact[keys[i]][o]] = keys[i];
  }
}
module.exports = suffix_rules;

},{}],86:[function(_dereq_,module,exports){
'use strict';
//turn a infinitiveVerb, like "walk" into an adjective like "walkable"

const rules = [
  [/y$/, 'i'], //relay - reliable
  [/([aeiou][n])$/, '$1n'], //win - winnable
];

//convert - 'convertible'
//http://grammarist.com/usage/able-ible/
//http://blog.oxforddictionaries.com/2012/10/ibles-and-ables/
const ible_suffixes = {
  collect: true,
  exhaust: true,
  convert: true,
  digest: true,
  discern: true,
  dismiss: true,
  reverse: true,
  access: true,
  collapse: true,
  express: true
};

const irregulars = {
  eat: 'edible',
  hear: 'audible',
  see: 'visible',
  defend: 'defensible',
  write: 'legible',
  move: 'movable',
  divide: 'divisible',
  perceive: 'perceptible'
};

//takes an infitive verb, and returns an adjective form
const toAdjective = function(str) {
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  for(let i = 0; i < rules.length; i++) {
    if (rules[i][0].test(str) === true) {
      str = str.replace(rules[i][0], rules[i][1]);
    }
  }
  //ible/able
  let adj = str + 'able';
  if (ible_suffixes[str]) {
    adj = str + 'ible';
  }
  return adj;
};

module.exports = toAdjective;

},{}],87:[function(_dereq_,module,exports){
'use strict';
//turn any verb into its infinitive form
const rules = _dereq_('./rules');
const predict = _dereq_('../predict');

const toInfinitive = function(t, world) {
  const irregulars = world.cache.toInfinitive || {}; //verb_mapping(world.conjugations); //TODO: do this at world cache
  if (t.tags.Infinitive) {
    return t.normal;
  }
  //check the irregular verb conjugations
  if (irregulars.hasOwnProperty(t.normal) === true) {
    return irregulars[t.normal];
  }
  //check the suffix rules
  let form = predict(t);
  if (rules[form]) {
    for (let i = 0; i < rules[form].length; i++) {
      let rule = rules[form][i];
      if (t.normal.match(rule.reg)) {
        return t.normal.replace(rule.reg, rule.to);
      }
    }
  }
  return t.normal;
};

module.exports = toInfinitive;

},{"../predict":84,"./rules":88}],88:[function(_dereq_,module,exports){
'use strict';
//rules for turning a verb into infinitive form
let rules = {
  Participle: [
    {
      reg: /own$/i,
      to: 'ow'
    },
    {
      reg: /(.)un([g|k])$/i,
      to: '$1in$2'
    }
  ],
  Actor: [
    {
      reg: /(er)er$/i,
      to: '$1'
    }
  ],
  PresentTense: [
    {
      reg: /(..)(ies)$/i,
      to: '$1y'
    }, {
      reg: /(tch|sh)es$/i,
      to: '$1'
    }, {
      reg: /(ss|zz)es$/i,
      to: '$1'
    }, {
      reg: /([tzlshicgrvdnkmu])es$/i,
      to: '$1e'
    }, {
      reg: /(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,
      to: '$1'
    }, {
      reg: /(ow)s$/i,
      to: '$1'
    }, {
      reg: /(op)s$/i,
      to: '$1'
    }, {
      reg: /([eirs])ts$/i,
      to: '$1t'
    }, {
      reg: /(ll)s$/i,
      to: '$1'
    }, {
      reg: /(el)s$/i,
      to: '$1'
    }, {
      reg: /(ip)es$/i,
      to: '$1e'
    }, {
      reg: /ss$/i,
      to: 'ss'
    }, {
      reg: /s$/i,
      to: ''
    }],
  Gerund: [
    {
      reg: /pping$/i,
      to: 'p'
    }, {
      reg: /lling$/i,
      to: 'll'
    }, {
      reg: /tting$/i,
      to: 't'
    }, {
      reg: /dding$/i,
      to: 'd'
    }, {
      reg: /ssing$/i,
      to: 'ss'
    }, {
      reg: /(..)gging$/i,
      to: '$1g'
    }, {
      reg: /([^aeiou])ying$/i,
      to: '$1y'
    }, {
      reg: /([^ae]i.)ing$/i,
      to: '$1e'
    }, {
      reg: /(ea.)ing$/i,
      to: '$1'
    }, {
      reg: /(u[rtcb]|[bdtpkg]l|n[cg]|a[gdkvtc]|[ua]s|[dr]g|yz|o[rlsp]|cre)ing$/i,
      to: '$1e'
    }, {
      reg: /(ch|sh)ing$/i,
      to: '$1'
    }, {
      reg: /(..)ing$/i,
      to: '$1'
    }],
  PastTense: [
    {
      reg: /(ued)$/i,
      to: 'ue'
    }, {
      reg: /a([^aeiouy])ed$/i,
      to: 'a$1e'
    }, {
      reg: /([aeiou]zz)ed$/i,
      to: '$1'
    }, {
      reg: /(e|i)lled$/i,
      to: '$1ll'
    }, {
      reg: /(.)(sh|ch)ed$/i,
      to: '$1$2'
    }, {
      reg: /(tl|gl)ed$/i,
      to: '$1e'
    }, {
      reg: /(um?pt?)ed$/i,
      to: '$1'
    }, {
      reg: /(ss)ed$/i,
      to: '$1'
    }, {
      reg: /pped$/i,
      to: 'p'
    }, {
      reg: /tted$/i,
      to: 't'
    }, {
      reg: /(..)gged$/i,
      to: '$1g'
    }, {
      reg: /(..)lked$/i,
      to: '$1lk'
    }, {
      reg: /([^aeiouy][aeiou])ked$/i,
      to: '$1ke'
    }, {
      reg: /(.[aeiou])led$/i,
      to: '$1l'
    }, {
      reg: /(..)(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,
      to: '$1$2'
    }, {
      reg: /(.ut)ed$/i,
      to: '$1e'
    }, {
      reg: /(us)ed$/i,
      to: '$1e'
    }, {
      reg: /(..[^aeiouy])ed$/i,
      to: '$1e'
    }, {
      reg: /(..)ied$/i,
      to: '$1y'
    }, {
      reg: /(.o)ed$/i,
      to: '$1o'
    }, {
      reg: /(..i)ed$/i,
      to: '$1'
    }, {
      reg: /(.a[^aeiou])ed$/i,
      to: '$1'
    }, {
      reg: /([rl])ew$/i,
      to: '$1ow'
    }, {
      reg: /([pl])t$/i,
      to: '$1t'
    }]
};
module.exports = rules;

},{}],89:[function(_dereq_,module,exports){
//these are contractions with a implicit verb.
const expand = function(vb) {
  vb.match('#Contraction+').list.forEach((ts) => {
    if (ts.has('#Verb')) {
      ts.terms.forEach((t) => {
        if (t.silent_term) {
          //this term also needs a space now too
          if (!t.text) {
            t.whitespace.before = ' ';
          }
          t._text = t.silent_term;
          //handle (some) capitalization
          if (t.tags.TitleCase) {
            t.toTitleCase();
          }
          t.normalize();
          t.silent_term = null;
          t.unTag('Contraction', 'expanded');
        }
      });
    }
  });
  return vb;
};
module.exports = expand;

},{}],90:[function(_dereq_,module,exports){
'use strict';
//turns a verb negative - may not have enough information to do it properly
// (eg 'did not eat' vs 'does not eat') - needs the noun
const toInfinitive = _dereq_('./methods/toInfinitive');

//this methods operate on parentTerms, so return subset
const getVerb = function(ts) {
  ts = ts.match('(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+');
  ts = ts.splitAfter('#Comma');
  return ts.list[0];
};

const toNegative = ts => {
  //would not walk
  let modal = ts.match('#Auxiliary').first(); //.notIf('(is|are|was|will|has|had)').first(); //.first();
  if (modal.found) {
    let index = modal.list[0].index();
    let vb = ts.parentTerms.insertAt(index + 1, 'not', 'Verb');
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  //words that pair easily with a 'not' - 'is not'
  let copula = ts.match('(#Copula|will|has|had|do)').first();
  if (copula.found) {
    let index = copula.list[0].index();
    let vb = ts.parentTerms.insertAt(index + 1, 'not', 'Verb');
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  let isPlural = ts.isPlural();

  //walked -> did not walk
  let past = ts.match('#PastTense').last();
  if (past.found) {
    // past.debug();
    let first = past.list[0];
    let index = first.index();
    first.terms[0].text = toInfinitive(first.terms[0], ts.world);
    let vb = ts.parentTerms.insertAt(index, 'did not', 'Verb');
    //add 'do not'?
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  //walks -> does not walk
  let pres = ts.match('#PresentTense').first();
  if (pres.found) {
    let first = pres.list[0];
    let index = first.index();
    first.terms[0].text = toInfinitive(first.terms[0], ts.world);
    //some things use 'do not', everything else is 'does not'
    let noun = ts.getNoun();
    let vb = null;
    if (noun.match('(i|we|they|you)').found) {
      vb = ts.parentTerms.insertAt(index, 'do not', 'Verb');
    } else {
      vb = ts.parentTerms.insertAt(index, 'does not', 'Verb');
    }
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  //not walking
  let gerund = ts.match('#Gerund').last();
  if (gerund.found) {
    let index = gerund.list[0].index();
    let vb = ts.parentTerms.insertAt(index, 'not', 'Verb');
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  //walk -> do not walk
  let verb = ts.match('#Verb').last();
  if (verb.found) {
    let first = verb.list[0];
    let index = first.index();
    first.terms[0].text = toInfinitive(first.terms[0], ts.world);
    let vb = ts;
    if (isPlural) {
      vb = ts.parentTerms.insertAt(index - 1, 'do not', 'Verb');
    } else {
      vb = ts.parentTerms.insertAt(index - 1, 'does not', 'Verb');
    }
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  }

  return ts;
};
module.exports = toNegative;

},{"./methods/toInfinitive":87}],91:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const conjugate = _dereq_('./methods/conjugate');
const toAdjective = _dereq_('./methods/toAdjective');
const interpret = _dereq_('./interpret');
const toNegative = _dereq_('./toNegative');
const isPlural = _dereq_('./methods/isPlural');
const expand = _dereq_('./methods/verbContraction');

const parse = function(r) {
  let original = r;
  r.negative = r.match('#Negative');
  r.adverbs = r.match('#Adverb');
  let aux = r.clone().not('(#Adverb|#Negative)');
  r.verb = aux
    .match('#Verb')
    .not('#Particle')
    .last();
  r.particle = aux.match('#Particle').last();
  if (r.verb.found) {
    let str = r.verb.out('normal');
    r.auxiliary = original.not(str).not('(#Adverb|#Negative)');
    r.verb = r.verb.list[0].terms[0];
  // r.auxiliary = aux.match('#Auxiliary+');
  } else {
    r.verb = original.terms[0];
  }
  return r;
};

const methods = {
  parse: function() {
    return parse(this);
  },
  data: function(verbose) {
    return {
      text: this.out('text'),
      normal: this.out('normal'),
      parts: {
        negative: this.negative.out('normal'),
        auxiliary: this.auxiliary.out('normal'),
        verb: this.verb.out('normal'),
        particle: this.particle.out('normal'),
        adverbs: this.adverbs.out('normal')
      },
      interpret: interpret(this, verbose),
      conjugations: this.conjugate()
    };
  },
  getNoun: function() {
    if (!this.refTerms) {
      return null;
    }
    let str = '#Adjective? #Noun+ ' + this.out('normal');
    return this.refTerms.match(str).match('#Noun+');
  },
  //which conjugation is this right now?
  conjugation: function() {
    return interpret(this, false).tense;
  },
  //blast-out all forms
  conjugate: function(verbose) {
    return conjugate(this, verbose);
  },

  isPlural: function() {
    return isPlural(this);
  },
  /** negation **/
  isNegative: function() {
    return this.match('#Negative').list.length === 1;
  },
  isPerfect: function() {
    return this.auxiliary.match('(have|had)').found;
  },
  toNegative: function() {
    if (this.isNegative()) {
      return this;
    }
    return toNegative(this);
  },
  toPositive: function() {
    return this.match('#Negative').delete();
  },

  /** conjugation **/
  toPastTense: function() {
    if (this.has('#Contraction')) {
      this.list = expand(this.parentTerms).list;
    }
    let obj = this.conjugate();
    let r = this.replaceWith(obj.PastTense, false);
    r.verb.tag('#PastTense');
    return r;
  },
  toPresentTense: function() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }
    let obj = this.conjugate();
    let r = this.replaceWith(obj.PresentTense, false);
    r.verb.tag('#PresentTense');
    return r;
  },
  toFutureTense: function() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }
    let obj = this.conjugate();
    let r = this.replaceWith(obj.FutureTense, false);
    r.verb.tag('#FutureTense');
    return r;
  },
  toInfinitive: function() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }
    let obj = this.conjugate();
    let r = this.replaceWith(obj.Infinitive, false);
    r.verb.tag('#Infinitive');
    return r;
  },
  asAdjective: function() {
    return toAdjective(this.verb.out('normal'));
  }
};

const Verb = function(arr, world, refText, parentTerms) {
  Terms.call(this, arr, world, refText, parentTerms);
  //basic verb-phrase parsing:
  return parse(this);
};
//Terms inheritence
Verb.prototype = Object.create(Terms.prototype);
//apply methods
Object.keys(methods).forEach(k => {
  Verb.prototype[k] = methods[k];
});
module.exports = Verb;

},{"../../paths":8,"./interpret":73,"./methods/conjugate":78,"./methods/isPlural":83,"./methods/toAdjective":86,"./methods/verbContraction":89,"./toNegative":90}],92:[function(_dereq_,module,exports){
'use strict';
//the steps and processes of pos-tagging
const step = {
  punctuation_step: _dereq_('./steps/01-punctuation_step'),
  emoji_step: _dereq_('./steps/02-emoji_step'),
  lexicon_step: _dereq_('./steps/03-lexicon_step'),
  lexicon_multi: _dereq_('./steps/04-lexicon_multi'),
  web_step: _dereq_('./steps/05-web_step'),
  suffix_step: _dereq_('./steps/06-suffix_step'),
  neighbour_step: _dereq_('./steps/07-neighbour_step'),
  capital_step: _dereq_('./steps/08-capital_step'),
  noun_fallback: _dereq_('./steps/09-noun_fallback'),
  contraction: _dereq_('./steps/10-contractions'),
  date_step: _dereq_('./steps/11-date_step'),
  auxiliary_step: _dereq_('./steps/12-auxiliary_step'),
  negation_step: _dereq_('./steps/13-negation_step'),
  comma_step: _dereq_('./steps/14-comma_step'),
  possessive_step: _dereq_('./steps/15-possessive_step'),
  acronym_step: _dereq_('./steps/16-acronym_step'),
  person_step: _dereq_('./steps/17-person_step'),
  quotation_step: _dereq_('./steps/18-quotation_step'),
  organization_step: _dereq_('./steps/19-organization_step'),
  plural_step: _dereq_('./steps/20-plural_step'),
  value_step: _dereq_('./steps/21-value_step'),
  corrections: _dereq_('./steps/22-corrections'),
  properNoun: _dereq_('./steps/23-proper_noun'),
  custom: _dereq_('./steps/24-custom'),
};
const tagPhrase = _dereq_('./phrase');

const tagger = function(ts) {
  ts = step.punctuation_step(ts);
  ts = step.emoji_step(ts);
  ts = step.lexicon_step(ts);
  ts = step.lexicon_multi(ts);
  ts = step.web_step(ts);
  ts = step.suffix_step(ts);
  ts = step.neighbour_step(ts);
  ts = step.capital_step(ts);
  ts = step.noun_fallback(ts);
  ts = step.contraction(ts);
  ts = step.date_step(ts); //3ms
  ts = step.auxiliary_step(ts);
  ts = step.negation_step(ts);
  ts = step.comma_step(ts); //#14
  ts = step.possessive_step(ts);
  ts = step.acronym_step(ts);
  ts = step.person_step(ts); //1ms
  ts = step.quotation_step(ts);
  ts = step.organization_step(ts);
  ts = step.plural_step(ts);
  ts = step.value_step(ts);
  ts = step.corrections(ts); //2ms
  ts = step.properNoun(ts);
  ts = tagPhrase(ts);
  ts = step.custom(ts);
  return ts;
};

module.exports = tagger;

},{"./phrase":95,"./steps/01-punctuation_step":96,"./steps/02-emoji_step":97,"./steps/03-lexicon_step":98,"./steps/04-lexicon_multi":99,"./steps/05-web_step":100,"./steps/06-suffix_step":101,"./steps/07-neighbour_step":102,"./steps/08-capital_step":103,"./steps/09-noun_fallback":104,"./steps/10-contractions":105,"./steps/11-date_step":106,"./steps/12-auxiliary_step":107,"./steps/13-negation_step":108,"./steps/14-comma_step":109,"./steps/15-possessive_step":110,"./steps/16-acronym_step":111,"./steps/17-person_step":112,"./steps/18-quotation_step":113,"./steps/19-organization_step":114,"./steps/20-plural_step":115,"./steps/21-value_step":116,"./steps/22-corrections":117,"./steps/23-proper_noun":118,"./steps/24-custom":119}],93:[function(_dereq_,module,exports){
'use strict';

//
const conditionPass = function(ts) {
  //'if it really goes, I will..'
  let m = ts.match('#Condition .{1,7} #ClauseEnd');
  //make sure it ends on a comma
  if (m.found && m.match('#Comma$')) {
    m.tag('Condition');
  }
  //'go a bit further, if it then has a pronoun
  m = ts.match('#Condition .{1,13} #ClauseEnd #Pronoun');
  if (m.found && m.match('#Comma$')) {
    m.not('#Pronoun$').tag('Condition', 'end-pronoun');
  }
  //if it goes then ..
  m = ts.match('#Condition .{1,7} then');
  if (m.found) {
    m.not('then$').tag('Condition', 'cond-then');
  }
  //as long as ..
  m = ts.match('as long as .{1,7} (then|#ClauseEnd)');
  if (m.found) {
    m.not('then$').tag('Condition', 'as-long-then');
  }
  //at the end of a sentence:
  //'..., if it really goes.'
  m = ts.match('#Comma #Condition .{1,7} .$');
  if (m.found) {
    m.not('^#Comma').tag('Condition', 'comma-7-end');
  }
  // '... if so.'
  m = ts.match('#Condition .{1,4}$');
  if (m.found) {
    m.tag('Condition', 'cond-4-end');
  }
  return ts;
};

module.exports = conditionPass;

},{}],94:[function(_dereq_,module,exports){
'use strict';
//a verbPhrase is a sequence of axiliaries, adverbs and verbs
const verbPhrase = function (ts) {
  if (ts.has('(#Verb|#Auxiliary)')) {
    ts.match('#Verb').tag('VerbPhrase', 'verbphrase-verb');
    //quickly was
    ts.match('#Adverb #Verb').tag('VerbPhrase', 'adverb-verb');
    //was quickly
    ts.match('#Verb #Adverb').tag('VerbPhrase', 'verb-adverb');
    //is not
    ts.match('#Verb #Negative').tag('VerbPhrase', 'verb-not');
    //never is
    ts.match('never #Verb').tag('VerbPhrase', 'not-verb');
    //'will have had'..
    ts.match('#Auxiliary+').tag('VerbPhrase', '2');
    // 'is'
    ts.match('#Copula').tag('VerbPhrase', '#3');
    //'really will'..
    ts.match('#Adverb #Auxiliary').tag('VerbPhrase', '#4');
  //to go
  // ts.match('to #Infinitive').tag('VerbPhrase', '#5');
  //work with
  // ts.match('#Verb #Preposition').tag('VerbPhrase', '#6');
  }
  return ts;
};

module.exports = verbPhrase;

},{}],95:[function(_dereq_,module,exports){
'use strict';
const conditionPass = _dereq_('./00-conditionPass');
const verbPhrase = _dereq_('./01-verbPhrase');
// const nounPhrase = require('./02-nounPhrase');
// const AdjectivePhrase = require('./03-adjectivePhrase');
//
const phraseTag = function (ts) {
  ts = conditionPass(ts);
  ts = verbPhrase(ts);
  // ts = nounPhrase(ts);
  // ts = AdjectivePhrase(ts);
  return ts;
};

module.exports = phraseTag;

},{"./00-conditionPass":93,"./01-verbPhrase":94}],96:[function(_dereq_,module,exports){
'use strict';
//regs-
const titleCase = /^[A-Z][a-z']/;
const romanNum = /^[IVXCM]+$/;

//not so smart (right now)
const isRomanNumeral = function(t) {
  if (t.text.length > 1 && romanNum.test(t.text) === true) {
    return t.canBe('RomanNumeral');
  }
  return false;
};

const oneLetters = {
  a: true,
  i: true,
  //internet-slang
  u: true,
  r: true,
  c: true,
  k: true
};

const punctuation_step = function(ts) {
  let rules = ts.world.regex || [];
  ts.terms.forEach((t, o) => {
    let str = t.text;
    //anything can be titlecase
    if (titleCase.test(str) === true) {
      t.tag('TitleCase', 'punct-rule');
    }
    //add hyphenation
    if (t.whitespace.after === '-' && ts.terms[o + 1] && ts.terms[o + 1].whitespace.before === '') {
      t.tag('Hyphenated', 'has-hyphen');
      ts.terms[o + 1].tag('Hyphenated', 'has-hyphen');
    }
    //ok, normalise it a little,
    str = str.replace(/[,\.\?]$/, '');
    //do punctuation rules (on t.text)
    for (let i = 0; i < rules.length; i++) {
      let r = rules[i];
      if (r.reg.test(str) === true) {
        //don't over-write any other known tags
        if (t.canBe(r.tag)) {
          t.tag(r.tag, 'punctuation-rule- "' + r.reg.toString() + '"');
        }
        return;
      }
    }
    //terms like 'e'
    if (str.length === 1 && ts.terms[o + 1] && /[A-Z]/.test(str) && !oneLetters[str.toLowerCase()]) {
      t.tag('Acronym', 'one-letter-acronym');
    }
    //roman numerals (weak rn)
    if (isRomanNumeral(t)) {
      t.tag('RomanNumeral', 'is-roman-numeral');
    }
  });
  return ts;
};

module.exports = punctuation_step;

},{}],97:[function(_dereq_,module,exports){
'use strict';
const emojiReg = _dereq_('./rules/emoji_regex');
const emoticon = _dereq_('./rules/emoticon_list');
//for us, there's three types -
// * ;) - emoticons
// * 🌵 - unicode emoji
// * :smiling_face: - asci-represented emoji

//test for forms like ':woman_tone2:‍:ear_of_rice:'
//https://github.com/Kikobeats/emojis-keywords/blob/master/index.js
const isCommaEmoji = (t) => {
  if (t.text.charAt(0) === ':') {
    //end comma can be last or second-last ':haircut_tone3:‍♀️'
    if (t.text.match(/:.?$/) === null) {
      return false;
    }
    //ensure no spaces
    if (t.text.match(' ')) {
      return false;
    }
    //reasonably sized
    if (t.text.length > 35) {
      return false;
    }
    return true;
  }
  return false;
};

//check against emoticon whitelist
const isEmoticon = (t) => {
  //normalize the 'eyes'
  let str = t.text.replace(/^[:;]/, ':');
  return emoticon.hasOwnProperty(str) === true;
};

//
const emojiStep = (ts) => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //test for :keyword: emojis
    if (isCommaEmoji(t)) {
      t.tag('Emoji', 'comma-emoji');
    }
    //test for unicode emojis
    if (t.text.match(emojiReg)) {
      t.tag('Emoji', 'unicode-emoji');
    }
    //test for emoticon ':)' emojis
    if (isEmoticon(t)) {
      t.tag('Emoji', 'emoticon-emoji');
    }
  }
  return ts;
};
module.exports = emojiStep;

},{"./rules/emoji_regex":126,"./rules/emoticon_list":127}],98:[function(_dereq_,module,exports){
'use strict';
const split = _dereq_('./contraction/split');
// const l = require('../../lexicon/init');
// const lexicon = l.lexicon;

const lexicon_pass = function(ts) {
  const lexicon = ts.world.words || {};
  //loop through each term
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //basic term lookup
    if (lexicon.hasOwnProperty(t.normal) === true) {
      t.tag(lexicon[t.normal], 'lexicon');
      continue;
    }
    //support silent_term matches
    if (t.silent_term && lexicon.hasOwnProperty(t.silent_term) === true) {
      t.tag(lexicon[t.silent_term], 'silent_term-lexicon');
      continue;
    }
    //check root version too
    if (t.root && t.normal !== t.root) {
      if (lexicon.hasOwnProperty(t.root) === true) {
        t.tag(lexicon[t.root], 'lexicon');
        continue;
      }
    }
    //support contractions (manually)
    let parts = split(t);
    if (parts && parts.start) {
      let start = parts.start.toLowerCase();
      if (lexicon.hasOwnProperty(start) === true) {
        t.tag(lexicon[start], 'contraction-lexicon');
        continue;
      }
    }
  }
  return ts;
};

module.exports = lexicon_pass;

},{"./contraction/split":125}],99:[function(_dereq_,module,exports){
'use strict';
const MAX = 4;

//find terms in the lexicon longer than one word (like 'hong kong')
const findMultiWords = function(ts, i, world) {
  let lex = world.words;
  let start = ts.terms[i].root;
  let nextTerms = ts.terms.slice(i + 1, i + MAX).map((t) => t.root);
  //look for matches, try biggest first
  let max = MAX;
  if (nextTerms.length < max) {
    max = nextTerms.length;
  }
  for(let k = max; k > 0; k -= 1) {
    let howAbout = start + ' ' + nextTerms.slice(0, k).join(' ');
    if (lex.hasOwnProperty(howAbout) === true) {
      ts.slice(i, i + k + 1).tag(lex[howAbout], 'multi-lexicon-' + howAbout);
      return k;
    }
  }
  return 0;
};


//try multiple-word matches in the lexicon (users and default)
const lexiconMulti = ts => {
  ts.world.cache = ts.world.cache || {};
  let firstWords = ts.world.cache.firstWords || {};
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //try multi words from user-lexicon
    if (firstWords.hasOwnProperty(t.root) === true) {
      let jump = findMultiWords(ts, i, ts.world);
      i += jump;
      continue;
    }
  }
  return ts;
};
module.exports = lexiconMulti;

},{}],100:[function(_dereq_,module,exports){
'use strict';
//identify urls, hashtags, @mentions, emails
//regs
const email = /^\w+@\w+\.[a-z]{2,3}$/; //not fancy
const hashTag = /^#[a-z0-9_]{2,}$/;
const atMention = /^@\w{2,}$/;
const urlA = /^(https?:\/\/|www\.)\w+\.[a-z]{2,3}/; //with http/www
const urlB = /^[\w\.\/]+\.(com|net|gov|org|ly|edu|info|biz|ru|jp|de|in|uk|br)/; //http://mostpopularwebsites.net/top-level-domain

const web_pass = function(terms) {
  for (let i = 0; i < terms.length; i++) {
    let t = terms.get(i);
    let str = t.text.trim().toLowerCase();
    if (email.test(str) === true) {
      t.tag('Email', 'web_pass');
    }
    if (hashTag.test(str) === true) {
      t.tag('HashTag', 'web_pass');
    }
    if (atMention.test(str) === true) {
      t.tag('AtMention', 'web_pass');
    }
    if (urlA.test(str) === true || urlB.test(str) === true) {
      t.tag('Url', 'web_pass');
    }
  }
  return terms;
};

module.exports = web_pass;

},{}],101:[function(_dereq_,module,exports){
'use strict';
const regs = _dereq_('./rules/regex_list');
const suffixes = _dereq_('./rules/suffix_lookup');

const misc = [
  //slang things
  [/^(lol)+[sz]$/, 'Expression'], //lol
  [/^ma?cd[aeiou]/, 'LastName'], //macdonell - Last patterns https://en.wikipedia.org/wiki/List_of_family_name_affixes
  //starting-ones
  [/^[\-\+]?[0-9][0-9,]*(\.[0-9])*$/, 'Cardinal'], //like 5
  [/^(un|de|re)\\-[a-z]../, 'Verb'],
  [/^[\-\+]?[0-9]+(\.[0-9])*$/, 'NumericValue'],
  [/^https?\:?\/\/[a-z0-9]/, 'Url'], //the colon is removed in normalisation
  [/^www\.[a-z0-9]/, 'Url'],
  [/^(over|under)[a-z]{2,}/, 'Adjective'],
  [/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/, 'Date'], // 03-02-89
  //ending-ones
  [/^[0-9]+([a-z]{1,2})$/, 'Value'], //like 5kg
  [/^[0-9][0-9,\.]*(st|nd|rd|r?th)$/, ['NumericValue', 'Ordinal']], //like 5th
  //middle (anywhere)
  [/[a-z]*\\-[a-z]*\\-/, 'Adjective']
];

//straight-up lookup of known-suffixes
const lookup = function(t) {
  const len = t.normal.length;
  let max = 7;
  if (len <= max) {
    max = len - 1;
  }
  for (let i = max; i > 1; i -= 1) {
    let str = t.normal.substr(len - i, len);
    if (suffixes[i][str] !== undefined) {
      // console.log('suffix-match: ' + str);
      return suffixes[i][str];
    }
  }
  return null;
};

//word-regexes indexed by last-character
const regexFn = function(t) {
  let char = t.normal.charAt(t.normal.length - 1);
  if (regs[char] === undefined) {
    return null;
  }
  let arr = regs[char];
  for (let o = 0; o < arr.length; o++) {
    if (arr[o][0].test(t.normal) === true) {
      return arr[o];
    }
  }
  return null;
};

const suffix_step = function(ts) {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //try known suffixes
    let tag = lookup(t);
    if (tag !== null && t.canBe(tag) === true) {
      t.tag(tag, 'suffix-lookup');
      continue;
    }
    //apply regexes by final-char
    tag = regexFn(t);
    if (tag !== null && t.canBe(tag[1]) === true) {
      t.tag(tag[1], 'regex-list: ' + String(tag[0]));
      continue;
    }
    //apply misc regexes
    for (let o = 0; o < misc.length; o++) {
      if (misc[o][0].test(t.normal) === true) {
        tag = misc[o][1];
        if (t.canBe(tag) === true) {
          t.tag(tag, 'misc-regex-' + misc[o][0]);
        }
      }
    }
  }
  return ts;
};

module.exports = suffix_step;

},{"./rules/regex_list":129,"./rules/suffix_lookup":130}],102:[function(_dereq_,module,exports){
'use strict';
const markov = _dereq_('./rules/neighbours');
const afterThisWord = markov.afterThisWord;
const beforeThisWord = markov.beforeThisWord;
const beforeThisPos = markov.beforeThisPos;
const afterThisPos = markov.afterThisPos;

//basically a last-ditch effort before everything falls back to a noun
//for unknown terms, look left + right first, and hit-up the markov-chain for clues
const neighbour_step = function (ts) {
  ts.terms.forEach((t, n) => {
    //is it still unknown?
    let termTags = Object.keys(t.tags);
    if (termTags.length === 0) {
      let lastTerm = ts.terms[n - 1];
      let nextTerm = ts.terms[n + 1];
      //look at last word for clues
      if (lastTerm && afterThisWord.hasOwnProperty(lastTerm.normal)) {
        t.tag(afterThisWord[lastTerm.normal], 'neighbour-after-"' + lastTerm.normal + '"');
        return;
      }
      //look at next word for clues
      if (nextTerm && beforeThisWord.hasOwnProperty(nextTerm.normal)) {
        t.tag(beforeThisWord[nextTerm.normal], 'neighbour-before-"' + nextTerm.normal + '"');
        return;
      }
      //look at the last POS for clues
      let tags = [];
      if (lastTerm) {
        tags = Object.keys(lastTerm.tags);
        for (let i = 0; i < tags.length; i++) {
          if (afterThisPos[tags[i]]) {
            t.tag(afterThisPos[tags[i]], 'neighbour-after-[' + tags[i] + ']');
            return;
          }
        }
      }
      //look at the next POS for clues
      if (nextTerm) {
        tags = Object.keys(nextTerm.tags);
        for (let i = 0; i < tags.length; i++) {
          if (beforeThisPos[tags[i]]) {
            t.tag(beforeThisPos[tags[i]], 'neighbour-before-[' + tags[i] + ']');
            return;
          }
        }
      }
    }
  });

  return ts;
};

module.exports = neighbour_step;

},{"./rules/neighbours":128}],103:[function(_dereq_,module,exports){
'use strict';
//titlecase is a signal for a noun

const capital_logic = function (s) {
  //(ignore first word)
  for (let i = 1; i < s.terms.length; i++) {
    let t = s.terms[i];
    //has a capital, but isn't too weird.
    if (t.tags.TitleCase && t.isWord()) {
      t.tag('Noun', 'capital-step');
      t.tag('TitleCase', 'capital-step');
    }
  }
  //support first-word of sentence as proper titlecase
  let t = s.terms[0];
  if (t && t.tags.TitleCase) {
    if (t.tags.Person || t.tags.Organization || t.tags.Place) {
      t.tag('TitleCase', 'first-term-capital');
    }
  }
  return s;
};

module.exports = capital_logic;

},{}],104:[function(_dereq_,module,exports){
'use strict';
//tag word as noun if we know nothing about it, still.

//tags that dont really count
const nothing = {
  TitleCase: true,
  UpperCase: true,
  CamelCase: true,
  Hyphenated: true
};
//are the tags basically empty
const gotNothing = function(t) {
  //fail-fast
  if (t.tags.Noun || t.tags.Verb || t.tags.Adjective) {
    return false;
  }
  let tags = Object.keys(t.tags);
  if (tags.length === 0) {
    return true;
  }
  if (tags.filter(tag => !nothing[tag]).length === 0) {
    return true;
  }
  return false;
};

//in last-ditch, try to match 'rewatch' -> 'watch' in the lexicon
const tryRoot = function(t) {
  if (/^(re|un)-?[^aeiou]./.test(t.normal) === true) {
    let str = t.normal.replace(/^(re|un)-?/, '');
    if (t.world.words.hasOwnProperty(str) === true) {
      let tag = t.world.words[str];
      if (tag === 'Infinitive' || tag === 'PresentTense' || tag === 'PastTense' || tag === 'Gerund') {
        return tag;
      }
    }
  }
  return null;
};

const noun_fallback = function(s) {
  for (let i = 0; i < s.terms.length; i++) {
    let t = s.terms[i];
    //fail-fast
    if (t.tags.Noun || t.tags.Verb) {
      continue;
    }
    //ensure it only has the tag 'Term'
    if (gotNothing(t)) {
      //ensure it's atleast word-looking
      if (t.isWord() === false) {
        continue;
      }
      let rootTag = tryRoot(t);
      if (rootTag !== null) {
        t.tag(rootTag, 'root-tag-match');
        continue;
      }
      t.tag('Noun', 'noun-fallback');
    }
  }
  return s;
};

module.exports = noun_fallback;

},{}],105:[function(_dereq_,module,exports){
'use strict';
const irregulars = _dereq_('./contraction/01-irregulars');
const isWasHas = _dereq_('./contraction/02-isWasHas');
const easyOnes = _dereq_('./contraction/03-easyOnes');
const numberRange = _dereq_('./contraction/04-numberRange');

//find and pull-apart contractions
const interpret = function(ts) {
  //check irregulars
  ts = irregulars(ts);
  //guess-at ambiguous "'s" one
  ts = isWasHas(ts);
  //check easy ones
  ts = easyOnes(ts);
  //5-7
  ts = numberRange(ts);
  return ts;
};

module.exports = interpret;

},{"./contraction/01-irregulars":120,"./contraction/02-isWasHas":121,"./contraction/03-easyOnes":122,"./contraction/04-numberRange":123}],106:[function(_dereq_,module,exports){
'use strict';
//ambiguous 'may' and 'march'
const preps = '(in|by|before|during|on|until|after|of|within|all)';
const thisNext = '(last|next|this|previous|current|upcoming|coming)';
const sections = '(start|end|middle|starting|ending|midpoint|beginning)';
const seasons = '(spring|summer|winter|fall|autumn)';

//ensure a year is approximately typical for common years
//please change in one thousand years
const tagYear = (v, reason) => {
  if (v.found !== true) {
    return;
  }
  v.list.forEach((ts) => {
    let num = parseInt(ts.terms[0].normal, 10);
    if (num && num > 1000 && num < 3000) {
      ts.terms[0].tag('Year', reason);
    }
  });
};
//same, but for less-confident values
const tagYearSafer = (v, reason) => {
  if (v.found !== true) {
    return;
  }
  v.list.forEach((ts) => {
    let num = parseInt(ts.terms[0].normal, 10);
    if (num && num > 1900 && num < 2030) {
      ts.terms[0].tag('Year', reason);
    }
  });
};

//non-destructively tag values & prepositions as dates
const datePass = function (ts) {
  //ambiguous month - person forms
  let people = '(january|april|may|june|summer|autumn|jan|sep)';
  if (ts.has(people)) {
    //give to april
    ts.match(`#Infinitive #Determiner? #Adjective? #Noun? (to|for) ${people}`).lastTerm().tag('Person', 'ambig-person');
    //remind june
    ts.match(`#Infinitive ${people}`).lastTerm().tag('Person', 'infinitive-person');
    //may waits for
    ts.match(`${people} #PresentTense (to|for)`).firstTerm().tag('Person', 'ambig-active');
    //april will
    ts.match(`${people} #Modal`).firstTerm().tag('Person', 'ambig-modal');
    //would april
    ts.match(`#Modal ${people}`).lastTerm().tag('Person', 'modal-ambig');
    //with april
    ts.match(`(that|with|for) ${people}`).term(1).tag('Person', 'that-month');
    //it is may
    ts.match(`#Copula ${people}`).term(1).tag('Person', 'is-may');
    //may is
    ts.match(`${people} #Copula`).term(0).tag('Person', 'may-is');
    //april the 5th
    ts.match(`${people} the? #Value`).term(0).tag('Month', 'person-value');
    //wednesday april
    ts.match(`#Date ${people}`).term(1).tag('Month', 'correction-may');
    //may 5th
    ts.match(`${people} the? #Value`).firstTerm().tag('Month', 'may-5th');
    //5th of may
    ts.match(`#Value of ${people}`).lastTerm().tag('Month', '5th-of-may');
    //by april
    ts.match(`${preps} ${people}`).ifNo('#Holiday').term(1).tag('Month', 'preps-month');
    //this april
    ts.match(`(next|this|last) ${people}`).term(1).tag('Month', 'correction-may'); //maybe not 'this'
  }
  //ambiguous month - verb-forms
  let verbs = '(may|march)';
  if (ts.has(verbs)) {
    //quickly march
    ts.match(`#Adverb ${verbs}`).lastTerm().tag('Infinitive', 'ambig-verb');
    ts.match(`${verbs} #Adverb`).lastTerm().tag('Infinitive', 'ambig-verb');
    //all march
    ts.match(`${preps} ${verbs}`).lastTerm().tag('Month', 'in-month');
    //this march
    ts.match(`(next|this|last) ${verbs}`).lastTerm().tag('Month', 'this-month');
    //with date
    ts.match(`${verbs} the? #Value`).firstTerm().tag('Month', 'march-5th');
    ts.match(`#Value of? ${verbs}`).lastTerm().tag('Month', '5th-of-march');
    //nearby
    ts.match(`[${verbs}] .? #Date`).lastTerm().tag('Month', 'march-and-feb');
    ts.match(`#Date .? [${verbs}]`).lastTerm().tag('Month', 'feb-and-march');

    if (ts.has('march')) {
      //march to
      ts.match('march (up|down|back|to|toward)').term(0).tag('Infinitive', 'march-to');
      //must march
      ts.match('#Modal march').term(1).tag('Infinitive', 'must-march');
    }

  }
  //sun 5th
  if (ts.has('sun')) {
    //sun feb 2
    ts.match('sun #Date').firstTerm().tag('WeekDay', 'sun-feb');
    //sun the 5th
    ts.match('sun the #Ordinal').tag('Date').firstTerm().tag('WeekDay', 'sun-the-5th');
    //the sun
    ts.match('#Determiner sun').lastTerm().tag('Singular', 'the-sun');
  }
  //sat, nov 5th
  if (ts.has('sat')) {
    //sat november
    ts.match('sat #Date').firstTerm().tag('WeekDay', 'sat-feb');
    //this sat
    ts.match(`${preps} sat`).lastTerm().tag('WeekDay', 'sat');
  }

  //months:
  if (ts.has('#Month')) {
    //June 5-7th
    ts.match(`#Month #DateRange+`).tag('Date', 'correction-numberRange');
    //5th of March
    ts.match('#Value of #Month').tag('Date', 'value-of-month');
    //5 March
    ts.match('#Cardinal #Month').tag('Date', 'cardinal-month');
    //march 5 to 7
    ts.match('#Month #Value to #Value').tag('Date', 'value-to-value');
    //march the 12th
    ts.match('#Month the #Value').tag('Date', 'month-the-value');
  }

  ts.match('in the (night|evening|morning|afternoon|day|daytime)').tag('Time', 'in-the-night');
  ts.match('(#Value|#Time) (am|pm)').tag('Time', 'value-ampm');

  //months:
  if (ts.has('#Value')) {
    //for 4 months
    ts.match('for #Value #Duration').tag('Date', 'for-x-duration');
    //values
    ts.match('#Value #Abbreviation').tag('Value', 'value-abbr');
    ts.match('a #Value').if('(hundred|thousand|million|billion|trillion)').tag('Value', 'a-value');
    ts.match('(minus|negative) #Value').tag('Value', 'minus-value');
    ts.match('#Value grand').tag('Value', 'value-grand');
    // ts.match('#Ordinal (half|quarter)').tag('Value', 'ordinal-half');//not ready
    ts.match('(half|quarter) #Ordinal').tag('Value', 'half-ordinal');
    ts.match('(hundred|thousand|million|billion|trillion) and #Value').tag('Value', 'magnitude-and-value');
    ts.match('#Value (point|decimal) #Value').tag('Value', 'value-point-value');
    //for four days
    ts.match(`${preps}? #Value #Duration`).tag('Date', 'value-duration');
    ts.match('(#WeekDay|#Month) #Value').ifNo('#Money').tag('Date', 'date-value');
    ts.match('#Value (#WeekDay|#Month)').ifNo('#Money').tag('Date', 'value-date');
    //may twenty five
    let vs = ts.match('#TextValue #TextValue');
    if (vs.found && vs.has('#Date')) {
      vs.tag('#Date', 'textvalue-date');
    }
    //two days before
    ts.match('#Value #Duration #Conjunction').tag('Date', 'val-duration-conjunction');
    //two years old
    ts.match('#Value #Duration old').unTag('Date', 'val-years-old');
  }


  //seasons
  if (ts.has(seasons)) {
    ts.match(`${preps}? ${thisNext} ${seasons}`).tag('Date', 'thisNext-season');
    ts.match(`the? ${sections} of ${seasons}`).tag('Date', 'section-season');
  }

  //rest-dates
  if (ts.has('#Date')) {
    //june the 5th
    ts.match('#Date the? #Ordinal').tag('Date', 'correction-date');
    //last month
    ts.match(`${thisNext} #Date`).tag('Date', 'thisNext-date');
    //by 5 March
    ts.match('due? (by|before|after|until) #Date').tag('Date', 'by-date');
    //tomorrow before 3
    ts.match('#Date (by|before|after|at|@|about) #Cardinal').not('^#Date').tag('Time', 'date-before-Cardinal');
    //saturday am
    ts.match('#Date (am|pm)').term(1).unTag('Verb').unTag('Copula').tag('Time', 'date-am');
    ts.match('(last|next|this|previous|current|upcoming|coming|the) #Date').tag('Date', 'next-feb');
    ts.match('#Date #Preposition #Date').tag('Date', 'date-prep-date');
    //start of june
    ts.match(`the? ${sections} of #Date`).tag('Date', 'section-of-date');
    //fifth week in 1998
    ts.match('#Ordinal #Duration in #Date').tag('Date', 'duration-in-date');
    //early in june
    ts.match('(early|late) (at|in)? the? #Date').tag('Time', 'early-evening');
  }


  //year/cardinal tagging
  if (ts.has('#Cardinal')) {
    let v = ts.match(`#Date #Value #Cardinal`).lastTerm();
    tagYear(v, 'date-value-year');
    //scoops up a bunch
    v = ts.match(`#Date+ #Cardinal`).lastTerm();
    tagYear(v, 'date-year');
    //feb 8 2018
    v = ts.match(`#Month #Value #Cardinal`).lastTerm();
    tagYear(v, 'month-value-year');
    //feb 8 to 10th 2018
    v = ts.match(`#Month #Value to #Value #Cardinal`).lastTerm();
    tagYear(v, 'month-range-year');
    //in 1998
    v = ts.match(`(in|of|by|during|before|starting|ending|for|year) #Cardinal`).lastTerm();
    tagYear(v, 'in-year');
    //q2 2009
    v = ts.match('(q1|q2|q3|q4) [#Cardinal]');
    tagYear(v, 'in-year');
    //2nd quarter 2009
    v = ts.match('#Ordinal quarter [#Cardinal]');
    tagYear(v, 'in-year');
    //in the year 1998
    v = ts.match('the year [#Cardinal]');
    tagYear(v, 'in-year');

    //it was 1998
    v = ts.match('it (is|was) [#Cardinal]');
    tagYearSafer(v, 'in-year');
    //was 1998 and...
    v = ts.match(`#Cardinal !#Plural`).firstTerm();
    tagYearSafer(v, 'year-unsafe');
  }

  //another pass at dates..
  if (ts.has('#Date')) {
    //time:
    if (ts.has('#Time')) {
      ts.match('#Cardinal #Time').not('#Year').tag('Time', 'value-time');
      ts.match('(by|before|after|at|@|about) #Time').tag('Time', 'preposition-time');
      //2pm est
      ts.match('#Time (eastern|pacific|central|mountain)').term(1).tag('Time', 'timezone');
      ts.match('#Time (est|pst|gmt)').term(1).tag('Time', 'timezone abbr');
    }

    //fix over-greedy
    let date = ts.match('#Date+').splitOn('Clause');

    if (date.has('(#Year|#Time)') === false) {
      //12 february 12
      date.match('#Value (#Month|#Weekday) #Value').lastTerm().unTag('Date');
    }
  }

  return ts;
};

module.exports = datePass;

},{}],107:[function(_dereq_,module,exports){
'use strict';
//auxiliary verbs are extra verbs beside the main ones
// "[will be] going" - etc.

const Auxiliary = {
  'do': true,
  'don\'t': true,
  'does': true,
  'doesn\'t': true,
  'will': true,
  'wont': true,
  'won\'t': true,
  'have': true,
  'haven\'t': true,
  'had': true,
  'hadn\'t': true,
  'not': true,
};

const corrections = function(ts) {
  //set verbs as auxillaries
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (Auxiliary[t.normal] || Auxiliary[t.silent_term]) {
      let next = ts.terms[i + 1];
      //if next word is a verb
      if (next && (next.tags.Verb || next.tags.Adverb || next.tags.Negative)) {
        t.tag('Auxiliary', 'corrections-Auxiliary');
        continue;
      }
    }
  }
  return ts;
};

module.exports = corrections;

},{}],108:[function(_dereq_,module,exports){
'use strict';

// 'not' is sometimes a verb, sometimes an adjective
const negation_step = function(ts) {
  for(let i = 0; i < ts.length; i++) {
    let t = ts.get(i);
    if (t.normal === 'not' || t.silent_term === 'not') {
      //find the next verb/adjective
      for(let o = i + 1; o < ts.length; o++) {
        if (ts.get(o).tags.Verb) {
          t.tag('VerbPhrase', 'negate-verb');
          break;
        }
        if (ts.get(o).tags.Adjective) {
          t.tag('AdjectivePhrase', 'negate-adj');
          break;
        }
      }
    }
  }
  return ts;
};

module.exports = negation_step;

},{}],109:[function(_dereq_,module,exports){
'use strict';
//-types of comma-use-
// PlaceComma - Hollywood, California
// List       - cool, fun, and great.
// ClauseEnd  - if so, we do.

//like Toronto, Canada
const isPlaceComma = (ts, i) => {
  let t = ts.terms[i];
  let nextTerm = ts.terms[i + 1];
  //'australia, canada' is a list
  if (nextTerm && t.tags.Place && !t.tags.Country && nextTerm.tags.Country) {
    return true;
  }
  return false;
};

//adj, noun, or verb
const mainTag = (t) => {
  if (t.tags.Adjective) {
    return 'Adjective';
  }
  if (t.tags.Noun) {
    return 'Noun';
  }
  if (t.tags.Verb) {
    return 'Verb';
  }
  return null;
};


//take the first term with a comma, and test to the right.
//the words with a comma must be the same pos.
const isList = (ts, i) => {
  let start = i;
  let tag = mainTag(ts.terms[i]);
  //ensure there's a following comma, and its the same pos
  //then a Conjunction
  let sinceComma = 0;
  let count = 0;
  let hasConjunction = false;
  for(i = i + 1; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //are we approaching the end
    if (count > 0 && t.tags.Conjunction) {
      hasConjunction = true;
      continue;
    }
    //found one,
    if (t.tags[tag]) {
      //looks good. keep it going
      if (t.tags.Comma) {
        count += 1;
        sinceComma = 0;
        continue;
      }
      if (count > 0 && hasConjunction) { //is this the end of the list?
        ts.slice(start, i).tag('List');
        return;
      }
    }
    sinceComma += 1;
    //have we gone too far without a comma?
    if (sinceComma > 5) {
      return;
    }
  }
  return;
};

const commaStep = function(ts) {
  //tag the correct punctuation forms
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    let punct = t.endPunctuation();
    if (punct === ',') {
      t.tag('Comma', 'comma-step');
      continue;
    }
    if (punct === ';' || punct === ':') {
      t.tag('ClauseEnd', 'clause-punt');
      continue;
    }
    //support elipses
    if (t.whitespace.after.match(/^\.\./)) {
      t.tag('ClauseEnd', 'clause-elipses');
      continue;
    }
    //support ' - ' clause
    if (ts.terms[i + 1] && ts.terms[i + 1].whitespace.before.match(/ - /)) {
      t.tag('ClauseEnd', 'hypen-clause');
      continue;
    }
  }

  //disambiguate the commas now
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (t.tags.Comma) {
      //if we already got it
      if (t.tags.List) {
        continue;
      }
      //like 'Hollywood, California'
      if (isPlaceComma(ts, i)) {
        continue;
      }
      //like 'cold, wet hands'
      isList(ts, i);
      //otherwise, it's a phrasal comma, like 'you must, if you think so'
      t.tags.ClauseEnd = true;
    }
  }
  return ts;
};

module.exports = commaStep;

},{}],110:[function(_dereq_,module,exports){
'use strict';
//decide if an apostrophe s is a contraction or not
// 'spencer's nice' -> 'spencer is nice'
// 'spencer's house' -> 'spencer's house'
const afterWord = /[a-z]s'$/;
const apostrophe = /[a-z]'s$/;

//these are always contractions
const blacklist = {
  'it\'s': true,
  'that\'s': true
};

//a possessive means "'s" describes ownership, not a contraction, like 'is'
const is_possessive = function(terms, x) {
  let t = terms.get(x);
  //these are always contractions, not possessive
  if (blacklist[t.normal] === true) {
    return false;
  }
  //"spencers'" - this is always possessive - eg "flanders'"
  if (afterWord.test(t.normal) === true) {
    return true;
  }
  //if no apostrophe s, return
  if (apostrophe.test(t.normal) === false) {
    return false;
  }
  //some parts-of-speech can't be possessive
  if (t.tags.Pronoun === true) {
    return false;
  }
  let nextWord = terms.get(x + 1);
  //last word is possessive  - "better than spencer's"
  if (nextWord === undefined) {
    return true;
  }
  //next word is 'house'
  if (nextWord.tags.Noun === true) {
    return true;
  }
  //rocket's red glare
  if (nextWord.tags.Adjective && terms.get(x + 2) && terms.get(x + 2).tags.Noun) {
    return true;
  }
  //next word is an adjective
  if (nextWord.tags.Adjective || nextWord.tags.Verb || nextWord.tags.Adverb) {
    return false;
  }
  return false;
};

//tag each term as possessive, if it should
const possessiveStep = function(terms) {
  for(let i = 0; i < terms.length; i++) {
    if (is_possessive(terms, i)) {
      let t = terms.get(i);
      //if it's not already a noun, co-erce it to one
      if (!t.tags['Noun']) {
        t.tag('Noun', 'possessive_pass');
      }
      t.tag('Possessive', 'possessive_pass');
    }
  }
  return terms;
};
module.exports = possessiveStep;

},{}],111:[function(_dereq_,module,exports){
'use strict';

//tag 'FBI' as letters-representing-words.
//we guess if letters are an acronym in the Term class.
const acronym_step = function(ts) {
  ts.terms.forEach((t) => {
    if (t.isAcronym()) {
      t.tag('Acronym', 'acronym-step');
    }
  });
  return ts;
};

module.exports = acronym_step;

},{}],112:[function(_dereq_,module,exports){
'use strict';

//sort-out things like 'theresa may', or 'will jones'.
const person_step = function(ts) {
  //mr Putin
  ts.match('(mr|mrs|ms|dr) (#TitleCase|#Possessive)+').tag('#Person', 'mr-putin');

  //a bunch of ambiguous first names
  let maybeNoun = '(rose|robin|dawn|ray|holly|bill|joy|viola|penny|sky|violet|daisy|melody|kelvin|hope|mercedes|olive|jewel|faith|van|charity|miles|lily|summer|dolly|rod|dick|cliff|lane|reed|kitty|art|jean|trinity)';
  if (ts.has(maybeNoun)) {
    ts.match('(#Determiner|#Adverb|#Pronoun|#Possessive) [' + maybeNoun + ']').tag('Noun', 'the-ray');
    ts.match(maybeNoun + ' (#Person|#Acronym|#TitleCase)').canBe('#Person').tag('Person', 'ray-smith');
  }
  //verbs or people-names
  let maybeVerb = '(pat|wade|ollie|will|rob|buck|bob|mark|jack)';
  if (ts.has(maybeVerb)) {
    ts.match('(#Modal|#Adverb) [' + maybeVerb + ']').tag('Verb', 'would-mark');
    ts.match(maybeVerb + ' (#Person|#TitleCase)').tag('Person', 'rob-smith');
  }
  //adjectives or people-names
  let maybeAdj = '(misty|rusty|dusty|rich|randy)';
  if (ts.has(maybeAdj)) {
    ts.match('#Adverb [' + maybeAdj + ']').tag('Adjective', 'really-rich');
    ts.match(maybeAdj + ' (#Person|#TitleCase)').tag('Person', 'randy-smith');
  }
  //dates as people names
  let maybeDate = '(april|june|may|jan|august|eve)';
  if (ts.has(maybeDate)) {
    ts.match(String(maybeDate) + ' (#Person|#TitleCase)').canBe('#Person').tag('Person', 'june-smith');
    ts.match('(in|during|on|by|before|#Date) [' + maybeDate + ']').canBe('#Date').tag('Date', 'in-june');
    ts.match(maybeDate + ' (#Date|#Value)').canBe('#Date').tag('Date', 'june-5th');
  }
  //place-names as people-names
  let maybePlace = '(paris|alexandria|houston|kobe|salvador|sydney)';
  if (ts.has(maybePlace)) {
    ts.match('(in|near|at|from|to|#Place) [' + maybePlace + ']').canBe('#Place').tag('Place', 'in-paris');
    ts.match('[' + maybePlace + '] #Place').canBe('#Place').tag('Place', 'paris-france');
    ts.match('[' + maybePlace + '] #Person').canBe('#Person').tag('Person', 'paris-hilton');
  }
  //this one is tricky
  if (ts.match('al')) {
    ts.match('al (#Person|#TitleCase)').canBe('#Person').tag('#Person', 'al-borlen');
    ts.match('#TitleCase al #TitleCase').canBe('#Person').tag('#Person', 'arabic-al-arabic');
  }
  // let firstNames = '()';
  // let names = ts.match(firstNames);
  // if (names.found) {
  //   //prolly not a name:
  //   if (ts.has('(#Determiner|#Adverb|#Pronoun|#Possessive) ' + firstNames)) {
  //     names.unTag('Person', 'the-bill');
  //   } else {
  //     //probably a name here:
  //     let name = ts.match('(#Honorific|#Person) ' + firstNames);
  //     if (!name.found) {
  //       name = ts.match(firstNames + ' (#Person|#Honorific|#TitleCase)');
  //     }
  //     if (name.found && name.has('(#Place|#Date|#Organization)') === false) {
  //       name.tag('Person', 'dr-bill');
  //       names.tag('FirstName', 'ambiguous-name');
  //     }
  //   }
  // }
  //tighter-matches for other ambiguous names:
  // ts.match('(al|) #Acronym? #LastName').firstTerm().tag('#FirstName', 'ambig-lastname');

  //methods requiring a firstname match
  if (ts.has('#FirstName')) {
    // Firstname x (dangerous)
    let tmp = ts.match('#FirstName #Noun').ifNo('^#Possessive').ifNo('#ClauseEnd .');
    tmp.lastTerm().canBe('#LastName').tag('#LastName', 'firstname-noun');
    //ferdinand de almar
    ts.match('#FirstName de #Noun').canBe('#Person').tag('#Person', 'firstname-de-noun');
    //Osama bin Laden
    ts.match('#FirstName (bin|al) #Noun').canBe('#Person').tag('#Person', 'firstname-al-noun');
    //John L. Foo
    ts.match('#FirstName #Acronym #TitleCase').tag('Person', 'firstname-acronym-titlecase');
    //Andrew Lloyd Webber
    ts.match('#FirstName #FirstName #TitleCase').tag('Person', 'firstname-firstname-titlecase');
    //Mr Foo
    ts.match('#Honorific #FirstName? #TitleCase').tag('Person', 'Honorific-TitleCase');
    //John Foo
    ts.match('#FirstName #TitleCase #TitleCase?').match('#Noun+').tag('Person', 'firstname-titlecase');
    //peter the great
    ts.match('#FirstName the #Adjective').tag('Person', 'correction-determiner5');
    //very common-but-ambiguous lastnames
    ts.match('#FirstName (green|white|brown|hall|young|king|hill|cook|gray|price)').tag('#Person', 'firstname-maybe');
    //Joe K. Sombrero
    ts.match('#FirstName #Acronym #Noun')
      .ifNo('#Date')
      .tag('#Person', 'n-acro-noun')
      .lastTerm()
      .tag('#LastName', 'n-acro-noun');
    //john bodego's
    ts.match('#FirstName (#Singular|#Possessive)')
      .ifNo('#Date')
      .tag('#Person', 'first-possessive')
      .lastTerm()
      .tag('#LastName', 'first-possessive');
  }

  //methods requiring a lastname match
  if (ts.has('#LastName')) {
    // x Lastname
    ts.match('#Noun #LastName')
      .firstTerm()
      .canBe('#FirstName')
      .tag('#FirstName', 'noun-lastname');
    //ambiguous-but-common firstnames
    ts.match('(will|may|april|june|said|rob|wade|ray|rusty|drew|miles|jack|chuck|randy|jan|pat|cliff|bill) #LastName')
      .firstTerm()
      .tag('#FirstName', 'maybe-lastname');
    //Jani K. Smith
    ts.match('#TitleCase #Acronym? #LastName')
      .ifNo('#Date')
      .tag('#Person', 'title-acro-noun')
      .lastTerm()
      .tag('#LastName', 'title-acro-noun');
    //is foo Smith
    ts.match('#Copula (#Noun|#PresentTense) #LastName')
      .term(1)
      .tag('#FirstName', 'copula-noun-lastname');
  }

  //methods requiring a titlecase
  if (ts.has('#TitleCase')) {
    ts.match('#Acronym #TitleCase')
      .canBe('#Person')
      .tag('#Person', 'acronym-titlecase');
    //ludwig van beethovan
    ts.match('#TitleCase (van|al|bin) #TitleCase')
      .canBe('#Person')
      .tag('Person', 'correction-titlecase-van-titlecase');
    ts.match('#TitleCase (de|du) la? #TitleCase')
      .canBe('#Person')
      .tag('Person', 'correction-titlecase-van-titlecase');
    //Morgan Shlkjsfne
    ts.match('#Person #TitleCase')
      .match('#TitleCase #Noun')
      .canBe('#Person')
      .tag('Person', 'correction-person-titlecase');
    //pope francis
    ts.match('(lady|queen|sister) #TitleCase')
      .ifNo('#Date')
      .tag('#FemaleName', 'lady-titlecase');
    ts.match('(king|pope|father) #TitleCase')
      .ifNo('#Date')
      .tag('#MaleName', 'correction-poe');
  }

  //j.k Rowling
  ts.match('#Noun van der? #Noun')
    .canBe('#Person')
    .tag('#Person', 'von der noun');
  //king of spain
  ts.match('(king|queen|prince|saint|lady) of? #Noun')
    .canBe('#Person')
    .tag('#Person', 'king-of-noun');
  //mr X
  ts.match('#Honorific #Acronym').tag('Person', 'Honorific-TitleCase');
  //peter II
  ts.match('#Person #Person the? #RomanNumeral').tag('Person', 'correction-roman-numeral');

  //'Professor Fink', 'General McCarthy'
  ts.match('#Honorific #Person').tag('Person', 'Honorific-Person');

  //remove single 'mr'
  ts.match('^#Honorific$').unTag('Person', 'single-honorific');


  return ts;
};

module.exports = person_step;

},{}],113:[function(_dereq_,module,exports){
'use strict';
const startQuote = /^["'\u201B\u201C\u2033\u201F\u2018]/;
const endQuote = /.["'\u201D\u2036\u2019]([;:,.])?$/;

//tag a inline quotation as such
const quotation_step = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (startQuote.test(t.text) === true) {
      //look for the ending
      for (let o = 0; o < ts.terms.length; o++) {
        //max-length- don't go-on forever
        if (!ts.terms[i + o] || o > 28) {
          break;
        }
        if (endQuote.test(ts.terms[i + o].text) === true) {
          ts.slice(i, i + o + 1).tag('Quotation', 'quotation_step');
          i += o;
          break;
        }
      }
    }
  }
  return ts;
};
module.exports = quotation_step;

},{}],114:[function(_dereq_,module,exports){
'use strict';
//orgwords like 'bank' in 'Foo Bank'
let orgWords = _dereq_('../../world/more-data/orgWords');

//could this word be an organization
const maybeOrg = function(t) {
  //must be a noun
  if (!t.tags.Noun) {
    return false;
  }
  //can't be these things
  if (t.tags.Pronoun || t.tags.Comma || t.tags.Possessive || t.tags.Place) {
    return false;
  }
  //must be one of these
  if (t.tags.TitleCase || t.tags.Organization || t.tags.Acronym) {
    return true;
  }
  return false;
};

const organization_step = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (orgWords.hasOwnProperty(t.normal) === true) {
      //eg. Toronto University
      let lastTerm = ts.terms[i - 1];
      if (lastTerm && maybeOrg(lastTerm)) {
        lastTerm.tag('Organization', 'org-word-1');
        t.tag('Organization', 'org-word-2');
        continue;
      }
      //eg. University of Toronto
      let nextTerm = ts.terms[i + 1];
      if (nextTerm && nextTerm.normal === 'of') {
        if (ts.terms[i + 2] && maybeOrg(ts.terms[i + 2])) {
          t.tag('Organization', 'org-of-word-1');
          nextTerm.tag('Organization', 'org-of-word-2');
          ts.terms[i + 2].tag('Organization', 'org-of-word-3');
          continue;
        }
      }
    }
  }
  if (ts.has('#Acronym')) {
    ts.match('the #Acronym').not('(iou|fomo|yolo|diy|dui|nimby)').lastTerm().tag('Organization', 'the-acronym');
    ts.match('#Acronym').match('#Possessive').tag('Organization', 'possessive-acronym');
  }
  return ts;
};
module.exports = organization_step;

},{"../../world/more-data/orgWords":215}],115:[function(_dereq_,module,exports){
'use strict';
const isPlural = _dereq_('../../subset/nouns/isPlural');

const pluralStep = function(ts) {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (t.tags.Noun) {
      //skip existing fast
      if (t.tags.Singular || t.tags.Plural) {
        continue;
      }
      //check if it's plural
      let plural = isPlural(t, t.world); //can be null if unknown
      if (plural === true) {
        t.tag('Plural', 'pluralStep');
      } else if (plural === false) {
        t.tag('Singular', 'pluralStep');
      }
    }
  }
  return ts;
};

module.exports = pluralStep;

},{"../../subset/nouns/isPlural":39}],116:[function(_dereq_,module,exports){
'use strict';
//regs-
const cardinal = /^[0-9]([0-9]+,)*?(\.[0-9])$/;
const hasText = /^[a-z]/;

const value_step = function(ts) {
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (t.tag.Value === true) {
      //ordinal/cardinal
      if (t.tags.Ordinal === undefined && t.tags.Cardinal === undefined) {
        if (cardinal.test(t.normal) === true) {
          t.tag('Cardinal', 'cardinal-regex');
        } else {
          t.tag('Ordinal', 'not-cardinal');
        }
      }
      //text/number
      if (t.tags.TextValue === undefined && t.tags.NumericValue === undefined) {
        if (hasText.test(t.normal) === true) {
          t.tag('TextValue', 'TextValue-regex');
        } else {
          t.tag('NumericValue', 'NumericValue-regex');
        }
      }
    }
  }
  //5 books
  ts.match('#Cardinal #Plural').lastTerm().tag('Unit', 'cardinal-plural');
  //5th book
  ts.match('#Ordinal #Singular').lastTerm().tag('Unit', 'ordinal-singular');
  return ts;
};

module.exports = value_step;

},{}],117:[function(_dereq_,module,exports){
'use strict';

//mostly pos-corections here
const corrections = function(ts) {
  //ambig prepositions/conjunctions
  if (ts.has('so')) {
    //so funny
    ts.match('so #Adjective').match('so').tag('Adverb', 'so-adv');
    //so the
    ts.match('so #Noun').match('so').tag('Conjunction', 'so-conj');
    //do so
    ts.match('do so').match('so').tag('Noun', 'so-noun');
  }
  if (ts.has('all')) {
    //all students
    ts.match('[all] #Determiner? #Noun').tag('Adjective', 'all-noun');
    //it all fell apart
    ts.match('[all] #Verb').tag('Adverb', 'all-verb');
  }
  //the ambiguous word 'that' and 'which'
  if (ts.has('(that|which)')) {
    //remind john that
    ts.match('#Verb #Adverb? #Noun (that|which)').lastTerm().tag('Preposition', 'that-prep');
    //that car goes
    ts.match('that #Noun #Verb').firstTerm().tag('Determiner', 'that-determiner');
  //things that provide
  // ts.match('#Plural (that|which) #Adverb? #Verb').term(1).tag('Preposition', 'noun-that');
  }
  //Determiner-signals
  if (ts.has('#Determiner')) {
    //the wait to vote
    ts.match('(the|this) #Verb #Preposition .').term(1).tag('Noun', 'correction-determiner1');
    //the swim
    ts.match('(the|those|these) (#Infinitive|#PresentTense|#PastTense)').term(1).tag('Noun', 'correction-determiner2');
    //a staggering cost
    ts.match('(a|an) #Gerund').term(1).tag('Adjective', 'correction-a|an');
    ts.match('(a|an) #Adjective (#Infinitive|#PresentTense)').term(2).tag('Noun', 'correction-a|an2');
    //some pressing issues
    ts.match('(some #Verb #Plural').term(1).tag('Noun', 'correction-determiner6');
    //the orange.
    ts.match('#Determiner #Adjective$').not('(#Comparative|#Superlative)').term(1).tag('Noun', 'the-adj-1');
    //the orange is
    ts.match('#Determiner #Adjective (#Copula|#PastTense|#Auxiliary)').term(1).tag('Noun', 'the-adj-2');
    //the nice swim
    ts.match('(the|this|those|these) #Adjective #Verb').term(2).tag('Noun', 'the-adj-verb');
    //the truly nice swim
    ts.match('(the|this|those|these) #Adverb #Adjective #Verb').term(3).tag('Noun', 'correction-determiner4');
    //a stream runs
    ts.match('(the|this|a|an) #Infinitive #Adverb? #Verb').term(1).tag('Noun', 'correction-determiner5');
    //a sense of
    ts.match('#Determiner #Verb of').term(1).tag('Noun', 'the-verb-of');
    //the threat of force
    ts.match('#Determiner #Noun of #Verb').term(3).tag('Noun', 'noun-of-noun');
    //a close
    ts.match('#Determiner #Adverb? [close]').tag('Adjective', 'a-close');
    //did a 900, paid a 20
    ts.match('#Verb (a|an) [#Value]').tag('Singular', 'a-value');
    //a tv show
    ts.match('(a|an) #Noun [#Infinitive]').tag('Noun', 'a-noun-inf');
  }

  //like
  if (ts.has('like')) {
    ts.match('just like').term(1).tag('Preposition', 'like-preposition');
    //folks like her
    ts.match('#Noun like #Noun').term(1).tag('Preposition', 'noun-like');
    //look like
    ts.match('#Verb like').term(1).tag('Adverb', 'verb-like');
    //exactly like
    ts.match('#Adverb like').term(1).tag('Adverb', 'adverb-like');
  }

  if (ts.has('#Value')) {
    //half a million
    ts.match('half a? #Value').tag('Value', 'half-a-value'); //quarter not ready
    ts.match('#Value and a (half|quarter)').tag('Value', 'value-and-a-half');
    //all values are either ordinal or cardinal
    // ts.match('#Value').match('!#Ordinal').tag('#Cardinal', 'not-ordinal');
    //money
    ts.match('#Value+ #Currency').tag('Money', 'value-currency').lastTerm().tag('Unit', 'money-unit');
    ts.match('#Money and #Money #Currency?').tag('Money', 'money-and-money');
    //1 800 PhoneNumber
    ts.match('1 #Value #PhoneNumber').tag('PhoneNumber', '1-800-Value');
    //(454) 232-9873
    ts.match('#NumericValue #PhoneNumber').tag('PhoneNumber', '(800) PhoneNumber');
    //two hundredth
    ts.match('#TextValue+').match('#Cardinal+ #Ordinal').tag('Ordinal', 'two-hundredth');

  }

  if (ts.has('#Noun')) {
    //'more' is not always an adverb
    ts.match('more #Noun').tag('Noun', 'more-noun');
    //the word 'second'
    ts.match('second #Noun').term(0).unTag('Unit').tag('Ordinal', 'second-noun');
    //he quickly foo
    ts.match('#Noun #Adverb #Noun').term(2).tag('Verb', 'correction');
    //fix for busted-up phrasalVerbs
    ts.match('#Noun #Particle').term(1).tag('Preposition', 'repair-noPhrasal');
    //John & Joe's
    ts.match('#Noun (&|n) #Noun').tag('Organization', 'Noun-&-Noun');
    //Aircraft designer
    ts.match('#Noun #Actor').tag('Actor', 'thing-doer');
    //my buddy
    ts.match('#Possessive #FirstName').term(1).unTag('Person', 'possessive-name');
    //this rocks
    ts.match('(this|that) #Plural').term(1).tag('PresentTense', 'this-verbs');
    //the western line
    ts.match('#Determiner [(western|eastern|northern|southern|central)] #Noun').tag('Noun', 'western-line');
    ts.match('(#Determiner|#Value) [(linear|binary|mobile|lexical|technical|computer|scientific|formal)] #Noun').tag('Noun', 'technical-noun');
    //organization
    if (ts.has('#Organization')) {
      ts.match('#Organization of the? #TitleCase').tag('Organization', 'org-of-place');
      ts.match('#Organization #Country').tag('Organization', 'org-country');
      ts.match('(world|global|international|national|#Demonym) #Organization').tag('Organization', 'global-org');
    }
  }

  if (ts.has('#Verb')) {
    //still make
    ts.match('still #Verb').term(0).tag('Adverb', 'still-verb');
    //'u' as pronoun
    ts.match('u #Verb').term(0).tag('Pronoun', 'u-pronoun-1');
    //is no walk
    ts.match('is no #Verb').term(2).tag('Noun', 'is-no-verb');
    //different views than
    ts.match('#Verb than').term(0).tag('Noun', 'correction');
    //her polling
    ts.match('#Possessive #Verb').term(1).tag('Noun', 'correction-possessive');
    //is eager to go
    ts.match('#Copula #Adjective to #Verb').match('#Adjective to').tag('Verb', 'correction');
    //there are reasons
    ts.match('there (are|were) #Adjective? [#PresentTense]').tag('Plural', 'there-are');

    if (ts.has('(who|what|where|why|how|when)')) {
      //the word 'how'
      ts.match('^how').term(0).tag('QuestionWord', 'how-question').tag('QuestionWord', 'how-question');
      ts.match('how (#Determiner|#Copula|#Modal|#PastTense)').term(0).tag('QuestionWord', 'how-is');
      // //the word 'which'
      ts.match('^which').term(0).tag('QuestionWord', 'which-question').tag('QuestionWord', 'which-question');
      ts.match('which . (#Noun)+ #Pronoun').term(0).tag('QuestionWord', 'which-question2');
      ts.match('which').term(0).tag('QuestionWord', 'which-question3');
      //where

      //how he is driving
      let word = ts.match('#QuestionWord #Noun #Copula #Adverb? (#Verb|#Adjective)').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'how-he-is-x');
      //when i go fishing
      word = ts.match('#QuestionWord #Noun #Adverb? #Infinitive not? #Gerund').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'when i go fishing');
    }

    //is mark hughes
    ts.match('#Copula #Infinitive #Noun').term(1).tag('Noun', 'is-pres-noun');

    ts.match('#Infinitive #Copula').term(0).tag('Noun', 'infinitive-copula');
    //went to sleep
    // ts.match('#Verb to #Verb').lastTerm().tag('Noun', 'verb-to-verb');
    //support a splattering of auxillaries before a verb
    let advb = '(#Adverb|not)+?';
    if (ts.has(advb)) {
      //had walked
      ts.match(`(has|had) ${advb} #PastTense`).not('#Verb$').tag('Auxiliary', 'had-walked');
      //was walking
      ts.match(`#Copula ${advb} #Gerund`).not('#Verb$').tag('Auxiliary', 'copula-walking');
      //been walking
      ts.match(`(be|been) ${advb} #Gerund`).not('#Verb$').tag('Auxiliary', 'be-walking');
      //would walk
      ts.match(`(#Modal|did) ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'modal-verb');
      //would have had
      ts.match(`#Modal ${advb} have ${advb} had ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'would-have');
      //would be walking
      ts.match(`(#Modal) ${advb} be ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'would-be');
      //would been walking
      ts.match(`(#Modal|had|has) ${advb} been ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'would-be');
    //infinitive verbs suggest plural nouns - 'XYZ walk to the store'
    // r.match(`#Singular+ #Infinitive`).match('#Singular+').tag('Plural', 'infinitive-make-plural');
    }
    //fall over
    ts.match('#PhrasalVerb #PhrasalVerb').lastTerm().tag('Particle', 'phrasal-particle');
    if (ts.has('#Gerund')) {
      //walking is cool
      ts.match('#Gerund #Adverb? not? #Copula').firstTerm().tag('Activity', 'gerund-copula');
      //walking should be fun
      ts.match('#Gerund #Modal').firstTerm().tag('Activity', 'gerund-modal');
      //running-a-show
      ts.match('#Gerund #Determiner [#Infinitive]').tag('Noun', 'running-a-show');
    //setting records
    // ts.match('#Gerund [#PresentTense]').tag('Plural', 'setting-records');
    }
  }

  if (ts.has('#Adjective')) {
    //still good
    ts.match('still #Adjective').match('still').tag('Adverb', 'still-advb');
    //big dreams, critical thinking
    ts.match('#Adjective #PresentTense').term(1).tag('Noun', 'adj-presentTense');
    //will secure our
    ts.match('will #Adjective').term(1).tag('Verb', 'will-adj');
    //cheering hard - dropped -ly's
    ts.match('#PresentTense (hard|quick|long|bright|slow)').lastTerm().tag('Adverb', 'lazy-ly');
  }

  if (ts.has('#TitleCase')) {
    //FitBit Inc
    ts.match('#TitleCase (ltd|co|inc|dept|assn|bros)').tag('Organization', 'org-abbrv');
    //Foo District
    ts
      .match('#TitleCase+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)')
      .tag('Region', 'foo-district');
    //District of Foo
    ts
      .match('(district|region|province|municipality|territory|burough|state) of #TitleCase')
      .tag('Region', 'district-of-Foo');
  }
  if (ts.has('#Hyphenated')) {
    //air-flow
    ts.match('#Hyphenated #Hyphenated').match('#Noun #Verb').tag('Noun', 'hyphen-verb');
    let hyphen = ts.match('#Hyphenated+');
    if (hyphen.has('#Expression')) {
      //ooh-wee
      hyphen.tag('Expression', 'ooh-wee');
    }
  }

  //West Norforlk
  ts.match('(west|north|south|east|western|northern|southern|eastern)+ #Place').tag('Region', 'west-norfolk');

  //misc:
  //foot/feet
  ts.match('(foot|feet)').tag('Noun', 'foot-noun');
  ts.match('#Value (foot|feet)').term(1).tag('Unit', 'foot-unit');
  //'u' as pronoun
  ts.match('#Conjunction u').term(1).tag('Pronoun', 'u-pronoun-2');
  //'a/an' can mean 1 - "a hour"
  ts.match('(a|an) (#Duration|hundred|thousand|million|billion|trillion)').ifNo('#Plural').term(0).tag('Value', 'a-is-one');
  //swear-words as non-expression POS
  //nsfw
  ts.match('holy (shit|fuck|hell)').tag('Expression', 'swears-expression');
  ts.match('#Determiner (shit|damn|hell)').term(1).tag('Noun', 'swears-noun');
  ts.match('(shit|damn|fuck) (#Determiner|#Possessive|them)').term(0).tag('Verb', 'swears-verb');
  ts.match('#Copula fucked up?').not('#Copula').tag('Adjective', 'swears-adjective');
  //6 am
  ts.match('#Holiday (day|eve)').tag('Holiday', 'holiday-day');
  //timezones
  ts.match('(standard|daylight|summer|eastern|pacific|central|mountain) standard? time').tag('Time', 'timezone');
  //canadian dollar, Brazilian pesos
  ts.match('#Demonym #Currency').tag('Currency', 'demonym-currency');
  //about to go
  ts.match('about to #Adverb? #Verb').match('about to').tag(['Auxiliary', 'Verb'], 'about-to');
  //Doctor john smith jr
  ts.match('#Honorific #Person').tag('Person', 'honorific-person');
  ts.match('#Person (jr|sr|md)').tag('Person', 'person-honorific');
  //right of way
  ts.match('(right|rights) of .').tag('Noun', 'right-of');
  return ts;
};

module.exports = corrections;

},{}],118:[function(_dereq_,module,exports){

//a specificly-named thing, that should be capitalized
const properNoun = function(ts) {
  if (ts.has('#Person') === true) {
    ts.match('#FirstName #Person+').tag('ProperNoun');
    ts.match('#Person+ #LastName').tag('ProperNoun');
  }
  if (ts.has('#Place') === true) {
    ts.match('(#City|#Region|#Country)').tag('ProperNoun');
  }
  ts.match('#Organization').tag('ProperNoun');
  return ts;
};
module.exports = properNoun;

},{}],119:[function(_dereq_,module,exports){

//patterns are .match() statements to be run after the tagger
const posthoc = function(ts) {
  const patterns = ts.world.patterns;
  Object.keys(patterns).forEach((k) => {
    ts.match(k).tag(patterns[k], 'post-hoc: ' + k);
  });
  return ts;
};
module.exports = posthoc;

},{}],120:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');

const irregulars = {
  wanna: ['want', 'to'],
  gonna: ['going', 'to'],
  im: ['i', 'am'],
  alot: ['a', 'lot'],

  dont: ['do', 'not'],
  dun: ['do', 'not'],

  ive: ['i', 'have'],

  "won't": ['will', 'not'],
  wont: ['will', 'not'],

  "can't": ['can', 'not'],
  cant: ['can', 'not'],
  cannot: ['can', 'not'],

  // aint: ['is', 'not'], //or 'are'
  // "ain't": ['is', 'not'],
  "shan't": ['should', 'not'],
  imma: ['I', 'will'],

  "where'd": ['where', 'did'],
  whered: ['where', 'did'],
  "when'd": ['when', 'did'],
  whend: ['when', 'did'],
  "how'd": ['how', 'did'],
  howd: ['how', 'did'],
  "what'd": ['what', 'did'],
  whatd: ['what', 'did'],
  "let's": ['let', 'us'],

  //multiple word contractions
  dunno: ['do', 'not', 'know'],
  brb: ['be', 'right', 'back'],
  gtg: ['got', 'to', 'go'],
  irl: ['in', 'real', 'life'],
  tbh: ['to', 'be', 'honest'],
  imo: ['in', 'my', 'opinion'],
  til: ['today', 'i', 'learned'],
  rn: ['right', 'now'],
  '@': ['at']
};

//check irregulars
const checkIrregulars = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (irregulars[t.normal]) {
      let fix = irregulars[t.normal];
      ts = fixContraction(ts, fix, i);
      i += fix.length - 1;
    }
  }
  return ts;
};
module.exports = checkIrregulars;

},{"./fix":124}],121:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');
const splitContraction = _dereq_('./split');

//these are always contractions
const blacklist = {
  'that\'s': true,
  'there\'s': true
};
const are = {
  we: true,
  they: true,
  you: true
};

// "'s" may be a contraction or a possessive
// 'spencer's house' vs 'spencer's good'
const isPossessive = (ts, i) => {
  let t = ts.terms[i];
  let next_t = ts.terms[i + 1];
  //a pronoun can't be possessive - "he's house"
  if (t.tags.Pronoun || t.tags.QuestionWord) {
    return false;
  }
  if (blacklist[t.normal]) {
    return false;
  }
  //if end of sentence, it is possessive - "was spencer's"
  if (!next_t) {
    return true;
  }
  //a gerund suggests 'is walking'
  if (next_t.tags.VerbPhrase) {
    return false;
  }
  //spencer's house
  if (next_t.tags.Noun) {
    return true;
  }
  //rocket's red glare
  if (next_t.tags.Adjective && ts.terms[i + 2] && ts.terms[i + 2].tags.Noun) {
    return true;
  }
  //an adjective suggests 'is good'
  if (next_t.tags.Adjective || next_t.tags.Adverb || next_t.tags.Verb) {
    return false;
  }
  return false;
};

// you ain't / i ain't.
const isAre = function(ts, i) {
  let arr = ['is', 'not']; //default
  //get what's it 'about'
  if (ts.terms[i - 1]) {
    let about = ts.terms[i - 1];
    //go back one more..
    if (about.tags.Adverb && ts.terms[i - 2]) {
      about = ts.terms[i - 2];
    }
    if (about.tags.Plural || are[about.normal] === true) {
      arr[0] = 'are';
    }
  }
  return arr;
};

//handle ambigous contraction "'s"
const hardOne = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }
    if (ts.terms[i].normal === 'ain\'t' || ts.terms[i].normal === 'aint') {
      let arr = isAre(ts, i);
      ts = fixContraction(ts, arr, i);
      i += 1;
      continue;
    }
    let parts = splitContraction(ts.terms[i]);
    if (parts) {
      //have we found a hard one
      if (parts.end === 's') {
        //spencer's house
        if (isPossessive(ts, i)) {
          ts.terms[i].tag('#Possessive', 'hard-contraction');
          continue;
        }
        let arr = [parts.start, 'is'];
        if (ts.terms[i + 1]) {
          let str = ts.terms[i].normal;
          //he's walking -> is/was
          if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Gerund').found) {
            arr = [parts.start, 'is'];
          } else if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Verb').found) {
            //is vs has ('he's got milk')
            arr = [parts.start, 'has'];
          }
        }
        ts = fixContraction(ts, arr, i);
        i += 1;
      }
    }
  }
  return ts;
};

module.exports = hardOne;

},{"./fix":124,"./split":125}],122:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');
const split = _dereq_('./split');

//the formulaic contraction types:
const easy_ends = {
  ll: 'will',
  // 'd': 'would',
  ve: 'have',
  re: 'are',
  m: 'am',
  'n\'t': 'not'
//these ones are a bit tricksier:
// 't': 'not',
// 's': 'is' //or was
};

//unambiguous contractions, like "'ll"
const easyOnes = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }
    let parts = split(ts.terms[i]);
    if (parts) {
      parts.start = parts.start.toLowerCase();

      //make sure its an easy one
      if (easy_ends[parts.end]) {
        let arr = [parts.start, easy_ends[parts.end]];
        ts = fixContraction(ts, arr, i);
        i += 1;
      }

      //handle i'd -> 'i would' vs 'i had'
      if (parts.end === 'd') {
        //assume 'would'
        let arr = [parts.start, 'would'];
        //if next verb is past-tense, choose 'had'
        if (ts.terms[i + 1] && ts.terms[i + 1].tags.PastTense) {
          arr[1] = 'had';
        }
        //also support '#Adverb #PastTense'
        if (ts.terms[i + 2] && ts.terms[i + 2].tags.PastTense && ts.terms[i + 1].tags.Adverb) {
          arr[1] = 'had';
        }
        ts = fixContraction(ts, arr, i);
        i += 1;
      }
    }
  }
  return ts;
};
module.exports = easyOnes;

},{"./fix":124,"./split":125}],123:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');
const Term = _dereq_('../../../term');

const hasDash = function(t) {
  let dashes = /(-|–|—)/;
  return dashes.test(t.whitespace.before) || dashes.test(t.whitespace.after);
};

const numberRange = ts => {
  //try to support number range, like 5-9, this way:
  ts.match('#Hyphenated #Hyphenated').match('#NumericValue #NumericValue').tag('NumberRange');
  //otherwise, loop through and find them
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //skip existing
    if (t.silent_term) {
      continue;
    }
    if (t.tags.TextValue) {
      continue;
    }
    //hyphens found in whitespace - '5 - 7'
    if (t.tags.Value && ts.terms[i + 1] && i > 0 && (hasDash(t) || hasDash(ts.terms[i - 1])) && ts.terms[i - 1].tags.Value) {
      let to = new Term('', ts.world);
      to.silent_term = 'to';
      ts.insertAt(i, to);
      ts.terms[i - 1].tag('NumberRange', 'number-number1');
      ts.terms[i].tag('NumberRange', 'number-number2');
      ts.terms[i].whitespace.before = '';
      ts.terms[i].whitespace.after = '';
      ts.terms[i + 1].tag('NumberRange', 'number-number3');
      return ts;
    }
    //add a silent term
    if (t.tags.NumberRange) {
      let arr = t.text.split(/(-|–|—)/);
      arr[1] = 'to';
      ts = fixContraction(ts, arr, i);
      ts.terms[i].tag(['NumberRange', 'NumericValue'], 'numRange-1');
      ts.terms[i + 1].tag(['NumberRange', 'Preposition'], 'numRange-silent');
      ts.terms[i + 2].tag(['NumberRange', 'NumericValue'], 'numRange-3');
      i += 2;
    }
  }
  return ts;
};
module.exports = numberRange;

},{"../../../term":139,"./fix":124}],124:[function(_dereq_,module,exports){
'use strict';
const Term = _dereq_('../../../term');

const tags = {
  not: 'Negative',
  will: 'Verb',
  would: 'Modal',
  have: 'Verb',
  are: 'Copula',
  is: 'Copula',
  am: 'Verb'
};
//make sure the newly created term gets the easy tags
const easyTag = t => {
  if (tags[t.silent_term]) {
    t.tag(tags[t.silent_term]);
  }
};

//add a silent term
const fixContraction = (ts, parts, i) => {
  //add the interpretation to the contracted term
  let one = ts.terms[i];
  one.silent_term = parts[0];
  //tag it as a contraction
  one.tag('Contraction', 'tagger-contraction');

  //add a new empty term
  if (parts[1]) {
    let two = new Term('', ts.world);
    two.silent_term = parts[1];
    two.tag('Contraction', 'tagger-contraction');
    ts.insertAt(i + 1, two);
    //ensure new term has no auto-whitspace
    two.whitespace.before = '';
    two.whitespace.after = '';
    easyTag(two);
  }

  //potentially it's three-contracted-terms, like 'dunno'
  if (parts[2]) {
    let three = new Term('', ts.world);
    three.silent_term = parts[2];
    // ts.terms.push(three);
    ts.insertAt(i + 2, three);
    three.tag('Contraction', 'tagger-contraction');
    easyTag(three);
  }

  return ts;
};

module.exports = fixContraction;

},{"../../../term":139}],125:[function(_dereq_,module,exports){
'use strict';
const contraction = /^([a-z]+)'([a-z][a-z]?)$/i;
const possessive = /[a-z]s'$/i;

const allowed = {
  re: 1,
  ve: 1,
  ll: 1,
  t: 1,
  s: 1,
  d: 1,
  m: 1
};

/** interpret a terms' contraction */
const splitContraction = t => {
  //handle this irregular one (shared trailing n)
  if (t.normal === 'can\'t') {
    return {
      start: 'can',
      end: 'n\'t'
    };
  }
  let parts = t.normal.match(contraction);
  if (parts && parts[1] && allowed[parts[2]] === 1) {
    //handle n't
    if (parts[2] === 't' && parts[1].match(/[a-z]n$/)) {
      parts[1] = parts[1].replace(/n$/, '');
      parts[2] = 'n\'t'; //dunno..
    }
    //fix titlecase
    if (t.tags.TitleCase === true) {
      parts[1] = parts[1].replace(/^[a-z]/, x => x.toUpperCase());
    }
    return {
      start: parts[1],
      end: parts[2]
    };
  }
  // "flanders' house"
  if (possessive.test(t.text) === true) {
    return {
      start: t.normal.replace(/s'?$/, ''),
      end: ''
    };
  }
  return null;
};
module.exports = splitContraction;

},{}],126:[function(_dereq_,module,exports){
//yep,
//https://github.com/mathiasbynens/emoji-regex/blob/master/index.js
module.exports = /(?:0\u20E3\n1\u20E3|2\u20E3|3\u20E3|4\u20E3|5\u20E3|6\u20E3|7\u20E3|8\u20E3|9\u20E3|#\u20E3|\*\u20E3|\uD83C(?:\uDDE6\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF2|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFD|\uDDFF)|\uDDE7\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFC|\uDDFE|\uDDFF)|\uDDE8\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDE9\uD83C(?:\uDDEA|\uDDEC|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDFF)|\uDDEA\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDED|\uDDF7|\uDDF8|\uDDF9|\uDDFA)|\uDDEB\uD83C(?:\uDDEE|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDF7)|\uDDEC\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF1|\uDDF2|\uDDF3|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFE)|\uDDED\uD83C(?:\uDDF0|\uDDF2|\uDDF3|\uDDF7|\uDDF9|\uDDFA)|\uDDEE\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9)|\uDDEF\uD83C(?:\uDDEA|\uDDF2|\uDDF4|\uDDF5)|\uDDF0\uD83C(?:\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDF2|\uDDF3|\uDDF5|\uDDF7|\uDDFC|\uDDFE|\uDDFF)|\uDDF1\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDEE|\uDDF0|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFE)|\uDDF2\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDF3\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFF)|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C(?:\uDDE6|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF7|\uDDF8|\uDDF9|\uDDFC|\uDDFE)|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C(?:\uDDEA|\uDDF4|\uDDF8|\uDDFA|\uDDFC)|\uDDF8\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDE9|\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFD|\uDDFE|\uDDFF)|\uDDF9\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF9|\uDDFB|\uDDFC|\uDDFF)|\uDDFA\uD83C(?:\uDDE6|\uDDEC|\uDDF2|\uDDF8|\uDDFE|\uDDFF)|\uDDFB\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDEE|\uDDF3|\uDDFA)|\uDDFC\uD83C(?:\uDDEB|\uDDF8)|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C(?:\uDDEA|\uDDF9)|\uDDFF\uD83C(?:\uDDE6|\uDDF2|\uDDFC)))|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]/g;

},{}],127:[function(_dereq_,module,exports){
//just some of the most common emoticons
//faster than
//http://stackoverflow.com/questions/28077049/regex-matching-emoticons
module.exports = {
  ':(': true,
  ':)': true,
  ':P': true,
  ':p': true,
  ':O': true,
  ':3': true,
  ':|': true,
  ':/': true,
  ':\\': true,
  ':$': true,
  ':*': true,
  ':@': true,
  ':-(': true,
  ':-)': true,
  ':-P': true,
  ':-p': true,
  ':-O': true,
  ':-3': true,
  ':-|': true,
  ':-/': true,
  ':-\\': true,
  ':-$': true,
  ':-*': true,
  ':-@': true,
  ':^(': true,
  ':^)': true,
  ':^P': true,
  ':^p': true,
  ':^O': true,
  ':^3': true,
  ':^|': true,
  ':^/': true,
  ':^\\': true,
  ':^$': true,
  ':^*': true,
  ':^@': true,
  '):': true,
  '(:': true,
  '$:': true,
  '*:': true,
  ')-:': true,
  '(-:': true,
  '$-:': true,
  '*-:': true,
  ')^:': true,
  '(^:': true,
  '$^:': true,
  '*^:': true,
  '<3': true,
  '</3': true,
  '<\\3': true
};

},{}],128:[function(_dereq_,module,exports){
'use strict';
//markov-like stats about co-occurance, for hints about unknown terms
//basically, a little-bit better than the noun-fallback
//just top n-grams from nlp tags, generated from nlp-corpus

//after this word, here's what happens usually
let afterThisWord = {
  i: 'Verb', //44% //i walk..
  first: 'Noun', //50% //first principles..
  it: 'Verb', //33%
  there: 'Verb', //35%
  // to: 'Verb', //32%
  not: 'Verb', //33%
  because: 'Noun', //31%
  if: 'Noun', //32%
  but: 'Noun', //26%
  who: 'Verb', //40%
  this: 'Noun', //37%
  his: 'Noun', //48%
  when: 'Noun', //33%
  you: 'Verb', //35%
  very: 'Adjective', // 39%
  old: 'Noun', //51%
  never: 'Verb', //42%
  before: 'Noun', //28%
};

//in advance of this word, this is what happens usually
let beforeThisWord = {
  there: 'Verb', //23% // be there
  me: 'Verb', //31% //see me
  man: 'Adjective', // 80% //quiet man
  only: 'Verb', //27% //sees only
  him: 'Verb', //32% //show him
  were: 'Noun', //48% //we were
  what: 'Verb', //25% //know what
  took: 'Noun', //38% //he took
  himself: 'Verb', //31% //see himself
  went: 'Noun', //43% //he went
  who: 'Noun', //47% //person who
  jr: 'Person'
};

//following this POS, this is likely
let afterThisPos = {
  Adjective: 'Noun', //36% //blue dress
  Possessive: 'Noun', //41% //his song
  Determiner: 'Noun', //47%
  Adverb: 'Verb', //20%
  // Person: 'Verb', //40%
  Pronoun: 'Verb', //40%
  Value: 'Noun', //47%
  Ordinal: 'Noun', //53%
  Modal: 'Verb', //35%
  Superlative: 'Noun', //43%
  Demonym: 'Noun', //38%
  Organization: 'Verb', //33%
  Honorific: 'Person', //
// FirstName: 'Person', //
};

//in advance of this POS, this is likely
let beforeThisPos = {
  Copula: 'Noun', //44% //spencer is
  PastTense: 'Noun', //33% //spencer walked
  Conjunction: 'Noun', //36%
  Modal: 'Noun', //38%
  PluperfectTense: 'Noun', //40%
  PerfectTense: 'Verb', //32%
// LastName: 'FirstName', //
};
module.exports = {
  beforeThisWord: beforeThisWord,
  afterThisWord: afterThisWord,

  beforeThisPos: beforeThisPos,
  afterThisPos: afterThisPos
};

},{}],129:[function(_dereq_,module,exports){
'use strict';
//regex suffix patterns and their most common parts of speech,
//built using wordnet, by spencer kelly.
//this mapping shrinks-down the uglified build
const Adj = 'Adjective';
const Inf = 'Infinitive';
const Pres = 'PresentTense';
const Sing = 'Singular';
const Past = 'PastTense';
const Adverb = 'Adverb';
const Exp = 'Expression';
const Actor = 'Actor';
const Verb = 'Verb';
const Noun = 'Noun';
const Last = 'LastName';
//the order here matters.

//regexes indexed by mandated last-character
module.exports = {
  a: [
    [/.[aeiou]na$/, Noun],
    [/.[oau][wvl]ska$/, Last], //polish (female)
    [/.[^aeiou]ica$/, Sing],
    [/^([hyj]a)+$/, Exp] //hahah
  ],
  c: [[/.[^aeiou]ic$/, Adj]],
  d: [
    [/.[ia]sed$/, Adj],
    [/.[gt]led$/, Adj],
    [/.[aeiou][td]ed$/, Past],
    [/.[^aeiou]led$/, Past], //rumbled
    [/[^aeiou]ard$/, Sing],
    [/[aeiou][^aeiou]id$/, Adj],
    [/[aeiou]c?ked$/, Past], //hooked
    [/[^aeiou][aeiou][tvx]ed$/, Past], //boxed
    [/.[vrl]id$/, Adj]
  ],
  e: [
    [/.[lnr]ize$/, Inf],
    [/.[^aeiou]ise$/, Inf],
    [/.[aeiou]te$/, Inf],
    [/.[^aeiou][ai]ble$/, Adj],
    [/.[^aeiou]eable$/, Adj],
    [/.[^aeiou]ive$/, Adj]
  ],
  h: [
    [/.[^aeiouf]ish$/, Adj],
    [/.v[iy]ch$/, Last], //east-europe
    [/^ug?h+$/, Exp], //uhh
    [/^uh[ -]?oh$/, Exp] //uhoh
  ],
  i: [
    [/.[oau][wvl]ski$/, Last] //polish (male)
  ],
  k: [
    [/^(k)+$/, Exp] //kkkk
  ],
  l: [
    [/.[nrtumcd]al$/, Adj],
    [/.[gl]ial$/, Adj],
    [/.[^aeiou]eal$/, Adj],
    [/.[^aeiou][ei]al$/, Adj],
    [/.[^aeiou]ful$/, Adj]
  ],
  m: [
    [/.[^aeiou]ium$/, Sing],
    [/[^aeiou]ism$/, Sing],
    [/.[^aeiou]ium$/, Sing],
    [/^mmm+$/, Exp], //mmmm
    [/^[hu]m+$/, Exp], //ummmm
    [/^[0-9]+ ?(am|pm)$/, 'Date']
  ],
  n: [[/.[lsrnpb]ian$/, Adj], [/[^aeiou]ician$/, Actor]],
  o: [
    [/^no+$/, Exp], //noooo
    [/^(yo)+$/, Exp], //yoyo
    [/^woo+[pt]?$/, Exp] //woo
  ],
  r: [[/.[ilk]er$/, 'Comparative'], [/[aeiou][pns]er$/, Sing], [/[^i]fer$/, Inf], [/.[^aeiou][ao]pher$/, Actor]],
  t: [[/.[di]est$/, 'Superlative'], [/.[icldtgrv]ent$/, Adj], [/[aeiou].*ist$/, Adj], [/^[a-z]et$/, Verb]],
  s: [
    [/.[rln]ates$/, Pres],
    [/.[^z]ens$/, Verb],
    [/.[lstrn]us$/, Sing],
    [/[aeiou][^aeiou]is$/, Sing],
    [/[a-z]\'s$/, Noun],
    [/^yes+$/, Exp] //yessss
  ],
  v: [
    [/.[^aeiou][ai][kln]ov$/, Last] //east-europe
  ],
  y: [
    [/.[cts]hy$/, Adj],
    [/.[st]ty$/, Adj],
    [/.[gk]y$/, Adj],
    [/.[tnl]ary$/, Adj],
    [/.[oe]ry$/, Sing],
    [/[rdntkbhs]ly$/, Adverb],
    [/...lly$/, Adverb],
    [/[bszmp]{2}y$/, Adj],
    [/.(gg|bb|zz)ly$/, Adj],
    [/.[aeiou]my$/, Adj],
    [/.[^aeiou]ity$/, Sing],
    [/[ea]{2}zy$/, Adj],
    [/.[^aeiou]ity$/, Sing]
  ]
};

},{}],130:[function(_dereq_,module,exports){
'use strict';
//just a foolish lookup of known suffixes
const Adj = 'Adjective';
const Inf = 'Infinitive';
const Pres = 'PresentTense';
const Sing = 'Singular';
const Past = 'PastTense';
const Avb = 'Adverb';
const Plrl = 'Plural';
const Actor = 'Actor';
const Vb = 'Verb';
const Noun = 'Noun';
const Last = 'LastName';
const Modal = 'Modal';

module.exports = [
  null, //0
  null, //1
  {
    //2-letter
    ea: Sing,
    ia: Noun,
    ic: Adj,
    ly: Avb,
    '\'n': Vb,
    '\'t': Vb
  },
  {
    //3-letter
    que: Adj,
    lar: Adj,
    ike: Adj,
    ffy: Adj,
    nny: Adj,
    rmy: Adj,
    azy: Adj,
    oid: Adj,
    mum: Adj,
    ous: Adj,
    end: Vb,
    sis: Sing,
    rol: Sing,
    ize: Inf,
    ify: Inf,
    zes: Pres,
    nes: Pres,
    ing: 'Gerund', //likely to be converted to Adj after lexicon pass
    ' so': Avb,
    '\'ll': Modal,
    '\'re': 'Copula'
  },
  {
    //4-letter
    teen: 'Value',
    tors: Noun,
    ends: Vb,
    oses: Pres,
    fies: Pres,
    ects: Pres,
    nded: Past,
    cede: Inf,
    tage: Inf,
    gate: Inf,
    vice: Sing,
    tion: Sing,
    ette: Sing,
    some: Adj,
    llen: Adj,
    ried: Adj,
    gone: Adj,
    made: Adj,
    fore: Avb,
    less: Avb,
    ices: Plrl,
    ions: Plrl,
    ints: Plrl,
    aped: Past,
    lked: Past,
    ould: Modal,
    tive: Actor,
    sson: Last, //swedish male
    czyk: Last, //polish (male)
    chuk: Last, //east-europe
    enko: Last, //east-europe
    akis: Last, //greek
    nsen: Last //norway
  },
  {
    //5-letter
    fully: Avb,
    where: Avb,
    wards: Avb,
    urned: Past,
    tized: Past,
    eased: Past,
    ances: Plrl,
    tures: Plrl,
    ports: Plrl,
    ettes: Plrl,
    ities: Plrl,
    rough: Adj,
    bound: Adj,
    tieth: 'Ordinal',
    ishes: Pres,
    tches: Pres,
    nssen: Last, //norway
    marek: Last //polish (male)
  },
  {
    //6-letter
    keeper: Actor,
    logist: Actor,
    auskas: Last, //lithuania
    teenth: 'Value'
  },
  {
    //7-letter
    sdottir: Last, //swedish female
    opoulos: Last //greek
  }
];

},{}],131:[function(_dereq_,module,exports){
'use strict';
//add 'downward' tags (that immediately depend on this one)
const addDownword = function(tags) {
  const keys = Object.keys(tags);
  keys.forEach(k => {
    tags[k].downward = [];
    //look for tags with this as parent
    for (let i = 0; i < keys.length; i++) {
      if (tags[keys[i]].isA && tags[keys[i]].isA === k) {
        tags[k].downward.push(keys[i]);
      }
    }
  });
};
module.exports = addDownword;

},{}],132:[function(_dereq_,module,exports){
'use strict';

//list of inconsistent parts-of-speech
module.exports = [
  //top-level pos are all inconsistent
  [
    'Noun',
    'Verb',
    'Adjective',
    'Adverb',
    'Determiner',
    'Conjunction',
    'Preposition',
    'QuestionWord',
    'Expression',
    'Url',
    'PhoneNumber',
    'Email',
    'Emoji'
  ],
  //exlusive-nouns
  ['Person', 'Organization', 'Value', 'Place', 'Actor', 'Demonym', 'Pronoun'],
  //acronyms
  ['Acronym', 'Pronoun', 'Actor', 'Unit', 'Address'],
  ['Acronym', 'Plural'],
  //things that can't be plural
  ['Plural', 'Singular'],
  // ['Plural', 'Pronoun'],
  // ['Plural', 'Person'],
  // ['Plural', 'Organization'],
  // ['Plural', 'Currency'],
  // ['Plural', 'Ordinal'],
  //exlusive-people
  ['MaleName', 'FemaleName'],
  ['FirstName', 'LastName', 'Honorific'],
  //adjectives
  ['Comparative', 'Superlative'],
  //values
  ['Value', 'Verb', 'Adjective'],
  // ['Value', 'Year'],
  ['Ordinal', 'Cardinal'],
  ['TextValue', 'NumericValue'],
  ['NiceNumber', 'TextValue'],
  ['Ordinal', 'Currency'], //$5.50th
  //verbs
  ['PastTense', 'PresentTense', 'FutureTense'],
  ['Pluperfect', 'Copula', 'Modal', 'Participle', 'Infinitive', 'Gerund', 'FuturePerfect', 'PerfectTense'],
  ['Auxiliary', 'Noun', 'Value'],
  //date
  ['Month', 'WeekDay', 'Year', 'Duration', 'Holiday'],
  ['Particle', 'Conjunction', 'Adverb', 'Preposition'],
  ['Date', 'Verb', 'Adjective', 'Person'],
  ['Date', 'Money', 'RomanNumeral', 'Fraction'],
  //a/an -> 1
  ['Value', 'Determiner'],
  ['Url', 'Value', 'HashTag', 'PhoneNumber', 'Emoji'],
  //roman numerals
  ['RomanNumeral', 'Fraction', 'NiceNumber'],
  ['RomanNumeral', 'Money'],
  //cases
  ['UpperCase', 'TitleCase', 'CamelCase'],
  //phrases
  ['VerbPhrase', 'Noun', 'Adjective', 'Value'],
  //QuestionWord
  ['QuestionWord', 'VerbPhrase']
];

},{}],133:[function(_dereq_,module,exports){
'use strict';
const conflicts = _dereq_('./conflicts');
const nouns = _dereq_('./tags/nouns');
const verbs = _dereq_('./tags/verbs');
const values = _dereq_('./tags/values');
const dates = _dereq_('./tags/dates');
const misc = _dereq_('./tags/misc');
const addDownward = _dereq_('./addDownward');

//used for pretty-printing on the server-side
const colors = {
  Noun: 'blue',
  Date: 'red',
  Value: 'red',
  Verb: 'green',
  Auxiliary: 'green',
  Negative: 'green',
  VerbPhrase: 'green',
  Preposition: 'cyan',
  Condition: 'cyan',
  Conjunction: 'cyan',
  Determiner: 'cyan',
  Adjective: 'magenta',
  Adverb: 'cyan'
};

//extend tagset with new tags
const addIn = function(obj, tags) {
  Object.keys(obj).forEach(k => {
    tags[k] = obj[k];
  });
};

//add tags to remove when tagging this one
const addConflicts = function(tags) {
  Object.keys(tags).forEach(k => {
    tags[k].notA = {};
    for (let i = 0; i < conflicts.length; i++) {
      let arr = conflicts[i];
      if (arr.indexOf(k) !== -1) {
        arr = arr.filter(a => a !== k);
        arr.forEach(e => {
          tags[k].notA[e] = true;
        });
      }
    }
    tags[k].notA = Object.keys(tags[k].notA);
  });
};

const addColors = function(tags) {
  Object.keys(tags).forEach(k => {
    if (colors[k]) {
      tags[k].color = colors[k];
      return;
    }
    if (tags[k].isA && colors[tags[k].isA]) {
      tags[k].color = colors[tags[k].isA];
      return;
    }
    if (tags[k].isA && tags[tags[k].isA].color) {
      tags[k].color = tags[tags[k].isA].color;
    }
  });
};

const build = () => {
  let tags = {};
  addIn(nouns, tags);
  addIn(verbs, tags);
  addIn(values, tags);
  addIn(dates, tags);
  addIn(misc, tags);
  //downstream
  addDownward(tags);
  //add enemies
  addConflicts(tags);
  //for nice-logging
  addColors(tags);
  return tags;
};
module.exports = build();

},{"./addDownward":131,"./conflicts":132,"./tags/dates":134,"./tags/misc":135,"./tags/nouns":136,"./tags/values":137,"./tags/verbs":138}],134:[function(_dereq_,module,exports){
module.exports = {
  Date: {}, //not a noun, but usually is
  Month: {
    isA: 'Date',
    also: 'Singular'
  },
  WeekDay: {
    isA: 'Date',
    also: 'Noun'
  },
  RelativeDay: {
    isA: 'Date'
  },
  Year: {
    isA: 'Date'
  },
  Duration: {
    isA: 'Date',
    also: 'Noun'
  },
  Time: {
    isA: 'Date',
    also: 'Noun'
  },
  Holiday: {
    isA: 'Date',
    also: 'Noun'
  }
};

},{}],135:[function(_dereq_,module,exports){
module.exports = {
  Adjective: {},
  Comparable: {
    isA: 'Adjective'
  },
  Comparative: {
    isA: 'Adjective'
  },
  Superlative: {
    isA: 'Adjective'
  },

  NumberRange: {
    isA: 'Contraction'
  },
  Adverb: {},

  Currency: {},
  //glue
  Determiner: {},
  Conjunction: {},
  Preposition: {},
  QuestionWord: {},
  Expression: {},
  Abbreviation: {},
  Url: {},
  PhoneNumber: {},
  HashTag: {},
  AtMention: {
    is: 'Noun'
  },
  Emoji: {},
  Email: {},

  //non-exclusive
  Condition: {},
  VerbPhrase: {},
  Auxiliary: {},
  Negative: {},
  Contraction: {},

  TitleCase: {},
  CamelCase: {},
  UpperCase: {},
  Hyphenated: {},
  Acronym: {},
  ClauseEnd: {},
  Quotation: {}
};

},{}],136:[function(_dereq_,module,exports){
module.exports = {
  Noun: {},
  // - singular
  Singular: {
    isA: 'Noun'
  },
  //a specific thing that's capitalized
  ProperNoun: {
    isA: 'Noun'
  },

  // -- people
  Person: {
    isA: 'Singular'
  },
  FirstName: {
    isA: 'Person'
  },
  MaleName: {
    isA: 'FirstName'
  },
  FemaleName: {
    isA: 'FirstName'
  },
  LastName: {
    isA: 'Person'
  },
  Honorific: {
    isA: 'Noun'
  },
  Place: {
    isA: 'Singular'
  },

  // -- places
  Country: {
    isA: 'Place'
  },
  City: {
    isA: 'Place'
  },
  Region: {
    isA: 'Place'
  },
  Address: {
    isA: 'Place'
  },
  Organization: {
    isA: 'Singular'
  },
  SportsTeam: {
    isA: 'Organization'
  },
  Company: {
    isA: 'Organization'
  },
  School: {
    isA: 'Organization'
  },

  // - plural
  Plural: {
    isA: 'Noun'
  },
  Uncountable: {
    //(not plural or singular)
    isA: 'Noun'
  },
  Pronoun: {
    isA: 'Noun'
  },
  Actor: {
    isA: 'Noun'
  },
  Activity: {
    isA: 'Noun'
  },
  Unit: {
    isA: 'Noun'
  },
  Demonym: {
    isA: 'Noun'
  },
  Possessive: {
    isA: 'Noun'
  }
};

},{}],137:[function(_dereq_,module,exports){
module.exports = {
  Value: {},
  Ordinal: {
    isA: 'Value'
  },
  Cardinal: {
    isA: 'Value'
  },
  Multiple: {
    isA: 'Value'
  },
  RomanNumeral: {
    isA: 'Cardinal'
  },
  Fraction: {
    isA: 'Value'
  },
  TextValue: {
    isA: 'Value'
  },
  NumericValue: {
    isA: 'Value'
  },
  NiceNumber: {
    isA: 'Value'
  },
  Money: {},
  Percent: {
    isA: 'Value'
  }
};

},{}],138:[function(_dereq_,module,exports){
module.exports = {
  Verb: {
    isA: 'VerbPhrase'
  },
  PresentTense: {
    isA: 'Verb'
  },
  Infinitive: {
    isA: 'PresentTense'
  },
  Gerund: {
    isA: 'PresentTense'
  },
  PastTense: {
    isA: 'Verb'
  },
  PerfectTense: {
    isA: 'Verb'
  },
  FuturePerfect: {
    isA: 'Verb'
  },
  Pluperfect: {
    isA: 'Verb'
  },
  Copula: {
    isA: 'Verb'
  },
  Modal: {
    isA: 'Verb'
  },
  Participle: {
    isA: 'Verb'
  },
  Particle: {
    isA: 'Verb'
  },
  PhrasalVerb: {
    isA: 'Verb'
  }
};

},{}],139:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('./paths').fns;
const build_whitespace = _dereq_('./whitespace');
const makeUID = _dereq_('./makeUID');
//normalization
const addNormal = _dereq_('./methods/normalize/normalize').addNormal;
const addRoot = _dereq_('./methods/normalize/root');

const Term = function(str, world) {
  this.tags = {};
  this._text = fns.ensureString(str);
  this.world = world;
  // this.world = function() {
  //   return world;
  // };
  //seperate whitespace from the text
  let parsed = build_whitespace(this._text);
  this.whitespace = parsed.whitespace;
  this._text = parsed.text;
  this.parent = null;
  this.silent_term = '';
  this.lumped = false;
  //normalize the _text
  addNormal(this);
  addRoot(this);
  //has this term been modified
  this.dirty = false;
  //make a unique id for this term
  this.uid = makeUID(this.normal);

  //getters/setters
  Object.defineProperty(this, 'text', {
    get: function() {
      return this._text;
    },
    set: function(txt) {
      txt = txt || '';
      this._text = txt.trim();
      this.dirty = true;
      if (this._text !== txt) {
        this.whitespace = build_whitespace(txt);
      }
      this.normalize();
    }
  });
  //bit faster than .constructor.name or w/e
  Object.defineProperty(this, 'isA', {
    get: function() {
      return 'Term';
    }
  });
};

/**run each time a new text is set */
Term.prototype.normalize = function() {
  addNormal(this);
  addRoot(this);
  return this;
};
/** where in the sentence is it? zero-based. */
Term.prototype.index = function() {
  let ts = this.parentTerms;
  if (!ts) {
    return null;
  }
  return ts.terms.indexOf(this);
};
/** make a copy with no originals to the original  */
Term.prototype.clone = function() {
  let term = new Term(this._text, this.world);
  term.tags = fns.copy(this.tags);
  term.whitespace = fns.copy(this.whitespace);
  term.silent_term = this.silent_term;
  return term;
};

_dereq_('./methods/misc')(Term);
_dereq_('./methods/out')(Term);
_dereq_('./methods/tag')(Term);
_dereq_('./methods/case')(Term);
_dereq_('./methods/punctuation')(Term);

module.exports = Term;

},{"./makeUID":140,"./methods/case":142,"./methods/misc":143,"./methods/normalize/normalize":145,"./methods/normalize/root":146,"./methods/out":149,"./methods/punctuation":152,"./methods/tag":154,"./paths":157,"./whitespace":158}],140:[function(_dereq_,module,exports){
'use strict';
//this is a not-well-thought-out way to reduce our dependence on `object===object` original stuff
//generates a unique id for this term
//may need to change when the term really-transforms? not sure.
const uid = (str) => {
  let nums = '';
  for(let i = 0; i < 5; i++) {
    nums += parseInt(Math.random() * 9, 10);
  }
  return str + '-' + nums;
};
module.exports = uid;

},{}],141:[function(_dereq_,module,exports){
'use strict';
// const tagSet = require('../paths').tags;
const boringTags = {
  Auxiliary: 1,
  Possessive: 1,
  TitleCase: 1,
  ClauseEnd: 1,
  Comma: 1,
  CamelCase: 1,
  UpperCase: 1,
  Hyphenated: 1,
  VerbPhrase: 1
};

const bestTag = function(t) {
  const tagSet = t.world.tags;
  let tags = Object.keys(t.tags);
  tags = tags.sort(); //alphabetical, first
  //then sort by #of parent tags
  tags = tags.sort((a, b) => {
    //bury the tags we dont want
    if (!tagSet[a]) {
      return 1;
    }
    if (boringTags[b] || !tagSet[b]) {
      return -1;
    }
    if (tagSet[a].downward.length > tagSet[b].downward.length) {
      return 1;
    }
    return 1;
  });
  return tags[0];
};
module.exports = bestTag;

},{}],142:[function(_dereq_,module,exports){
'use strict';

const addMethods = Term => {
  const methods = {
    toUpperCase: function() {
      this.text = this.text.toUpperCase();
      this.tag('#UpperCase', 'toUpperCase');
      return this;
    },
    toLowerCase: function() {
      this.text = this.text.toLowerCase();
      this.unTag('#TitleCase');
      this.unTag('#UpperCase');
      return this;
    },
    toTitleCase: function() {
      this.text = this.text.replace(/^ *[a-z]/, x => x.toUpperCase());
      this.tag('#TitleCase', 'toTitleCase');
      return this;
    },
    //(camelCase() is handled in `./terms` )

    /** is it titlecased because it deserves it? Like a person's name? */
    needsTitleCase: function() {
      const titleCases = [
        'Person',
        'Place',
        'Organization',
        'Acronym',
        'UpperCase',
        'Currency',
        'RomanNumeral',
        'Month',
        'WeekDay',
        'Holiday',
        'Demonym'
      ];
      for (let i = 0; i < titleCases.length; i++) {
        if (this.tags[titleCases[i]]) {
          return true;
        }
      }
      //specific words that keep their titlecase
      //https://en.wikipedia.org/wiki/Capitonym
      const irregulars = ['i', 'god', 'allah'];
      for (let i = 0; i < irregulars.length; i++) {
        if (this.normal === irregulars[i]) {
          return true;
        }
      }
      return false;
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],143:[function(_dereq_,module,exports){
'use strict';
const isAcronym = _dereq_('./normalize/isAcronym');
const bestTag = _dereq_('./bestTag');

//regs-
const hasVowel = /[aeiouy]/i;
const hasLetter = /[a-z]/;
const hasNumber = /[0-9]/;

const addMethods = (Term) => {

  const methods = {
    /** which tag best-represents this term?*/
    bestTag: function () {
      return bestTag(this);
    },

    /** is this term like F.B.I. or NBA */
    isAcronym: function () {
      return isAcronym(this._text);
    },
    /** check if it is word-like in english */
    isWord: function () {
      let t = this;
      //assume a contraction produces a word-word
      if (t.silent_term) {
        return true;
      }
      //no letters or numbers
      if (/[a-z|A-Z|0-9]/.test(t.text) === false) {
        return false;
      }
      //has letters, but with no vowels
      if (t.normal.length > 1 && hasLetter.test(t.normal) === true && hasVowel.test(t.normal) === false) {
        return false;
      }
      //has numbers but not a 'value'
      if (hasNumber.test(t.normal) === true) {
        //s4e
        if (/[a-z][0-9][a-z]/.test(t.normal) === true) {
          return false;
        }
        //ensure it looks like a 'value' eg '-$4,231.00'
        if (/^([$-])*?([0-9,\.])*?([s\$%])*?$/.test(t.normal) === false) {
          return false;
        }
      }
      return true;
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach((k) => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./bestTag":141,"./normalize/isAcronym":144}],144:[function(_dereq_,module,exports){
'use strict'
//regs -
const periodAcronym = /([A-Z]\.)+[A-Z]?$/
const oneLetterAcronym = /^[A-Z]\.$/
const noPeriodAcronym = /[A-Z]{3}('s)?$/

/** does it appear to be an acronym, like FBI or M.L.B. */
const isAcronym = function(str) {
  //like N.D.A
  if (periodAcronym.test(str) === true) {
    return true
  }
  //like 'F.'
  if (oneLetterAcronym.test(str) === true) {
    return true
  }
  //like NDA
  if (noPeriodAcronym.test(str) === true) {
    return true
  }
  return false
}
module.exports = isAcronym

},{}],145:[function(_dereq_,module,exports){
'use strict';
const killUnicode = _dereq_('./unicode');
const isAcronym = _dereq_('./isAcronym');

//some basic operations on a string to reduce noise
exports.normalize = function(str) {
  str = str || '';
  str = str.toLowerCase();
  str = str.trim();
  let original = str;
  //(very) rough asci transliteration -  bjŏrk -> bjork
  str = killUnicode(str);
  //hashtags, atmentions
  str = str.replace(/^[#@]/, '');
  //punctuation
  str = str.replace(/[,;.!?]+$/, '');
  // coerce single curly quotes
  str = str.replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]+/g, '\'');
  // coerce double curly quotes
  str = str.replace(/[\u201C\u201D\u201E\u201F\u2033\u2036"]+/g, '');
  //coerce unicode elipses
  str = str.replace(/\u2026/g, '...');
  //en-dash
  str = str.replace(/\u2013/g, '-');
  //lookin’->looking (make it easier for conjugation)
  if (/[a-z][^aeiou]in['’]$/.test(str) === true) {
    str = str.replace(/in['’]$/, 'ing');
  }
  //turn re-enactment to reenactment
  if (/^(re|un)-?[^aeiou]./.test(str) === true) {
    str = str.replace('-', '');
  }
  //strip leading & trailing grammatical punctuation
  {
    if (/^[:;]/.test(str) === false) {
      str = str.replace(/\.{3,}$/g, '');
      str = str.replace(/['",\.!:;\?\)]$/g, '');
      str = str.replace(/^['"\(]/g, '');
    }
  }
  //do this again..
  str = str.trim();
  //oh shucks,
  if (str === '') {
    str = original;
  }
  return str;
};

exports.addNormal = function(term) {
  let str = term._text || '';
  str = exports.normalize(str);
  //compact acronyms
  if (isAcronym(term._text)) {
    str = str.replace(/\./g, '');
  }
  //nice-numbers
  str = str.replace(/([0-9]),([0-9])/g, '$1$2');
  term.normal = str;
};

// console.log(normalize('Dr. V Cooper'));

},{"./isAcronym":144,"./unicode":147}],146:[function(_dereq_,module,exports){
'use strict';
//
const rootForm = function(term) {
  let str = term.normal || term.silent_term || '';
  //handle apostrophes and stuff (go further than normalize())
  str = str.replace(/'s\b/, '');
  str = str.replace(/'$/, '');
  term.root = str;
};

module.exports = rootForm;

},{}],147:[function(_dereq_,module,exports){
'use strict';
//a hugely-ignorant, and widely subjective transliteration of latin, cryllic, greek unicode characters to english ascii.
//approximate visual (not semantic or phonetic) relationship between unicode and ascii characters
//http://en.wikipedia.org/wiki/List_of_Unicode_characters
//https://docs.google.com/spreadsheet/ccc?key=0Ah46z755j7cVdFRDM1A2YVpwa1ZYWlpJM2pQZ003M0E
let compact = {
  '!': '¡',
  '?': '¿Ɂ',
  '-': '—–',
  'a': 'ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАДадѦѧӐӑӒӓƛɅæ',
  'b': 'ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬбвъьѢѣҌҍҔҕƥƾ',
  'c': '¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼͽϲϹϽϾϿЄСсєҀҁҪҫ',
  'd': 'ÐĎďĐđƉƊȡƋƌǷ',
  'e': 'ÈÉÊËèéêëĒēĔĕĖėĘęĚěƎƏƐǝȄȅȆȇȨȩɆɇΈΕΞΣέεξϱϵ϶ЀЁЕЭеѐёҼҽҾҿӖӗӘәӚӛӬӭ',
  'f': 'ƑƒϜϝӺӻҒғӶӷſ',
  'g': 'ĜĝĞğĠġĢģƓǤǥǦǧǴǵ',
  'h': 'ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ',
  'I': 'ÌÍÎÏ',
  'i': 'ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії',
  'j': 'ĴĵǰȷɈɉϳЈј',
  'k': 'ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ',
  'l': 'ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ',
  'm': 'ΜϺϻМмӍӎ',
  'n': 'ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ',
  'o': 'ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϭϴОФоѲѳӦӧӨөӪӫ¤ƍΏ',
  'p': 'ƤƿΡρϷϸϼРрҎҏÞ',
  'q': 'Ɋɋ',
  'r': 'ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ',
  's': 'ŚśŜŝŞşŠšƧƨȘșȿςϚϛϟϨϩЅѕ',
  't': 'ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮϯТт҂Ҭҭ',
  'u': 'µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύϑЏЦЧцџҴҵҶҷӋӌӇӈ',
  'v': 'νѴѵѶѷ',
  'w': 'ŴŵƜωώϖϢϣШЩшщѡѿ',
  'x': '×ΧχϗϰХхҲҳӼӽӾӿ',
  'y': 'ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ',
  'z': 'ŹźŻżŽžƩƵƶȤȥɀΖζ'
};
//decompress data into two hashes
let unicode = {};
Object.keys(compact).forEach(function (k) {
  compact[k].split('').forEach(function (s) {
    unicode[s] = k;
  });
});

const killUnicode = (str) => {
  let chars = str.split('');
  chars.forEach((s, i) => {
    if (unicode[s]) {
      chars[i] = unicode[s];
    }
  });
  return chars.join('');
};
module.exports = killUnicode;
// console.log(killUnicode('bjŏȒk—Ɏó'));

},{}],148:[function(_dereq_,module,exports){
'use strict';
const paths = _dereq_('../../paths');
const fns = paths.fns;
const tagset = paths.tags;

//a nicer logger for the client-side
const clientSide = (t) => {
  let color = 'silver';
  let tags = Object.keys(t.tags);
  for(let i = 0; i < tags.length; i++) {
    if (tagset[tags[i]] && tagset[tags[i]].color) {
      color = tagset[tags[i]].color;
      break;
    }
  }
  let word = fns.leftPad(t.text, 12);
  word += ' ' + tags;
  console.log('%c ' + word, 'color: ' + color);
};
module.exports = clientSide;

},{"../../paths":157}],149:[function(_dereq_,module,exports){
'use strict';
const renderHtml = _dereq_('./renderHtml');
const clientDebug = _dereq_('./client');
const serverDebug = _dereq_('./server');

const methods = {
  /** a pixel-perfect reproduction of the input, with whitespace preserved */
  text: function(r) {
    return r.whitespace.before + r._text + r.whitespace.after;
  },
  /** a lowercased, punctuation-cleaned, whitespace-trimmed version of the word */
  normal: function(r) {
    return r.normal;
  },
  /** even-more normalized than normal */
  root: function(r) {
    return r.root || r.normal;
  },
  /** the &encoded term in a span element, with POS as classNames */
  html: function(r) {
    return renderHtml(r);
  },
  /** a simplified response for Part-of-Speech tagging*/
  tags: function(r) {
    return {
      text: r.text,
      normal: r.normal,
      tags: Object.keys(r.tags)
    };
  },
  /** check-print information for the console */
  debug: function(t) {
    if (typeof module !== 'undefined' && this.module !== module) {
      serverDebug(t);
    } else {
      clientDebug(t);
    }
  }
};

const addMethods = Term => {
  //hook them into result.proto
  Term.prototype.out = function(fn) {
    if (!methods[fn]) {
      fn = 'text';
    }
    return methods[fn](this);
  };
  return Term;
};

module.exports = addMethods;

},{"./client":148,"./renderHtml":150,"./server":151}],150:[function(_dereq_,module,exports){
'use strict';
//turn xml special characters into apersand-encoding.
//i'm not sure this is perfectly safe.
const escapeHtml = (s) => {
  const HTML_CHAR_MAP = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    ' ': '&nbsp;'
  };
  return s.replace(/[<>&"' ]/g, function(ch) {
    return HTML_CHAR_MAP[ch];
  });
};

//remove html elements already in the text
//not tested!
//http://stackoverflow.com/questions/295566/sanitize-rewrite-html-on-the-client-side
const sanitize = (html) => {
  const tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
  const tagOrComment = new RegExp(
    '<(?:'
    // Comment body.
    + '!--(?:(?:-*[^->])*--+|-?)'
    // Special "raw text" elements whose content should be elided.
    + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
    + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
    // Regular name
    + '|/?[a-z]'
    + tagBody
    + ')>',
    'gi');
  let oldHtml;
  do {
    oldHtml = html;
    html = html.replace(tagOrComment, '');
  } while (html !== oldHtml);
  return html.replace(/</g, '&lt;');
};

//turn the term into ~properly~ formatted html
const renderHtml = function(t) {
  let classes = Object.keys(t.tags).filter((tag) => tag !== 'Term');
  classes = classes.map(c => 'nl-' + c);
  classes = classes.join(' ');
  let text = sanitize(t.text);
  text = escapeHtml(text);
  let el = '<span class="' + classes + '">' + text + '</span>';
  return escapeHtml(t.whitespace.before) + el + escapeHtml(t.whitespace.after);
};

module.exports = renderHtml;

},{}],151:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../../paths').fns;

//pretty-print a term on the nodejs console
const serverDebug = function(t) {
  let tags = Object.keys(t.tags)
    .map(tag => {
      return fns.printTag(tag);
    })
    .join(', ');
  let word = t.text;
  word = '\'' + fns.yellow(word || '-') + '\'';
  let silent = '';
  if (t.silent_term) {
    silent = '[' + t.silent_term + ']';
  }
  word = fns.leftPad(word, 20);
  word += fns.leftPad(silent, 8);
  console.log('   ' + word + '   ' + '     - ' + tags);
};
module.exports = serverDebug;

},{"../../paths":157}],152:[function(_dereq_,module,exports){
'use strict';
// const endPunct = /([^\/,:;.()!?]{0,1})([\/,:;.()!?]+)$/i;
const endPunct = /([a-z ])([,:;.!?]+)$/i; //old

const addMethods = Term => {
  const methods = {
    /** the punctuation at the end of this term*/
    endPunctuation: function() {
      let m = this.text.match(endPunct);
      if (m) {
        return m[2];
      }
      return null;
    },

    setPunctuation: function(punct) {
      this.killPunctuation();
      this.text += punct;
      return this;
    },

    /** check if the term ends with a comma */
    hasComma: function() {
      if (this.endPunctuation() === ',') {
        return true;
      }
      return false;
    },

    killPunctuation: function() {
      this.text = this._text.replace(endPunct, '$1');
      return this;
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],153:[function(_dereq_,module,exports){
'use strict';

//recursively-check compatibility of this tag and term
const canBe = function(term, tag) {
  const tagset = term.world.tags;
  //fail-fast
  if (tagset[tag] === undefined) {
    return true;
  }
  //loop through tag's contradictory tags
  let enemies = tagset[tag].notA || [];
  for (let i = 0; i < enemies.length; i++) {
    if (term.tags[enemies[i]] === true) {
      return false;
    }
  }
  if (tagset[tag].isA !== undefined) {
    return canBe(term, tagset[tag].isA); //recursive
  }
  return true;
};

module.exports = canBe;

},{}],154:[function(_dereq_,module,exports){
'use strict';
const setTag = _dereq_('./setTag');
const unTag = _dereq_('./unTag');
const canBe = _dereq_('./canBe');

//symbols used in sequential taggers which mean 'do nothing'
//.tag('#Person #Place . #City')
const ignore = {
  '.': true
};
const addMethods = (Term) => {

  const methods = {
    /** set the term as this part-of-speech */
    tag: function(tag, reason) {
      if (ignore[tag] !== true) {
        setTag(this, tag, reason);
      }
    },
    /** remove this part-of-speech from the term*/
    unTag: function(tag, reason) {
      if (ignore[tag] !== true) {
        unTag(this, tag, reason);
      }
    },
    /** is this tag compatible with this word */
    canBe: function (tag) {
      tag = tag || '';
      if (typeof tag === 'string') {
        //everything can be '.'
        if (ignore[tag] === true) {
          return true;
        }
        tag = tag.replace(/^#/, '');
      }
      return canBe(this, tag);
    }
  };

  //hook them into term.prototype
  Object.keys(methods).forEach((k) => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./canBe":153,"./setTag":155,"./unTag":156}],155:[function(_dereq_,module,exports){
'use strict';
//set a term as a particular Part-of-speech
const path = _dereq_('../../paths');
const log = path.log;
const fns = path.fns;
const unTag = _dereq_('./unTag');
// const tagset = path.tags;
// const tagset = require('../../../tagset');

const putTag = (term, tag, reason) => {
  const tagset = term.world.tags;
  tag = tag.replace(/^#/, '');
  //already got this
  if (term.tags[tag] === true) {
    return;
  }
  term.tags[tag] = true;
  log.tag(term, tag, reason);

  //extra logic per-each POS
  if (tagset[tag]) {
    //drop any conflicting tags
    let enemies = tagset[tag].notA || [];
    for (let i = 0; i < enemies.length; i++) {
      if (term.tags[enemies[i]] === true) {
        unTag(term, enemies[i], reason);
      }
    }
    //apply implicit tags
    if (tagset[tag].isA) {
      let doAlso = tagset[tag].isA;
      if (term.tags[doAlso] !== true) {
        putTag(term, doAlso, ' --> ' + tag); //recursive
      }
    }
  }
};

//give term this tag
const wrap = function(term, tag, reason) {
  if (!term || !tag) {
    return;
  }
  const tagset = term.world.tags;
  //handle multiple tags
  if (fns.isArray(tag)) {
    tag.forEach(t => putTag(term, t, reason)); //recursive
    return;
  }
  putTag(term, tag, reason);
  //add 'extra' tag (for some special tags)
  if (tagset[tag] && tagset[tag].also !== undefined) {
    putTag(term, tagset[tag].also, reason);
  }
};

module.exports = wrap;

},{"../../paths":157,"./unTag":156}],156:[function(_dereq_,module,exports){
'use strict';
//set a term as a particular Part-of-speech
const path = _dereq_('../../paths');
const log = path.log;

//remove a tag from a term
const unTag = (term, tag, reason) => {
  const tagset = term.world.tags;
  if (term.tags[tag]) {
    log.unTag(term, tag, reason);
    delete term.tags[tag];

    //delete downstream tags too
    if (tagset[tag]) {
      let also = tagset[tag].downward;
      for (let i = 0; i < also.length; i++) {
        unTag(term, also[i], ' - -   - ');
      }
    }
  }
};

const wrap = (term, tag, reason) => {
  if (!term || !tag) {
    return;
  }
  //support '*' flag - remove all-tags
  if (tag === '*') {
    term.tags = {};
    return;
  }
  //remove this tag
  unTag(term, tag, reason);
  return;
};
module.exports = wrap;

},{"../../paths":157}],157:[function(_dereq_,module,exports){
module.exports = {
  fns: _dereq_('../fns'),
  log: _dereq_('../log')
};

},{"../fns":3,"../log":6}],158:[function(_dereq_,module,exports){
'use strict';
//punctuation regs-
const before = /^(\s|-+|\.\.+)+/;
const minusNumber = /^( *)-(\$|€|¥|£)?([0-9])/;
const after = /(\s+|-+|\.\.+)$/;

//seperate the 'meat' from the trailing/leading whitespace.
//works in concert with ./src/text/tokenize.js
const build_whitespace = (str) => {
  let whitespace = {
    before: '',
    after: ''
  };
  //get before punctuation/whitespace
  //mangle 'far - fetched', but don't mangle '-2'
  let m = str.match(minusNumber);
  if (m !== null) {
    whitespace.before = m[1];
    str = str.replace(/^ */, '');
  } else {
    m = str.match(before);
    if (m !== null) {
      whitespace.before = str.match(before)[0];
      str = str.replace(before, '');
    }
  }
  //get after punctuation/whitespace
  m = str.match(after);
  if (m !== null) {
    str = str.replace(after, '');
    whitespace.after = m[0];
  }
  return {
    whitespace: whitespace,
    text: str
  };
};
module.exports = build_whitespace;

},{}],159:[function(_dereq_,module,exports){
'use strict';
const Term = _dereq_('../term');
const wordlike = /\S/;
const isBoundary = /^[!?.]+$/;

const notWord = {
  '.': true,
  '-': true, //dash
  '–': true, //en-dash
  '—': true, //em-dash
  '--': true,
  '...': true
};

const hasHyphen = function(str) {
  //dont split 're-do'
  if (/^(re|un)-?[^aeiou]./.test(str) === true) {
    return false;
  }
  let reg = /^([a-z]+)(-|–|—)([a-z0-9].*)/i;
  if (reg.test(str) === true) {
    return true;
  }
  //support weird number-emdash combo '2010–2011'
  let reg2 = /^([0-9]+)(–|—)([0-9].*)/i;
  if (reg2.test(str)) {
    return true;
  }
  return false;
};

//turn a string into an array of terms (naiive for now, lumped later)
const fromString = function(str, world) {
  let result = [];
  let arr = [];
  //start with a naiive split
  str = str || '';
  if (typeof str === 'number') {
    str = String(str);
  }
  const firstSplit = str.split(/(\S+)/);
  for (let i = 0; i < firstSplit.length; i++) {
    const word = firstSplit[i];
    if (hasHyphen(word) === true) {
      //support multiple-hyphenated-terms
      const hyphens = word.split(/[-–—]/);
      for (let o = 0; o < hyphens.length; o++) {
        if (o === hyphens.length - 1) {
          arr.push(hyphens[o]);
        } else {
          arr.push(hyphens[o] + '-');
        }
      }
    } else {
      arr.push(word);
    }
  }
  //greedy merge whitespace+arr to the right
  let carry = '';
  for (let i = 0; i < arr.length; i++) {
    //if it's more than a whitespace
    if (
      wordlike.test(arr[i]) === true &&
      notWord.hasOwnProperty(arr[i]) === false &&
      isBoundary.test(arr[i]) === false
    ) {
      result.push(carry + arr[i]);
      carry = '';
    } else {
      carry += arr[i];
    }
  }
  //handle last one
  if (carry && result.length > 0) {
    result[result.length - 1] += carry; //put it on the end
  }
  return result.map(t => new Term(t, world));
};
module.exports = fromString;

},{"../term":139}],160:[function(_dereq_,module,exports){
'use strict';

//getters/setters for the Terms class
module.exports = {

  parent: {
    get: function() {
      return this.refText || this;
    },
    set: function(r) {
      this.refText = r;
      return this;
    }
  },

  parentTerms: {
    get: function() {
      return this.refTerms || this;
    },
    set: function(r) {
      this.refTerms = r;
      return this;
    }
  },

  dirty: {
    get: function() {
      for(let i = 0; i < this.terms.length; i++) {
        if (this.terms[i].dirty === true) {
          return true;
        }
      }
      return false;
    },
    set: function(dirt) {
      this.terms.forEach((t) => {
        t.dirty = dirt;
      });
    }
  },

  refTerms: {
    get: function() {
      return this._refTerms || this;
    },
    set: function(ts) {
      this._refTerms = ts;
      return this;
    }
  },
  found: {
    get: function() {
      return this.terms.length > 0;
    }
  },
  length: {
    get: function() {
      return this.terms.length;
    }
  },
  isA: {
    get: function() {
      return 'Terms';
    }
  },
  whitespace: {
    get: function() {
      return {
        before: (str) => {
          this.firstTerm().whitespace.before = str;
          return this;
        },
        after: (str) => {
          this.lastTerm().whitespace.after = str;
          return this;
        },
      };
    }
  },


};

},{}],161:[function(_dereq_,module,exports){
'use strict';
const build = _dereq_('./build');
const getters = _dereq_('./getters');
let w = _dereq_('../world');

//Terms is an array of Term objects, and methods that wrap around them
const Terms = function(arr, world, refText, refTerms) {
  this.terms = arr;
  this.world = world || w;
  this.refText = refText;
  this._refTerms = refTerms;
  this.get = n => {
    return this.terms[n];
  };
  //apply getters
  let keys = Object.keys(getters);
  for (let i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], getters[keys[i]]);
  }
};

Terms.fromString = function(str, world) {
  let termArr = build(str, world);
  let ts = new Terms(termArr, world, null);
  //give each term a original to this ts
  ts.terms.forEach(t => {
    t.parentTerms = ts;
  });
  return ts;
};

// Terms = require('./methods/lookup')(Terms);
_dereq_('./match')(Terms);
_dereq_('./methods/tag')(Terms);
_dereq_('./methods/loops')(Terms);
_dereq_('./match/not')(Terms);
_dereq_('./methods/delete')(Terms);
_dereq_('./methods/insert')(Terms);
_dereq_('./methods/misc')(Terms);
_dereq_('./methods/out')(Terms);
_dereq_('./methods/replace')(Terms);
_dereq_('./methods/split')(Terms);
_dereq_('./methods/transform')(Terms);
_dereq_('./methods/lump')(Terms);
module.exports = Terms;

},{"../world":209,"./build":159,"./getters":160,"./match":162,"./match/not":171,"./methods/delete":172,"./methods/insert":173,"./methods/loops":174,"./methods/lump":176,"./methods/misc":177,"./methods/out":178,"./methods/replace":179,"./methods/split":180,"./methods/tag":181,"./methods/transform":182}],162:[function(_dereq_,module,exports){
'use strict';
const syntax = _dereq_('./lib/syntax');
const startHere = _dereq_('./lib/startHere');
const Text = _dereq_('../../text');
const match = _dereq_('./lib');

const matchMethods = Terms => {
  const methods = {
    //support regex-like whitelist-match
    match: function(reg, verbose) {
      //fail-fast #1
      if (this.terms.length === 0) {
        return new Text([], this.world, this.parent);
      }
      //fail-fast #2
      if (!reg) {
        return new Text([], this.world, this.parent);
      }
      let matches = match(this, reg, verbose);
      matches = matches.map(a => {
        return new Terms(a, this.world, this.refText, this.refTerms);
      });
      return new Text(matches, this.world, this.parent);
    },

    /**return first match */
    matchOne: function(str) {
      //fail-fast
      if (this.terms.length === 0) {
        return null;
      }
      let regs = syntax(str);
      for (let t = 0; t < this.terms.length; t++) {
        //don't loop through if '^'
        if (regs[0] && regs[0].starting && t > 0) {
          break;
        }
        let m = startHere(this, t, regs);
        if (m) {
          return m;
        }
      }
      return null;
    },

    /**return first match */
    has: function(str) {
      return this.matchOne(str) !== null;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = matchMethods;

},{"../../text":187,"./lib":165,"./lib/startHere":169,"./lib/syntax":170}],163:[function(_dereq_,module,exports){
'use strict';
//take all the matches, and if there is a [capture group], only return that.
const onlyCaptureGroup = function(matches) {
  let results = [];
  matches.forEach((terms) => {
    //if there's no capture group, we good.
    if (terms.filter(t => t.captureGroup === true).length === 0) {
      results.push(terms);
      return;
    }
    //otherwise, just return them as seperate subsets
    let current = [];
    for(let i = 0; i < terms.length; i += 1) {
      if (terms[i].captureGroup) {
        current.push(terms[i]);
      } else if (current.length > 0) {
        results.push(current);
        current = [];
      }
    }
    if (current.length > 0) {
      results.push(current);
    }
  });
  return results;
};
module.exports = onlyCaptureGroup;

},{}],164:[function(_dereq_,module,exports){
'use strict';
//
//find easy reasons to skip running the full match on this
const fastPass = (ts, regs) => {
  for (let i = 0; i < regs.length; i++) {
    let reg = regs[i];
    let found = false;
    //we can't cheat on these fancy rules:
    if (reg.optional === true || reg.negative === true || reg.minMax !== undefined) {
      continue;
    }
    //look-for missing term-matches
    if (reg.normal !== undefined) {
      for (let o = 0; o < ts.terms.length; o++) {
        if (ts.terms[o].normal === reg.normal || ts.terms[o].silent_term === reg.normal) {
          found = true;
          break;
        }
        //we can't handle lumped-terms with this method
        if (ts.terms[o].lumped === true) {
          return false;
        }
      }
      if (found === false) {
        return true;
      }
    }
    //look for missing tags
    if (reg.tag !== undefined) {
      for (let o = 0; o < ts.terms.length; o++) {
        if (ts.terms[o].tags[reg.tag] === true) {
          found = true;
          break;
        }
      }
      if (found === false) {
        return true;
      }
    }
  }
  return false;
};
module.exports = fastPass;

},{}],165:[function(_dereq_,module,exports){
'use strict';
const syntax = _dereq_('./syntax');
const startHere = _dereq_('./startHere');
const fastPass = _dereq_('./fastPass');
const handleCaptureGroup = _dereq_('./captureGroup');

//ensure we have atleast one non-optional demand
// const isTautology = function(regs) {
//   for (let i = 0; i < regs.length; i++) {
//     if (!regs[i].optional && !regs[i].astrix && !regs[i].anyOne) {
//       return false;
//     }
//   }
//   return true;
// };

//make a reg syntax from a text object
const findFromTerms = function(ts) {
  let arr = ts.terms.map(t => {
    return {
      id: t.uid
    };
  });
  return arr;
};
//
const match = (ts, reg, verbose) => {
  //parse for backwards-compatibility
  if (typeof reg === 'string') {
    reg = syntax(reg);
  } else if (reg && reg.isA === 'Text') {
    reg = findFromTerms(reg.list[0]);
  } else if (reg && reg.isA === 'Terms') {
    reg = findFromTerms(reg);
  }
  if (!reg || reg.length === 0) {
    return [];
  }
  //do a fast-pass for easy negatives
  if (fastPass(ts, reg, verbose) === true) {
    return [];
  }
  //ok, start long-match
  let matches = [];
  for (let t = 0; t < ts.terms.length; t += 1) {
    //don't loop through if '^'
    if (t > 0 && reg[0] && reg[0].starting) {
      break;
    }
    let m = startHere(ts, t, reg, verbose);
    if (m && m.length > 0) {
      matches.push(m);
      //handle capture-groups subset
      // let hasCapture=matches
      //ok, don't try to match these again.
      let skip = m.length - 1;
      t += skip; //this could use some work
    }
  }
  //handle capture-group subset
  matches = handleCaptureGroup(matches);
  return matches;
};
module.exports = match;

},{"./captureGroup":163,"./fastPass":164,"./startHere":169,"./syntax":170}],166:[function(_dereq_,module,exports){
'use strict';

//compare 1 term to one reg
const perfectMatch = (term, reg) => {
  if (!term || !reg) {
    return false;
  }
  //support '.' - any
  if (reg.anyOne === true) {
    return true;
  }
  //pos-match
  if (reg.tag !== undefined) {
    return term.tags[reg.tag];
  }
  //id-match
  if (reg.id !== undefined) {
    return reg.id === term.uid;
  }
  //text-match
  if (reg.normal !== undefined) {
    return reg.normal === term.normal || reg.normal === term.silent_term;
  }
  //suffix matches '-nny'
  if (reg.suffix === true && reg.partial !== undefined) {
    const len = term.normal.length;
    return term.normal.substr(len - reg.partial.length, len) === reg.partial;
  }
  //prefix matches 'fun-'
  if (reg.prefix === true && reg.partial !== undefined) {
    return term.normal.substr(0, reg.partial.length) === reg.partial;
  }
  //infix matches '-nn-'
  if (reg.infix === true && reg.partial !== undefined) {
    return term.normal.indexOf(reg.partial) !== -1;
  }
  //full-on regex-match '/a*?/'
  if (reg.regex !== undefined) {
    return reg.regex.test(term.normal) || reg.regex.test(term.text);
  }
  //one-of term-match
  if (reg.oneOf !== undefined) {
    for (let i = 0; i < reg.oneOf.tagArr.length; i++) {
      if (term.tags.hasOwnProperty(reg.oneOf.tagArr[i]) === true) {
        return true;
      }
    }
    return reg.oneOf.terms.hasOwnProperty(term.normal) || reg.oneOf.terms.hasOwnProperty(term.silent_term);
  }
  return false;
};

//wrap above method, to support '!' negation
const isMatch = (term, reg, verbose) => {
  if (!term || !reg) {
    return false;
  }
  let found = perfectMatch(term, reg, verbose);
  //flag it as a capture-group
  if (reg.capture) {
    term.captureGroup = true;
  } else {
    term.captureGroup = undefined;
  }
  //reverse it for .not()
  if (reg.negative) {
    found = !Boolean(found);
  }
  return found;
};
module.exports = isMatch;

},{}],167:[function(_dereq_,module,exports){
'use strict';

const almostMatch = (reg_str, term) => {
  let want = term.normal.substr(0, reg_str.length);
  return want === reg_str;
};

// match ['john', 'smith'] regs, when the term is lumped
const lumpMatch = function(term, regs, reg_i) {
  let reg_str = regs[reg_i].normal;
  //is this a partial match? 'tony'& 'tony hawk'
  if (reg_str !== undefined && almostMatch(reg_str, term)) {
    //try to grow it
    reg_i = reg_i + 1;
    for (reg_i; reg_i < regs.length; reg_i++) {
      reg_str += ' ' + regs[reg_i].normal;
      // is it now perfect?
      if (reg_str === term.normal) {
        return reg_i;
      }
      // is it still almost?
      if (almostMatch(reg_str, term) === false) {
        return null;
      }
    }
  }
  return null;
};

module.exports = lumpMatch;

},{}],168:[function(_dereq_,module,exports){
arguments[4][70][0].apply(exports,arguments)
},{"../../paths":184,"dup":70}],169:[function(_dereq_,module,exports){
'use strict';
const lumpMatch = _dereq_('./lumpMatch');
const isMatch = _dereq_('./isMatch');

// match everything until this point - '*'
const greedyUntil = (ts, i, reg) => {
  for (; i < ts.length; i++) {
    if (isMatch(ts.terms[i], reg)) {
      return i;
    }
  }
  return null;
};

//keep matching this reg as long as possible
const greedyOf = (ts, i, reg, until) => {
  for (; i < ts.length; i++) {
    let t = ts.terms[i];
    //found next reg ('until')
    if (until && isMatch(t, until)) {
      return i;
    }
    //stop here
    if (!isMatch(t, reg)) {
      return i;
    }
  }
  return i;
};

//try and match all regs, starting at this term
const startHere = (ts, startAt, regs, verbose) => {
  let term_i = startAt;
  //check each regex-thing
  for (let reg_i = 0; reg_i < regs.length; reg_i++) {
    let term = ts.terms[term_i];
    let reg = regs[reg_i];
    let next_reg = regs[reg_i + 1];

    if (!term) {
      //we didn't need it anyways
      if (reg.optional === true) {
        continue;
      }
      return null;
    }

    //catch '^' errors
    if (reg.starting === true && term_i > 0) {
      return null;
    }

    //catch '$' errors
    if (reg.ending === true && term_i !== ts.length - 1 && !reg.minMax) {
      return null;
    }

    //support '*'
    if (regs[reg_i].astrix === true) {
      //just grab until the end..
      if (!next_reg) {
        return ts.terms.slice(startAt, ts.length);
      }
      let foundAt = greedyUntil(ts, term_i, regs[reg_i + 1]);
      if (!foundAt) {
        return null;
      }
      term_i = foundAt + 1;
      reg_i += 1;
      continue;
    }

    //support '#Noun{x,y}'
    if (regs[reg_i].minMax !== undefined) {
      let min = regs[reg_i].minMax.min || 0;
      let max = regs[reg_i].minMax.max;
      let until = regs[reg_i + 1];
      for (let i = 0; i < max; i++) {
        //ergh, please clean this loop up..
        let t = ts.terms[term_i + i];
        if (!t) {
          return null;
        }
        //end here
        if (isMatch(t, reg) === false) {
          return null;
        }
        //should we be greedier?
        if (i < min - 1) {
          continue; //gotta keep going!
        }
        //we can end here, after the minimum
        if (!until) {
          term_i += 1;
          break;
        }
        // we're greedy-to-now
        if (i >= min && isMatch(t, until)) {
          break;
        }
        //end with a greedy-match for next term
        let nextT = ts.terms[term_i + i + 1];
        if (nextT && isMatch(nextT, until)) {
          term_i += i + 2;
          reg_i += 1;
          break;
        } else if (i === max - 1) {
          //we've maxed-out
          return null;
        }
      }
      continue;
    }

    //if optional, check next one
    if (reg.optional === true) {
      let until = regs[reg_i + 1];
      term_i = greedyOf(ts, term_i, reg, until);
      continue;
    }

    //check a perfect match
    if (isMatch(term, reg, verbose)) {
      term_i += 1;
      //try to greedy-match '+'
      if (reg.consecutive === true) {
        let until = regs[reg_i + 1];
        term_i = greedyOf(ts, term_i, reg, until);
      }
      continue;
    }

    if (term.silent_term && !term.normal) {
      //skip over silent contraction terms
      //we will continue on it, but not start on it
      if (reg_i === 0) {
        return null;
      }
      //try the next term, but with this regex again
      term_i += 1;
      reg_i -= 1;
      continue;
    }

    //handle partial-matches of lumped terms
    let lumpUntil = lumpMatch(term, regs, reg_i, verbose);
    if (lumpUntil !== null) {
      reg_i = lumpUntil;
      term_i += 1;
      continue;
    }

    //was it optional anways?
    if (reg.optional === true) {
      continue;
    }
    return null;
  }
  return ts.terms.slice(startAt, term_i);
};

module.exports = startHere;

},{"./isMatch":166,"./lumpMatch":167}],170:[function(_dereq_,module,exports){
'use strict';
// parse a search lookup term find the regex-like syntax in this term
const fns = _dereq_('./paths').fns;
//regs-
const range = /\{[0-9,]+\}$/;

//trim char#0
const noFirst = function(str) {
  return str.substr(1, str.length);
};
const noLast = function(str) {
  return str.substring(0, str.length - 1);
};

//turn 'regex-like' search string into parsed json
const parse_term = function(term) {
  term = term || '';
  term = term.trim();

  let reg = {};
  //order matters here

  //1-character hasta be a text-match
  if (term.length === 1 && term !== '.' && term !== '*') {
    reg.normal = term;
    return reg;
  }
  //negation ! flag
  if (term.charAt(0) === '!') {
    term = noFirst(term);
    reg.negative = true;
  }
  //leading ^ flag
  if (term.charAt(0) === '^') {
    term = noFirst(term);
    reg.starting = true;
  }
  //trailing $ flag means ending
  if (term.charAt(term.length - 1) === '$') {
    term = noLast(term);
    reg.ending = true;
  }
  //optional flag
  if (term.charAt(term.length - 1) === '?') {
    term = noLast(term);
    reg.optional = true;
  }
  //atleast-one-but-greedy flag
  if (term.charAt(term.length - 1) === '+') {
    term = noLast(term);
    reg.consecutive = true;
  }
  //prefix/suffix/infix matches
  if (term.charAt(term.length - 1) === '_') {
    term = noLast(term);
    reg.prefix = true;
    //try both '-match-'
    if (term.charAt(0) === '_') {
      term = noFirst(term);
      reg.prefix = undefined;
      reg.infix = true;
    }
    reg.partial = term;
    term = '';
  } else if (term.charAt(0) === '_') {
    term = noFirst(term);
    reg.suffix = true;
    reg.partial = term;
    term = '';
  }
  //min/max any '{1,3}'
  if (term.charAt(term.length - 1) === '}' && range.test(term) === true) {
    let m = term.match(/\{([0-9])*,? ?([0-9]+)\}/);
    reg.minMax = {
      min: parseInt(m[1], 10) || 0,
      max: parseInt(m[2], 10)
    };
    term = term.replace(range, '');
  }
  //pos flag
  if (term.charAt(0) === '#') {
    term = noFirst(term);
    reg.tag = fns.titleCase(term);
    term = '';
  }
  //support /regex/ mode
  if (term.charAt(0) === '/' && term.charAt(term.length - 1) === '/') {
    term = noLast(term);
    term = noFirst(term);
    //actually make the regex
    reg.regex = new RegExp(term, 'i');
    term = '';
  }
  //one_of options flag
  if (term.charAt(0) === '(' && term.charAt(term.length - 1) === ')') {
    term = noLast(term);
    term = noFirst(term);
    let arr = term.split(/\|/g);
    reg.oneOf = {
      terms: {},
      tagArr: []
    };
    arr.forEach(str => {
      //try a tag match
      if (str.charAt(0) === '#') {
        let tag = str.substr(1, str.length);
        tag = fns.titleCase(tag);
        reg.oneOf.tagArr.push(tag);
      } else {
        reg.oneOf.terms[str] = true;
      }
    });
    term = '';
  }
  //a period means any one term
  if (term === '.') {
    reg.anyOne = true;
    term = '';
  }
  //a * means anything until sentence end
  if (term === '*') {
    reg.astrix = true;
    term = '';
  }
  if (term !== '') {
    //support \ encoding of #[]()*+?^
    term = term.replace(/\\([\\#\*\.\[\]\(\)\+\?\^])/g, '');
    reg.normal = term.toLowerCase();
  }
  return reg;
};

//turn a match string into an array of objects
const parse_all = function(input) {
  input = input || '';
  let regs = input.split(/ +/);
  let captureOn = false;
  regs = regs.map((reg) => {
    let hasEnd = false;
    //support [#Noun] capture-group syntax
    if (reg.charAt(0) === '[') {
      reg = noFirst(reg);
      captureOn = true;
    }
    if (reg.charAt(reg.length - 1) === ']') {
      reg = noLast(reg);
      captureOn = false;
      hasEnd = true;
    }
    reg = parse_term(reg);
    if (captureOn === true || hasEnd === true) {
      reg.capture = true;
    }
    return reg;
  });
  return regs;
};

module.exports = parse_all;

},{"./paths":168}],171:[function(_dereq_,module,exports){
'use strict';
//
const syntax = _dereq_('./lib/syntax');
const startHere = _dereq_('./lib/startHere');
const Text = _dereq_('../../text');

const addfns = Terms => {
  const fns = {
    //blacklist from a {word:true} object
    notObj: function(r, obj) {
      let matches = [];
      let current = [];
      r.terms.forEach(t => {
        //TODO? support multi-word blacklists
        //we should blacklist this term
        if (obj.hasOwnProperty(t.normal)) {
          if (current.length) {
            matches.push(current);
          }
          current = [];
        } else {
          current.push(t);
        }
      });
      //add remainder
      if (current.length) {
        matches.push(current);
      }
      matches = matches.map(a => {
        return new Terms(a, r.world, r.refText, r.refTerms);
      });
      return new Text(matches, r.world, r.parent);
    },

    //blacklist from a match string
    notString: function(r, want, verbose) {
      let matches = [];
      let regs = syntax(want);
      let terms = [];
      //try the match starting from each term
      for (let i = 0; i < r.terms.length; i++) {
        let bad = startHere(r, i, regs, verbose);
        if (bad && bad.length > 0) {
          //reset matches
          if (terms.length > 0) {
            matches.push(terms);
            terms = [];
          }
          //skip these terms now
          i += bad.length - 1;
          continue;
        }
        terms.push(r.terms[i]);
      }
      //remaining ones
      if (terms.length > 0) {
        matches.push(terms);
      }
      matches = matches.map(a => {
        return new Terms(a, r.world, r.refText, r.refTerms);
      });
      // return matches
      return new Text(matches, r.world, r.parent);
    }
  };
  //blacklist from a [word, word] array
  fns.notArray = function(r, arr) {
    let obj = arr.reduce((h, a) => {
      h[a] = true;
      return h;
    }, {});
    return fns.notObj(r, obj);
  };

  /**return everything but these matches*/
  Terms.prototype.not = function(want, verbose) {
    //support [word, word] blacklist
    if (typeof want === 'object') {
      let type = Object.prototype.toString.call(want);
      if (type === '[object Array]') {
        return fns.notArray(this, want, verbose);
      }
      if (type === '[object Object]') {
        return fns.notObj(this, want, verbose);
      }
    }
    if (typeof want === 'string') {
      return fns.notString(this, want, verbose);
    }
    return this;
  };
  return Terms;
};

module.exports = addfns;

},{"../../text":187,"./lib/startHere":169,"./lib/syntax":170}],172:[function(_dereq_,module,exports){
'use strict';
const mutate = _dereq_('../mutate');

const addMethod = (Terms) => {

  //hook it into Terms.proto
  Terms.prototype.delete = function (reg) {
    //don't touch parent if empty
    if (!this.found) {
      return this;
    }
    //remove all selected
    if (!reg) {
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      return this;
    }
    //only remove a portion of this
    let found = this.match(reg);
    if (found.found) {
      let r = mutate.deleteThese(this, found);
      return r;
    }
    return this.parentTerms;
  };

  return Terms;
};

module.exports = addMethod;

},{"../mutate":183}],173:[function(_dereq_,module,exports){
'use strict';
const mutate = _dereq_('../mutate');

//whitespace
const addSpaceAt = (ts, i) => {
  if (!ts.terms.length || !ts.terms[i]) {
    return ts;
  }
  ts.terms[i].whitespace.before = ' ';
  return ts;
};

const insertMethods = (Terms) => {

  //accept any sorta thing
  const ensureTerms = function(input, world) {
    if (input.isA === 'Terms') {
      return input;
    }
    if (input.isA === 'Term') {
      return new Terms([input], world);
    }
    //handle a string
    let ts = Terms.fromString(input, world);
    ts.tagger();
    return ts;
  };

  const methods = {

    insertBefore: function (input, tag) {
      let original_l = this.terms.length;
      let ts = ensureTerms(input, this.world);
      if (tag) {
        ts.tag(tag);
      }
      let index = this.index();
      //pad a space on parent
      addSpaceAt(this.parentTerms, index);
      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts);
      //also copy them to current selection
      if (this.terms.length === original_l) {
        this.terms = ts.terms.concat(this.terms);
      }
      return this;
    },

    insertAfter: function (input, tag) {
      let original_l = this.terms.length;
      let ts = ensureTerms(input, this.world);
      if (tag) {
        ts.tag(tag);
      }
      let index = this.terms[this.terms.length - 1].index();
      //beginning whitespace to ts
      addSpaceAt(ts, 0);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index + 1, ts);
      //also copy them to current selection
      if (this.terms.length === original_l) {
        this.terms = this.terms.concat(ts.terms);
      }
      return this;
    },

    insertAt: function (index, input, tag) {
      if (index < 0) {
        index = 0;
      }
      let original_l = this.terms.length;
      let ts = ensureTerms(input, this.world);
      //tag that thing too
      if (tag) {
        ts.tag(tag);
      }
      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts);
      //also copy them to current selection
      if (this.terms.length === original_l) {
        //splice the new terms into this (yikes!)
        Array.prototype.splice.apply(this.terms, [index, 0].concat(ts.terms));
      }
      //beginning whitespace to ts
      if (index === 0) {
        this.terms[0].whitespace.before = '';
        ts.terms[ts.terms.length - 1].whitespace.after = ' ';
      }
      return this;
    }

  };

  //hook them into result.proto
  Object.keys(methods).forEach((k) => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = insertMethods;

},{"../mutate":183}],174:[function(_dereq_,module,exports){
'use strict';
//these methods are simply term-methods called in a loop

const addMethods = (Terms) => {

  const foreach = [
    // ['tag'],
    // ['unTag'],
    // ['canBe'],
    ['toUpperCase', 'UpperCase'],
    ['toLowerCase'],
    ['toTitleCase', 'TitleCase'],
  // ['toCamelCase', 'CamelCase'],
  ];

  foreach.forEach((arr) => {
    let k = arr[0];
    let tag = arr[1];
    let myFn = function () {
      let args = arguments;
      this.terms.forEach((t) => {
        t[k].apply(t, args);
      });
      if (tag) {
        this.tag(tag, k);
      }
      return this;
    };
    Terms.prototype[k] = myFn;
  });
  return Terms;
};

module.exports = addMethods;

},{}],175:[function(_dereq_,module,exports){
'use strict';
const Term = _dereq_('../../../term');
//merge two term objects.. carefully

const makeText = (a, b) => {
  let text = a.whitespace.before + a.text + a.whitespace.after;
  text += b.whitespace.before + b.text + b.whitespace.after;
  return text;
};

const combine = function(s, i) {
  let a = s.terms[i];
  let b = s.terms[i + 1];
  if (!b) {
    return;
  }
  let text = makeText(a, b);
  s.terms[i] = new Term(text, a.context);
  s.terms[i].normal = a.normal + ' ' + b.normal;
  s.terms[i].lumped = true;
  s.terms[i].parentTerms = s.terms[i + 1].parentTerms;
  s.terms[i + 1] = null;
  s.terms = s.terms.filter((t) => t !== null);
  return;
};

module.exports = combine;

},{"../../../term":139}],176:[function(_dereq_,module,exports){
'use strict';
const combine = _dereq_('./combine');
const mutate = _dereq_('../../mutate');

//merge-together our current match into one term
const combineThem = function(ts, tags) {
  let len = ts.terms.length;
  for(let i = 0; i < len; i++) {
    combine(ts, 0);
  }
  let lumped = ts.terms[0];
  lumped.tags = tags;
  return lumped;
};

const lumpMethods = (Terms) => {

  Terms.prototype.lump = function () {
    //collect the tags up
    let index = this.index();
    let tags = {};
    this.terms.forEach((t) => {
      Object.keys(t.tags).forEach((tag) => tags[tag] = true);
    });
    //just lump the whole-thing together
    if (this.parentTerms === this) {
      let lumped = combineThem(this, tags);
      this.terms = [lumped];
      return this;
    }
    //otherwise lump just part of it. delete/insert.
    this.parentTerms = mutate.deleteThese(this.parentTerms, this);
    //merge-together our current match into one term
    let lumped = combineThem(this, tags);
    //put it back (in the same place)
    this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, lumped);
    return this;
  };

  return Terms;
};

module.exports = lumpMethods;

},{"../../mutate":183,"./combine":175}],177:[function(_dereq_,module,exports){
'use strict';
const tagger = _dereq_('../../tagger');

const miscMethods = Terms => {
  const methods = {
    tagger: function() {
      tagger(this);
      return this;
    },
    firstTerm: function() {
      return this.terms[0];
    },
    lastTerm: function() {
      return this.terms[this.terms.length - 1];
    },
    all: function() {
      return this.parent;
    },
    data: function() {
      return {
        text: this.out('text'),
        normal: this.out('normal')
      };
    },
    term: function(n) {
      return this.terms[n];
    },
    first: function() {
      let t = this.terms[0];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    last: function() {
      let t = this.terms[this.terms.length - 1];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    slice: function(start, end) {
      let terms = this.terms.slice(start, end);
      return new Terms(terms, this.world, this.refText, this.refTerms);
    },
    endPunctuation: function() {
      let lastTerm = this.last().terms[0];
      if (!lastTerm) {
        return '';
      }
      return lastTerm.endPunctuation() || '';
    },
    index: function() {
      let parent = this.parentTerms;
      let first = this.terms[0];
      if (!parent || !first) {
        return null; //maybe..
      }
      for (let i = 0; i < parent.terms.length; i++) {
        if (first === parent.terms[i]) {
          return i;
        }
      }
      return null;
    },
    termIndex: function() {
      let first = this.terms[0];
      let ref = this.refText || this;
      if (!ref || !first) {
        return null; //maybe..
      }
      let n = 0;
      for (let i = 0; i < ref.list.length; i++) {
        let ts = ref.list[i];
        for (let o = 0; o < ts.terms.length; o++) {
          if (ts.terms[o] === first) {
            return n;
          }
          n += 1;
        }
      }
      return n;
    },
    //number of characters in this match
    chars: function() {
      return this.terms.reduce((i, t) => {
        i += t.whitespace.before.length;
        i += t.text.length;
        i += t.whitespace.after.length;
        return i;
      }, 0);
    },
    //just .length
    wordCount: function() {
      return this.terms.length;
    },

    //this has term-order logic, so has to be here
    toCamelCase: function() {
      this.toTitleCase();
      this.terms.forEach((t, i) => {
        if (i !== 0) {
          t.whitespace.before = '';
        }
        t.whitespace.after = '';
      });
      this.tag('#CamelCase', 'toCamelCase');
      return this;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = miscMethods;

},{"../../tagger":92}],178:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../paths').fns;

const methods = {
  text: function(ts) {
    return ts.terms.reduce((str, t) => {
      str += t.out('text');
      return str;
    }, '');
  },
  //like 'text', but no leading/trailing whitespace
  match: function(ts) {
    let str = '';
    let len = ts.terms.length;
    for (let i = 0; i < len; i++) {
      if (i > 0) {
        str += ts.terms[i].whitespace.before;
      }
      str += ts.terms[i].text.replace(/[,.?!]$/, ''); //remove comma
      if (i < len - 1) {
        str += ts.terms[i].whitespace.after;
      }
    }
    return str;
  },

  normal: function(ts) {
    let terms = ts.terms.filter(t => {
      return t.text;
    });
    terms = terms.map(t => {
      return t.normal; //+ punct;
    });
    return terms.join(' ');
  },

  grid: function(ts) {
    let str = '  ';
    str += ts.terms.reduce((s, t) => {
      s += fns.leftPad(t.text, 11);
      return s;
    }, '');
    return str + '\n\n';
  },

  color: function(ts) {
    return ts.terms.reduce((s, t) => {
      s += fns.printTerm(t);
      return s;
    }, '');
  },
  csv: function(ts) {
    return ts.terms.map(t => t.normal.replace(/,/g, '')).join(',');
  },

  newlines: function(ts) {
    return ts.terms
      .reduce((str, t) => {
        str += t.out('text').replace(/\n/g, ' ');
        return str;
      }, '')
      .replace(/^\s/, '');
  },
  /** no punctuation, fancy business **/
  root: function(ts) {
    return ts.terms.map(t => t.silent_term || t.root).join(' ').toLowerCase();
  },

  html: function(ts) {
    return ts.terms.map(t => t.render.html()).join(' ');
  },
  debug: function(ts) {
    ts.terms.forEach(t => {
      t.out('debug');
    });
  }
};
methods.plaintext = methods.text;
methods.normalize = methods.normal;
methods.normalized = methods.normal;
methods.colors = methods.color;
methods.tags = methods.terms;

const renderMethods = Terms => {
  Terms.prototype.out = function(str) {
    if (methods[str]) {
      return methods[str](this);
    }
    return methods.text(this);
  };
  //check method
  Terms.prototype.debug = function() {
    return methods.debug(this);
  };
  return Terms;
};

module.exports = renderMethods;

},{"../paths":184}],179:[function(_dereq_,module,exports){
'use strict';
const mutate = _dereq_('../mutate');

const replaceMethods = Terms => {
  const methods = {
    /**swap this for that */
    replace: function(str1, str2, keepTags) {
      //in this form, we 'replaceWith'
      if (str2 === undefined) {
        return this.replaceWith(str1, keepTags);
      }
      this.match(str1).replaceWith(str2, keepTags);
      return this;
    },

    /**swap this for that */
    replaceWith: function(str, keepTags) {
      let newTs = Terms.fromString(str, this.world);
      newTs.tagger();
      //if instructed, apply old tags to new terms
      if (keepTags) {
        this.terms.forEach((t, i) => {
          let tags = Object.keys(t.tags);
          if (newTs.terms[i] !== undefined) {
            tags.forEach(tg => newTs.terms[i].tag(tg, 'from-memory'));
          }
        });
      }
      //keep its ending punctation..
      let endPunct = this.endPunctuation();
      //grab the insertion place..
      let index = this.index();
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, newTs);
      this.terms = newTs.terms;
      //add-in the punctuation at the end..
      if (this.terms.length > 0) {
        this.terms[this.terms.length - 1].whitespace.after += endPunct;
      }
      return this;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = replaceMethods;

},{"../mutate":183}],180:[function(_dereq_,module,exports){
'use strict';

//break apart a termlist into (before, match after)
const breakUpHere = (terms, ts) => {
  let firstTerm = ts.terms[0];
  let len = ts.terms.length;
  for (let i = 0; i < terms.length; i++) {
    if (terms[i] === firstTerm) {
      return {
        before: terms.slice(0, i),
        match: terms.slice(i, i + len),
        after: terms.slice(i + len, terms.length)
      };
    }
  }
  return {
    after: terms
  };
};

const splitMethods = Terms => {
  const methods = {
    /** at the end of the match, split the terms **/
    splitAfter: function(reg, verbose) {
      let ms = this.match(reg, verbose); //Array[ts]
      let termArr = this.terms;
      let all = [];
      ms.list.forEach(lookFor => {
        let section = breakUpHere(termArr, lookFor);
        if (section.before && section.match) {
          all.push(section.before.concat(section.match));
        }
        termArr = section.after;
      });
      //add the remaining
      if (termArr.length) {
        all.push(termArr);
      }
      //make them termlists
      all = all.map(ts => {
        let parent = this.refText; //|| this;
        return new Terms(ts, this.world, parent, this.refTerms);
      });
      return all;
    },

    /** return only before & after  the match**/
    splitOn: function(reg, verbose) {
      let ms = this.match(reg, verbose); //Array[ts]
      let termArr = this.terms;
      let all = [];
      ms.list.forEach(lookFor => {
        let section = breakUpHere(termArr, lookFor);
        if (section.before) {
          all.push(section.before);
        }
        if (section.match) {
          all.push(section.match);
        }
        termArr = section.after;
      });
      //add the remaining
      if (termArr.length) {
        all.push(termArr);
      }
      //make them termlists
      all = all.filter(a => a && a.length);
      all = all.map(ts => new Terms(ts, ts.world, ts.refText, this.refTerms));
      return all;
    },

    /** at the start of the match, split the terms**/
    splitBefore: function(reg, verbose) {
      let ms = this.match(reg, verbose); //Array[ts]
      let termArr = this.terms;
      let all = [];
      ms.list.forEach(lookFor => {
        let section = breakUpHere(termArr, lookFor);
        if (section.before) {
          all.push(section.before);
        }
        if (section.match) {
          all.push(section.match);
        }
        termArr = section.after;
      });
      //add the remaining
      if (termArr.length) {
        all.push(termArr);
      }
      //cleanup-step: merge all (middle) matches with the next one
      for (let i = 0; i < all.length; i++) {
        for (let o = 0; o < ms.length; o++) {
          if (ms.list[o].terms[0] === all[i][0]) {
            if (all[i + 1]) {
              all[i] = all[i].concat(all[i + 1]);
              all[i + 1] = [];
            }
          }
        }
      }
      //make them termlists
      all = all.filter(a => a && a.length);
      all = all.map(ts => new Terms(ts, ts.world, ts.refText, this.refTerms));
      return all;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = splitMethods;
exports = splitMethods;

},{}],181:[function(_dereq_,module,exports){
'use strict';
const addMethod = Terms => {
  const methods = {
    tag: function(tag, reason) {
      let tags = [];
      if (typeof tag === 'string') {
        tags = tag.split(' ');
      }
      //fancy version:
      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach((t, i) => {
          t.tag(tags[i], reason);
        });
        return this;
      }
      //non-fancy version:
      this.terms.forEach(t => {
        t.tag(tag, reason);
      });
      return this;
    },

    unTag: function(tag, reason) {
      let tags = [];
      if (typeof tag === 'string') {
        tags = tag.split(' ');
      }
      //fancy version:
      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach((t, i) => {
          t.unTag(tags[i], reason);
        });
        return this;
      }
      //non-fancy version:
      this.terms.forEach(t => {
        t.unTag(tag, reason);
      });
      return this;
    },

    //which terms are consistent with this tag
    canBe: function(tag) {
      let terms = this.terms.filter(t => t.canBe(tag));
      return new Terms(terms, this.world, this.refText, this.refTerms);
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = addMethod;

},{}],182:[function(_dereq_,module,exports){
'use strict';

const transforms = Terms => {
  const methods = {
    clone: function() {
      // this.world = this.world.clone();
      let terms = this.terms.map(t => {
        return t.clone();
      });
      return new Terms(terms, this.world, this.refText, null); //, this.refTerms
    },
    hyphenate: function() {
      this.terms.forEach((t, i) => {
        if (i !== this.terms.length - 1) {
          t.whitespace.after = '-';
        }
        if (i !== 0) {
          t.whitespace.before = '';
        }
      });
      return this;
    },
    dehyphenate: function() {
      this.terms.forEach(t => {
        if (t.whitespace.after === '-') {
          t.whitespace.after = ' ';
        }
      });
      return this;
    },
    trim: function() {
      if (this.length <= 0) {
        return this;
      }
      this.terms[0].whitespace.before = '';
      this.terms[this.terms.length - 1].whitespace.after = '';
      return this;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = transforms;

},{}],183:[function(_dereq_,module,exports){
'use strict';
//
const getTerms = (needle) => {
  let arr = [];
  if (needle.isA === 'Terms') {
    arr = needle.terms;
  } else if (needle.isA === 'Text') {
    arr = needle.flatten().list[0].terms;
  } else if (needle.isA === 'Term') {
    arr = [needle];
  }
  return arr;
};

//remove them
exports.deleteThese = (source, needle) => {
  let arr = getTerms(needle);
  source.terms = source.terms.filter((t) => {
    for (let i = 0; i < arr.length; i++) {
      if (t === arr[i]) {
        return false;
      }
    }
    return true;
  });
  return source;
};

//add them
exports.insertAt = (terms, i, needle) => {
  needle.dirty = true;
  let arr = getTerms(needle);
  //handle whitespace
  if (i > 0 && arr[0] && !arr[0].whitespace.before) {
    arr[0].whitespace.before = ' ';
  }
  //gnarly splice
  //-( basically  - terms.splice(i+1, 0, arr) )
  Array.prototype.splice.apply(terms, [i, 0].concat(arr));
  return terms;
};

},{}],184:[function(_dereq_,module,exports){
module.exports = {
  fns: _dereq_('../fns'),
  Term: _dereq_('../term')
};

},{"../fns":3,"../term":139}],185:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('./index');
const tokenize = _dereq_('./tokenize');
const paths = _dereq_('./paths');
const Terms = paths.Terms;
const fns = paths.fns;

const fromString = (str, world) => {
  let sentences = [];
  //allow pre-tokenized input
  if (fns.isArray(str)) {
    sentences = str;
  } else {
    str = fns.ensureString(str);
    sentences = tokenize(str);
  }
  let list = sentences.map(s => Terms.fromString(s, world));

  let doc = new Text(list, world);
  //give each ts a ref to the result
  doc.list.forEach(ts => {
    ts.refText = doc;
  });
  return doc;
};
module.exports = fromString;

},{"./index":187,"./paths":199,"./tokenize":201}],186:[function(_dereq_,module,exports){
module.exports = {
  /** did it find anything? */
  found: function() {
    return this.list.length > 0;
  },
  /** just a handy wrap*/
  parent: function() {
    return this.original || this;
  },
  /** how many Texts are there?*/
  length: function() {
    return this.list.length;
  },
  /** nicer than constructor.call.name or whatever*/
  isA: function() {
    return 'Text';
  },
  /** the whitespace before and after this match*/
  whitespace: function() {
    return {
      before: str => {
        this.list.forEach(ts => {
          ts.whitespace.before(str);
        });
        return this;
      },
      after: str => {
        this.list.forEach(ts => {
          ts.whitespace.after(str);
        });
        return this;
      }
    };
  }
};

},{}],187:[function(_dereq_,module,exports){
'use strict';
//a Text is an array of termLists
const getters = _dereq_('./getters');

function Text(arr, world, original) {
  this.list = arr || [];
  if (typeof world === 'function') {
    world = world();
  }
  this.world = () => {
    return world;
  };
  this.original = original;
  //apply getters
  let keys = Object.keys(getters);
  for (let i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], {
      get: getters[keys[i]]
    });
  }
}
module.exports = Text;

Text.addMethods = function(cl, obj) {
  let fns = Object.keys(obj);
  for (let i = 0; i < fns.length; i++) {
    cl.prototype[fns[i]] = obj[fns[i]];
  }
};

//make a sub-class of this class easily
Text.makeSubset = function(methods, find) {
  let Subset = function(arr, world, original) {
    Text.call(this, arr, world, original);
  };
  //inheritance
  Subset.prototype = Object.create(Text.prototype);
  Text.addMethods(Subset, methods);
  Subset.find = find;
  return Subset;
};

//apply instance methods
_dereq_('./methods/misc')(Text);
_dereq_('./methods/loops')(Text);
_dereq_('./methods/match')(Text);
_dereq_('./methods/out')(Text);
_dereq_('./methods/sort')(Text);
_dereq_('./methods/split')(Text);
_dereq_('./methods/normalize')(Text);
_dereq_('./subsets')(Text);

//apply subset methods
const subset = {
  acronyms: _dereq_('../subset/acronyms'),
  adjectives: _dereq_('../subset/adjectives'),
  adverbs: _dereq_('../subset/adverbs'),
  contractions: _dereq_('../subset/contractions'),
  dates: _dereq_('../subset/dates'),
  nouns: _dereq_('../subset/nouns'),
  people: _dereq_('../subset/people'),
  sentences: _dereq_('../subset/sentences'),
  terms: _dereq_('../subset/terms'),
  values: _dereq_('../subset/values'),
  verbs: _dereq_('../subset/verbs'),
  ngrams: _dereq_('../subset/ngrams'),
  startGrams: _dereq_('../subset/ngrams/startGrams'),
  endGrams: _dereq_('../subset/ngrams/endGrams')
};
Object.keys(subset).forEach(k => {
  Text.prototype[k] = function(num, arg) {
    let sub = subset[k];
    let m = sub.find(this, num, arg);
    return new subset[k](m.list, this.world, this.parent);
  };
});
//aliases
Text.prototype.words = Text.prototype.terms;

},{"../subset/acronyms":9,"../subset/adjectives":10,"../subset/adverbs":17,"../subset/contractions":23,"../subset/dates":25,"../subset/ngrams":35,"../subset/ngrams/endGrams":32,"../subset/ngrams/startGrams":36,"../subset/nouns":38,"../subset/people":48,"../subset/sentences":50,"../subset/terms":56,"../subset/values":62,"../subset/verbs":72,"./getters":186,"./methods/loops":188,"./methods/match":189,"./methods/misc":190,"./methods/normalize":191,"./methods/out":192,"./methods/sort":196,"./methods/split":198,"./subsets":200}],188:[function(_dereq_,module,exports){
'use strict';
//this methods are simply loops around each termList object.
const methods = [
  'toTitleCase',
  'toUpperCase',
  'toLowerCase',
  'toCamelCase',

  'hyphenate',
  'dehyphenate',
  'trim',

  'insertBefore',
  'insertAfter',
  'insertAt',

  'replace',
  'replaceWith',

  'delete',
  'lump',

  'tagger',

  // 'tag',
  'unTag',
];

const addMethods = (Text) => {
  methods.forEach((k) => {
    Text.prototype[k] = function () {
      for(let i = 0; i < this.list.length; i++) {
        this.list[i][k].apply(this.list[i], arguments);
      }
      return this;
    };
  });

  //add an extra optimisation for tag method
  Text.prototype.tag = function() {
    //fail-fast optimisation
    if (this.list.length === 0) {
      return this;
    }
    for(let i = 0; i < this.list.length; i++) {
      this.list[i].tag.apply(this.list[i], arguments);
    }
    return this;
  };
};

module.exports = addMethods;

},{}],189:[function(_dereq_,module,exports){
'use strict';
const syntaxParse = _dereq_('../../../terms/match/lib/syntax');
const Terms = _dereq_('../../../terms');

const splitMethods = Text => {
  //support "#Noun word" regex-matches
  const matchReg = function(r, reg, verbose) {
    //parse the 'regex' into some json
    let list = [];
    reg = syntaxParse(reg);
    r.list.forEach(ts => {
      //an array of arrays
      let matches = ts.match(reg, verbose);
      matches.list.forEach(ms => {
        list.push(ms);
      });
    });
    let parent = r.parent || r;
    return new Text(list, r.world(), parent);
  };

  //support {word:true} whitelist
  const matchObj = function(r, obj) {
    let matches = [];
    r.list.forEach(ts => {
      ts.terms.forEach(t => {
        if (obj.hasOwnProperty(t.normal) === true) {
          matches.push(t);
        }
      });
    });
    matches = matches.map(t => {
      return new Terms([t], r.world(), r, t.parentTerms);
    });
    return new Text(matches, r.world(), r.parent);
  };

  //support [word, word] whitelist
  const matchArr = function(r, arr) {
    //its faster this way
    let obj = arr.reduce((h, a) => {
      h[a] = true;
      return h;
    }, {});
    return matchObj(r, obj);
  };

  const methods = {
    /** do a regex-like search through terms and return a subset */
    match: function(reg, verbose) {
      //fail-fast
      if (this.list.length === 0 || reg === undefined || reg === null) {
        let parent = this.parent || this;
        return new Text([], this.world(), parent);
      }
      //match "#Noun word" regex
      if (typeof reg === 'string' || typeof reg === 'number') {
        return matchReg(this, reg, verbose);
      }
      //match [word, word] whitelist
      let type = Object.prototype.toString.call(reg);
      if (type === '[object Array]') {
        return matchArr(this, reg);
      }
      //match {word:true} whitelist
      if (type === '[object Object]') {
        return matchObj(this, reg);
      }
      return this;
    },

    not: function(reg, verbose) {
      let list = [];
      this.list.forEach(ts => {
        let found = ts.not(reg, verbose);
        list = list.concat(found.list);
      });
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    if: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          list.push(this.list[i]);
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    ifNo: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === false) {
          list.push(this.list[i]);
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    has: function(reg) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          return true;
        }
      }
      return false;
    },

    /**find a match, and return everything infront of it*/
    before: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        let m = this.list[i].matchOne(reg);
        if (m) {
          let index = m[0].index();
          let found = this.list[i].slice(0, index);
          if (found.length > 0) {
            list.push(found);
          }
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    /**find a match, and return everything after of it*/
    after: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        let m = this.list[i].matchOne(reg);
        if (m) {
          let lastTerm = m[m.length - 1];
          let index = lastTerm.index();
          let found = this.list[i].slice(index + 1, this.list[i].length);
          if (found.length > 0) {
            list.push(found);
          }
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    }
  };
  //alias 'and'
  methods.and = methods.match;

  //hook them into result.proto
  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{"../../../terms":161,"../../../terms/match/lib/syntax":170}],190:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../terms');

const miscMethods = Text => {
  const methods = {
    all: function() {
      return this.parent;
    },
    index: function() {
      return this.list.map(ts => ts.index());
    },
    wordCount: function() {
      return this.terms().length;
    },
    data: function() {
      return this.list.map(ts => ts.data());
    },
    /* javascript array loop-wrappers */
    map: function(fn) {
      return this.list.map((ts, i) => {
        let text = new Text([ts], this.world);
        return fn(text, i);
      });
    },
    forEach: function(fn) {
      this.list.forEach((ts, i) => {
        let text = new Text([ts], this.world);
        fn(text, i);
      });
      return this;
    },
    filter: function(fn) {
      let list = this.list.filter((ts, i) => {
        let text = new Text([ts], this.world);
        return fn(text, i);
      });
      return new Text(list, this.world);
    },
    reduce: function(fn, h) {
      return this.list.reduce((_h, ts) => {
        let text = new Text([ts], this.world);
        return fn(_h, text);
      }, h);
    },
    find: function(fn) {
      for (let i = 0; i < this.list.length; i++) {
        let ts = this.list[i];
        let text = new Text([ts], this.world);
        if (fn(text)) {
          return text;
        }
      }
      return undefined;
    },
    /**copy data properly so later transformations will have no effect*/
    clone: function() {
      let list = this.list.map(ts => {
        return ts.clone();
      });
      return new Text(list, this.world); //this.lexicon, this.parent
    },

    /** get the nth term of each result*/
    term: function(n) {
      let list = this.list.map(ts => {
        let arr = [];
        let el = ts.terms[n];
        if (el) {
          arr = [el];
        }
        return new Terms(arr, this.world, this.refText, this.refTerms);
      });
      return new Text(list, this.world, this.parent);
    },
    firstTerm: function() {
      return this.match('^.');
    },
    lastTerm: function() {
      return this.match('.$');
    },

    /** grab a subset of the results*/
    slice: function(start, end) {
      this.list = this.list.slice(start, end);
      return this;
    },

    /** use only the nth result*/
    get: function(n) {
      //return an empty result
      if ((!n && n !== 0) || !this.list[n]) {
        return new Text([], this.world, this.parent);
      }
      let ts = this.list[n];
      return new Text([ts], this.world, this.parent);
    },
    /**use only the first result */
    first: function(n) {
      if (!n && n !== 0) {
        return this.get(0);
      }
      return new Text(this.list.slice(0, n), this.world, this.parent);
    },
    /**use only the last result */
    last: function(n) {
      if (!n && n !== 0) {
        return this.get(this.list.length - 1);
      }
      let end = this.list.length;
      let start = end - n;
      return new Text(this.list.slice(start, end), this.world, this.parent);
    },

    concat: function() {
      //any number of params
      for (let i = 0; i < arguments.length; i++) {
        let p = arguments[i];
        if (typeof p === 'object') {
          //Text()
          if (p.isA === 'Text' && p.list) {
            this.list = this.list.concat(p.list);
          }
          //Terms()
          if (p.isA === 'Terms') {
            this.list.push(p);
          }
        }
      }
      return this;
    },

    /** make it into one sentence/termlist */
    flatten: function() {
      let terms = [];
      this.list.forEach(ts => {
        terms = terms.concat(ts.terms);
      });
      //dont create an empty ts
      if (!terms.length) {
        return new Text(null, this.world, this.parent);
      }
      let ts = new Terms(terms, this.world, this, null);
      return new Text([ts], this.world, this.parent);
    },

    /** see if these terms can become this tag*/
    canBe: function(tag) {
      this.list.forEach(ts => {
        ts.terms = ts.terms.filter(t => {
          return t.canBe(tag);
        });
      });
      return this;
    },

    /** sample part of the array */
    random: function(n) {
      n = n || 1;
      let r = Math.floor(Math.random() * this.list.length);
      let arr = this.list.slice(r, r + n);
      //if we're off the end, add some from the start
      if (arr.length < n) {
        let diff = n - arr.length;
        if (diff > r) {
          diff = r; //prevent it from going full-around
        }
        arr = arr.concat(this.list.slice(0, diff));
      }
      return new Text(arr, this.world, this.parent);
    }
  };
  Text.addMethods(Text, methods);
};

module.exports = miscMethods;

},{"../../terms":161}],191:[function(_dereq_,module,exports){
'use strict';
//
const defaults = {
  whitespace: true,
  case: true,
  numbers: true,
  punctuation: true,
  unicode: true,
  contractions: true
};

const methods = {
  /** make only one space between each word */
  whitespace: r => {
    r.terms().list.forEach((ts, i) => {
      let t = ts.terms[0];
      if (i > 0) {
        t.whitespace.before = ' ';
      } else if (i === 0) {
        t.whitespace.before = '';
      }
      t.whitespace.after = '';
    });
    return r;
  },

  /** make first-word titlecase, and people, places titlecase */
  case: r => {
    r.list.forEach(ts => {
      ts.terms.forEach((t, i) => {
        if (i === 0 || t.tags.Person || t.tags.Place || t.tags.Organization) {
          // ts.toTitleCase() //fixme: too weird here.
        } else {
          ts.toLowerCase();
        }
      });
    });
    return r;
  },

  /** turn 'five' to 5, and 'fifth' to 5th*/
  numbers: r => {
    return r.values().toNumber();
  },

  /** remove commas, semicolons - but keep sentence-ending punctuation*/
  punctuation: r => {
    r.list.forEach(ts => {
      if (!ts.terms.length) {
        return;
      }

      //first-term punctuation
      ts.terms[0]._text = ts.terms[0]._text.replace(/^¿/, '');
      //middle-terms
      for (let i = 0; i < ts.terms.length - 1; i++) {
        let t = ts.terms[i];
        //remove non-sentence-ending stuff
        t._text = t._text.replace(/[:;,]$/, '');
      }
      //replace !!! with !
      let last = ts.terms[ts.terms.length - 1];
      last._text = last._text.replace(/\.+$/, '.');
      last._text = last._text.replace(/!+$/, '!');
      last._text = last._text.replace(/\?+!?$/, '?'); //support '?!'
    });
    return r;
  },

  contractions: r => {
    return r.contractions().expand();
  }
};

const addMethods = Text => {
  Text.prototype.normalize = function(obj) {
    obj = obj || defaults;
    //do each type of normalization
    Object.keys(obj).forEach(fn => {
      if (methods[fn] !== undefined) {
        methods[fn](this);
      }
    });
    return this;
  };
};
module.exports = addMethods;

},{}],192:[function(_dereq_,module,exports){
'use strict';
const topk = _dereq_('./topk');
const offset = _dereq_('./offset');
const termIndex = _dereq_('./indexes');

const methods = {
  text: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('text');
      return str;
    }, '');
  },
  match: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('match');
      return str;
    }, '');
  },
  normal: r => {
    return r.list
      .map(ts => {
        let str = ts.out('normal');
        let last = ts.last();
        if (last) {
          let punct = ts.endPunctuation();
          if (punct === '.' || punct === '!' || punct === '?') {
            str += punct;
          }
        }
        return str;
      })
      .join(' ');
  },
  root: r => {
    return r.list
      .map(ts => {
        return ts.out('root');
      })
      .join(' ');
  },
  /** output where in the original output string they are*/
  offsets: r => {
    return offset(r);
  },
  /** output the tokenized location of this match*/
  index: r => {
    return termIndex(r);
  },
  grid: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('grid');
      return str;
    }, '');
  },
  color: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('color');
      return str;
    }, '');
  },
  array: r => {
    return r.list.map(ts => {
      return ts.out('normal');
    });
  },
  csv: r => {
    return r.list
      .map(ts => {
        return ts.out('csv');
      })
      .join('\n');
  },
  newlines: r => {
    return r.list
      .map(ts => {
        return ts.out('newlines');
      })
      .join('\n');
  },
  json: r => {
    return r.list.reduce((arr, ts) => {
      let terms = ts.terms.map(t => {
        return {
          text: t.text,
          normal: t.normal,
          tags: t.tag
        };
      });
      arr.push(terms);
      return arr;
    }, []);
  },
  html: r => {
    let html = r.list.reduce((str, ts) => {
      let sentence = ts.terms.reduce((sen, t) => {
        sen += '\n    ' + t.out('html');
        return sen;
      }, '');
      return (str += '\n  <span>' + sentence + '\n  </span>');
    }, '');
    return '<span> ' + html + '\n</span>';
  },
  terms: r => {
    let arr = [];
    r.list.forEach(ts => {
      ts.terms.forEach(t => {
        arr.push({
          text: t.text,
          normal: t.normal,
          tags: Object.keys(t.tags)
        });
      });
    });
    return arr;
  },
  debug: r => {
    console.log('====');
    r.list.forEach(ts => {
      console.log('   --');
      ts.debug();
    });
    return r;
  },
  topk: r => {
    return topk(r);
  }
};
methods.plaintext = methods.text;
methods.normalized = methods.normal;
methods.colors = methods.color;
methods.tags = methods.terms;
methods.offset = methods.offsets;
methods.idexes = methods.index;
methods.frequency = methods.topk;
methods.freq = methods.topk;
methods.arr = methods.array;

const addMethods = Text => {
  Text.prototype.out = function(fn) {
    if (methods[fn]) {
      return methods[fn](this);
    }
    return methods.text(this);
  };
  Text.prototype.debug = function() {
    return methods.debug(this);
  };
  return Text;
};

module.exports = addMethods;

},{"./indexes":193,"./offset":194,"./topk":195}],193:[function(_dereq_,module,exports){
'use strict';
//find where in the original text this match is found, by term-counts
const termIndex = (r) => {
  let result = [];
  //find the ones we want
  let want = {};
  r.terms().list.forEach((ts) => {
    want[ts.terms[0].uid] = true;
  });

  //find their counts
  let sum = 0;
  let parent = r.all();
  parent.list.forEach((ts, s) => {
    ts.terms.forEach((t, i) => {
      if (want[t.uid] !== undefined) {
        result.push({
          text: t.text,
          normal: t.normal,
          term: sum,
          sentence: s,
          sentenceTerm: i
        });
      }
      sum += 1;
    });
  });

  return result;
};
module.exports = termIndex;

},{}],194:[function(_dereq_,module,exports){
'use strict';
/** say where in the original output string they are found*/

const findOffset = (parent, term) => {
  let sum = 0;
  for(let i = 0; i < parent.list.length; i++) {
    for(let o = 0; o < parent.list[i].terms.length; o++) {
      let t = parent.list[i].terms[o];
      if (t.uid === term.uid) {
        return sum;
      } else {
        sum += t.whitespace.before.length + t._text.length + t.whitespace.after.length;
      }
    }
  }
  return null;
};

//like 'text' for the middle, and 'normal' for the start+ends
//used for highlighting the actual words, without whitespace+punctuation
const trimEnds = function(ts) {
  let terms = ts.terms;
  if (terms.length <= 2) {
    return ts.out('normal');
  }
  //the start
  let str = terms[0].normal;
  //the middle
  for(let i = 1; i < terms.length - 1; i++) {
    let t = terms[i];
    str += t.whitespace.before + t.text + t.whitespace.after;
  }
  //the end
  str += ' ' + terms[ts.terms.length - 1].normal;
  return str;
};

//map over all-dem-results
const allOffset = (r) => {
  let parent = r.all();
  return r.list.map((ts) => {
    let words = [];
    for(let i = 0; i < ts.terms.length; i++) {
      words.push(ts.terms[i].normal);
    }
    let nrml = trimEnds(ts);
    let txt = ts.out('text');
    let startAt = findOffset(parent, ts.terms[0]);
    let beforeWord = ts.terms[0].whitespace.before;
    let wordStart = startAt + beforeWord.length;
    return {
      text: txt,
      normal: ts.out('normal'),
      //where we begin
      offset: startAt,
      length: txt.length,
      wordStart: wordStart,
      wordEnd: wordStart + nrml.length,
    // wordLength: words.join(' ').length
    };
  });
};
module.exports = allOffset;

},{}],195:[function(_dereq_,module,exports){
'use strict';
//
const topk = function (r, n) {
  //count occurance
  let count = {};
  r.list.forEach((ts) => {
    let str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  });
  //turn into an array
  let all = [];
  Object.keys(count).forEach((k) => {
    all.push({
      normal: k,
      count: count[k],
    });
  });
  //add percentage
  all.forEach((o) => {
    o.percent = parseFloat(((o.count / r.list.length) * 100).toFixed(2));
  });
  //sort by freq
  all = all.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    }
    return 1;
  });
  if (n) {
    all = all.splice(0, n);
  }
  return all;
};

module.exports = topk;

},{}],196:[function(_dereq_,module,exports){
'use strict';
const sorter = _dereq_('./methods');

const addMethods = (Text) => {

  const fns = {

    /**reorder result.list alphabetically */
    sort: function (method) {
      //default sort
      method = method || 'alphabetical';
      method = method.toLowerCase();
      if (!method || method === 'alpha' || method === 'alphabetical') {
        return sorter.alpha(this, Text);
      }
      if (method === 'chron' || method === 'chronological') {
        return sorter.chron(this, Text);
      }
      if (method === 'length') {
        return sorter.lengthFn(this, Text);
      }
      if (method === 'freq' || method === 'frequency') {
        return sorter.freq(this, Text);
      }
      if (method === 'wordcount') {
        return sorter.wordCount(this, Text);
      }
      return this;
    },

    /**reverse the order of result.list */
    reverse: function () {
      this.list = this.list.reverse();
      return this;
    },

    unique: function () {
      let obj = {};
      this.list = this.list.filter((ts) => {
        let str = ts.out('root');
        if (obj.hasOwnProperty(str)) {
          return false;
        }
        obj[str] = true;
        return true;
      });
      return this;
    }
  };
  //hook them into result.proto
  Text.addMethods(Text, fns);
  return Text;
};

module.exports = addMethods;

},{"./methods":197}],197:[function(_dereq_,module,exports){
'use strict';

//perform sort on pre-computed values
const sortEm = function(arr) {
  arr = arr.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    }
    if (a.index === b.index) {
      return 0;
    }
    return -1;
  });
  //return ts objects
  return arr.map((o) => o.ts);
};

//alphabetical sorting of a termlist array
exports.alpha = function(r) {
  r.list.sort((a, b) => {
    //#1 performance speedup
    if (a === b) {
      return 0;
    }
    //#2 performance speedup
    if (a.terms[0] && b.terms[0]) {
      if (a.terms[0].root > b.terms[0].root) {
        return 1;
      }
      if (a.terms[0].root < b.terms[0].root) {
        return -1;
      }
    }
    //regular compare
    if (a.out('root') > b.out('root')) {
      return 1;
    }
    return -1;
  });
  return r;
};

//the order they were recieved (chronological~)
exports.chron = function(r) {
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    return {
      ts: ts,
      index: ts.termIndex()
    };
  });
  r.list = sortEm(tmp);
  return r;
};

//shortest matches first
exports.lengthFn = function(r) {
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    return {
      ts: ts,
      index: ts.chars()
    };
  });
  r.list = sortEm(tmp).reverse();
  return r;
};

//count the number of terms in each match
exports.wordCount = function(r) {
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    return {
      ts: ts,
      index: ts.length
    };
  });
  r.list = sortEm(tmp);
  return r;
};

//sort by frequency (like topk)
exports.freq = function(r) {
  //get counts
  let count = {};
  r.list.forEach((ts) => {
    let str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  });
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    let num = count[ts.out('root')] || 0;
    return {
      ts: ts,
      index: num * -1 //quick-reverse it
    };
  });
  r.list = sortEm(tmp);
  return r;
};

},{}],198:[function(_dereq_,module,exports){
'use strict';

const splitMethods = (Text) => {

  const methods = {
    /** turn result into two seperate results */
    splitAfter: function(reg, verbose) {
      let list = [];
      this.list.forEach((ts) => {
        ts.splitAfter(reg, verbose).forEach((mts) => {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },
    /** turn result into two seperate results */
    splitBefore: function(reg, verbose) {
      let list = [];
      this.list.forEach((ts) => {
        ts.splitBefore(reg, verbose).forEach((mts) => {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },
    /** turn result into two seperate results */
    splitOn: function(reg, verbose) {
      let list = [];
      this.list.forEach((ts) => {
        ts.splitOn(reg, verbose).forEach((mts) => {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },
  };

  //hook them into result.proto
  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{}],199:[function(_dereq_,module,exports){
module.exports = _dereq_('../paths');

},{"../paths":8}],200:[function(_dereq_,module,exports){
'use strict';
const isQuestion = _dereq_('../subset/sentences/isQuestion');
const addSubsets = Text => {
  //these subsets have no instance methods, so are simply a 'find' method.
  const subsets = {
    clauses: function(n) {
      let r = this.splitAfter('#ClauseEnd');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    hashTags: function(n) {
      let r = this.match('#HashTag').terms();
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    organizations: function(n) {
      let r = this.splitAfter('#Comma');
      r = r.match('#Organization+');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    phoneNumbers: function(n) {
      let r = this.splitAfter('#Comma');
      r = r.match('#PhoneNumber+');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    places: function(n) {
      let r = this.splitAfter('#Comma');
      r = r.match('#Place+');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    quotations: function(n) {
      let r = this.match('#Quotation+');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    topics: function(n) {
      let r = this.clauses();
      //find people, places, and organizations
      let yup = r.people();
      yup.concat(r.places());
      yup.concat(r.organizations());
      //return them to normal ordering
      yup.sort('chronological');
      // yup.unique() //? not sure
      if (typeof n === 'number') {
        yup = yup.get(n);
      }
      return yup;
    },
    urls: function(n) {
      let r = this.match('#Url');
      if (typeof n === 'number') {
        r = r.get(n);
      }
      return r;
    },
    questions: function(n) {
      let r = this.all();
      if (typeof n === 'number') {
        r = r.get(n);
      }
      let list = r.list.filter(ts => isQuestion(ts));
      return new Text(list, this.world, this.parent);
    },
    statements: function(n) {
      let r = this.all();
      if (typeof n === 'number') {
        r = r.get(n);
      }
      let list = r.list.filter(ts => isQuestion(ts) === false);
      return new Text(list, this.world, this.parent);
    }
  };

  Object.keys(subsets).forEach(k => {
    Text.prototype[k] = subsets[k];
  });
  return Text;
};
module.exports = addSubsets;

},{"../subset/sentences/isQuestion":51}],201:[function(_dereq_,module,exports){
//(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
// Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
// @spencermountain 2017 MIT
'use strict';
const abbreviations = Object.keys(_dereq_('../world/more-data/abbreviations'));
//regs-
const abbrev_reg = new RegExp('\\b(' + abbreviations.join('|') + ')[.!?] ?$', 'i');
const acronym_reg = new RegExp('[ |.][A-Z].?( *)$', 'i');
const elipses_reg = new RegExp('\\.\\.+( *)$');

//start with a regex:
const naiive_split = function(text) {
  let all = [];
  //first, split by newline
  let lines = text.split(/(\n+)/);
  for (let i = 0; i < lines.length; i++) {
    //split by period, question-mark, and exclamation-mark
    let arr = lines[i].split(/(\S.+?[.!?])(?=\s+|$)/g);
    for (let o = 0; o < arr.length; o++) {
      all.push(arr[o]);
    }
  }
  return all;
};

const sentence_parser = function(text) {
  text = text || '';
  text = String(text);
  let sentences = [];
  //first do a greedy-split..
  let chunks = [];
  //ensure it 'smells like' a sentence
  if (!text || typeof text !== 'string' || /\S/.test(text) === false) {
    return sentences;
  }
  //start somewhere:
  let splits = naiive_split(text);
  //filter-out the grap ones
  for (let i = 0; i < splits.length; i++) {
    let s = splits[i];
    if (s === undefined || s === '') {
      continue;
    }
    //this is meaningful whitespace
    if (/\S/.test(s) === false) {
      //add it to the last one
      if (chunks[chunks.length - 1]) {
        chunks[chunks.length - 1] += s;
        continue;
      } else if (splits[i + 1]) {
        //add it to the next one
        splits[i + 1] = s + splits[i + 1];
        continue;
      }
    }
    //else, only whitespace, no terms, no sentence
    chunks.push(s);
  }

  //detection of non-sentence chunks:
  //loop through these chunks, and join the non-sentence chunks back together..
  for (let i = 0; i < chunks.length; i++) {
    let c = chunks[i];
    //should this chunk be combined with the next one?
    if (chunks[i + 1] && /[a-zA-Z]/.test(c) && (abbrev_reg.test(c) || acronym_reg.test(c) || elipses_reg.test(c))) {
      chunks[i + 1] = c + (chunks[i + 1] || '');
    } else if (c && c.length > 0 && /[a-zA-Z]/.test(c)) {
      //this chunk is a proper sentence..
      sentences.push(c);
      chunks[i] = '';
    }
  }
  //if we never got a sentence, return the given text
  if (sentences.length === 0) {
    return [text];
  }
  return sentences;
};

module.exports = sentence_parser;
// console.log(sentence_parser('john f. kennedy'));

},{"../world/more-data/abbreviations":210}],202:[function(_dereq_,module,exports){
module.exports=`{"words":"Comparative¦better|Superlative¦earlier|PresentTense¦sounds|Value¦a few|Noun¦aVbScQdMeLfJgardenUhIinstruct01journalXlawyUmHnGoEpBr9s5t2w0yesterdF;eek0iQ;dDend;echnKherapUmr1o0;dBmorrow;!w;ailVcientRo1tandardJu0;mmNpervSrgeon;ldiMme 0;d6poiU;e0oofK;ceptionMsearI;hotographIlumbIoli1r0sychologL;actitionHogrammH;cemAt9;fficFne d0peL;ay;o doubt,urse;echanic,inistCus5;airdressBere,ousekeepB;armAire0;fight9m3;ngine8om;aylight2eputy,iet0;ici0;an; time;arpe0lerk;nt2;ricklay1ut0;ch0;er;ccoun6d2ge7r0ssis6ttenda7utumn;chitect,t0;ist;minist1v0;is1;rat0;or;ta0;nt|Copula¦a1is,w0;as,ere;m,re|Condition¦if,unless|PastTense¦be2came,d1had,mea0sa1taken,we0;nt;id;en,gan|Gerund¦accord0be0develop0go0result0stain0;ing|Negative¦n0;ever,o0;!n,t|QuestionWord¦how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s|Singular¦aYbUcPdLeJfIgHhDjelZkitty,lCmAn9o8p6r5s3t1us 0;dollQstR;alXh0ic,ragedy,v show;ere,iU;ky,tu0uper bowl,ystW;dFff;alToom;a0roblTurpo8;rt,tC;cean,thers;othiNumbE;eetiMo0;del,nopoN;iMunch;ead start,o0;lKme1u0;se;! run;laci6od,rand slam,ulH;amiGly,olGriend,undiE;conomy,gg,ner3v0xampC;ent;eath,inn2o0;cument6g0iClCor;gy;er;an3eili7hocol2i0ottage,redit card;ty,vil w0;ar;ate;ary;anki2el4o0reakfast;dy,tt0;le;ng;d homin1l0noma0;ly;em|Infinitive¦0:6Y;1:7C;2:7A;3:79;4:5F;5:74;6:6D;7:6L;8:78;9:6W;A:73;B:76;C:6R;D:68;E:7D;F:60;a6Qb69c5Bd4Je43f3Qg3Jh3Ci2Zj2Xk2Tl2Km2Bn28o24p1Pques3Rr0Xs05tWuRvOwHyG;awn,ield;aJe24hist7iIoGre6H;nd0rG;k,ry;n,pe,sh,th0;lk,nHrGsh,tCve;n,raE;d0t;aHiGo8;ew,sA;l6Rry;nHpGr3se;gra4Wli49;dGi8lo65;erGo;go,mi5H;aNeMhKie,oJrHuGwi5;ne,rn;aGe0Ui60u5y;de,in,nsf0p,v5O;r37uC;ank,rG;eat2Vi2;nd,st;ke,lk,rg5Os8;a06c03eZhWi4Jkip,lVmUneTo56pQtJuGwitC;bmAck,ff0gge5ppHrGspe6;ge,pri1rou53vi2;ly,o3D;aLeKoJrHuG;dy,mb7;aDeGi2;ngth2Lss,tC;p,re;m,p;in,ke,r0Yy;iHlaFoil,rinG;g,k7;n,t;ak,e3E;aFe22i7o5B;am,e1Qip;aHiv0oG;ck,ut;re,ve;arCeIle6nHr2tG;!t7;d,se;k,m;aHo4rG;atCew;le,re;il,ve;a05eIisk,oHuG;b,in,le,n,sh;am,ll;a01cZdu9fYgXje6lUmTnt,pQquPsKtJvGwa5V;eGiew,o4U;al,l,rG;se,t;aDi4u42;eJi5oItG;!o4rG;i6uc20;l2rt;mb7nt,r2;e5i4;air,eHlGo40reseE;a9y;at;aDemb0i3Wo2;aHeGi2y;a1nt;te,x;a5Dr4A;act1Yle6u1;a12ei2k5PoGyc7;gni2Cnci7rd;ch,li2Bs5N;i1nG;ge,k;aTerSiRlPoNrIuG;b21ll,mp,rGsh,t;cha1s4Q;ai1eJiEoG;cHdu9greBhibAmi1te5vG;e,i2U;eBlaim;di6pa4ss,veE;iEp,rtr43sGur;e,t;a3RuG;g,n3;ck,le;fo32mAsi5;ck,iErt4Mss,u1y;bIccur,ff0pera8utweHverGwe;co47lap,ta3Qu1whelm;igh;ser2taD;eHotG;e,i9;ed,gle6;aLeKiIoHuG;ltip3Frd0;nit14ve;nGrr13;d,g7us;asu4lt,n0Qr3ssa3;intaDke d40na3rHtG;ch,t0;ch,k39ry;aMeLiIoGu1F;aGck,ok,ve;d,n;ft,ke,mAnHstGve;!en;e,k;a2Gc0Ht;b0Qck,uG;gh,nC;eIiHnoG;ck,w;ck,ll,ss;ep;am,oDuG;d3mp;gno4mQnGss3I;cOdica8flu0NhNsKtIvG;eGol2;nt,st;erGrodu9;a6fe4;i5tG;aGru6;ll;abAibA;lu1Fr1D;agi22pG;lemeEo20ro2;aKeIi4oHuG;nt,rry;ld fa5n03pe,st;aGlp;d,t;nd7ppGrm,te;en;aLet,loBoKrIuG;arGeBi14;ant39d;aGip,ow,umb7;b,sp;es,ve1I;in,th0ze;aQeaPiNlLoIracHuncG;ti3I;tu4;cus,lHrG;ce,eca5m,s30;d,l22;aFoG;at,od,w;gu4lGniFx;e,l;r,tu4;il,ll,vG;or;a13cho,dAle6mSnPstNvalua8xG;a0AcLerKi5pGte16;a15eHlaDoGreB;rt,se;ct,riG;en9;ci1t;el,han3;abGima8;liF;ab7couXdHfor9ga3han9j03riCsu4t0vG;isi2Vy;!u4;body,er3pG;hasiGow0;ze;a06eUiMoLrHuG;mp;aIeHiGop;ft;am,ss;g,in;!d3ubt;e,ff0p,re6sHvG;e,iXor9;aJcGli13miBpl18tinguiF;oGuB;uGv0;ra3;gr1YppG;ear,ro2;al,cNem,fLliv0ma0Cny,pKsHterG;mi0D;cribe,er2iHtrG;oy;gn,re;a08e07i6osA;eGi08y;at,ct;iIlHrG;ea1;a4i04;de;ma3n9re,te;a0Ae09h06i8l03oJrGut;aHeGoBuFy;a8dA;ck,ve;llYmSnHok,py,uGv0;gh,nt;cePdu6fMsKtIvG;eGin9;rt,y;aDin0XrG;a5ibu8ol;iGtitu8;d0st;iHoGroE;rm;gu4rm;rn;biKe,foJmaIpG;a4laD;re;nd;rt;ne;ap1e6;aHiGo1;ng,p;im,w;aHeG;at,ck,w;llen3n3r3se;a1nt0;ll,ncHrGt0u1;e,ry;el;aUeQloPoNrKuG;dgIlHrG;n,y;ly;et;aHuF;sh;ke;a5mb,o5rrGth0un9;ow;ck;ar,coSgDlHnefAtrG;ay;ie2ong;in;nGse;!g;band0Jc0Bd06ffo05gr04id,l01mu1nYppTrQsKttGvoid,waA;acIeHra6;ct;m0Fnd;h,k;k,sG;eIiHocia8uG;me;gn,st;mb7rt;le;chHgGri2;ue;!i2;eaJlIroG;aCve;ch;aud,y;l,r;noun9sw0tG;icipa8;ce;lHt0;er;e3ow;ee;rd;dIju5mAoR;it;st;!reB;ss;cJhie2knowled3tiva8;te;ge;ve;eIouEu1;se;nt;pt;on|Honorific¦ayatullah,c8d7excellency,general,king,l5mayDp2queen,r1s0;ecretary,ultA;abbi,everend;astAr0;eside2ince0ofess9;!ss;ady,ieutena0ord;nt;oct5utchess;aptain,hance3o0;mmander,ngress0unci2;m0wom0;an;ll0;or|SportsTeam¦0:1M;1:1T;2:1U;a1Rb1Dc0Zd0Qfc dallas,g0Nhouston 0Mindiana0Ljacksonville jagua0k0Il0Fm02newVoRpKqueens parkJrIsAt5utah jazz,vancouver whitecaps,w3yY;ashington 3est ham0Xh16;natio21redski1wizar12;ampa bay 6e5o3;ronto 3ttenham hotspur;blu1Hrapto0;nnessee tita1xasD;buccanee0ra1G;a7eattle 5heffield0Qporting kansas13t3;. louis 3oke12;c1Srams;mari02s3;eah1IounI;cramento Sn 3;antonio spu0diego 3francisco gi0Bjose earthquak2;char0EpaB;eal salt lake,o04; ran0C;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat2steele0;il3oenix su1;adelphia 3li2;eagl2philNunE;dr2;akland 4klahoma city thunder,r3;i10lando magic;athle0Trai3;de0; 3castle05;england 6orleans 5york 3;city fc,giUje0Lkn02me0Lred bul19y3;anke2;pelica1sain0J;patrio0Irevolut3;ion;aBe9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Rvi3;kings;imberwolv2wi1;re0Cuc0W;dolphi1heat,marli1;mphis grizz3ts;li2;nchester 5r3vN;i3li1;ne0;c00u0H;a4eicesterYos angeles 3;clippe0dodFlaA; galaxy,ke0;ansas city 3nH;chiefs,ro3;ya0M; pace0polis colX;astr0Edynamo,rockeWtexa1;i4olden state warrio0reen bay pac3;ke0;anT;.c.Aallas 7e3i0Cod5;nver 5troit 3;lio1pisto1ti3;ge0;bronc06nuggeO;cowboUmav3;er3;ic06; uX;arCelNh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki2;brow1cavalie0india1;benga03re3;ds;arlotte horCicago 3;b4cubs,fire,wh3;iteE;ea0ulY;di3olina panthe0;ff3naW; c3;ity;altimore ElAoston 7r3uffalo bilT;av2e5ooklyn 3;ne3;ts;we0;cel4red3; sox;tics;ackburn rove0u3;e ja3;ys;rs;ori3rave1;ol2;rizona Ast8tlanta 3;brav2falco1h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls|Uncountable¦0:1C;a1Hb1Bc12e0Wf0Qg0Mh0Gi0Dj0Cknowled1Gl07mYnXoWpRrOsCt8vi7w1;a5ea0Ai4o1;o2rld1;! seI;d,l;ldlife,ne;rmth,t0;neg0Xol08;e3hund0ime,oothpaste,r1una;affRou1;ble,sers,t;a,nnis;aAcene07e9h8il7now,o6p3te2u1;g0Rnshi0L;am,el;ace2e1;ciOed;!c12;ap,cc0ft0B;k,v0;eep,opp0O;riJ;d07fe0Wl1nd;m0Qt;ain,e1i0W;c1laxa0Csearch;ogni0Brea0B;a4e2hys0Elast9o1ress00;rk,w0;a1pp0trol;ce,nR;p0tiK;il,xygen;ews,oi0C;a7ea5i4o3u1;mps,s1;ic;nHo08;lk,st;sl1t;es;chine1il,themat00; learn02ry;aught0e3i2u1;ck,g07;ghtnZqu0CteratI;a1isH;th0;ewel7usti08;ce,mp1nformaOtself;ati1ortan06;en05;a4isto3o1;ck1mework,n1spitali01;ey;ry;ir,lib1ppi9;ut;o2r1um,ymnastJ;a7ound;l1ssip;d,f;i5lour,o2ruit,urnit1;ure;od,rgive1wl;ne1;ss;c6sh;conom9duca5lectriciMn3quip4th9very1;body,o1thB;ne;joy1tertain1;ment;tiC;a8elcius,h4iv3loth6o1urrency;al,ffee,ld w1nfusiAttA;ar;ics;aos,e1;e2w1;ing;se;ke,sh;a3eef,is2lood,read,utt0;er;on;g1ss;ga1;ge;c4dvi3irc2mnes1rt;ty;raft;ce;id|Unit¦0:17;a12b10c0Md0Le0Jf0Fg0Bh08in07joule0k01lZmOnNoMpIqHsqCt7volts,w6y4z3°2µ1;g,s;c,f,n;b,e2;a0Lb,d0Rears old,o1;tt0F;att0b;able4b3e2on1sp;!ne0;a2r0B;!l,sp;spo03; ft,uare 1;c0Gd0Ff3i0Dkilo0Hm1ya0C;e0Kil1;e0li0F;eet0o0B;t,uart0;a3e2i1ou0Nt;c0Knt0;rcent,t00;!scals;hms,uVz;an0GewtR;/s,b,e7g,i3l,m2p1²,³;h,s;!²;!/h,cro3l1;e1li05;! DsC²;g05s0A;gPter1;! 2s1;! 1;per second;b,iZm,u1x;men0x0;b,elvin0g,ilo2m1nQ;!/h,ph,²;byYgWmeter1;! 2s1;! 1;per hour;²,³;e1g,z;ct1rtz0;aWogP;al2b,ig9ra1;in0m0;!l1;on0;a3emtOl1tG; oz,uid ou1;nce0;hrenheit0rad0;b,x1;abyH;eciCg,l,mA;arat0eAg,l,m9oulomb0u1;bic 1p0;c5d4fo3i2meAya1;rd0;nch0;ot0;eci2;enti1;me4;!²,³;lsius0nti1;g2li1me1;ter0;ram0;bl,y1;te0;c4tt1;os1;eco1;nd0;re0;!s|Pronoun¦'em,elle,h4i3me,ourselves,she5th1us,we,you0;!rself;e0ou;m,y;!l,t;e0im;!'s|Organization¦0:42;1:40;a38b2Pc29d21e1Yf1Ug1Mh1Hi1Ej1Ak18l14m0Tn0Go0Dp07qu06rZsStFuBv8w3y2;amaha,m0Youtu2Rw0Y;a4e2orld trade organizati1;lls fargo,st2;fie23inghou18;l2rner br3B;-m13gree30l street journ25m13;an halOeriz1isa,o2;dafo2Gl2;kswagMvo;bs,n3ps,s2;a tod2Qps;es33i2;lev2Wted natio2T; mobi2Jaco beQd bNeBgi fridaAh4im horto2Smz,o2witt2V;shiba,y2;ota,s r Z;e 2in lizzy;b4carpen31daily ma2Vguess w3holli0rolling st1Ns2w3;mashing pumpki2Nuprem0;ho;ea2lack eyed pe3Dyrds;ch bo2tl0;ys;l3s2;co,la m14;efoni09us;a7e5ieme2Fo3pice gir6ta2ubaru;rbucks,to2L;ny,undgard2;en;a2Px pisto2;ls;few24insbu25msu1W;.e.m.,adiohead,b7e4oyal 2yan2V;b2dutch she5;ank;/max,aders dige1Ed 2vl1;bu2c1Thot chili peppe2Ilobst27;ll;c,s;ant2Tizno2D;an6bs,e4fiz23hilip morrCi3r2;emier25octer & gamb1Qudenti14;nk floyd,zza hut;psi26tro2uge0A;br2Ochina,n2O; 3ason1Wda2E;ld navy,pec,range juli3xf2;am;us;aBbAe6fl,h5i4o2sa,wa;kia,tre dame,vart2;is;ke,ntendo,ss0L;l,s;stl4tflix,w2; 2sweek;kids on the block,york0A;e,é;a,c;nd1Rs3t2;ional aca2Co,we0P;a,cZd0N;aBcdonaldAe6i4lb,o2tv,yspace;b1Knsanto,ody blu0t2;ley crue,or0N;crosoft,t2;as,subisP;dica4rcedes3talli2;ca;!-benz;id,re;'s,s;c's milk,tt11z1V;'ore08a4e2g,ittle caesa1H;novo,x2;is,mark; pres6-z-boy;atv,fc,kk,m2od1H;art;iffy lu0Jo4pmorgan2sa;! cha2;se;hnson & johns1y d1O;bm,hop,n2tv;g,te2;l,rpol; & m,asbro,ewlett-packaSi4o2sbc,yundai;me dep2n1G;ot;tac2zbollah;hi;eneral 7hq,l6o3reen d0Gu2;cci,ns n ros0;ldman sachs,o2;dye2g09;ar;axo smith kliYencore;electr0Gm2;oto0S;a4bi,da,edex,i2leetwood mac,oFrito-l08;at,nancial2restoU; tim0;cebook,nnie mae;b04sa,u,xxon2; m2m2;ob0E;aiml09e6isney,o4u2;nkin donuts,po0Uran dur2;an;j,w j2;on0;a,f leppa3ll,peche mode,r spiegYstiny's chi2;ld;rd;aFbc,hCiAnn,o4r2;aigsli6eedence clearwater reviv2;al;ca c6l5m2o09st04;ca3p2;aq;st;dplMgate;ola;a,sco2tigroup;! systems;ev3i2;ck fil-a,na daily;r1y;dbury,pital o2rl's jr;ne;aGbc,eCfAl6mw,ni,o2p;ei4mbardiKston 2;glo2pizza;be;ng;ack & deckGo3ue c2;roX;ckbuster video,omingda2;le; g2g2;oodriN;cht4e ge0n & jer3rkshire hathaw2;ay;ryH;el;nana republ4s2xt6y6;f,kin robbi2;ns;ic;bXcSdidRerosmith,ig,lLmFnheuser-busEol,ppleAr7s4t&t,v3y2;er;is,on;hland2sociated G; o2;il;by5g3m2;co;os; compu3bee2;'s;te2;rs;ch;c,d,erican4t2;!r2;ak; ex2;pre2;ss; 5catel3t2;air;!-luce2;nt;jazeera,qae2;da;as;/dc,a4er,t2;ivisi1;on;demy of scienc0;es;ba,c|Demonym¦0:16;1:13;a0Wb0Nc0Cd0Ae09f07g04h02iYjVkTlPmLnIomHpDqatari,rBs7t5u4v3wel0Rz2;am0Fimbabwe0;enezuel0ietnam0H;g9krai1;aiwThai,rinida0Iu2;ni0Qrkmen;a4cot0Ke3ingapoOlovak,oma0Tpa05udRw2y0X;edi0Kiss;negal0Br08;mo0uU;o6us0Lw2;and0;a3eru0Hhilipp0Po2;li0Ertugu06;kist3lesti1na2raguay0;ma1;ani;amiZi2orweP;caragu0geri2;an,en;a3ex0Mo2;ngo0Erocc0;cedo1la2;gasy,y08;a4eb9i2;b2thua1;e0Dy0;o,t02;azakh,eny0o2uwaiti;re0;a2orda1;ma0Bp2;anN;celandic,nd4r2sraeli,ta02vo06;a2iT;ni0qi;i0oneV;aiDin2ondur0unN;di;amDe2hanai0reek,uatemal0;or2rm0;gi0;i2ren7;lipino,n4;cuadoVgyp6ngliJsto1thiopi0urope0;a2ominXut4;niH;a9h6o4roa3ub0ze2;ch;ti0;lom2ngol5;bi0;a6i2;le0n2;ese;lifor1m2na3;bo2eroo1;di0;angladeshi,el8o6r3ul2;gaG;aziBi2;ti2;sh;li2s1;vi0;aru2gi0;si0;fAl7merBngol0r5si0us2;sie,tr2;a2i0;li0;gent2me1;ine;ba1ge2;ri0;ni0;gh0r2;ic0;an|Region¦a20b1Sc1Id1Des1Cf19g13h10i0Xj0Vk0Tl0Qm0FnZoXpSqPrMsDtAut9v5w2y0zacatec22;o05u0;cat18kZ;a0est vir4isconsin,yomi14;rwick1Qshington0;! dc;er2i0;cto1Ir0;gin1R;acruz,mont;ah,tar pradesh;a1e0laxca1Cusca9;nnessee,x1Q;bas0Jmaulip1PsmI;a5i3o1taf0Nu0ylh12;ffUrrZs0X;me0Zno19uth 0;cRdQ;ber1Hc0naloa;hu0Rily;n1skatchew0Qxo0;ny; luis potosi,ta catari1H;a0hode6;j0ngp01;asth0Lshahi;inghai,u0;e0intana roo;bec,ensVreta0D;ara3e1rince edward0; isT;i,nnsylv0rnambu01;an13;!na;axa0Mdisha,h0klaho1Antar0reg3x03;io;ayarit,eAo2u0;evo le0nav0K;on;r0tt0Qva scot0W;f5mandy,th0; 0ampton0P;c2d1yo0;rk0N;ako0X;aroli0U;olk;bras0Wva00w0; 1foundland0;! and labrador;brunswick,hamp0Gjers0mexiIyork state;ey;a5i1o0;nta0Mrelos;ch2dlanAn1ss0;issippi,ouri;as geraFneso0L;igPoacP;dhya,harasht03ine,ni2r0ssachusetts;anhao,y0;land;p0toba;ur;anca03e0incoln03ouis7;e0iG;ds;a0entucky,hul09;ns07rnata0Cshmir;alis0iangxi;co;daho,llino1nd0owa;ia04;is;a1ert0idalDun9;fordS;mpRwaii;ansu,eorgVlou4u0;an1erre0izhou,jarat;ro;ajuato,gdo0;ng;cesterL;lori1uji0;an;da;sex;e3o1uran0;go;rs0;et;lawaDrbyC;a7ea6hi5o0umbrG;ahui3l2nnectic1rsi0ventry;ca;ut;iLorado;la;apDhuahua;ra;l7m0;bridge2peche;a4r3uck0;ingham0;shi0;re;emen,itish columb2;h1ja cal0sque,var1;iforn0;ia;guascalientes,l3r0;izo1kans0;as;na;a1ber0;ta;ba1s0;ka;ma|Possessive¦anyAh5its,m3noCo1sometBthe0yo1;ir1mselves;ur0;!s;i8y0;!se4;er1i0;mse2s;!s0;!e0;lf;o1t0;hing;ne|Currency¦$,aud,bRcPdKeurJfIgbp,hkd,inr,jpy,kGlEp8r7s3usd,x2y1z0¢,£,¥,ден,лв,руб,฿,₡,₨,€,₭,﷼;lotyRł;en,uanQ;af,of;h0t5;e0il5;k0q0;elL;iel,oubleKp,upeeK;e2ound st0;er0;lingH;n0soG;ceFn0;ies,y;e0i7;i,mpi6;n,r0wanzaByatB;!onaAw;ori7ranc9t;!o8;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;ad,e0ny;nt1;aht,itcoin0;!s|Country¦0:38;1:2L;a2Wb2Dc21d1Xe1Rf1Lg1Bh19i13j11k0Zl0Um0Gn05om3CpZqat1JrXsKtCu6v4wal3yemTz2;a24imbabwe;es,lis and futu2X;a2enezue31ietnam;nuatu,tican city;.5gTkraiZnited 3ruXs2zbeE;a,sr;arab emirat0Kkingdom,states2;! of am2X;k.,s.2; 27a.;a7haBimor-les0Bo6rinidad4u2;nis0rk2valu;ey,me2Xs and caic1T; and 2-2;toba1J;go,kel0Ynga;iw2Vji2nz2R;ki2T;aCcotl1eBi8lov7o5pa2Bri lanka,u4w2yr0;az2ed9itzerl1;il1;d2Qriname;lomon1Vmal0uth 2;afr2IkLsud2O;ak0en0;erra leoEn2;gapo1Wt maart2;en;negKrb0ychellY;int 2moa,n marino,udi arab0;hele24luc0mart1Z;epublic of ir0Com2Cuss0w2;an25;a3eHhilippinTitcairn1Ko2uerto riM;l1rtugE;ki2Bl3nama,pua new0Tra2;gu6;au,esti2;ne;aAe8i6or2;folk1Gth3w2;ay; k2ern mariana1B;or0M;caragua,ger2ue;!ia;p2ther18w zeal1;al;mib0u2;ru;a6exi5icro09o2yanm04;ldova,n2roc4zamb9;a3gol0t2;enegro,serrat;co;c9dagascZl6r4urit3yot2;te;an0i14;shall0Vtin2;ique;a3div2i,ta;es;wi,ys0;ao,ed00;a5e4i2uxembourg;b2echtenste10thu1E;er0ya;ban0Gsotho;os,tv0;azakh1De2iriba02osovo,uwait,yrgyz1D;eling0Jnya;a2erF;ma15p1B;c6nd5r3s2taly,vory coast;le of m19rael;a2el1;n,q;ia,oI;el1;aiSon2ungary;dur0Mg kong;aAermany,ha0Pibralt9re7u2;a5ern4inea2ya0O;!-biss2;au;sey;deloupe,m,tema0P;e2na0M;ce,nl1;ar;bTmb0;a6i5r2;ance,ench 2;guia0Dpoly2;nes0;ji,nl1;lklandTroeT;ast tim6cu5gypt,l salv5ngl1quatorial3ritr4st2thiop0;on0; guin2;ea;ad2;or;enmark,jibou4ominica3r con2;go;!n B;ti;aAentral african 9h7o4roat0u3yprQzech2; 8ia;ba,racao;c3lo2morPngo-brazzaville,okFsta r03te d'ivoiK;mb0;osD;i2ristmasF;le,na;republic;m2naTpe verde,yman9;bod0ero2;on;aFeChut00o8r4u2;lgar0r2;kina faso,ma,undi;azil,itish 2unei;virgin2; is2;lands;liv0nai4snia and herzegoviGtswaGuvet2; isl1;and;re;l2n7rmuF;ar2gium,ize;us;h3ngladesh,rbad2;os;am3ra2;in;as;fghaFlCmAn5r3ustr2zerbaijH;al0ia;genti2men0uba;na;dorra,g4t2;arct6igua and barbu2;da;o2uil2;la;er2;ica;b2ger0;an0;ia;ni2;st2;an|City¦a2Wb26c1Wd1Re1Qf1Og1Ih1Ai18jakar2Hk0Zl0Tm0Gn0Co0ApZquiYrVsLtCuBv8w3y1z0;agreb,uri1Z;ang1Te0okohama;katerin1Hrev34;ars3e2i0rocl3;ckl0Vn0;nipeg,terth0W;llingt1Oxford;aw;a1i0;en2Hlni2Z;lenc2Uncouv0Gr2G;lan bat0Dtrecht;a6bilisi,e5he4i3o2rondheim,u0;nVr0;in,ku;kyo,ronIulouC;anj23l13miso2Jra2A; haJssaloni0X;gucigalpa,hr2Ol av0L;i0llinn,mpe2Bngi07rtu;chu22n2MpT;a3e2h1kopje,t0ydney;ockholm,uttga12;angh1Fenzh1X;o0KvZ;int peters0Ul3n0ppo1F; 0ti1B;jo0salv2;se;v0z0Q;adU;eykjavik,i1o0;me,t25;ga,o de janei17;to;a8e6h5i4o2r0ueb1Qyongya1N;a0etor24;gue;rt0zn24; elizabe3o;ls1Grae24;iladelph1Znom pe07oenix;r0tah tik19;th;lerJr0tr10;is;dessa,s0ttawa;a1Hlo;a2ew 0is;delTtaip0york;ei;goya,nt0Upl0Uv1R;a5e4i3o1u0;mb0Lni0I;nt0scH;evideo,real;l1Mn01skolc;dellín,lbour0S;drid,l5n3r0;ib1se0;ille;or;chest0dalWi0Z;er;mo;a4i1o0vAy01;nd00s angel0F;ege,ma0nz,sbZverpo1;!ss0;ol; pla0Iusan0F;a5hark4i3laipeda,o1rak0uala lump2;ow;be,pavog0sice;ur;ev,ng8;iv;b3mpa0Kndy,ohsiu0Hra0un03;c0j;hi;ncheMstanb0̇zmir;ul;a5e3o0; chi mi1ms,u0;stI;nh;lsin0rakliG;ki;ifa,m0noi,va0A;bu0SiltD;alw4dan3en2hent,iza,othen1raz,ua0;dalaj0Gngzhou;bu0P;eUoa;sk;ay;es,rankfu0;rt;dmont4indhovU;a1ha01oha,u0;blRrb0Eshanbe;e0kar,masc0FugavpiJ;gu,je0;on;a7ebu,h2o0raioJuriti01;lo0nstanJpenhagNrk;gFmbo;enn3i1ristchur0;ch;ang m1c0ttagoL;ago;ai;i0lgary,pe town,rac4;ro;aHeBirminghWogoAr5u0;char3dap3enos air2r0sZ;g0sa;as;es;est;a2isba1usse0;ls;ne;silPtisla0;va;ta;i3lgrade,r0;g1l0n;in;en;ji0rut;ng;ku,n3r0sel;celo1ranquil0;la;na;g1ja lu0;ka;alo0kok;re;aBb9hmedabad,l7m4n2qa1sh0thens,uckland;dod,gabat;ba;k0twerp;ara;m5s0;terd0;am;exandr0maty;ia;idj0u dhabi;an;lbo1rh0;us;rg|Place¦aKbIcGdFevergladEfDgAh9i8jfk,kul,l6m4new england,ord,p2s1the 0upHyyz;bronx,hamptons;fo,oho,yd;acifKek,h0;l,x;a0co,idCuc;libu,nhattJ;a0gw,hr;s,x;ax,cn,ndianFst;arlem,kg,nd;ay village,re0;at 0enwich;britain,lak1;co,ra;es;en,fw,own1xb;dg,gk,hina0lt;town;cn,e0kk,rooklyn;l air,verly hills;ms,ntar1r1tl0;!ant1;ct0;ic0; oce0;an|FemaleName¦0:G0;1:G4;2:FT;3:FF;4:FE;5:ER;6:FU;7:ET;8:GH;9:F1;A:GD;B:E7;C:EI;D:FQ;E:GA;F:FN;G:C8;aE4bD6cB9dAJe9Hf92g8Ih85i7Uj6Wk61l4Pm3An2Vo2Sp2Hqu2Fr1Ps0Rt05ursu7vVwPyMzH;aKeIoH;e,la,ra;lHna;da,ma;da,ra;as7GeIol1UvH;et5onBA;le0sen3;an9endBPhiB5iH;lJnH;if3BniHo0;e,f3A;a,helmi0lHma;a,ow;aNeKiH;cIviH;an9YenG4;kD1tor3;da,l8Wnus,rH;a,nHoniD4;a,iDE;leHnesEF;nDOrH;i1y;aTeQhOiNoKrHu7y4;acG6iHu0F;c3na,sH;h9Nta;nIrH;a,i;i9Kya;a5KffaCIna,s6;al3eHomasi0;a,l8Ho6Zres1;g7Vo6YrIssH;!a,ie;eCi,ri8;bOliNmLnJrIs6tHwa0;ia0um;a,yn;iHya;a,ka,s6;a4e4iHmCCra;!ka;a,t6;at6it6;a06carlet2Ze05hViTkye,oRtNuIyH;bFMlvi1;e,sIzH;an2Uet5ie,y;anHi8;!a,e,nH;aFe;aJeH;fHl3EphH;an2;cFBr73;f3nHphi1;d4ia,ja,ya;er4lv3mon1nHobh76;dy;aLeHirlBNo0y7;ba,e0i7lJrH;iHrBRyl;!d71;ia,lBX;ki4nJrIu0w0yH;la,na;i,leAon,ron;a,da,ia,nHon;a,on;l60re0;bNdMi9lLmJndIrHs6vannaF;aFi0;ra,y;aHi4;nt6ra;lBPome;e,ie;in1ri0;a03eYhWiUoIuH;by,thBM;bRcQlPnOsIwe0xH;an95ie,y;aIeHie,lE;ann8ll1marBHtB;!lHnn1;iHyn;e,nH;a,d7X;da,i,na;an9;hel55io;bin,erByn;a,cHkki,na,ta;helC2ki;ea,iannE0oH;da,n13;an0bJgi0i0nHta,y0;aHee;!e,ta;a,eH;cATkaF;chHe,i0mo0n5FquCGvDy0;aCFelHi9;!e,le;een2iH;a0nn;aNeMhKoJrH;iHudenAX;scil1Uyamva9;lly,rt3;ilome0oebe,ylH;is,lis;arl,ggy,nelope,r7t4;ige,m0Fn4Po7rvaBDtIulH;a,et5in1;ricHsy,tA9;a,e,ia;ctav3deIf86lHph86;a,ga,iv3;l3t5;aReQiKoHy7;eIrH;aFeDma;ll1mi;aLcJkHla,na,s6ta;iHki;!ta;hoB4k8ColH;a,eBJ;!mh;l7Una,risC;dJi5PnIo23taH;li1s6;cy,et5;eAiCQ;a01ckenz2eViLoIrignayani,uriBIyrH;a,na,tAV;i4ll9ZnH;a,iH;ca,ka,qB7;a,chPkaOlKmi,nJrHtzi;aHiam;!n9;a,dy,erva,h,n2;a,dJi9LlH;iHy;cent,e;red;!e7;ae7el3I;ag4LgLi,lIrH;edi62isCyl;an2iHliC;nHsAP;a,da;!an,han;b09c9Gd07e,g05i04l02n00rLtKuIv6TxGyHz2;a,bell,ra;de,rH;a,eD;h77il9t2;a,cTgPiKjor2l6Jn2s6tJyH;!aHbe5RjaAlou;m,n9V;a,ha,i0;!aJbAOeIja,lEna,sHt54;!a,ol,sa;!l07;!h,m,nH;!a,e,n1;arJeIie,oHr3Lueri5;!t;!ry;et3JiB;elHi62y;a,l1;dHon,ue7;akranBy;iHlo97;a,ka,n9;a,re,s2;daHg2;!l2Y;alEd2elHge,isBJon0;eiAin1yn;el,le;a0Je09iXoRuLyH;d3la,nH;!a,dIe9VnHsAT;!a,e9U;a,sAR;aB4cKelJiClIna,pHz;e,iB;a,u;a,la;iHy;a2Ce,l27n9;is,l1IrItt2uH;el7is1;aJeIi8na,rH;aGi8;lei,n1tB;!in1;aRbQd3lMnJsIv3zH;!a,be4Let5z2;a,et5;a,dH;a,sHy;ay,ey,i,y;a,iaJlH;iHy;a8Je;!n4G;b7Verty;!n5T;aOda,e0iMla,nLoJslAUtHx2;iHt2;c3t3;la,nHra;a,ie,o4;a,or1;a,gh,laH;!ni;!h,nH;a,d4e,n4O;cOdon7Ui7kes6na,rNtLurJvIxHy7;mi;ern1in3;a,eHie,yn;l,n;as6is6oH;nya,ya;a,isC;ey,ie,y;a01eWhadija,iOoNrJyH;lHra;a,ee,ie;isHy5D;!tH;a,en,iHy;!e,n48;ri,urtn9C;aNerMl9BmJrHzzy;a,stH;en,in;!berlH;eHi,y;e,y;a,stD;!na,ra;el6QiKlJnIrH;a,i,ri;d4na;ey,i,l9Ss2y;ra,s6;c8Yi5YlPma7nyakumari,rNss5MtKviByH;!e,lH;a,eH;e,i7A;a5FeIhHi3PlEri0y;arGerGie,leDr9Hy;!lyn75;a,en,iHl4Vyn;!ma,n31sC;ei74i,l2;a05eWilUoNuH;anLdKliHstG;aIeHsC;!nAt0W;!n8Z;e,i2Ry;a,iB;!anMcelEd5Wel73han6JlKni,sIva0yH;a,ce;eHie;fi0lEphG;eHie;en,n1;!a,e,n36;!i10lH;!i0Z;anMle0nJrIsH;i5Rsi5R;i,ri;!a,el6Rif1RnH;a,et5iHy;!e,f1P;a,e74iInH;a,e73iH;e,n1;cMd1mi,nIqueliAsmin2Uvie4yAzH;min8;a8eIiH;ce,e,n1s;!lHsCt06;e,le;inIk2lEquelH;in1yn;da,ta;da,lQmOnNo0rMsIvaH;!na;aIiHob6W;do4;!belHdo4;!a,e,l2G;en1i0ma;a,di4es,gr5T;el9ogH;en1;a,eAia0o0se;aNeKilIoHyacin1N;ll2rten1H;a5HdHla5H;a,egard;ath0XiIlHnrietBrmiAst0X;en25ga;di;il78lLnKrHtt2yl78z6G;iHmo4Hri4I;etH;!te;aFnaF;ey,l2;aZeUiPlNold13rJwH;enHyne19;!dolE;acIetHisel9;a,chD;e,ieH;!la;adys,enHor3yn1Z;a,da,na;aKgi,lIna,ov74selH;a,e,le;da,liH;an;!n0;mZnJorgIrH;aldGi,m2Utru76;et5i5W;a,eHna;s1Ovieve;briel3Hil,le,rnet,yle;aSePio0loNrH;anIe9iH;da,e9;!cH;esIiHoi0H;n1s3X;!ca;!rH;a,en45;lIrnH;!an9;ec3ic3;rItiHy8;ma;ah,rah;d0GileDkBl01mVn4DrSsNtMuLvH;aJelIiH;e,ta;in0Byn;!ngelG;geni1la,ni3T;h55ta;meral9peranKtH;eIhHrel7;er;l2Rr;za;iHma,nestGyn;cHka,n;a,ka;eKilJmH;aHie,y;!liA;ee,i1y;lHrald;da,y;aUeSiNlMma,no4oKsJvH;a,iH;na,ra;a,ie;iHuiH;se;a,en,ie,y;a0c3da,nKsHzaI;aHe;!beH;th;!a,or;anor,nH;!a;in1na;en,iHna,wi0;e,th;aXeLiKoHul2W;lor54miniq41n32rHtt2;a,eDis,la,othHthy;ea,y;an0AnaFonAx2;anQbPde,eOiMja,lJmetr3nHsir4X;a,iH;ce,se;a,iIla,orHphiA;es,is;a,l5M;dHrdH;re;!d4Pna;!b2EoraFra;a,d4nH;!a,e;hl3i0mNnLphn1rIvi1YyH;le,na;a,by,cIia,lH;a,en1;ey,ie;a,et5iH;!ca,el1Cka;arHia;is;a0Se0Oh06i04lWoKrIynH;di,th3;istHy06;al,i0;lQnNrIurH;tn1F;aKdJiHnJriA;!nH;a,e,n1;el3;!l1T;n2sH;tanHuelo;ce,za;eHleD;en,t5;aJeoIotH;il4D;!pat4;ir8rJudH;et5iH;a,ne;a,e,iH;ce,sY;a4er4ndH;i,y;aQeNloe,rH;isIyH;stal;sy,tH;aIen,iHy;!an1e,n1;!l;lseIrH;!i8yl;a,y;nMrH;isKlImH;aiA;a,eHot5;n1t5;!sa;d4el1RtH;al,el1Q;cIlH;es5i3H;el3ilH;e,ia,y;iZlYmilXndWrOsMtHy7;aKeJhHri0;erGleDrEy;in1;ri0;li0ri0;a2IsH;a2Hie;a,iNlLmeJolIrH;ie,ol;!e,in1yn;lHn;!a,la;a,eHie,y;ne,y;na,sC;a0Ei0E;a,e,l1;isBl2;tlH;in,yn;arb0DeZianYlWoUrH;andSeQiJoIyH;an0nn;nwEok8;an2PdgLg0KtH;n29tH;!aInH;ey,i,y;ny;etH;!t8;an0e,nH;da,na;i8y;bbi8nH;iBn2;ancHossom,ythe;a,he;ca;aScky,lin9niBrOssNtJulaFvH;!erlH;ey,y;hIsy,tH;e,i11y8;!anH;ie,y;!ie;nHt6yl;adIiH;ce;et5iA;!triH;ce,z;a4ie,ra;aliy2Bb26d1Ng1Ji1Bl0Um0Pn03rYsPthe0uLvJyH;anHes6;a,na;a,eHr27;ry;drJgusIrH;el3o4;ti0;a,ey,i,y;hItrH;id;aLlHt1Q;eIi8yH;!n;e,iHy;gh;!nH;ti;iJleIpiB;ta;en,n1t5;an1AelH;le;aZdXeVgRiPja,nItoHya;inet5n3;!aKeIiHmJ;e,ka;!mHt5;ar2;!belIliCmU;sa;!le;ka,sHta;a,sa;elHie;a,iH;a,ca,n1qH;ue;!t5;te;je7rea;la;!bImHstas3;ar3;el;aJberIel3iHy;e,na;!ly;l3n9;da;aUba,eOiLlJma,ta,yH;a,c3sH;a,on,sa;iHys0K;e,s0J;a,cIna,sHza;a,ha,on,sa;e,ia;c3is6jaJna,ssaJxH;aHia;!nd4;nd4;ra;ia;i0nIyH;ah,na;a,is,naF;c6da,leDmMnslLsH;haFlH;inHyX;g,n;!h;ey;ee;en;at6g2nH;es;ie;ha;aWdiTelMrH;eJiH;anMenH;a,e,ne;an0;na;aLeKiIyH;nn;a,n1;a,e;!ne;!iH;de;e,lEsH;on;yn;!lH;iAyn;ne;agaKbIiH;!gaJ;ey,i8y;!e;il;ah|Person¦a01bZcTdQeOfMgJhHinez,jFkEleDmAnettPo9p7r4s3t2uncle,v0womL;a0irgin maH;lentino rossi,n go3;iger woods,yra banks;addam hussaQcarlett johanssRistZlobodan milosevic,omeone,tepGuC;ay romano,eese witherspoQo1ush limbau0;gh;d stewart,naldinho,sario;a0ipV;lmUris hiltM;prah winfrOra;an,essiaen,itt romnNo0ubarek;m0thR;!my;bron james,e;anye west,iefer sutherland,obe bryaN;aime,effersFk rowli0;ng;alle ber0ulk hog3;ry;astBentlem1irl,rand0uy;fa2mo2;an;a0ella;thF;ff0meril lagasse,zekiel;ie;a0enzel washingt4ick wolf,ude;d0lt3nte;!dy;ar2lint1ous0ruz;in;on;dinal wols1son0;! palm5;ey;arack obama,oy,ro0;!ck,th2;dolf hitl1shton kutch1u0;nt;er|WeekDay¦fri4mon4s2t1wed0;!nesd4;hurs2ues2;at0un1;!urd1;!d0;ay0;!s|Date¦autumn,daylight9eom,one d8s5t2w0yesterd8;eek0int5;d6end;mr1o0;d4morrow;!w;ome 1tandard3umm0;er;d0point;ay; time|Time¦a6breakfast 5dinner5e3lunch5m2n0oclock,some5to7;i7o0;on,w;id4or1;od,ve0;ning;time;fternoon,go,ll day,t 0;ni0;ght|Holiday¦0:1Q;1:1P;a1Fb1Bc12d0Ye0Of0Kg0Hh0Di09june07kwanzaa,l04m00nYoVpRrPsFt9v6w4xm03y2;om 2ule;hasho16kippur;hit2int0Xomens equalit8; 0Ss0T;alentines3e2ictor1E;r1Bteran1;! 0;-0ax 0h6isha bav,rinityMu2; b3rke2;y 0;ish2she2;vat;a0Xe prophets birth0;a6eptember14h4imchat tor0Ut 3u2;kk4mmer T;a8p7s6valentines day ;avu2mini atzeret;ot;int 2mhain;a4p3s2valentine1;tephen1;atrick1;ndrew1;amadan,ememberanc0Yos2;a park1h hashana;a3entecost,reside0Zur2;im,ple heart 0;lm2ssovE; s04;rthodox 2stara;christma1easter2goOhoJn0C;! m07;ational 2ew years09;freedom 0nurse1;a2emorial 0lHoOuharram;bMr2undy thurs0;ch0Hdi gr2tin luther k0B;as;a2itRughnassadh;bour 0g baom2ilat al-qadr;er; 2teenth;soliU;d aJmbolc,n2sra and miraj;augurGd2;ependen2igenous people1;c0Bt1;a3o2;ly satur0;lloween,nukkUrvey mil2;k 0;o3r2;ito de dolores,oundhoW;odW;a4east of 2;our lady of guadalupe,the immaculate concepti2;on;ther1;aster8id 3lectYmancip2piphany;atX;al-3u2;l-f3;ad3f2;itr;ha;! 2;m8s2;un0;ay of the dead,ecemb3i2;a de muertos,eciseis de septiembre,wali;er sol2;stice;anad8h4inco de mayo,o3yber m2;on0;lumbu1mmonwealth 0rpus christi;anuk4inese n3ristmas2;! N;ew year;ah;a 0ian tha2;nksgiving;astillCeltaine,lack4ox2;in2;g 0; fri0;dvent,ll 9pril fools,rmistic8s6u2;stral4tum2;nal2; equinox;ia 0;cens2h wednes0sumption of mary;ion 0;e 0;hallows 6s2;ai2oul1t1;nt1;s 0;day;eve|Month¦aBdec9feb7j2mar,nov9oct1sep0;!t8;!o8;an3u0;l1n0;!e;!y;!u1;!ru0;ary;!em0;ber;pr1ug0;!ust;!il|Duration¦centur4d2hour3m0seconds,week3year3;i0onth2;llisecond1nute1;ay0ecade0;!s;ies,y|FirstName¦aEblair,cCdevBj8k6lashawn,m3nelly,re2sh0;ay,e0iloh;a,lby;g1ne;ar1el,org0;an;ion,lo;as8e0;ls7nyatta,rry;am0ess1;ie,m0;ie;an,on;as0heyenne;ey,sidy;lexis,ndra,ubr0;ey|LastName¦0:2T;1:39;2:37;3:2C;4:2X;a38b2Zc2Ld2Be28f23g1Yh1Ni1Ij1Ck15l0Xm0Ln0Ho0Ep03rWsLtGvEwBxAy7zh5;a5ou,u;ng,o;a5eun2Roshi1Iun;ma5ng;da,guc1Xmo24sh1ZzaP;iao,u;a6eb0il5o4right,u;li38s2;gn0lk0ng,tanabe;a5ivaldi;ssilj34zqu1;a8h7i2Do6r5sui,urn0;an,ynisH;lst0Nrr2Sth;at1Romps2;kah0Tnaka,ylor;aCchBeAhimizu,i9mi8o7t6u5zabo;ar1lliv27zuC;al21ein0;sa,u4;rn3th;lva,mmo22ngh;mjon3rrano;midt,neid0ulz;ito,n6sa5to;ki;ch1dKtos,z;amAeag1Xi8o6u5;bio,iz,sC;b5dri1KgHj0Sme22osevelt,sZux;erts,ins2;c5ve0E;ci,hards2;ir1os;aDe9h7ic5ow1Z;as5hl0;so;a5illips;m,n1R;ders1Zet7r6t5;e0Nr3;ez,ry;ers;h1Zrk0t5vl3;el,te0J;baAg0Alivei00r5;t5w1N;ega,iz;a5eils2guy1Qix2owak,ym1C;gy,ka5var1I;ji5muV;ma;aDeBiAo7u5;ll0n5rr0Bssolini,ñ5;oz;lina,oJr5zart;al1Le5r0S;au,no;hhail3ll0;rci0s5y0;si;eVmmad3r5tsu07;in5tin1;!o;aBe7i5op1uo;!n5u;coln,dholm;fe6n0Or5w0H;oy;bv5v5;re;rs13u;aAennedy,imu9le0Jo7u6wo5;k,n;mar,znets3;bay5vacs;asX;ra;hn,rl8to,ur,zl3;a9en8ha4imen1o5u4;h5n0Xu4;an5ns2;ss2;ki0Cs0R;cks2nsse0B;glesi8ke7noue,shik6to,vano5;u,v;awa;da;as;aBe8it7o6u5;!a4b0gh0Mynh;a4ffmann,rvat;chcock,l0;mingw6nde5rK;rs2;ay;ns0DrrNs6y5;asBes;an3hi5;moG;a7il,o6rub0u5;o,tierr1;m1nzal1;nd5o,rcia;hi;er8is7lor07o6uj5;ita;st0urni0;ch0;nand1;d6insteGsposi5vaK;to;is2wards;aBeAi8omin7u5;bo5rand;is;gu1;az,mitr3;ov;lgado,vi;rw6vi5;es,s;in;aEhAlark9o5;hLl5op0x;em6li5;ns;an;!e;an7e6iu,o5ristensGu4we;i,ng,u4w,y;!n,on5u4;!g;mpb7rt0st5;ro;er;ell;aAe7ha4lanco,oyko,r5yrne;ooks,yant;ng;ck6ethov5nnett;en;er,ham;ch,h6iley,rn5;es;k,ng;dCl8nd5;ers5r9;en,on,s2;on;eks6iy7var1;ez;ej5;ev;ams|MaleName¦0:CC;1:BI;2:C0;3:BQ;4:B2;5:AR;6:9T;7:BX;8:BA;9:8U;A:AU;B:AM;aB3bA7c96d86e7Ff6Xg6Fh5Ui5Hj4Kk4Bl3Rm2Pn2Eo28p22qu20r1As0Qt07u06v01wOxavi3yHzC;aCor0;cCh8Hne;hDkC;!a5X;ar50e5W;ass2i,oDuC;sEu25;nFsEusC;oCsD;uf;ef;at0g;aKeIiDoCyaAO;lfgang,odrow;lCn1O;bEey,frBHlC;aA4iC;am,e,s;e88ur;i,nde6sC;!l5t1;de,lDrr7yC;l1ne;lCt3;a92y;aFern1iC;cDha0nceCrg9Ava0;!nt;ente,t59;lentin48n8Xughn;lyss4Lsm0;aTeOhLiJoFrDyC;!l3ro8s1;av9PeCist0oy,um0;nt9Hv53y;bEd7WmCny;!as,mCoharu;aAWie,y;i9y;mCtA;!my,othy;adDeoCia7Com9;!do7M;!deA;dFrC;en8HrC;an8GeCy;ll,n8F;!dy;dgh,ic9Snn3req,ts45;aScotQeOhKiIoGpenc3tCur1Pylve8Hzym1;anEeCua7B;f0phAEvCwa7A;e57ie;!islaw,l5;lom1nA2uC;leyma8ta;dCl9m1;!n5;aEeC;lCrm0;d1t1;h6Sne,qu0Vun,wn,y8;aCbasti0k1Yl41rg40th,ymo9H;mAn;!tC;!ie,y;lDmCnti22q4Iul;!mBu4;ik,vato6V;aXeThe92iPoGuDyC;an,ou;b6LdDfApe6QssC;!elAI;ol2Uy;an,bJcIdHel,geGh0landA2mFnEry,sDyC;!ce;coe,s;!a94nB;an,eo;l3Jr;e4Qg3n5oA3ri68;co,ky;bBe9T;cCl5;ar5Oc5NhDkCo;!ey,ie,y;a85ie;gDid,ub7x,yCza;ansh,nT;g8ViC;na8Rs;ch5Yfa4lEmDndCpha4sh6Uul,ymo70;al9Yol2By;i9Hon;f,ph;ent2inC;cy,t1;aGeEhilDier62ol,reC;st1;!ip,lip;d9Arcy,tC;ar,e2V;b3Sdra6Ft44ul;ctav2Vliv3m95rGsDtCum8Tw7;is,to;aDc8RvC;al52;ma;i,l49vK;athKeIiEoC;aCel,l0ma0r2W;h,m;cDg4i3IkC;h6Uola;hol9kCol9;!ol9;al,d,il,ls1vC;il50;anCy;!a4i4;aXeUiLoGuDyC;l21r1;hamDr5ZstaC;fa,p4G;ed,mG;dibo,e,hamEis1XntDsCussa;es,he;e,y;ad,ed,mC;ad,ed;cHgu4kFlEnDtchC;!e6;a78ik;o04t1;e,olC;aj;ah,hCk5;a4eC;al,l;hDlv2rC;le,ri6v2;di,met;ck,hOlMmPnu4rIs1tEuricDxC;!imilian85we6;e,io;eo,hDi9tC;!eo,hew,ia;eCis;us,w;cEio,k7ZlDqu6Gsha6tCv2;i2Hy;in,on;!el,oLus;achCcolm,ik;ai,y;amCdi,moud;adC;ou;aSeOiNlo2RoJuDyC;le,nd1;cFiEkCth3;aCe;!s;gi,s;as,iaC;no;g0nn6QrenEuCwe6;!iC;e,s;!zo;am,on4;a7Aevi,la4SnEoCst3vi;!nC;!a60el;!ny;mDnCr14ur4Twr4T;ce,d1;ar,o4N;aIeEhaled,iCrist4Vu48y3B;er0p,rC;by,k,ollos;en0i10nCrmit,v2;!dDnCt5C;e0Yy;a6ri4N;na68rCthem;im,l;aZeRiPoEuC;an,liCst2;an,o,us;aqu2eKhnJnHrFsC;eDhCi7Cue;!ua;!ph;dCge;an,i,on;!aCny;h,s,th4Y;!ath4Xie,nB;!l,sCy;ph;an,e,mC;!mB;d,ffHrEsC;sCus;!e;a5JemDmai8oCry;me,ni0P;i6Vy;!e06rC;ey,y;cId7kHmGrEsDvi3yC;!d7s1;on,p3;ed,od,rCv4N;e50od;al,es,is1;e,ob,ub;k,ob,quC;es;an,brahNchika,gLkeKlija,nuJrHsEtCv0;ai,sC;uki;aCha0i6Gma4sac;ac,iaC;h,s;a,vinCw2;!g;k,nngu52;!r;nacCor;io;im;aLeGina4WoEuCyd57;be27gCmber4EsE;h,o;m3ra35sCwa3Z;se2;aFctEitEnDrC;be22m0;ry;or;th;bLlKmza,nJo,rEsDyC;a44d7;an,s0;lFo4FrEuCv5;hi41ki,tC;a,o;is1y;an,ey;k,s;!im;ib;aReNiMlenLoJrFuC;illerDsC;!tavo;mo;aEegCov3;!g,orC;io,y;dy,h58nt;nzaCrd1;lo;!n;lbe4Qno,ovan4S;ne,oErC;aCry;ld,rd4O;ffr5rge;bri4l7rCv2;la20r3Fth,y;aSeOiMlKorr0JrC;anEedCitz;!dBeCri25;ri24;cEkC;!ie,lC;in,yn;esKisC;!co,zek;etch3oC;yd;d4lConn;ip;deriEliDng,rnC;an02;pe,x;co;bi0di;ar00dVfrUit0lOmHnGo2rDsteb0th0uge8vCym7zra;an,ere2W;gi,iDnCrol,v2w2;est3Zie;c08k;och,rique,zo;aHerGiDmC;aGe2Q;lDrC;!h0;!io;s1y;nu4;be0Ad1iFliEmDt1viCwood;n,s;er,o;ot1Us;!as,j44sC;ha;a2en;!dBg32mFuDwC;a26in;arC;do;o0Tu0T;l,nC;est;aZePiMoFrEuDwCyl0;ay8ight;a8dl5nc0st2;ag0ew;minGnEri0ugDyC;le;!l9;!a29nCov0;e6ie,y;go,icC;!k;armuDeCll1on,rk;go;id;anJj0lbeImetriAnGon,rFsEvDwCxt3;ay8ey;en,in;hawn,mo09;ek,ri0G;is,nCv3;is,y;rt;!dC;re;lLmJnIrEvC;e,iC;!d;en,iEne6rCyl;eCin,yl;l2Wn;n,o,us;!e,i4ny;iCon;an,en,on;e,l9;as;a07e05hXiar0lMoHrFuDyrC;il,us;rtC;!is;aCistobal;ig;dy,lFnDrC;ey,neliAy;or,rC;ad;by,e,in,l2t1;aHeEiCyJ;fCnt;fo0Dt1;meDtAvelaC;nd;nt;rEuDyC;!t1;de;enC;ce;aGeFrisDuC;ck;!tC;i0oph3;st3;d,rlCs;eCie;s,y;cCdric,s11;il;lFmer1rC;ey,lDro6y;ll;!os,t1;eb,v2;ar03eVilUlaToQrDuCyr1;ddy,rtJ;aKeFiEuDyC;an,ce,on;ce,no;an,ce;nDtC;!t;dDtC;!on;an,on;dDndC;en,on;!foCl5y;rd;bDrCyd;is;!by;i8ke;al,lB;nGrCshoi;at,nDtC;!r11;aCie;rd0M;!edict,iDjam2nB;ie,y;to;n5rCt;eCy;tt;ey;ar0Yb0Od0Kgust2hm0Hid7ja0FlZmXnPputsiOrFsaEuCya0ziz;gustAst2;us;hi;aJchIi4jun,maGnEon,tCy0;hCu07;ur;av,oC;ld;an,nd05;el;ie;ta;aq;dHgel00tC;hoFoC;i8nC;!iXy;ne;ny;reCy;!as,s,w;ir,mCos;ar;an,bePd7eJfGi,lFonEphonIt1vC;aNin;on;so,zo;an,en;onDrC;edK;so;c,jaFksandEssaFxC;!and3;er;ar,er;ndC;ro;rtC;!o;ni;en;ad,eC;d,t;in;aDoCri0vik;lfo;mCn;!a;dGeFraDuC;!bakr,lfazl;hCm;am;!l;allFel,oulaye,ulC;!lDrahm0;an;ah,o;ah;av,on|Verb¦awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en|PhrasalVerb¦0:71;1:6P;2:7D;3:73;4:6I;5:7G;6:75;7:6O;8:6B;9:6C;A:5H;B:70;C:6Z;a7Gb62c5Cd59e57f45g3Nh37iron0j33k2Yl2Km2Bn29o27p1Pr1Es09tQuOvacuum 1wGyammerCzD;eroAip EonD;e0k0;by,up;aJeGhFiEorDrit52;d 1k2Q;mp0n49pe0r8s8;eel Bip 7K;aEiD;gh 06rd0;n Br 3C;it 5Jk8lk6rm 0Qsh 73t66v4O;rgeCsD;e 9herA;aRePhNiJoHrFuDype 0N;ckArn D;d2in,o3Fup;ade YiDot0y 32;ckle67p 79;ne66p Ds4C;d2o6Kup;ck FdEe Dgh5Sme0p o0Dre0;aw3ba4d2in,up;e5Jy 1;by,o6U;ink Drow 5U;ba4ov7up;aDe 4Hll4N;m 1r W;ckCke Elk D;ov7u4N;aDba4d2in,o30up;ba4ft7p4Sw3;a0Gc0Fe09h05i02lYmXnWoVpSquare RtJuHwD;earFiD;ngEtch D;aw3ba4o6O; by;ck Dit 1m 1ss0;in,up;aIe0RiHoFrD;aigh1LiD;ke 5Xn2X;p Drm1O;by,in,o6A;n2Yr 1tc3H;c2Xmp0nd Dr6Gve6y 1;ba4d2up;d2o66up;ar2Uell0ill4TlErDurC;ingCuc8;a32it 3T;be4Brt0;ap 4Dow B;ash 4Yoke0;eep EiDow 9;c3Mp 1;in,oD;ff,v7;gn Eng2Yt Dz8;d2o5up;in,o5up;aFoDu4E;ot Dut0w 5W;aw3ba4f36o5Q;c2EdeAk4Rve6;e Hll0nd GtD; Dtl42;d2in,o5upD;!on;aw3ba4d2in,o1Xup;o5to;al4Kout0rap4K;il6v8;at0eKiJoGuD;b 4Dle0n Dstl8;aDba4d2in52o3Ft2Zu3D;c1Ww3;ot EuD;g2Jnd6;a1Wf2Qo5;ng 4Np6;aDel6inAnt0;c4Xd D;o2Su0C;aQePiOlMoKrHsyc29uD;ll Ft D;aDba4d2in,o1Gt33up;p38w3;ap37d2in,o5t31up;attleCess EiGoD;p 1;ah1Gon;iDp 52re3Lur44wer 52;nt0;ay3YuD;gAmp 9;ck 52g0leCn 9p3V;el 46ncilA;c3Oir 2Hn0ss FtEy D;ba4o4Q; d2c1X;aw3ba4o11;pDw3J;e3It B;arrow3Serd0oD;d6te3R;aJeHiGoEuD;ddl8ll36;c16p 1uth6ve D;al3Ad2in,o5up;ss0x 1;asur8lt 9ss D;a19up;ke Dn 9r2Zs1Kx0;do,o3Xup;aOeMiHoDuck0;a16c36g 0AoDse0;k Dse34;aft7ba4d2forw2Ain3Vov7uD;nd7p;e GghtFnEsDv1T;ten 4D;e 1k 1; 1e2Y;ar43d2;av1Ht 2YvelD; o3L;p 1sh DtchCugh6y1U;in3Lo5;eEick6nock D;d2o3H;eDyA;l2Hp D;aw3ba4d2fSin,o05to,up;aFoEuD;ic8mpA;ke2St2W;c31zz 1;aPeKiHoEuD;nker2Ts0U;lDneArse2O;d De 1;ba4d2oZup;de Et D;ba4on,up;aw3o5;aDlp0;d Fr Dt 1;fDof;rom;in,oO;cZm 1nDve it;d Dg 27kerF;d2in,o5;aReLive Jloss1VoFrEunD; f0M;in39ow 23; Dof 0U;aEb17it,oDr35t0Ou12;ff,n,v7;bo5ft7hJw3;aw3ba4d2in,oDup,w3;ff,n,ut;a17ek0t D;aEb11d2oDr2Zup;ff,n,ut,v7;cEhDl1Pr2Xt,w3;ead;ross;d aEnD;g 1;bo5;a08e01iRlNoJrFuD;cDel 1;k 1;eEighten DownCy 1;aw3o2L;eDshe1G; 1z8;lFol D;aDwi19;bo5r2I;d 9;aEeDip0;sh0;g 9ke0mDrD;e 2K;gLlJnHrFsEzzD;le0;h 2H;e Dm 1;aw3ba4up;d0isD;h 1;e Dl 11;aw3fI;ht ba4ure0;eInEsD;s 1;cFd D;fDo1X;or;e B;dQl 1;cHll Drm0t0O;apYbFd2in,oEtD;hrough;ff,ut,v7;a4ehi1S;e E;at0dge0nd Dy8;o1Mup;o09rD;ess 9op D;aw3bNin,o15;aShPlean 9oDross But 0T;me FoEuntD; o1M;k 1l6;aJbIforGin,oFtEuD;nd7;ogeth7;ut,v7;th,wD;ard;a4y;pDr19w3;art;eDipA;ck BeD;r 1;lJncel0rGsFtch EveA; in;o16up;h Bt6;ry EvD;e V;aw3o12;l Dm02;aDba4d2o10up;r0Vw3;a0He08l01oSrHuD;bbleFcklTilZlEndlTrn 05tDy 10zz6;t B;k 9; ov7;anMeaKiDush6;ghHng D;aEba4d2forDin,o5up;th;bo5lDr0Lw3;ong;teD;n 1;k D;d2in,o5up;ch0;arKgJil 9n8oGssFttlEunce Dx B;aw3ba4;e 9; ar0B;k Bt 1;e 1;d2up; d2;d 1;aIeed0oDurt0;cFw D;aw3ba4d2o5up;ck;k D;in,oK;ck0nk0st6; oJaGef 1nd D;d2ov7up;er;up;r0t D;d2in,oDup;ff,ut;ff,nD;to;ck Jil0nFrgEsD;h B;ainCe B;g BkC; on;in,o5; o5;aw3d2o5up;ay;cMdIsk Fuction6; oD;ff;arDo5;ouD;nd;d D;d2oDup;ff,n;own;t D;o5up;ut|Modal¦c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to;ay,ight,ust;an,o0;uld|Adjective¦0:74;1:7J;2:7P;3:7I;4:7B;5:5B;6:4R;7:48;8:49;9:60;A:7G;B:5W;C:72;D:6Z;a6Hb63c5Pd55e4Rf48g3Zh3Oi33j31k30l2Pm2En25o1Pp19quack,r0Zs0Ft08uPvMwEyear5;arp0eIholeHiGoE;man5oEu6A;d6Czy;despr73s5E;!sa8;eFlEste24;co1Gl o4J;!k5;aFiEola4A;b7Rce versa,ol53;ca2gabo61nilla;ltVnIpFrb58su4tterE;!mo6Y; f32b1MpFsEti1F;ca8et,ide dLtairs;er,i3L;aObeco6Pconvin25deLeKfair,ivers4knJprecedXrHsFwE;iel1Yritt5X;i1TuE;pervis0specti3;eEu5;cognKgul6Fl6F;own;ndi3v5Rxpect0;cid0rE;!grou5MsE;iz0tood;b8ppeaKssu6EuthorE;iz0;i22ra;aIeGhough4NoFrE;i1oubl0;geth6p,rpD;en5OlEm4Yrr2Sst0;li3;boo,lEn;ent0;aWcVeThSiQmug,nobbi3DoOpNqueami3DtIuEymb62;bGi gener53pErprisi3;erEre0J;! dup6b,i27;du0seq4S;anda6SeHi0NrEy37;aightEip0; fEfE;or59;adfa60reotyp0;aBec2Eir1HlendDot on; call0le,mb6phist1VrEu0Vvi40;dDry;gnifica2nE;ceBg8;am2Oe6ocki3ut;cEda1em5lfi2Xni1Upa67re7;o1Er3U;at56ient26reec56;cr0me,ns serif;aLeHiFoE;bu5Ott4SuRy4;ghtEv4;!-27f9;ar,bel,condi1du61fres50lGpublic3UsEta2C;is46oE;lu1na2;e1Cuc44;bDciE;al,st;aOeMicayu7lacDopuli5FrFuE;bl58mp0;eIiFoE;!b08fuCmi30p6;mFor,sEva1;ti7;a4Ue;ciCmE;a0Gi5I;ac20rEti1;feAma2Tplexi3v33;rEst;allelGtE;-tiEi4;me;!ed;bPffNkMld fashion0nLpKrg1Gth6utJvE;al,erE;!aGniFt,wE;eiErouE;ght;ll;do0Uer,g2Lsi45;en,posi1; boa5Fg2Jli7;!ay; gua5DbEli7;eat;eGsE;cEer0Gole1;e7uB;d2Sse;ak0eLiKoEua4O;nIrFtE;ab8;thE;!eE;rn;chala2descri4Zstop;ght5;arby,cessa3Wighbor5xt;aMeKiHoEultip8;bi8derFlEnth5ot,st;dy;a1n;nEx0;iaEor;tuB;di4EnaEre;ci3;cEgenta,in,j02keshift,le,mmoth,ny,sculi7;abBho;aNeIiFoEu13;uti12vi3;mFteraE;l,te;it0;ftHgEth4;al,eFitiE;ma1;nda3C;!-0B;nguDst,tt6;ap1Sind5no09;agg0uE;niNstifi0veni8;de4gno4Blleg4mRnGpso 1VrE;a1releE;va2; MaLbr0corKdIfluenSiSnHsGtE;aAenCoxE;ic36;a7i2R;a1er,oce2;iFoE;or;reA;deq3Jppr2Y;fEsitu,vitro;ro2;mIpE;arGerfeAoErop6;li1rtE;a2ed;ti4;eEi0Q;d2QnC;aJelIiGoEumdr3B;ne2Zok0rrEs07ur5;if2S;ghfalut1OspE;an2Q;liZpf9;lHnGrE;d05roE;wi3;dy,gi3;f,low0;ainf9ener2Jiga22lLoKraHuE;aFilEng ho;ty;rd0;cFtE;ef9is;ef9;ne,od;ea2Cob4;aTeNinMlLoGrE;a1SeEoz1J;e2Cq11tf9;oGrE; keeps,eEm6tuna1;g03ign;liE;sh;ag2Yue2;al,i1;dImFrE;ti8;a8ini7;ne;le; up;bl0i2lCr Eux,vori1;oEreac1E;ff;aNfficie2lMmiLnJreAthere4veIxE;aAcess,peGtraFuE;be2Ll0H;!va1D;ct0rt;n,ryday; Ecouragi3tiB;rou1sui1;ne2;abo22dPe17i1;g6sE;t,ygE;oi3;er;aUeMiGoErea14ue;mina2ne,ubE;le,tf9;dact1Afficu1NsFvE;erC;creGeas0gruntl0hone1EordFtE;a2ress0;er5;et; KadpJfIgene1OliGrang0spe1OtFvoE;ut;ail0ermin0;be1Lca1ghE;tf9;ia2;an;facto;i5magEngeroYs0H;ed,i3;ly;ertaQhief,ivil,oGrE;aEowd0u0G;mp0v01z0;loMmKnFoi3rrEve0O;eAu1H;cre1grHsGtE;emEra0E;po0C;ta2;ue2;mer07pleE;te,x;ni4ss4;in;aOeKizarBlIoFrE;and new,isk,okO;gFna fiVttom,urgeoE;is;us;ank,iH;re;autif9hiFlov0nEst,yoF;eUt;nd;ul;ckFnkru0WrrE;en;!wards; priori,b0Mc0Jd09fraDg04h03lYma05ntiquXpTrNsLttracti06utheKvHwE;aFkE;wa0T;ke,re;ant garFerE;age;de;ntU;leep,tonisE;hi3;ab,bitHroGtiE;fiE;ci4;ga2;raE;ry;pEt;are2etiOrE;oprE;ia1;at0;arHcohFeEiLl,oof;rt;olE;ic;mi3;ead;ainGgressiFoniE;zi3;ve;st;id; LeJuIvE;aFerC;se;nc0;ed;lt;pt,qE;ua1;hoc,infinitE;um;cuFtu4u1;al;ra1;erOlNoLruKsFuE;nda2;e2oFtraA;ct;lu1rbi3;ng;te;pt;aEve;rd;aze,e;ra2;nt|Comparable¦0:41;1:4I;2:45;3:4B;4:2Y;5:3X;a4Ob44c3Od3De35f2Rg2Fh24i1Vj1Uk1Rl1Im1Cn16o14p0Tqu0Rr0IsRtKuIvFw7y6za12;ell27ou3;aBe9hi1Yi7r6;o3y;ck0Mde,l6n1ry,se;d,y;a6i4Mt;k,ry;n1Tr6sI;m,y;a7e6ulgar;nge5rda2xi3;gue,in,st;g0n6pco3Mse5;like0ti1;aAen9hi8i7ough,r6;anqu2Qen1ue;dy,g3Ume0ny,r09;ck,n,rs2R;d42se;ll,me,rt,s6wd47;te5;aVcarUeThRiQkin0GlMmKoHpGqua1HtAu7w6;eet,ift;b7dd15per0Hr6;e,re2J;sta2Ht4;aAe9iff,r7u6;pXr1;a6ict,o3;ig3Hn0W;a1ep,rn;le,rk;e24i3Hright0;ci2Aft,l7o6re,ur;n,thi3;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g37m6;!y;ek,nd3F;ck,l0mp4;a6iUort,rill,y;dy,ll0Zrp;cu0Tve0Txy;ce,ed,y;d,fe,int0l1Xv16;aBe9i8o6ude;mantic,o1Ksy,u6;gh,nd;ch,pe,tzy;a6d,mo0J;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aFhoEi1SlCoBr8u6;ny,r6;e,p4;egna2ic7o6;fou00ud;ey,k0;li06or,te1D;a6easa2;in,nt;ny;in5le;dd,f6i0ld,ranR;fi11;aAe8i7o6;b4isy,rm16sy;ce,mb4;a6w;r,t;ive,rr02;aAe8ild,o7u6;nda1Ate;ist,o1;a6ek,llY;n,s0ty;d,tuR;aCeBi9o6ucky;f0Vn7o1Eu6ve0w18y0U;d,sy;e0g;g1Uke0tt4v6;e0i3;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti3;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b4id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te5;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t4uiY;u1y;aIeeb4iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get5mG;my;erce8n6rm,t;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi3;gey,lm8r6;e5i3;ful;!i3;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i3;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd|Adverb¦a07by 05d01eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,w0Bye0;p,s; to,wards5;h1o0wiO;o,t6ward;en,us;everal,o0uch;!me1rt0; of;hXtimes,w07;a1e0;alS;ndomRthN;ar excellDer0oint blank; Mhaps;f3n0;ce0ly;! 0;ag00moU; courHten;ewJo0; longEt 0;onHwithstanding;aybe,eanwhiAore0;!ovB;! aboS;deed,steT;en0;ce;or2u0;l9rther0;!moH; 0ev3;examp0good,suF;le;n mas1v0;er;se;e0irect1; 1finite0;ly;ju7trop;far,n0;ow; CbroBd nauseam,gAl5ny2part,side,t 0w3;be5l0mo5wor5;arge,ea4;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori|Expression¦a02b01dXeVfuck,gShLlImHnGoDpBshAu7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la|Preposition¦'o,-,aKbHcGdFexcept,from,inEmidPnotwithstandiQoCpRqua,sBt6u3vi2w0;/o,hereMith0;!in,oQ;a,s-a-vis;n1p0;!on;like,til;h1ill,o0;!wards;an,r0;ough0u;!oH;ans,ince,o that;',f0n1ut;!f;!to;espite,own,u3;hez,irca;ar1e0oAy;low,sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut|Conjunction¦aDb9cuz,for,how7in caCno6o5p3supposing,th1vers4wh0yet;eth7ile;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh|Determiner¦aAboth,d8e5few,l3mu7neiCown,plenty,some,th2various,wh0;at0ich0;evB;at,e3is,ose;a,e0;!ast,s;a1i6l0nough,very;!se;ch;e0u;!s;!n0;!o0y;th0;er","conjugations":"t:ake,ook|:can,could,can,_|free:_,,,ing|puk:e,,,ing|ar:ise,ose,,,isen|babys:it,at|:be,was,is,am,been|:is,was,is,being|beat:_,,,ing,en|beg:in,an,,inning,un|ban:_,ned,,ning|bet:_,,,,_|bit:e,_,,ing,ten|ble:ed,d,,,d|bre:ed,d|br:ing,ought,,,ought|broadcast:_,_|buil:d,t,,,t|b:uy,ought,,,ought|cho:ose,se,,osing,sen|cost:_,_|deal:_,t,,,t|d:ie,ied,,ying|d:ig,ug,,igging,ug|dr:aw,ew,,,awn|dr:ink,ank,,,unk|dr:ive,ove,,iving,iven|:eat,ate,,eating,eaten|f:all,ell,,,allen|fe:ed,d,,,d|fe:el,lt|f:ight,ought,,,ought|f:ind,ound|fl:y,ew,,,own|bl:ow,ew,,,own|forb:id,ade|edit:_,,,ing|forg:et,ot,,eting,otten|forg:ive,ave,,iving,iven|fr:eeze,oze,,eezing,ozen|g:et,ot|g:ive,ave,,iving,iven|:go,went,goes,,gone|h:ang,ung,,,ung|ha:ve,d,s,ving,d|hear:_,d,,,d|hid:e,_,,,den|h:old,eld,,,eld|hurt:_,_,,,_|la:y,id,,,id|le:ad,d,,,d|le:ave,ft,,,ft|l:ie,ay,,ying|li:ght,t,,,t|los:e,t,,ing|ma:ke,de,,,de|mean:_,t,,,t|me:et,t,,eting,t|pa:y,id,,,id|read:_,_,,,_|r:ing,ang,,,ung|r:ise,ose,,ising,isen|r:un,an,,unning,un|sa:y,id,ys,,id|s:ee,aw,,,een|s:ell,old,,,old|sh:ine,one,,,one|sho:ot,t,,,t|show:_,ed|s:ing,ang,,,ung|s:ink,ank|s:it,at|slid:e,_,,,_|sp:eak,oke,,,oken|sp:in,un,,inning,un|st:and,ood|st:eal,ole|st:ick,uck|st:ing,ung|:stream,,,,|str:ike,uck,,iking|sw:ear,ore|sw:im,am,,imming|sw:ing,ung|t:each,aught,eaches|t:ear,ore|t:ell,old|th:ink,ought|underst:and,ood|w:ake,oke|w:ear,ore|w:in,on,,inning|withdr:aw,ew|wr:ite,ote,,iting,itten|t:ie,ied,,ying|ski:_,ied|:boil,,,,|miss:_,,_|:act,,,,|compet:e,ed,,ing|:being,were,are,are|impl:y,ied,ies|ic:e,ed,,ing|develop:_,ed,,ing|wait:_,ed,,ing|aim:_,ed,,ing|spil:l,t,,,led|drop:_,ped,,ping|log:_,ged,,ging|rub:_,bed,,bing|smash:_,,es|egg:_,ed|suit:_,ed,,ing|age:_,d,s,ing|shed:_,_,s,ding|br:eak,oke|ca:tch,ught|d:o,id,oes|b:ind,ound|spread:_,_|become:_,,,,_|ben:d,,,,t|br:ake,,,,oken|burn:_,,,,ed|burst:_,,,,_|cl:ing,,,,ung|c:ome,ame,,,ome|cre:ep,,,,pt|cut:_,,,,_|dive:_,,,,d|dream:_,,,,t|fle:e,,,,d|fl:ing,,,,ung|got:_,,,,ten|grow:_,,,,n|hit:_,,,,_|ke:ep,,,,pt|kne:el,,,,lt|know:_,,,,n|leap:_,,,,t|len:d,,,,t|lo:ose,,,,st|prove:_,,,,n|put:_,,,,_|quit:_,,,,_|rid:e,,,,den|s:eek,,,,ought|sen:d,,,,t|set:_,,,,_|sew:_,,,,n|shake:_,,,,n|shave:_,,,,d|shut:_,,,,_|s:eat,,,,at|sla:y,,,,in|sle:ep,,,,pt|sn:eak,,,,uck|spe:ed,,,,d|spen:d,,,,t|sp:it,,,,at|split:_,,,,_|spr:ing,,,,ung|st:ink,unk,,,unk|strew:_,,,,n|sw:are,,,,orn|swe:ep,,,,pt|thrive:_,,,,d|undergo:_,,,,ne|upset:_,,,,_|w:eave,,,,oven|we:ep,,,,pt|w:ind,,,,ound|wr:ing,,,,ung","plurals":"addend|um|a,alga|e,alumna|e,alumn|us|i,appendi|x|ces,avocado|s,bacill|us|i,barracks|,beau|x,bus|es,cact|us|i,chateau|x,analys|is|es,diagnos|is|es,parenthes|is|es,prognos|is|es,synops|is|es,thes|is|es,child|ren,circus|es,clothes|,corp|us|ora,criteri|on|a,curricul|um|a,database|s,deer|,echo|es,embargo|es,epoch|s,f|oot|eet,gen|us|era,g|oose|eese,halo|s,hippopotam|us|i,ind|ex|ices,larva|e,lea|f|ves,librett|o|i,loa|f|ves,m|an|en,matri|x|ces,memorand|um|a,modul|us|i,mosquito|es,move|s,op|us|era,ov|um|a,ox|en,pe|rson|ople,phenomen|on|a,quiz|zes,radi|us|i,referend|um|a,rodeo|s,sex|es,shoe|s,sombrero|s,stomach|s,syllab|us|i,tableau|x,thie|f|ves,t|ooth|eeth,tornado|s,tuxedo|s,zero|s","patterns":{"Person":["master of #Noun","captain of the #Noun"]},"regex":{"HashTag":["^#[a-z]+"],"Gerund":["^[a-z]+n['’]$"],"Possessive":["^[a-z]+s'$"],"PhoneNumber":["^[0-9]{3}-[0-9]{4}$","^[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$"],"Time":["^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$","^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$","^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$","^[PMCE]ST$","^utc ?[+-]?[0-9]+?$","^[a-z0-9]*? o'?clock$"],"Date":["^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$","^[0-9]{1,4}/[0-9]{1,2}/[0-9]{1,4}$"],"Money":["^[-+]?[$€¥£][0-9]+(.[0-9]{1,2})?$","^[-+]?[$€¥£][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$"],"Value":["^[-+]?[$€¥£][0-9]+(.[0-9]{1,2})?$","^[-+]?[$€¥£][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$","^[0-9.]{1,2}[-–][0-9]{1,2}$"],"NumberRange":["^[0-9.]{1,4}(st|nd|rd|th)?[-–][0-9.]{1,4}(st|nd|rd|th)?$","^[0-9.]{1,2}[-–][0-9]{1,2}$"],"NiceNumber":["^[-+]?[0-9.,]{1,3}(,[0-9.,]{3})+(.[0-9]+)?$"],"NumericValue":["^[-+]?[0-9]+(.[0-9]+)?$","^.?[0-9]+([0-9,.]+)?%$"],"Percent":["^.?[0-9]+([0-9,.]+)?%$"],"Cardinal":["^.?[0-9]+([0-9,.]+)?%$"],"Fraction":["^[0-9]{1,4}/[0-9]{1,4}$"],"LastName":["^ma?c'.*","^o'[drlkn].*"]}}`
},{}],203:[function(_dereq_,module,exports){
'use strict';
const conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js');

//extend our current irregular conjugations, overwrite if exists
//also, map the irregulars for easy infinitive lookup - {bought: 'buy'}
const addConjugations = function(obj) {

  Object.keys(obj).forEach((inf) => {
    this.conjugations[inf] = this.conjugations[inf] || {};
    //add it to the lexicon
    this.words[inf] = this.words[inf] || 'Infinitive';
    Object.keys(obj[inf]).forEach((tag) => {
      let word = obj[inf][tag];
      //add this to our conjugations
      this.conjugations[inf][tag] = word;
      //add it to the lexicon, too
      this.words[word] = this.words[word] || tag;
      //also denormalize to cache.toInfinitive
      this.cache.toInfinitive[obj[inf][tag]] = inf;
    });
    //guess the other conjugations
    let forms = conjugate(inf, this);
    Object.keys(forms).forEach((k) => {
      let word = forms[k];
      if (this.words.hasOwnProperty(word) === false) {
        this.words[word] = k;
      }
    });
  });
  return obj;
};
module.exports = addConjugations;

},{"../subset/verbs/methods/conjugate/faster.js":76}],204:[function(_dereq_,module,exports){

//
const addPatterns = function(obj) {
  Object.keys(obj).forEach((k) => {
    this.patterns[k] = obj[k];
  });
  return obj;
};
module.exports = addPatterns;

},{}],205:[function(_dereq_,module,exports){
'use strict';
//put singular->plurals in world, the reverse in cache,
//and both forms in the lexicon
const addPlurals = function(obj) {
  Object.keys(obj).forEach((sing) => {
    let plur = obj[sing];
    this.plurals[sing] = plur;
    //add them both to the lexicon
    this.words[plur] = this.words[plur] || 'Plural';
    this.words[sing] = this.words[sing] || 'Singular';
    //denormalize them in cache.toPlural
    this.cache.toSingular[plur] = sing;
  });
  return obj;
};
module.exports = addPlurals;

},{}],206:[function(_dereq_,module,exports){

//
const addRegex = function(obj) {
  Object.keys(obj).forEach((k) => {
    this.regex.push({
      reg: new RegExp(k, 'i'),
      tag: obj[k]
    });
  });
};
module.exports = addRegex;

},{}],207:[function(_dereq_,module,exports){
'use strict';
//add 'downward' tags (that immediately depend on this one)
const addDownword = _dereq_('../tags/addDownward');

//extend our known tagset with these new ones
const addTags = function(tags) {
  Object.keys(tags).forEach((tag) => {
    let obj = tags[tag];
    obj.notA = obj.notA || [];
    obj.downward = obj.downward || [];
    this.tags[tag] = obj;
  });
  addDownword(this.tags);
  return tags;
};
module.exports = addTags;

},{"../tags/addDownward":131}],208:[function(_dereq_,module,exports){
'use strict';
const normalize = _dereq_('../term/methods/normalize/normalize').normalize;
const inflect = _dereq_('../subset/nouns/methods/pluralize');
const conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js');
const adjFns = _dereq_('../subset/adjectives/methods');
const wordReg = / /;


const cleanUp = function(str) {
  str = normalize(str);
  //extra whitespace
  str = str.replace(/\s+/, ' ');
  //remove sentence-punctuaion too
  str = str.replace(/[.\?,;\!]/g, '');
  return str;
};

//
const addWords = function(words) {
  //go through each word
  Object.keys(words).forEach((word) => {
    let tag = words[word];
    word = cleanUp(word);
    this.words[word] = tag;
    //add it to multi-word cache,
    if (wordReg.test(word) === true) {
      let arr = word.split(wordReg);
      this.cache.firstWords[arr[0]] = true;
    }

    //turn singulars into plurals
    if (tag === 'Singular') {
      let plural = inflect(word, {});
      if (plural && plural !== word) {
        this.words[plural] = 'Plural';
      }
      return;
    }
    //turn infinitives into all conjugations
    if (tag === 'Infinitive') {
      let conj = conjugate(word, this);
      Object.keys(conj).forEach((k) => {
        this.words[conj[k]] = k;
      });
      return;
    }
    //phrasals like 'pull out' get conjugated too
    if (tag === 'PhrasalVerb') {
      let arr = word.split(/ /);
      let conj = conjugate(arr[0], this);
      Object.keys(conj).forEach((k) => {
        let form = conj[k] + ' ' + arr[1];
        this.words[form] = 'PhrasalVerb';
        //add it to cache, too
        this.cache.firstWords[conj[k]] = true;
      });
      return;
    }
    //turn some adjectives into superlatives
    if (tag === 'Comparable') {
      let comp = adjFns.toComparative(word);
      if (comp && word !== comp) {
        this.words[comp] = 'Comparative';
      }
      let supr = adjFns.toSuperlative(word);
      if (supr && word !== supr) {
        this.words[supr] = 'Superlative';
      }
    }
  });

  return words;
};
module.exports = addWords;

},{"../subset/adjectives/methods":11,"../subset/nouns/methods/pluralize":44,"../subset/verbs/methods/conjugate/faster.js":76,"../term/methods/normalize/normalize":145}],209:[function(_dereq_,module,exports){
'use strict';
// const addWords = require('./addWords');
const fns = _dereq_('../fns');
let data = _dereq_('./_data');
let moreData = _dereq_('./more-data');
let tags = _dereq_('../tags');
let unpack = _dereq_('./unpack');
let addTags = _dereq_('./addTags');
let addWords = _dereq_('./addWords');
let addRegex = _dereq_('./addRegex');
let addConjugations = _dereq_('./addConjugations');
let addPatterns = _dereq_('./addPatterns');
let addPlurals = _dereq_('./addPlurals');
let misc = _dereq_('./more-data/misc');

//lazier/faster object-merge
const extend = (main, obj) => {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    main[keys[i]] = obj[keys[i]];
  }
  return main;
};

//class World
let World = function() {
  this.words = {};
  this.tags = tags;
  this.regex = [];
  this.patterns = {};
  this.conjugations = {};
  this.plurals = {};
  //denormalized data for faster-lookups
  this.cache = {
    firstWords: {},
    toInfinitive: {},
    toSingular: {}
  };
};

World.prototype.addTags = addTags;
World.prototype.addWords = addWords;
World.prototype.addRegex = addRegex;
World.prototype.addConjugations = addConjugations;
World.prototype.addPlurals = addPlurals;
World.prototype.addPatterns = addPatterns;

//make a no-reference copy of all the data
World.prototype.clone = function() {
  let w2 = new World();
  ['words', 'firstWords', 'tagset', 'regex', 'patterns', 'conjugations', 'plurals'].forEach((k) => {
    if (this[k]) {
      w2[k] = fns.copy(this[k]);
    }
  });
  return w2;
};

//add all the things, in all the places
World.prototype.plugin = function(obj) {
  //untangle compromise-plugin
  obj = unpack(obj);
  //add all-the-things to this world object
  //(order may matter)
  if (obj.tags) {
    this.addTags(obj.tags);
  }
  if (obj.regex) {
    this.addRegex(obj.regex);
  }
  if (obj.patterns) {
    this.addPatterns(obj.patterns);
  }
  if (obj.conjugations) {
    this.addConjugations(obj.conjugations);
  }
  if (obj.plurals) {
    this.addPlurals(obj.plurals);
  }
  if (obj.words) {
    this.addWords(obj.words);
  }
};

//export a default world
let w = new World();
w.plugin(data);
w.addWords(misc);
moreData.forEach((obj) => {
  extend(w.words, obj);
});

module.exports = {
  w: w,
  reBuild: function() {
    //export a default world
    let w2 = new World();
    w2.plugin(data);
    w2.addWords(misc);
    moreData.forEach((obj) => {
      extend(w2.words, obj);
    });
    return w2;
  }
};

},{"../fns":3,"../tags":133,"./_data":202,"./addConjugations":203,"./addPatterns":204,"./addPlurals":205,"./addRegex":206,"./addTags":207,"./addWords":208,"./more-data":211,"./more-data/misc":213,"./unpack":217}],210:[function(_dereq_,module,exports){
//these are common word shortenings used in the lexicon and sentence segmentation methods
//there are all nouns,or at the least, belong beside one.
'use strict';

//common abbreviations
let compact = {
  Noun: [
    'arc',
    'al',
    'exp',
    'fy',
    'pd',
    'pl',
    'plz',
    'tce',
    'bl',
    'ma',
    'ba',
    'lit',
    'ex',
    'eg',
    'ie',
    'ca',
    'cca',
    'vs',
    'etc',
    'esp',
    'ft',
    //these are too ambiguous
    'bc',
    'ad',
    'md',
    'corp',
    'col'
  ],
  Organization: [
    'dept',
    'univ',
    'assn',
    'bros',
    'inc',
    'ltd',
    'co',
    //proper nouns with exclamation marks
    'yahoo',
    'joomla',
    'jeopardy'
  ],

  Place: [
    'rd',
    'st',
    'dist',
    'mt',
    'ave',
    'blvd',
    'cl',
    'ct',
    'cres',
    'hwy',
    //states
    'ariz',
    'cal',
    'calif',
    'colo',
    'conn',
    'fla',
    'fl',
    'ga',
    'ida',
    'ia',
    'kan',
    'kans',

    'minn',
    'neb',
    'nebr',
    'okla',
    'penna',
    'penn',
    'pa',
    'dak',
    'tenn',
    'tex',
    'ut',
    'vt',
    'va',
    'wis',
    'wisc',
    'wy',
    'wyo',
    'usafa',
    'alta',
    'ont',
    'que',
    'sask'
  ],

  Month: ['jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'sept', 'oct', 'nov', 'dec'],
  Date: ['circa'],

  //Honorifics
  Honorific: [
    'adj',
    'adm',
    'adv',
    'asst',
    'atty',
    'bldg',
    'brig',
    'capt',
    'cmdr',
    'comdr',
    'cpl',
    'det',
    'dr',
    'esq',
    'gen',
    'gov',
    'hon',
    'jr',
    'llb',
    'lt',
    'maj',
    'messrs',
    'mister',
    'mlle',
    'mme',
    'mr',
    'mrs',
    'ms',
    'mstr',
    'op',
    'ord',
    'phd',
    'prof',
    'pvt',
    'rep',
    'reps',
    'res',
    'rev',
    'sen',
    'sens',
    'sfc',
    'sgt',
    'sir',
    'sr',
    'supt',
    'surg'
  //miss
  //misses
  ]
};

//unpack the compact terms into the misc lexicon..
let abbreviations = {};
const keys = Object.keys(compact);
for (let i = 0; i < keys.length; i++) {
  const arr = compact[keys[i]];
  for (let i2 = 0; i2 < arr.length; i2++) {
    abbreviations[arr[i2]] = [keys[i], 'Abbreviation'];
  }
}
module.exports = abbreviations;

},{}],211:[function(_dereq_,module,exports){
module.exports = [
  _dereq_('./abbreviations'),
  _dereq_('./irregularAdjectives').lexicon,
  _dereq_('./numbers').lexicon,
  _dereq_('./orgWords'),
];

},{"./abbreviations":210,"./irregularAdjectives":212,"./numbers":214,"./orgWords":215}],212:[function(_dereq_,module,exports){
'use strict';
//adjectives that have irregular conjugations to adverb, comparative, and superlative forms
const toAdverb = {
  bad: 'badly',
  best: 'best',
  early: 'early',
  fast: 'fast',
  good: 'well',
  hard: 'hard',
  icy: 'icily',
  idle: 'idly',
  late: 'late',
  latter: 'latter',
  little: 'little',
  long: 'long',
  low: 'low',
  male: 'manly',
  public: 'publicly',
  simple: 'simply',
  single: 'singly',
  special: 'especially',
  straight: 'straight',
  vague: 'vaguely',
  well: 'well',
  whole: 'wholly',
  wrong: 'wrong'
};

const toComparative = {
  grey: 'greyer',
  gray: 'grayer',
  green: 'greener',
  yellow: 'yellower',
  red: 'redder',
  good: 'better',
  well: 'better',
  bad: 'worse',
  sad: 'sadder',
  big: 'bigger'
};

const toSuperlative = {
  nice: 'nicest',
  late: 'latest',
  hard: 'hardest',
  inner: 'innermost',
  outer: 'outermost',
  far: 'furthest',
  worse: 'worst',
  bad: 'worst',
  good: 'best',
  big: 'biggest',
  large: 'largest'
};

const combine = function(lexicon, obj, tag) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    lexicon[keys[i]] = 'Comparable';
    if (lexicon[obj[keys[i]]] === undefined) {
      lexicon[obj[keys[i]]] = tag;
    }
  }
  return lexicon;
};
let lexicon = combine({}, toSuperlative, 'Superlative');
lexicon = combine(lexicon, toComparative, 'Comparative');
lexicon = combine(lexicon, toAdverb, 'Adverb');

module.exports = {
  lexicon: lexicon,
  toAdverb: toAdverb,
  toComparative: toComparative,
  toSuperlative: toSuperlative
};

},{}],213:[function(_dereq_,module,exports){
//words that can't be compressed, for whatever reason
module.exports = {
  '20th century fox': 'Organization',
  '3m': 'Organization',
  '7 eleven': 'Organization',
  '7-eleven': 'Organization',
  'g8': 'Organization',
  'motel 6': 'Organization',
  'vh1': 'Organization',
  'q1': 'Date',
  'q2': 'Date',
  'q3': 'Date',
  'q4': 'Date',
  //misc
  'records': 'Plural',
};

},{}],214:[function(_dereq_,module,exports){
'use strict';
const cardinal = {
  ones: {
    // 'a': 1,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  },
  teens: {
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
  },
  tens: {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
  },
  multiples: {
    hundred: 1e2,
    thousand: 1e3,
    grand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
    quintillion: 1e18,
    sextillion: 1e21,
    septillion: 1e24
  }
};

const ordinal = {
  ones: {
    zeroth: 0,
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9
  },
  teens: {
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19
  },
  tens: {
    twentieth: 20,
    thirtieth: 30,
    fourtieth: 40,
    fiftieth: 50,
    sixtieth: 60,
    seventieth: 70,
    eightieth: 80,
    ninetieth: 90
  },
  multiples: {
    hundredth: 1e2,
    thousandth: 1e3,
    millionth: 1e6,
    billionth: 1e9,
    trillionth: 1e12,
    quadrillionth: 1e15,
    quintillionth: 1e18,
    sextillionth: 1e21,
    septillionth: 1e24
  }
};

//used for the units
const prefixes = {
  yotta: 1,
  zetta: 1,
  exa: 1,
  peta: 1,
  tera: 1,
  giga: 1,
  mega: 1,
  kilo: 1,
  hecto: 1,
  deka: 1,
  deci: 1,
  centi: 1,
  milli: 1,
  micro: 1,
  nano: 1,
  pico: 1,
  femto: 1,
  atto: 1,
  zepto: 1,
  yocto: 1,

  square: 1,
  cubic: 1,
  quartic: 1
};

//create an easy mapping between ordinal-cardinal
let toOrdinal = {};
let toCardinal = {};
let lexicon = {};
Object.keys(ordinal).forEach(k => {
  let ord = Object.keys(ordinal[k]);
  let card = Object.keys(cardinal[k]);
  for (let i = 0; i < ord.length; i++) {
    toOrdinal[card[i]] = ord[i];
    toCardinal[ord[i]] = card[i];
    lexicon[ord[i]] = ['Ordinal', 'TextValue'];
    lexicon[card[i]] = ['Cardinal', 'TextValue'];
    if (k === 'multiples') {
      lexicon[ord[i]].push('Multiple');
      lexicon[card[i]].push('Multiple');
    }
  }
});

module.exports = {
  toOrdinal: toOrdinal,
  toCardinal: toCardinal,
  cardinal: cardinal,
  ordinal: ordinal,
  prefixes: prefixes,
  lexicon: lexicon
};

},{}],215:[function(_dereq_,module,exports){
//nouns that also signal the title of an unknown organization
//todo remove/normalize plural forms
const orgWords = [
  'administration',
  'agence',
  'agences',
  'agencies',
  'agency',
  'airlines',
  'airways',
  'army',
  'assoc',
  'associates',
  'association',
  'assurance',
  'authority',
  'autorite',
  'aviation',
  'bank',
  'banque',
  'board',
  'boys',
  'brands',
  'brewery',
  'brotherhood',
  'brothers',
  'building society',
  'bureau',
  'cafe',
  'caisse',
  'capital',
  'care',
  'cathedral',
  'center',
  'central bank',
  'centre',
  'chemicals',
  'choir',
  'chronicle',
  'church',
  'circus',
  'clinic',
  'clinique',
  'club',
  'co',
  'coalition',
  'coffee',
  'collective',
  'college',
  'commission',
  'committee',
  'communications',
  'community',
  'company',
  'comprehensive',
  'computers',
  'confederation',
  'conference',
  'conseil',
  'consulting',
  'containers',
  'corporation',
  'corps',
  'council',
  'crew',
  'daily news',
  'data',
  'departement',
  'department',
  'department store',
  'departments',
  'design',
  'development',
  'directorate',
  'division',
  'drilling',
  'education',
  'eglise',
  'electric',
  'electricity',
  'energy',
  'ensemble',
  'enterprise',
  'enterprises',
  'entertainment',
  'estate',
  'etat',
  'evening news',
  'faculty',
  'federation',
  'financial',
  'fm',
  'foundation',
  'fund',
  'gas',
  'gazette',
  'girls',
  'government',
  'group',
  'guild',
  'health authority',
  'herald',
  'holdings',
  'hospital',
  'hotel',
  'hotels',
  'inc',
  'industries',
  'institut',
  'institute',
  'institute of technology',
  'institutes',
  'insurance',
  'international',
  'interstate',
  'investment',
  'investments',
  'investors',
  'journal',
  'laboratory',
  'labs',
  // 'law',
  'liberation army',
  'limited',
  'local authority',
  'local health authority',
  'machines',
  'magazine',
  'management',
  'marine',
  'marketing',
  'markets',
  'media',
  'memorial',
  'mercantile exchange',
  'ministere',
  'ministry',
  'military',
  'mobile',
  'motor',
  'motors',
  'musee',
  'museum',
  // 'network',
  'news',
  'news service',
  'observatory',
  'office',
  'oil',
  'optical',
  'orchestra',
  'organization',
  'partners',
  'partnership',
  // 'party',
  'people\'s party',
  'petrol',
  'petroleum',
  'pharmacare',
  'pharmaceutical',
  'pharmaceuticals',
  'pizza',
  'plc',
  'police',
  'polytechnic',
  'post',
  'power',
  'press',
  'productions',
  'quartet',
  'radio',
  'regional authority',
  'regional health authority',
  'reserve',
  'resources',
  'restaurant',
  'restaurants',
  'savings',
  'school',
  'securities',
  'service',
  'services',
  'social club',
  'societe',
  'society',
  'sons',
  'standard',
  'state police',
  'state university',
  'stock exchange',
  'subcommittee',
  'syndicat',
  'systems',
  'telecommunications',
  'telegraph',
  'television',
  'times',
  'tribunal',
  'tv',
  'union',
  'university',
  'utilities',
  'workers'
];

module.exports = orgWords.reduce(function(h, str) {
  h[str] = 'Noun';
  return h;
}, {});

},{}],216:[function(_dereq_,module,exports){
'use strict';
//supported verb forms:
const forms = [
  null,
  'PastTense',
  'PresentTense',
  'Gerund',
  'Participle',
];
//
const unpackVerbs = function(str) {
  let verbs = str.split('|');
  return verbs.reduce((h, s) => {
    let parts = s.split(':');
    let prefix = parts[0];
    let ends = parts[1].split(',');
    //grab the infinitive
    let inf = prefix + ends[0];
    if (ends[0] === '_') {
      inf = prefix;
    }
    h[inf] = {};
    //we did the infinitive, now do the rest:
    for (let i = 1; i < forms.length; i++) {
      let word = parts[0] + ends[i];
      if (ends[i] === '_') {
        word = parts[0];
      }
      if (ends[i]) {
        h[inf][forms[i]] = word;
      }
    }
    return h;
  }, {});
};
module.exports = unpackVerbs;

},{}],217:[function(_dereq_,module,exports){
'use strict';
const unpack = {
  words: _dereq_('efrt-unpack'),
  plurals: _dereq_('./plurals'),
  conjugations: _dereq_('./conjugations'),
  keyValue: _dereq_('./key-value')
};
/*
 == supported plugin fields ==
  name
  words        - efrt packed
  tags         - stringified
  regex        - key-value
  patterns     - key-value
  plurals      - plural-unpack
  conjugations - conjugation-unpack
*/

const unpackPlugin = function(str) {
  let obj = str;
  if (typeof str === 'string') {
    obj = JSON.parse(str);
  }
  //words is packed with efrt
  if (obj.words && typeof obj.words === 'string') {
    obj.words = unpack.words(obj.words);
  }
  //patterns is pivoted as key-value
  if (obj.patterns) {
    obj.patterns = unpack.keyValue(obj.patterns);
  }
  //regex, too
  if (obj.regex) {
    obj.regex = unpack.keyValue(obj.regex);
  }
  //plurals is packed in a ad-hoc way
  if (obj.plurals && typeof obj.plurals === 'string') {
    obj.plurals = unpack.plurals(obj.plurals);
  }
  //conjugations is packed in another ad-hoc way
  if (obj.conjugations && typeof obj.conjugations === 'string') {
    obj.conjugations = unpack.conjugations(obj.conjugations);
  }
  return obj;
};
module.exports = unpackPlugin;

},{"./conjugations":216,"./key-value":218,"./plurals":219,"efrt-unpack":1}],218:[function(_dereq_,module,exports){
'use strict';
//pivot k:[val,val] ->  val:k, val:k
const keyValue = function(obj) {
  let keys = Object.keys(obj);
  let isCompressed = true;
  if (keys[0] && typeof obj[keys[0]] === 'string') {
    isCompressed = false;
  }
  return keys.reduce((h, k) => {
    if (isCompressed === true) {
      let arr = obj[k];
      arr.forEach((a) => {
        if (h[a]) {
          //convert val to an array
          if (typeof h[a] === 'string') {
            h[a] = [h[a]];
          }
          //add it
          h[a].push(k);
        } else {
          h[a] = k;
        }
      });
    } else {
      h[k] = obj[k];
    }
    return h;
  }, {});
};
module.exports = keyValue;

},{}],219:[function(_dereq_,module,exports){
'use strict';
const unpackPlurals = function(str) {
  return str.split(/,/g).reduce((h, s) => {
    let arr = s.split(/\|/g);
    if (arr.length === 3) {
      h[arr[0] + arr[1]] = arr[0] + arr[2];
    } else if (arr.length === 2) {
      h[arr[0]] = arr[0] + arr[1];
    } else {
      h[arr[0]] = arr[0];
    }
    return h;
  }, {});
};
module.exports = unpackPlurals;

},{}]},{},[4])(4)
});