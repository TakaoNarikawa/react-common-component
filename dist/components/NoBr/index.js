"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
exports.NoBr = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
exports.NoBrs = function (props) { return (react_1.default.createElement(react_1.default.Fragment, null, props.words.map(function (w) { return (react_1.default.createElement(exports.NoBr, null, w)); }))); };
var templateObject_1;
