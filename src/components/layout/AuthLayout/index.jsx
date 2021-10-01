import React from "react";
import styled from "styled-components";
import { FlexBox } from "components";

export function AuthLayout({ title, children }) {
  return <header>{title}</header>;
}

AuthLayout.propTypes = {};
