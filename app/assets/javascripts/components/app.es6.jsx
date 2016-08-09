class App extends React.Component {
  render () {
    return (
      <div className="centered main-content">

        <div className="links-container">

          <a href="#">
            <div className="link debugger-green">
              AC DC
            </div>
          </a>

          <a href="#">
            <div className="link debugger-green">
              Coop
            </div>
          </a>

          <a href="#">
            <div className="link debugger-green">
              Carr
            </div>
          </a>
        </div>

        <div className="container individual-content">

          <h1>AC/DC TD'S</h1>

          <div className="row debugger-red">
            

            <div className="col-md-4">

                <div className="row">
                  <h3>Total TD'S: </h3>
                </div>

                <div className="row">
                  <h3>Total Games: {this.props.totalGames}</h3>
                </div>

                <div className="row">
                  <h3>Pace: 44</h3>
                </div>

            </div>

            <div className="col-md-8 image">
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
