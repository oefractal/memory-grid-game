import React from "react";
import Game from "./game";

class Container extends React.Component {
  render() {
    return (
      <div>
        <Game rows={5} columns={5} activeCellsCount={6} />
      </div>
    );
  }
}

export default Container;