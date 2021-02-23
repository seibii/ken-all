"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require('es6-promise');
var fetch = require('fetch-ponyfill')(Promise).fetch;
global.Promise = Promise;
var fetchCsv = function (postCodeFront) {
    return fetch("https://ken-all.numb86.net/csv/" + postCodeFront + ".csv", { referrer: '', mode: 'no-cors' });
};
exports.default = fetchCsv;
//# sourceMappingURL=fetchCsv.js.map