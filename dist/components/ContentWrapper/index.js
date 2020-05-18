"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var space_1 = require("../../misc/space");
var styled_components_1 = __importDefault(require("styled-components"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n\n  max-width: 1032px;\n  margin-left: auto;\n  margin-right: auto;\n  ", "\n  ", "\n  padding: 0px;\n\n  @media screen and (max-width: ", ") {\n    max-width: 800px;\n  }\n  @media screen and (max-width: ", ") {\n    max-width: 330px;\n  }\n\n  ", "\n"], ["\n  position: relative;\n  overflow: hidden;\n\n  max-width: 1032px;\n  margin-left: auto;\n  margin-right: auto;\n  ", "\n  ", "\n  padding: 0px;\n\n  @media screen and (max-width: ", ") {\n    max-width: 800px;\n  }\n  @media screen and (max-width: ", ") {\n    max-width: 330px;\n  }\n\n  ", "\n"])), function (props) { return (props.topMargin ? "margin-top: " + props.topMargin + ";" : ""); }, function (props) { return (props.bottomMargin ? "margin-bottom: " + props.bottomMargin + ";" : ""); }, space_1.DISPLAY_DIVISION_LARGE, space_1.DISPLAY_DIVISION_NORMAL, function (props) { return props.additionalStyle; });
var ContentWrapper = function (_a) {
    var children = _a.children, topMargin = _a.topMargin, bottomMargin = _a.bottomMargin, additionalStyle = _a.additionalStyle;
    return (react_1.default.createElement(Wrapper, { topMargin: topMargin, bottomMargin: bottomMargin, additionalStyle: additionalStyle }, children));
};
exports.default = ContentWrapper;
var templateObject_1;
