import React from "react";
import styled from "styled-components";
import { CopyBlock, atomOneDark } from "react-code-blocks";

function CodeBox({ code, language, showLineNumbers, startingLineNumber }) {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      wrapLines
      theme={atomOneDark}
    />
  );
}

export default CodeBox;
