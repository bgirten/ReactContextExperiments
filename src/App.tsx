import React, { Component } from "react";

import Person from './Person'

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
    console.log("It's HAMMER time");
    const { clicksCount } = this.state;
    return (
      <MyContext.Provider value={this.state}>
        <div>
          <p>Martin is a wuss</p>
          <Person />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
