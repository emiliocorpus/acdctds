class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      currentTab: 'DC'
    };

    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick(e) {
    e.preventDefault()
    if (this.state.currentTab !== e.target.innerHTML) {
      this.setState({
        currentTab: e.target.innerHTML
      })
    }
  }


  showAmariStats() {
      var display = []
      display.push(
        <div className="container individual-content" key={2}>
          <h1>AMARI COOPER</h1>
          <div className="row">
            <div className="col-md-6 stats-container">
                <div className="row">
                  <h2>Touchdowns:  {this.props.stats.amari.receiving_tds}</h2>
                </div>
                <div className="row">
                  <h2>Receptions: {this.props.stats.amari.receptions}</h2>
                </div>
                <div className="row">
                  <h2>Yards:  {this.props.stats.amari.receiving_yards}</h2>
                </div>
                <div className="row">
                  <h2>Avg Yds Per Reception:  {this.props.stats.amari.average_receiving_yards}</h2>
                </div>
            </div>
            <div className="col-md-6 image">
              <img src="assets/amari-cooper.jpg" className="content-image" />
            </div>
          </div>
        </div>
    )
    return display
  }

  showDerekStats() {
    var display = []
    display.push(
        <div className="container individual-content" key={1}>
          <h1>DEREK CARR</h1>
          <div className="row">
            <div className="col-md-6 stats-container">
                <div className="row">
                  <h4>Games Played:  {this.props.stats.derek.games_played}</h4>
                </div>
                <div className="row">
                  <h4>Touchdowns:  {this.props.stats.derek.passing_touchdowns}</h4>
                </div>
                <div className="row">
                  <h4>Completed/Passes: {this.props.stats.derek.completed_passes} / {this.props.stats.derek.pass_attempts}</h4>
                </div>
                <div className="row">
                  <h4>Passer Rating:  {this.props.stats.derek.passer_rating}</h4>
                </div>
                <div className="row">
                  <h4>Passing Yards:  {this.props.stats.derek.passing_yards}</h4>
                </div>
                <div className="row">
                  <h4>Avg Yds Per Pass:  {this.props.stats.derek.average_yards_per_pass}</h4>
                </div>
                <div className="row">
                  <h4>Interceptions: {this.props.stats.derek.interceptions}</h4>
                </div>
                <div className="row">
                  <h4>Sacks: {this.props.stats.derek.sacks}</h4>
                </div>
                <div className="row">
                  <h4>Fumbles/Fumbles Lost: {this.props.stats.derek.fumbles} / {this.props.stats.derek.fumbles_lost}</h4>
                </div>
            </div>
            <div className="col-md-6 image">
              <img src="assets/derek-carr.jpg" className="content-image" />
            </div>
          </div>
        </div>
    )
    return display
  }


  render () {
    var displayStats
    if (this.state.currentTab === 'DC') {
      displayStats = this.showDerekStats()
    }
    else {
      displayStats = this.showAmariStats()
    }
    return (
      <div className="centered main-content">

        <div className="links-container">

          <a href="ac" onClick={this.handleLinkClick}>
            <div className="link">
              AC
            </div>
          </a>

          <a href="dc" onClick={this.handleLinkClick}>
            <div className="link">
              DC
            </div>
          </a>
        </div>

          <FlipMove staggerDelayBy={300} enterAnimation="elevator" leaveAnimation="none">
            {displayStats}
          </FlipMove>

      </div>
    );
  }
}

























App.propTypes = {
  name: React.PropTypes.string,
  totalGames: React.PropTypes.number
};
