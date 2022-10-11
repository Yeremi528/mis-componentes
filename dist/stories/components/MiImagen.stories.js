"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MiImagen_1 = require("../../components/MiImagen");
exports.default = {
    title: 'UI/MiImagen',
    component: MiImagen_1.MiImagen
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MiImagen_1.MiImagen, __assign({}, args)); };
exports.Basic = Template.bind({});
