import React, { Component } from 'react';

import BracoCavaco from '../shared/braco-cavaco.jsx';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  render(){
    return (
      <React.Fragment>
        <BracoCavaco />
      </React.Fragment>
    )
  }
}

export default Home;