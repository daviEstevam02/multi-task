import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem 2rem 1.5rem 0;
  background-color: #009c87;
`;

export const NavbarButtonContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
