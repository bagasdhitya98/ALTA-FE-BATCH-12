import React, { Component } from "react";

interface Props {
  id: string;
  handleModal?: boolean;
  handleClose?: React.MouseEventHandler;
  children?: React.ReactNode;
}

class Modal extends Component<Props> {
  render() {
    const { id, handleModal, handleClose, children } = this.props;

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
  }
}

export default Modal;
