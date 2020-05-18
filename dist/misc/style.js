"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var space_1 = require("./space");
exports.TITLE_STYLE = "\n  font-size: 64px;\n  @media screen and (max-width: " + space_1.DISPLAY_DIVISION_LARGE + ") {\n    font-size: 48px;\n  }\n  @media screen and (max-width: " + space_1.DISPLAY_DIVISION_NORMAL + ") {\n    font-size: 38px;\n  }\n";
exports.SUBTITLE_STYLE = "\n  font-size: 48px;\n  @media screen and (max-width: " + space_1.DISPLAY_DIVISION_LARGE + ") {\n    font-size: 32px;\n  }\n  @media screen and (max-width: " + space_1.DISPLAY_DIVISION_NORMAL + ") {\n    font-size: 28px;\n  }\n";
exports.PARAGRAPH_STYLE = "\n  font-size: 22px;\n  @media screen and (max-width: " + space_1.DISPLAY_DIVISION_LARGE + ") {\n    font-size: 20px;\n  }\n  @media screen and (max-width: " + space_1.DISPLAY_DIVISION_NORMAL + ") {\n    font-size: 18px;\n  }\n";
exports.asImportant = function (s) { return s.replace(";", "!important;"); };
