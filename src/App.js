import React from "react";
import styled from "styled-components";
import { ContentWrapper, style } from "react-common-component";

const Container = styled.div`
  text-align: center;

  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Title = styled.h1`
  ${style.TITLE_STYLE}
`;
const Pre = styled.pre`
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  ${style.PARAGRAPH_STYLE}
`;

function App() {
  return (
    <Container>
      <ContentWrapper>
        <Title>ContentWrapper</Title>
      </ContentWrapper>
    </Container>
  );
}

export default App;
