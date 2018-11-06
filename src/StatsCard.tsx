import * as React from 'react';
import { Component } from 'react';

import { MyContext } from './App'

class StatsCard extends Component {

    handleFetchEvent = (updateStats: any) => {
        fetch(`https://api.github.com/`).then(response => {
            response.json().then(data => {
                console.log("?????", data)
                this.setState({ gitHubStats: updateStats(data.current_user_url) })
            });
        })
    }

    render() {
console.log("render called")
      return (
        <div className="stats_card">
          <p>This is the Statistics Card layer</p>
          <MyContext.Consumer>
            {context => (
              <>
                My clicks count is {context.clicksCount}
                <br></br>
                &nbsp;&nbsp;&nbsp;
                <button
                  onClick={() => {
                    return this.setState({ clicksCount: context.increaseClicks(1) });
                  }}
                >
                  UP
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  onClick={() => {
                    return this.setState({ clicksCount: context.decreaseClicks(1) });
                  }}
                >
                  DOWN
                </button>
                <br />
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;
                <button
                  onClick={ () => this.handleFetchEvent(context.updateGitHubStats) }
                >
                  Fetch GitHub stats
                </button>
                <br />
                <br />
                <br />
                {context.gitHubStats}
              </>
            )}
          </MyContext.Consumer>
        </div>
      );
    }
  }
  
  export default StatsCard;