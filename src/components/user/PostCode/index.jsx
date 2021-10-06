import { Input } from "components/common/Input/index";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import styled, { css } from "styled-components";
import { IoSearchSharp } from "react-icons/io5";

const Overlay = styled.div`
  margin: 0;
  padding: 0;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostCodeEditor = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  ${({
    theme: {
      authForm: { inputGap },
    },
  }) => css`
    & > * + * {
      margin-top: ${inputGap / 4}rem;
    }
  `}
`;

const PostCodeButtonInput = styled.div`
  position: relative;
  display: flex;

  & > * {
    flex: 1;
  }

  ${({
    theme: {
      input,
      postCode: { iconRatio, iconMarginRight },
    },
  }) => css`
    & > button {
      width: ${input.height}rem;
      height: ${input.height}rem;
      flex: 0;
      position: absolute;
      right: ${iconMarginRight}rem;

      & svg {
        width: ${input.height * iconRatio}rem;
        height: ${input.height * iconRatio}rem;
      }

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

const DaumPostCodePopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export function PostCode({ address, addressDetail, onChange }) {
  const [open, setOpen] = useState(false);

  const onCompletePost = (data) => {
    console.log(data.address);
    onChange({ target: { name: "address", value: data.address } });
    setOpen(false);
  };

  const postCodeStyle = {
    display: "block",
    width: "400px",
    height: "485px",
    padding: "7px",
    zIndex: 100,
  };

  return (
    <>
      <PostCodeEditor>
        <PostCodeButtonInput>
          <Input
            name="address"
            type="text"
            readOnly
            placeholder="주소"
            value={address}
          />
          <button onClick={() => setOpen(true)}>
            <IoSearchSharp />
          </button>
        </PostCodeButtonInput>
        <Input
          name="addressDetail"
          type="text"
          placeholder="상세주소"
          value={addressDetail}
          onChange={onChange}
        />
      </PostCodeEditor>
      {open && (
        <Overlay>
          <DaumPostCodePopUp>
            <button onClick={() => setOpen(false)}>닫기</button>
            <DaumPostcode
              style={postCodeStyle}
              autoClose
              onComplete={onCompletePost}
            />
          </DaumPostCodePopUp>
        </Overlay>
      )}
    </>
  );
}
