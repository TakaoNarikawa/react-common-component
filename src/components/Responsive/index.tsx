import React from "react";
import styled from "styled-components";

type Props = {
  min?: string;
  max?: string;
};

const MinMax = styled.div<Props>`
  display: none;
  @media screen and (max-width: ${(props) => props.max}) {
    display: inline;
  }
  @media screen and (max-width: ${(props) => props.min}) {
    display: none;
  }
`;
const Min = styled.div<Props>`
  display: inline;
  @media screen and (max-width: ${(props) => props.min}) {
    display: none;
  }
`;
const Max = styled.div<Props>`
  display: none;
  @media screen and (max-width: ${(props) => props.max}) {
    display: inline;
  }
`;

const Responsive: React.FC<Props> = ({ min, max, children }) => {
  if (min && max)
    return (
      <MinMax min={min} max={max}>
        {children}
      </MinMax>
    );
  if (min) return <Min min={min}>{children}</Min>;
  if (max) return <Max max={max}>{children}</Max>;
  return <br />;
};

export default Responsive;
