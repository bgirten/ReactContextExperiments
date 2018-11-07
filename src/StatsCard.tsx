import * as React from 'react';
import { Component } from 'react';

import './StatsCard.css';
import { MyContext } from './App'

class StatsCard extends Component {

    handleFetchEvent = (updateStats: any) => {
        fetch(`https://api.github.com/`).then(response => {
            response.json().then(data => {
                this.setState({ gitHubStats: updateStats(data.emojis_url) })
            });
        })
    }

    render() {
      return (
        <div className="statscard">
          <p className="statscardtitle">Statistics Card</p>
          <MyContext.Consumer>
            {context => (
              <>
                <span className="clickscount">My clicks count is {context.clicksCount}</span>

                <button className="clicksbutton" 
                  onClick={() => {
                    return this.setState({ clicksCount: context.increaseClicks(1) });
                  }}
                >
                  +
                </button>

                <button className="clicksbutton" 
                  onClick={() => {
                    return this.setState({ clicksCount: context.decreaseClicks(1) });
                  }}
                >
                  -
                </button>

                <button className="githublink" 
                  onClick={ () => this.handleFetchEvent(context.updateGitHubStats) }
                >
                  GitHub emojis link
                </button>
                <p className="githuboutput">
                  {context.gitHubStats}
                </p>

              </>
            )}
          </MyContext.Consumer>
        </div>
      );
    }
  }
  
  export default StatsCard;