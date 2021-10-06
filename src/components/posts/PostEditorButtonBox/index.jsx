import React from "react";
import config from "config.json";
import { SimpleButton } from "components";
import styled from "styled-components";

const { EDIT_MODE } = config.const;

const Container = styled.div`
  & > * + * {
    margin-left: 1rem;
  }
`;

export function PostEditorButtonBox({ type, onSubmit, onClickList }) {
  return (
    <Container>
      <SimpleButton onClick={onClickList}>목록</SimpleButton>
      <SimpleButton primary onClick={onSubmit}>
        {type === EDIT_MODE ? "수정" : "작성"}
      </SimpleButton>
    </Container>
  );
}

PostEditorButtonBox.propTypes = {};
