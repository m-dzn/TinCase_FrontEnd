import React from "react";
import config from "config.json";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { SimpleButton } from "components";
import styled from "styled-components";
import { palette } from "styles/tokens";

const { postListPage, postEditPage } = config.route;

const Box = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;

const ButtonBox = styled.div`
  margin-left: auto;

  & > * + * {
    margin-left: 1rem;
  }
`;

export const PostDetailButtonBox = withRouter(function ({
  query,
  location,
  onClickRemove,
  isOwner,
}) {
  return (
    <Box>
      <Link
        to={{
          pathname: postListPage,
          search: query,
        }}
      >
        <SimpleButton>목록</SimpleButton>
      </Link>
      {isOwner && (
        <ButtonBox>
          <Link
            to={{
              pathname: postEditPage,
              search: query,
              state: {
                from: location,
              },
            }}
          >
            <SimpleButton primary>수정</SimpleButton>
          </Link>

          <SimpleButton
            bgColor={palette.red}
            fontColor={palette.white}
            onClick={onClickRemove}
          >
            삭제
          </SimpleButton>
        </ButtonBox>
      )}
    </Box>
  );
});

PostDetailButtonBox.propTypes = {};
