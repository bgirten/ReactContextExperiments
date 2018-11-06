import * as React from 'react';
import { Component } from 'react';

import StatsCard from './StatsCard'

class StatsContainer extends Component {

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
        <div className="stats_container">
          <p>This is the Statistics layer</p>
          <StatsCard/>
        </div>
      );
    }
  }
  
  export default StatsContainer;