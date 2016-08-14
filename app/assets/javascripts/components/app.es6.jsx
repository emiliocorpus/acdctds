class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      currentTab: 'D C'
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
          <div className="row">
            <div className="col-md-6 image">
              <img src="assets/amari-cooper.jpg" className="content-image" />
            </div>
            <div className="col-md-6 stats-container">
                <div className="row">
                  <h4><span className="stat">Games Played:</span>  {this.props.stats.amari.games_played}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Touchdowns:</span> {this.props.stats.amari.receiving_tds}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Receptions:</span>{this.props.stats.amari.receptions}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Yards:</span> {this.props.stats.amari.receiving_yards}</h4>
                </div>

                <div className="row">
                  <h4><span className="stat">Avg Receiving Yards:</span> {this.props.stats.amari.average_receiving_yards}</h4>
                </div>

                <div className="row">
                  <h4><span className="stat">Longest Receptions:</span> {this.props.stats.amari.longest_reception}</h4>
                </div>

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
          <div className="row">
            
            <div className="col-md-6 image">
              <img src="assets/derek-carr.jpg" className="content-image" />
            </div>
            <div className="col-md-6 stats-container">
                <div className="row">
                  <h4><span className="stat">Games Played:</span> {this.props.stats.derek.games_played}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Touchdowns:</span> {this.props.stats.derek.passing_touchdowns}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Completed/Total Passes:</span> {this.props.stats.derek.completed_passes} / {this.props.stats.derek.pass_attempts}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Passer Rating:</span> {this.props.stats.derek.passer_rating}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Passing Yards:</span> {this.props.stats.derek.passing_yards}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Average Yards per Pass:</span> {this.props.stats.derek.average_yards_per_pass}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Interceptions:</span> {this.props.stats.derek.interceptions}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Sacks:</span>{this.props.stats.derek.sacks}</h4>
                </div>
                <div className="row">
                  <h4><span className="stat">Fumbles/Fumbles Losts:</span> {this.props.stats.derek.fumbles} / {this.props.stats.derek.fumbles_lost}</h4>
                </div>
            </div>
          </div>
        </div>
    )
    return display
  }


  render () {
    var displayStats
    if (this.state.currentTab === 'D C') {
      displayStats = this.showDerekStats()
    }
    else {
      displayStats = this.showAmariStats()
    }
    return (
      <div className="centered main-content">

        <div className="links-container">

          <a href="ac" onClick={this.handleLinkClick} tabindex="-1">
            <div className="link" >
              A C
            </div>
          </a>

          <a href="dc" onClick={this.handleLinkClick} tabindex="-1">
            <div className="link" >
              D C
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
