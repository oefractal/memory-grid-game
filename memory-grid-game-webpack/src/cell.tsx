import React from "react";
import { IRecordGuessInfo } from "./interfaces";

interface ICellProps {
  id: string;
  activeCells: Array<string>;
  gameState?: string;
  recordGuess: (recordGuessInfo: IRecordGuessInfo) => void;
  correctGuesses: Array<string>;
  wrongGuesses: Array<string>;
}

class Cell extends React.Component<ICellProps> {
  private handleClick() {
    if (!this.guessState() && this.props.gameState === "recall") {
      this.props.recordGuess({
        cellId: this.props.id,
        userGuessIsCorrect: this.isActive()
      });
    }
  }
  private needShowActiveCells(): boolean {
    return ["memorize", "lost"].indexOf(this.props.gameState ?? "") >= 0;
  }
  private guessState(): string {
    if (this.props.correctGuesses.indexOf(this.props.id) >= 0) {
      return "true";
    } 
    else if (this.props.wrongGuesses.indexOf(this.props.id) >= 0) {
      return "false";
    }
    return "";
  }
  private isActive(): boolean {
    return this.props.activeCells.indexOf(this.props.id) >= 0;
  }
  public render(): React.ReactNode {
    let className = "cell";
    if (this.needShowActiveCells() && this.isActive()) {
      className += " active";
    }    
    let guessState = this.guessState();
    if (guessState)
      className += " guess-" + guessState;
    return (
      <div className={className} onClick={this.handleClick.bind(this)}>
      </div>
    );
  }
}

export default Cell;