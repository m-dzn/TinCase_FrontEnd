import React from "react";
import styled, { css } from "styled-components";

const InfoField = styled.div`
  width: 100%;
  padding: 0.8rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  word-break: break-all;
  white-space: pre-line;

  ${({ theme: { fontSize } }) => css`
    font-size: ${fontSize.lg}rem;
  `}

  & > * + * {
    margin-top: 1.8rem;
  }
`;

export function ProfileInfoBox({ userInfo }) {
  const { email, nickname, address, addressDetail } = userInfo;

  return (
    <>
      {email && <InfoField>{email}</InfoField>}
      {nickname && <InfoField>{nickname}</InfoField>}
      {address && (
        <>
          <InfoField>
            <div>{address}</div>
            <div>{addressDetail}</div>
          </InfoField>
        </>
      )}
    </>
  );
}

ProfileInfoBox.propTypes = {};
