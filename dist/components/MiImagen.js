"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiImagen = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MiImagen = function (_a) {
    var _b = _a.url, url = _b === void 0 ? "https://imagenes.t13.cl/images/original/2022/09/1663618419-13662000.jpg" : _b, _c = _a.alt, alt = _c === void 0 ? "mi-imagen" : _c, altura = _a.altura, ancho = _a.ancho, estilo = _a.estilo;
    return (0, jsx_runtime_1.jsx)("img", { src: url, alt: alt, className: "".concat(estilo), style: { height: altura, width: ancho } });
};
exports.MiImagen = MiImagen;
exports.default = exports.MiImagen;
