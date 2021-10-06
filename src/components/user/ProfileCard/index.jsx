import React, { useState } from "react";
import { Avatar, SimpleButton } from "components";
import { IoMdCamera } from "react-icons/io";
import styled, { css } from "styled-components";
import { ProfileInfoBox } from "./ProfileInfoBox";
import { ProfileEditor } from "./ProfileEditor";
import { useDispatch } from "react-redux";
import { userActions } from "modules/user";

const Container = styled.article`
  width: 400px;

  padding: 8rem 4rem 5.6rem 4rem;
  border: 1px solid black;
  border-radius: 4rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ProfileInfo = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & > * + * {
    margin-top: 1.6rem;
  }
`;

const ProfileImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  label {
    background-color: #fff;
    width: 3rem;
    height: 3rem;
    padding: 0.4rem;
    border-radius: 50%;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 0;
    bottom: 0;

    ${({
      theme: {
        profileImgBox: { iconSize },
        color,
      },
    }) => css`
      border: 0.1rem solid ${color.gray};

      svg {
        color: #666;
        width: ${iconSize}rem;
        height: ${iconSize}rem;
      }
    `}
  }
  input {
    display: none;
  }
`;

export function ProfileCard({ currentUser, onChangeFile }) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: currentUser.email,
    nickname: currentUser.nickname,
    address: currentUser.address,
    addressDetail: currentUser.addressDetail,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    if (confirm("정말 수정하시겠습니까?")) {
      setEditable(false);
      dispatch(userActions.updateProfile(userInfo));
    }
  };

  if (!currentUser) return <div></div>;

  return (
    <Container>
      <ProfileImgBox>
        <Avatar src={currentUser?.avatar} size={200} />
        <label htmlFor="profileImgInput">
          <IoMdCamera />
        </label>
        <input
          id="profileImgInput"
          type="file"
          accept="image/*"
          onChange={onChangeFile}
        />
      </ProfileImgBox>

      <ProfileInfo>
        {editable ? (
          <ProfileEditor userInfo={userInfo} onChange={onChange} />
        ) : (
          <ProfileInfoBox userInfo={userInfo} />
        )}
      </ProfileInfo>

      <SimpleButton
        bgColor="#3A57BD"
        fontColor="#fff"
        onClick={() => (editable ? onSubmit() : setEditable((prev) => !prev))}
      >
        회원 정보 수정
      </SimpleButton>
    </Container>
  );
}

ProfileCard.propTypes = {};
