import { NORMAL, DISPLAY_DIVISION_NORMAL, DISPLAY_DIVISION_LARGE } from "./space";

export const TITLE_STYLE = `
  text-align: center;
  font-size: 64px !important;
  padding-bottom: ${NORMAL};
  @media screen and (max-width: ${DISPLAY_DIVISION_LARGE}) {
    font-size: 48px !important;
  }
  @media screen and (max-width: ${DISPLAY_DIVISION_NORMAL}) {
    text-align: left;
    font-size: 38px !important;
  }
`;
export const SUBTITLE_STYLE = `
  font-size: 48px !important;
  @media screen and (max-width: ${DISPLAY_DIVISION_LARGE}) {
    font-size: 32px !important;
  }
  @media screen and (max-width: ${DISPLAY_DIVISION_NORMAL}) {
    font-size: 28px !important;
  }
`;

export const PARAGRAPH_STYLE = `
  text-align: center;
  font-size: 22px !important;
  padding-bottom: ${NORMAL};
  @media screen and (max-width: ${DISPLAY_DIVISION_LARGE}) {
    font-size: 20px !important;
  }
  @media screen and (max-width: ${DISPLAY_DIVISION_NORMAL}) {
    text-align: left;
  }
`;
