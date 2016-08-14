class App extends React.Component {

  handleLinkClick(e) {
    e.preventDefault()
  }

  render () {
    debugger
    return (
      <div className="centered main-content">

        <div className="links-container">

          <a href="acdc" onClick={this.handleLinkClick}>
            <div className="link debugger-green">
              AC DC
            </div>
          </a>

          <a href="coop" onClick={this.handleLinkClick}>
            <div className="link debugger-green">
              Coop
            </div>
          </a>

          <a href="carr" onClick={this.handleLinkClick}>
            <div className="link debugger-green">
              Carr
            </div>
          </a>
        </div>

        <div className="container individual-content">

          <h1>AC/DC TD'S</h1>

          <div className="row debugger-red">
            

            <div className="col-md-6">

                <div className="row">
                  <h2>Total TD'S:  </h2>
                </div>

                <div className="row">
                  <h2>Total Games: {this.props.totalGames}</h2>
                </div>

                <div className="row">
                  <h2>Pace: 44</h2>
                </div>

                <div className="row">
                  <h2>Average Yards:  {this.props.stats.average_receiving_yards}</h2>
                </div>

                <div className="row">
                  <h2>Total Games: {this.props.totalGames}</h2>
                </div>

                <div className="row">
                  <h2>Pace: 44</h2>
                </div>

            </div>

            <div className="col-md-6 image">
              <img src="assets/ac-dc.jpg" className="content-image" />
            </div>

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
