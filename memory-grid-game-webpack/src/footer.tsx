import React from "react";

interface IFooterProps {
  hints?: { [key: string]: string };
  gameState: string;
  activeCellsCount: number;
  correctGuesses: Array<string>;
}

class Footer extends React.Component<IFooterProps> {
  public remainingCount(): React.ReactNode {
    if (this.props.gameState !== "recall") {
      return null;
    }
    return (
      <div className="remaining-count">
        {this.props.activeCellsCount - this.props.correctGuesses.length}
      </div>
    );
  }
  public render(): React.ReactNode {
    const defaultProps: Partial<IFooterProps> = {
      hints: {
        ready: "Get Ready",
        memorize: "Memorize",
        recall: "Recall",
        won: "Well Played",
        lost: "Game Over"
      }
    };
    const propsWithDefault: IFooterProps = {
      ...defaultProps,
      ...this.props
    }

    let assignedHints = propsWithDefault.hints;
    if (!assignedHints)
      assignedHints = {};

    return (
      <div className="footer">
        <div className="hint">
          { assignedHints[this.props.gameState] } ...
        </div>
        {this.remainingCount()}
      </div>
    )
  }
}

export default Footer;