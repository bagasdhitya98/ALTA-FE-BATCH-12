import React, { Component } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

class Layout extends Component<LayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
      </div>
    );
  }
}

export default Layout;
