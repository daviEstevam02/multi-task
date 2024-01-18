import styled, { css } from 'styled-components';

interface ErrorProps {
  hasError?: boolean;
  labelText?: string;
  width?: string;
  height?: string;
}

export const Container = styled.div<ErrorProps>`
  width: 100%;
  height: 55px;
  border: none;
  border-bottom: 2.5px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Label = styled.span<ErrorProps>`
  text-align: left;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1.8px;
  color: #888888;

  ${props =>
    props.hasError &&
    css`
      color: #c53030;
    `}
`;

export const HTMLInput = styled.input<ErrorProps>`
  width: 100%;
  border: none;
  background: transparent;
  margin-top: 5px;
  height: 50%;
  outline: none;
  font-size: 13px;
  letter-spacing: 1.3px;

  &::placeholder {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 1.3px;
    color: #cccccc;
  }

  ${props =>
    props.hasError &&
    css`
      &::placeholder {
        color: #c53030;
      }
    `}
`;
