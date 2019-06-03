import React from 'react';
import Runs from './components/runs';
import Centuries from './components/centuries';
import Fifties from './components/fifties';
import Bowling from './components/bowling';
import Fielding from './components/fielding';
import Innings from './components/innings';
import Matches from './components/matches';

const navMenu = [
  'Runs',
  'Centuries',
  'Fifties',
  'Bowling',
  'Catches',
  'Matches',
  'Innings'
];

class App extends React.PureComponent {
  state = {
    activeNav: 0
  };

  changeActiveNav = index => {
    if (this.state.activeNav !== index) {
      this.setState({ activeNav: index });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="headerContent"> SACHIN TENDULKAR ODI STATS </div>
          <div className="navBar">
            {navMenu.map((val, index) => {
              return (
                <div
                  className={
                    index === this.state.activeNav
                      ? 'navItem activeNav'
                      : 'navItem'
                  }
                  key={val}
                  onClick={() => this.changeActiveNav(index)}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
        <div className="stats">
          {this.state.activeNav === 0 && <Runs />}
          {this.state.activeNav === 1 && <Centuries />}
          {this.state.activeNav === 2 && <Fifties />}
          {this.state.activeNav === 3 && Bowling()}
          {this.state.activeNav === 4 && Fielding()}
          {this.state.activeNav === 5 && <Matches />}
          {this.state.activeNav === 6 && <Innings />}
        </div>
      </div>
    );
  }
}

export default App;
