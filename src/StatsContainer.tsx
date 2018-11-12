import * as React from 'react';
import { Component } from 'react';

import './StatsContainer.css'
import StatsCard from './StatsCard'

class StatsContainer extends Component {

    render() {
      return (
        <div className="statscontainer">
          <p className="statscomponent">Statistics Component</p>
          <StatsCard/>
        </div>
      );
    }
  }
  
  export default StatsContainer;