import React from "react";

interface IRowProps {
  children: React.ReactNode;
}

class Row extends React.Component<IRowProps> {
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>  
    )
  }
}

export default Row;