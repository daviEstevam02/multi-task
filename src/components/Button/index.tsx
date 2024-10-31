import React from 'react';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  loading?: boolean;
  full?: boolean;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  variant?: string;
  border?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  secondary = false,
  tertiary,
  loading = false,
  full = false,
  backgroundColor,
  color,
  width,
  variant,
  height,
  border,
  ...rest
}) => {
  return (
    <Container
      {...rest}
      disabled={loading ? true : disabled}
      secondary={secondary}
      tertiary={tertiary}
      loading={loading || undefined}
      full={full}
      width={width}
      variant={variant}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      border={border}
    >
      {loading ? '' : children}
    </Container>
  );
};

export default Button;
