import React, { Component } from "react";

class CustomerService extends Component {
  render() {
    const image =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721";

    return <img src={image} width={70} height={70} />;
  }
}

export default CustomerService;
