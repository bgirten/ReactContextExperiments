import * as React from "react";
import { Component } from "react";

import { AppContextConsumer } from "../../components/AppContext";

class Header extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <AppContextConsumer>
        {appContext =>
          appContext && (
            <p>
              Name: {appContext.name}
              <br />
              Author: {appContext.author}
              <br />
              URL: {appContext.url}
              <br />
              state.lastName: {appContext.state.lastName}
              <br />
              <button onClick={() => appContext.onStuff("john")}>
                HIT ME!
              </button>
            </p>
          )
        }
      </AppContextConsumer>
    );
  }
}

export default Header;
