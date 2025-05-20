import styled, { css } from "styled-components";

interface SidebarProps {
  isOpen?: boolean;
}

export const Container = styled.div<SidebarProps>`
  width: 300px;
  height: 100vh;
  position: relative;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.15);
  transition: width 0.5s ease, opacity 0.5s ease;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      width: 0;
      overflow: hidden;
      opacity: 0;
    `}
`;

export const HeaderContent = styled.div`
  width: 100%;
  text-align: right;
  padding: 1rem 2rem;
`;
