import React from "react";
import { DISPLAY_DIVISION_NORMAL, DISPLAY_DIVISION_LARGE } from "../../misc/space";
import styled from "styled-components";

type Props = {
  topMargin?: string;
  bottomMargin?: string;
  additionalStyle?: string;
};

const Wrapper = styled.div<Props>`
  position: relative;
  overflow: hidden;

  max-width: 1032px;
  margin-left: auto;
  margin-right: auto;
  ${(props) => (props.topMargin ? `margin-top: ${props.topMargin};` : "")}
  ${(props) => (props.bottomMargin ? `margin-bottom: ${props.bottomMargin};` : "")}
  padding: 0px;

  @media screen and (max-width: ${DISPLAY_DIVISION_LARGE}) {
    max-width: 800px;
  }
  @media screen and (max-width: ${DISPLAY_DIVISION_NORMAL}) {
    max-width: 330px;
  }

  ${(props) => props.additionalStyle}
`;

const ContentWrapper: React.FC<Props> = ({
  children,
  topMargin,
  bottomMargin,
  additionalStyle,
}) => (
  <Wrapper topMargin={topMargin} bottomMargin={bottomMargin} additionalStyle={additionalStyle}>
    {children}
  </Wrapper>
);

export default ContentWrapper;
