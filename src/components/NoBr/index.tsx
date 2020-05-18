import styled from "styled-components";
import React from "react";

export const NoBr = styled.span`
  display: inline-block;
`;

type Props = {
  words: (string | React.ReactNode)[];
};
export const NoBrs: React.FC<Props> = (props) => (
  <>
    {props.words.map((w) => (
      <NoBr>{w}</NoBr>
    ))}
  </>
);
