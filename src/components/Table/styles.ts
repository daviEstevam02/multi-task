import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f2f2f2;
`;

export const Header = styled.th`
  text-align: left;
  padding: 16px;
  background-color: #e9e9e9;
  font-size: 1.2rem;
`;

export const Footer = styled.tfoot`
  font-weight: bold;
`;

export const Row = styled.tr`
  background-color: #fff;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

export const Cell = styled.td`
  padding: 16px;
  font-size: 1.1rem;
`;
