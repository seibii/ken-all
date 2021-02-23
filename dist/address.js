"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAddressListFromText = function (rawData) {
    var lines = rawData
        .split('\n')
        .filter(function (line) { return line.length > 0; });
    return lines.map(function (line) {
        var address = line.split(',');
        if (address.length !== 4)
            throw new Error('CSV was broken.');
        return address.map(function (item) {
            return item.replace(/"/g, '');
        });
    });
};
exports.extractTargetAddress = function (postCodeBack, addressList) {
    return addressList.filter(function (address) { return address[0] === postCodeBack; });
};
var removeFirstItemFromAddress = function (address) {
    var copiedArray = __spreadArrays(address);
    copiedArray.shift();
    if (copiedArray.length !== 3) {
        throw new Error('Failed removeFirstItemFromAddress.');
    }
    return copiedArray;
};
exports.normalizeAddressList = function (addressList) {
    return addressList.map(function (address) { return removeFirstItemFromAddress(address); });
};
//# sourceMappingURL=address.js.map