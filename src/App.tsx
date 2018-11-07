import React, { Component } from "react";
import './App.css'

import StatsContainer from './StatsContainer'

const initialState = {
  clicksCount: 100,
  gitHubStats: '',
  increaseClicks: (num: number) => {
    return (initialState.clicksCount += num);
  },
  decreaseClicks: (num: number) => {
    return (initialState.clicksCount -= num);
  },
  updateGitHubStats : (stuff : string) => {
    return (initialState.gitHubStats = stuff);
  }
};

type State = Readonly<typeof initialState>;

export const MyContext = React.createContext(initialState);


class App extends Component<object, State> {
  readonly state: State = initialState;

  render() {
    const { clicksCount } = this.state;
    return (
      <MyContext.Provider value={this.state}>

        <div className="applayer">
          <p className="appcomponent">Parent Component</p>
          <StatsContainer />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
