class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      currentTab: 'D C',
      tabClasses: {dc: 'active-tab', ac: 'inactive-tab'},
      isLoading: true,
      display: false
    };

    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick(e) {
    e.preventDefault()
    if (this.state.currentTab !== e.target.innerHTML) {
      if (e.target.innerHTML === 'D C') {
        this.setState({
          currentTab: e.target.innerHTML,
          tabClasses: {dc: 'active-tab', ac: 'inactive-tab'}
        })
      }
      else {
        this.setState({
          currentTab: e.target.innerHTML,
          tabClasses: {dc: 'inactive-tab', ac: 'active-tab'}
        })
      }
      
    }
  }

  componentDidMount() {
    debugger
    this.setState({
      isLoading: false,
      display: true
    })
  }
   

  showAmariStats() {
      var display = []
      debugger
      display.push(
        <div className="container individual-content" key={2}>
          <div className="row">
            <div className="col-md-6 image">
              <img src="assets/amari.jpg" className="content-image" />
            </div>
            <div className="col-md-6 stats-container">
                <div className="row custom-header">
                  <h2>2016 Preseason</h2>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Games Played:</span>  {this.props.stats.amari.games_played}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Touchdowns:</span> {this.props.stats.amari.receiving_tds}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Receptions:</span> {this.props.stats.amari.receptions}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Receiving Yards:</span> { this.props.stats.amari.receiving_yards}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Longest Reception:</span> {this.props.stats.amari.longest_reception}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Avg Receiving Yards:</span> {this.props.stats.amari.average_receiving_yards}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Fumbles/Fumbles Lost: </span> {this.props.stats.amari.fumbles} / {this.props.stats.amari.fumbles_lost}</h4>
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
              <img src="assets/derek-min.jpg" className="content-image" />
            </div>
            <div className="col-md-6 stats-container">
                <div className="row custom-header">
                  <h2>2016 Preseason</h2>
                </div>

                <div className="row custom-row">
                  <h4><span className="stat">Games Played:</span> {this.props.stats.derek.games_played}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Touchdowns:</span> {this.props.stats.derek.passing_touchdowns}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Completed/Total Passes:</span> {this.props.stats.derek.completed_passes} / {this.props.stats.derek.pass_attempts}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Passer Rating:</span> {this.props.stats.derek.passer_rating}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Passing Yards:</span> {this.props.stats.derek.passing_yards}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Average Yards per Pass:</span> {this.props.stats.derek.average_yards_per_pass}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Interceptions:</span> {this.props.stats.derek.interceptions}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Sacks:</span> {this.props.stats.derek.sacks}</h4>
                </div>
                <div className="row custom-row">
                  <h4><span className="stat">Fumbles/Fumbles Losts:</span> {this.props.stats.derek.fumbles} / {this.props.stats.derek.fumbles_lost}</h4>
                </div>
            </div>
          </div>
        </div>
    )
    return display
  }


// <!-- creat new component for loading symbols -->


  render () {
    var displayStats
    if (this.state.currentTab === 'D C') {
      displayStats = this.showDerekStats()
    }
    else {
      displayStats = this.showAmariStats()
    }
    debugger
    return (
      <div className="centered main-content">

        <div className="links-container">

          <a href="#" onClick={this.handleLinkClick} >
            <div className={this.state.tabClasses['ac'] + " link"}  >
              A C
            </div>
          </a>
            <div className="links-divider">
              <img className="logo" src="assets/raiders-logo.png" />
            </div>

          <a href="#" onClick={this.handleLinkClick} >
            <div className={this.state.tabClasses['dc'] + " link"} >
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
