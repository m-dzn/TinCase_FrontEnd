import React from "react";
import config from "config.json";
import styled, { css } from "styled-components";
import {
  IoCaretBackSharp,
  IoCaretForwardSharp,
  IoPlayBackSharp,
  IoPlayForwardSharp,
} from "react-icons/io5";
import { Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const { postListPage } = config.route;

const buttonSize = 26;
const hoverBgColor = "#89a3c2";
const hoverTextColor = "#fff";

const Container = styled.div`
  display: flex;
`;

const PageButton = styled.button`
  ${({ active }) =>
    active &&
    css`
      background: ${hoverBgColor};
      color: ${hoverTextColor};
    `}

  width: ${buttonSize}px;
  height: ${buttonSize}px;

  text-align: center;

  cursor: pointer;

  transition: all 0.2s ease-out;

  &:hover {
    background: ${hoverBgColor};
    color: ${hoverTextColor};
  }
`;

const ArrowButton = styled.button`
  width: ${buttonSize}px;
  height: ${buttonSize}px;

  text-align: center;

  ${({ disabled }) => css`
    ${!disabled && "cursor: pointer;"}
  `}
`;

export const Pagination = withRouter(function ({
  pageNum,
  pageSize,
  totalPages,
  history,
}) {
  const startPage = Math.floor((pageNum - 1) / pageSize) * pageSize + 1;
  const endPage = Math.min(startPage + pageSize - 1, totalPages);

  const isFirst = pageNum === 1;
  const noPrev = startPage === 1;
  const noNext = endPage === totalPages;
  const isLast = pageNum === totalPages;

  function gotoPage(num) {
    history.push(`${postListPage}?pageNum=${num}`);
  }

  function onClickPageButton(num) {
    gotoPage(num);
  }

  function isDisabled(condition) {
    return totalPages === 0 || condition;
  }

  let pages = [];

  if (pageNum < 0) return <Redirect to={postListPage} />;

  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <PageButton
        key={i}
        active={i === pageNum}
        onClick={() => onClickPageButton(i)}
      >
        {i}
      </PageButton>
    );
  }

  return (
    <Container>
      <ArrowButton onClick={() => gotoPage(1)} disabled={isDisabled(isFirst)}>
        <IoPlayBackSharp />
      </ArrowButton>
      <ArrowButton
        onClick={() => gotoPage(startPage - 1)}
        disabled={isDisabled(noPrev)}
      >
        <IoCaretBackSharp />
      </ArrowButton>

      {pages}

      <ArrowButton
        onClick={() => gotoPage(endPage + 1)}
        disabled={isDisabled(noNext)}
      >
        <IoCaretForwardSharp />
      </ArrowButton>
      <ArrowButton
        onClick={() => gotoPage(totalPages)}
        disabled={isDisabled(isLast)}
      >
        <IoPlayForwardSharp />
      </ArrowButton>
    </Container>
  );
});

Pagination.propTypes = {
  pageNum: PropTypes.number,
};
