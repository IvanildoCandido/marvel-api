import React from "react";
import { Container, ModalBody } from "./Modal.styled";

const Modal = ({ children, status, setStatus }) => {
  const handleModalClick = ({ target }) => {
    if (target.classList.contains("modal-bg")) {
      setStatus(false);
    }
  };
  return (
    <Container className="modal-bg" status={status} onClick={handleModalClick}>
      <ModalBody>{children}</ModalBody>
    </Container>
  );
};
export default Modal;
