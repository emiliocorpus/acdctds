class App extends React.Component {
  render () {
    return (
      <div className="row centered debugger-green">
        <div className="content debugger-blue">
          <h1>AC/DC TD'S</h1>
          <div className="row debugger-red centered">
            <div className="col-md-4 debugger-green">Total TD'S: </div>
            <div className="col-md-4 debugger-green">Total Games: {this.props.totalGames}</div>
            <div className="col-md-4 debugger-green">Pace: 44</div>
          </div>
        </div>
      </div>
    );
  }
}

























App.propTypes = {
  name: React.PropTypes.string,
  totalGames: React.PropTypes.number
};
