import React from "react";

interface ICellProps {
  id: string;
}

class Cell extends React.Component<ICellProps> {
  render() {
    return (
      <div className="cell">
        {this.props.id}
      </div>
    );
  }
}

export default Cell;