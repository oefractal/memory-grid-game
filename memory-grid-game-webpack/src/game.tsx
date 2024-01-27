import Row from "./row";
import Cell from "./cell";
import React from "react";

interface IGameProps {
  rows: number;
  columns: number;
  activeCellsCount: number;
}

interface IGameState {
  gameState: string;
}

class Game extends React.Component<IGameProps, IGameState> {
  constructor(props: IGameProps) {
    super(props);
    this.state = { gameState: 'ready' };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ gameState: 'memorize' }), 2000);
    setTimeout(() => this.setState({ gameState: 'recall' }), 4000);
  }
  render() {
    let matrix: Array<Array<string>> = []
    let row: Array<string>;
    for (let r = 0; r < this.props.rows; r++) {
      row = [];
      for (let c = 0; c < this.props.columns; c++) {
        row.push(`${r}${c}`);
      }
      matrix.push(row);
    }
    return (
      <>
        <div className="grid">
          {matrix.map((row, ri) => (
            <Row key={ri}>
              {row.map(cellId => <Cell key={cellId} id={cellId} />)}
            </Row>
          ))}
        </div>
        <Footer {...this.state} />
      </>
    );
  }
}
export default Game;