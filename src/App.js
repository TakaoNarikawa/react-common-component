import React from "react";
import styled from "styled-components";
import { ContentWrapper, style, NoBr, NoBrs } from "react-common-component";

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
const Subtitle = styled.h1`
  ${style.SUBTITLE_STYLE}
`;
const Paragraph = styled.p`
  ${style.PARAGRAPH_STYLE}
`;
const Dark = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;
const Border = styled.div`
  border: dashed 2px orange;
`;
const Highlight = styled(NoBr)`
  color: orange;
`;

function App() {
  return (
    <Container>
      <Title>Content Wrapper</Title>
      <ContentWrapper>
        <Dark>
          <Border>
            <Paragraph>画面のサイズに合わせて、内容の横幅を自動で調整。</Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          </Border>
        </Dark>
        <p>&lt;-- Try resizing window --&gt;</p>
      </ContentWrapper>

      <ContentWrapper>
        <Title>NoBr</Title>
        <Dark>
          <Paragraph>
            文字同士のスペースが存在しない日本語でも、
            <Highlight>途中で改行したくない文字</Highlight>
            を指定し、自動的に改行。
          </Paragraph>
        </Dark>
        <Dark>
          <Paragraph>
            文字同士のスペースが存在しない日本語でも、途中で改行したくない文字
            を指定し、自動的に改行。
          </Paragraph>
        </Dark>
        <p>&lt;-- Try resizing window --&gt;</p>
      </ContentWrapper>

      <ContentWrapper>
        <Title>NoBrs</Title>
        <Dark>
          <Paragraph>
            <NoBrs
              words={[
                "単語の",
                "途中で",
                "改行",
                "させない、",
                "意味の",
                "区切りを",
                "指定",
                "することで",
                "自動的に",
                "改行。",
              ]}
            />
          </Paragraph>
        </Dark>
        <Dark>
          <Paragraph>
            単語の途中で改行させない、意味の区切りを指定することで自動的に改行。
          </Paragraph>
        </Dark>
        <p>&lt;-- Try resizing window --&gt;</p>
      </ContentWrapper>

      <ContentWrapper>
        <Title>Style</Title>
        <Dark>
          <Title>
            <NoBrs words={["style", ".", "TITLE_", "STYLE"]} />
          </Title>
        </Dark>
        <Dark>
          <Subtitle>
            <NoBrs words={["style", ".", "SUB", "TITLE_", "STYLE"]} />
          </Subtitle>
        </Dark>
        <Dark>
          <Paragraph>
            <NoBrs words={["style", ".", "PARAGRAPH_", "STYLE"]} />
          </Paragraph>
        </Dark>
        <p>&lt;-- Try resizing window --&gt;</p>
      </ContentWrapper>
    </Container>
  );
}

export default App;
