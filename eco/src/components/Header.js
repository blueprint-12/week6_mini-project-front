import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderCont>헤더란다!</HeaderCont>;
};

const HeaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: blue;
  height: 100px;
`;
export default Header;
