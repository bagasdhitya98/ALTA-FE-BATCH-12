import React, { FC } from "react";

interface ModalProps {
  id: string;
  handleModal?: boolean;
  handleClose?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ id, handleModal, handleClose, children }) => {
  return (
    <>
      {handleModal ? (
        <div
          id={id}
          className="w-60 h-40 bg-white rounded-md shadow-md"
          onClick={handleClose}
        >
          <div>{children}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
