import React, { ReactNode } from "react";
import { Overlay, ModalContainer, CloseButton } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer size="lg">
        <CloseButton onClick={onClose} aria-label="Close modal">
          &times;
        </CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
}
