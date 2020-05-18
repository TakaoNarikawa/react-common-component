import { DISPLAY_DIVISION_NORMAL, DISPLAY_DIVISION_LARGE } from "./space";

export const TITLE_STYLE = `
  font-size: 64px;
  @media screen and (max-width: ${DISPLAY_DIVISION_LARGE}) {
    font-size: 48px;
  }
  @media screen and (max-width: ${DISPLAY_DIVISION_NORMAL}) {
    font-size: 38px;
  }
`;
export const SUBTITLE_STYLE = `
  font-size: 48px;
  @media screen and (max-width: ${DISPLAY_DIVISION_LARGE}) {
    font-size: 32px;
  }
  @media screen and (max-width: ${DISPLAY_DIVISION_NORMAL}) {
    font-size: 28px;
  }
`;

export const PARAGRAPH_STYLE = `
  font-size: 22px;
  @media screen and (max-width: ${DISPLAY_DIVISION_LARGE}) {
    font-size: 20px;
  }
  @media screen and (max-width: ${DISPLAY_DIVISION_NORMAL}) {
    font-size: 18px;
  }
`;

export const asImportant = (s: string) => s.replace(";", "!important;");
