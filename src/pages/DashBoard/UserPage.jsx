import React, { useCallback } from "react";
import { ContentsLayout, ProfileCard } from "components";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ProfileArea = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 10rem;
`;

export function UserPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const onChangeFile = useCallback(
    (event) => {
      if (event.target.files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const formData = new FormData();
          formData.append("file", event.target.files[0]);
          dispatch(userActions.changeProfileImgAsync.request({ formData }));
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    },
    [dispatch]
  );

  if (!currentUser) return <div></div>;

  return (
    <ContentsLayout title="회원 페이지">
      <ProfileArea>
        <ProfileCard currentUser={currentUser} onChangeFile={onChangeFile} />
      </ProfileArea>
    </ContentsLayout>
  );
}

UserPage.propTypes = {};
