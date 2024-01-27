interface IFooterProps {
  hints?: { [key: string]: string },
  gameState: string
}

class Footer extends React.Component<IFooterProps> {
  render() {
    const defaultProps: Partial<IFooterProps> = {
      hints: {
        ready: "Get Ready",
        memorize: "Memorize",
        recall: "Recall"        
      }
    };
    const propsWithDefault: IFooterProps = {
      ...defaultProps,
      ...this.props
    }
    return (
      <div className="footer">
        <div className="hint">
          {propsWithDefault.hints?[this.props.gameState] ?? ""}...
        </div>
      </div>
    )
  }
}