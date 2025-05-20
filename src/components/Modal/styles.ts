import styled from "styled-components";

type ModalSize = "sm" | "md" | "lg" | "xl" | "default";

interface StyleProps {
  size?: ModalSize;
}

function setModalSize(modalSize: ModalSize) {
  switch (modalSize) {
    case "sm":
      return "500px";
    case "md":
      return "800px";
    case "lg":
      return "1120px";
    case "xl":
      return "1500px";
    default:
      return "800px";
  }
}

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div<StyleProps>`
  background-color: #fff;
  border-radius: 8px;
  width: ${(props) => setModalSize(props?.size ?? "default")};
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
