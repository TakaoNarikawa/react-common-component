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
var styled_components_1 = __importDefault(require("styled-components"));
var MinMax = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: none;\n  @media screen and (max-width: ", ") {\n    display: inline;\n  }\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"], ["\n  display: none;\n  @media screen and (max-width: ", ") {\n    display: inline;\n  }\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"])), function (props) { return props.max; }, function (props) { return props.min; });
var Min = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline;\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"], ["\n  display: inline;\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"])), function (props) { return props.min; });
var Max = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: none;\n  @media screen and (max-width: ", ") {\n    display: inline;\n  }\n"], ["\n  display: none;\n  @media screen and (max-width: ", ") {\n    display: inline;\n  }\n"])), function (props) { return props.max; });
var Responsive = function (_a) {
    var min = _a.min, max = _a.max, children = _a.children;
    if (min && max)
        return (react_1.default.createElement(MinMax, { min: min, max: max }, children));
    if (min)
        return react_1.default.createElement(Min, { min: min }, children);
    if (max)
        return react_1.default.createElement(Max, { max: max }, children);
    return react_1.default.createElement("br", null);
};
exports.default = Responsive;
var templateObject_1, templateObject_2, templateObject_3;
