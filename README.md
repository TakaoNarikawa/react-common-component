# react-common-component

[DEMO](https://react-common-component.netlify.app/)

## How to install

```sh
yarn add https://github.com/TakaoNarikawa/react-common-component.git
```

## How to use

### ContentWrapper

Auto resized wrapper

```jsx
<ContentWrapper>
  ...
</ContentWrapper>
```

```jsx
<ContentWrapper topMargin="24px" bottomMargin="32px">
  ...
</ContentWrapper>
```

### NoBr

Enforce word not to break line

```jsx
<p>
  文字同士のスペースが存在しない日本語でも、
  <NoBr>途中で改行したくない文字</NoBr>
  を指定し、自動的に改行。
</p>
```

### NoBrs

Enforce words not to break line

```jsx
<p>
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
</p>
```

### Style

`style` can be used with `styled-components`

```jsx
import styled from "styled-components";

const Title = styled.h1`
  ${style.TITLE_STYLE}
  other-style: ...;
`;
const Subtitle = styled.h1`
  ${style.SUBTITLE_STYLE}
  other-style: ...;
`;
const Paragraph = styled.p`
  ${style.PARAGRAPH_STYLE}
  other-style: ...;
`;
```
