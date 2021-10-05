import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export function PostEditor({
  title,
  content,
  onChange,
  onSubmit,
  onClickList,
}) {
  return (
    <Form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        placeholder="제목"
        value={title}
        onChange={onChange}
      />
      <textarea
        name="content"
        type="text"
        placeholder="내용"
        rows={10}
        onChange={onChange}
        value={content}
      />
      <div>
        <button onClick={onClickList}>목록</button>
        <button>작성</button>
      </div>
    </Form>
  );
}

PostEditor.propTypes = {};
