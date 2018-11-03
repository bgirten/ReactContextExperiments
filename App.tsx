import React, { Component } from "react";

const initialState = {
  clicksCount: 100,
  lastName: "Girten",
  upTheAnte: (num: number) => {
    return (initialState.clicksCount += num);
  },
  downTheAnte: (num: number) => {
    return (initialState.clicksCount -= num);
  }
};
type State = Readonly<typeof initialState>;
const MyContext = React.createContext(initialState);

const incrementClicksCount = (prevState: State) => ({
  clicksCount: initialState.clicksCount + 1
});
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1
});

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <>
              {context.lastName} clicked me {context.clicksCount} times
              <button
                onClick={() => {
                  return this.setState({ clicksCount: context.upTheAnte(1) });
                }}
              >
                UP
              </button>
              <button
                onClick={() => {
                  return this.setState({ clicksCount: context.downTheAnte(1) });
                }}
              >
                DOWN
              </button>
              <br />
              <button
                onClick={() => {
                  fetch(`https://api.github.com/`).then(response => {
                    response.json().then(function(data) {
                      console.log(data);
                    });
                  });
                }}
              >
                brahss
              </button>
            </>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component<object, State> {
  readonly state: State = initialState;

  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => this.setState(decrementClicksCount);

  render() {
    console.log("It's HAMMER time");
    const { clicksCount } = this.state;
    return (
      <MyContext.Provider value={this.state}>
        <div>
          <p>I am the app</p>
          <Person />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
