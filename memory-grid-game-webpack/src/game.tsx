import Row from "./row";
import Cell from "./cell";
import Footer from "./footer";
import React from "react";
import _ from "lodash";
import { IRecordGuessInfo } from "./interfaces";

interface IGameProps {
  rows: number;
  columns: number;
  activeCellsCount: number;
}

interface IGameState {
  gameState: string;
  wrongGuesses: Array<string>;
  correctGuesses: Array<string>;
}

class Game extends React.Component<IGameProps, IGameState> {
  private matrix: Array<Array<string>> = [];
  private activeCells: Array<string> = [];
  private recordGuess(recordGuessInfo: IRecordGuessInfo) {
    let { gameState, wrongGuesses, correctGuesses } = this.state;
    if (recordGuessInfo.userGuessIsCorrect) {
      correctGuesses.push(recordGuessInfo.cellId);
      if (correctGuesses.length === this.props.activeCellsCount) {
        gameState = "won";
      }      
    } 
    else {
      wrongGuesses.push(recordGuessInfo.cellId);
      if (wrongGuesses.length >= 3) {
        gameState = "lost";      
      }
    }
    this.setState({ gameState, correctGuesses, wrongGuesses });    
  }
  public constructor(props: IGameProps) {
    super(props);
    this.matrix  = []
    let row: Array<string>;
    for (let r = 0; r < this.props.rows; r++) {
      row = [];
      for (let c = 0; c < this.props.columns; c++) {
        row.push(`${r}${c}`);
      }
      this.matrix.push(row);
    }
    let flatMatrix = _.flatten(this.matrix);
    this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);    
    this.state = 
    { 
      gameState: 'ready',
      wrongGuesses: [],
      correctGuesses: []
    };
  }
  public componentDidMount() {
    setTimeout(() => this.setState({ gameState: 'memorize' }), 2000);
    setTimeout(() => this.setState({ gameState: 'recall' }), 4000);
  }
  public render() {
    return (
      <>
        <div className="grid">
          {this.matrix.map((row, ri) => (
            <Row key={ri}>
              {row.map(cellId => 
                <Cell 
                  key={cellId} 
                  id={cellId} 
                  activeCells={this.activeCells}
                  recordGuess={this.recordGuess.bind(this)}
                  {...this.state} />)}
            </Row>
          ))}
        </div>
        <Footer activeCellsCount={this.props.activeCellsCount} {...this.state} />
      </>
    );
  }
}
export default Game;