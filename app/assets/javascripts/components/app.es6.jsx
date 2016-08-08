class App extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Total Games: {this.props.totalGames}</div>
      </div>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string,
  totalGames: React.PropTypes.number
};
