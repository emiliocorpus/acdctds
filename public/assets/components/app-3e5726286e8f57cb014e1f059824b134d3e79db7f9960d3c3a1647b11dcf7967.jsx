class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Test Push to Heroku</h1>
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
