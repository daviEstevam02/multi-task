import styled, { css } from 'styled-components';

interface ButtonProps {
  secondary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  full?: boolean;
  height?: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
  tertiary?: boolean;
  variant?: string;
}

export const Container = styled.button<ButtonProps>`
  width: 400px;
  height: 51px;
  background-color: #009C87;
  color: #fff;
  font-size: 13px;
  border: none;
  letter-spacing: 1.3px;
  font-weight: bold;
  cursor: pointer;
  position: relative;

  ${props =>
    props.variant && 
    props.variant === "link" &&
    css`
      background-color: transparent !important;
      color: #009C87 !important;
      box-shadow: none !important;
      width: 100% !important;
      height: 100% !important;
    `}

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}

  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.15);
`;
