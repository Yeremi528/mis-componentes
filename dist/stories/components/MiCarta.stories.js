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
exports.conItems = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var components_1 = require("../../components");
exports.default = {
    title: 'HOC/MiCarta',
    component: components_1.MiCarta,
    subcomponents: { MiImagen: components_1.MiImagen, MiTitulo: components_1.MiTitulo }
};
var Empty = function (args) { return (0, jsx_runtime_1.jsx)(components_1.MiCarta, __assign({}, args)); };
var conItems = function (args) { return ((0, jsx_runtime_1.jsxs)(components_1.MiCarta, { children: [(0, jsx_runtime_1.jsx)(components_1.MiTitulo, {}), (0, jsx_runtime_1.jsx)(components_1.MiImagen, {})] })); };
exports.conItems = conItems;
