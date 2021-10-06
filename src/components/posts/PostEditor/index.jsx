import React, { useRef, useMemo } from "react";
import styled, { css } from "styled-components";
import { editorStyles } from "./editorStyles";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  ${editorStyles}

  padding: 3rem 0;
  position: relative;

  .ql-editor {
    height: 50vh;
    overflow-y: scroll;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  outline: none;
  resize: none;
  white-space: nowrap;

  ${({ theme: { color, fontSize } }) => css`
    background: ${color.surface};
    color: ${color.text};
    border: 0.1rem solid ${color.gray};

    font-size: ${fontSize.md}rem;
  `}
`;

export function PostEditor({ title, content, onChange }) {
  const quill = useRef(null);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }, { font: [] }, { size: [] }],
          [{ align: [] }],
          [{ color: [] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          [{ script: "sub" }, { script: "super" }],
          ["clean"],
          ["link", "image", "video"],
        ],
        handlers: {
          image: () => imageHandler(quill.current),
        },
      },
    }),
    [quill]
  );

  return (
    <Form>
      <TitleInput
        name="title"
        type="text"
        placeholder="제목"
        value={title}
        onChange={(event) => onChange(event.target.name, event.target.value)}
      />
      <Wrapper>
        <ReactQuill
          ref={quill}
          theme="snow"
          modules={modules}
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(value) => onChange("content", value)}
        />
      </Wrapper>
    </Form>
  );
}

PostEditor.propTypes = {};
