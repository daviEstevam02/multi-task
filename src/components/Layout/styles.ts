import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #f5f5f5;
`;
