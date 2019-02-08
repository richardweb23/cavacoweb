import React, { Component } from 'react';

import BracoCavaco from '../shared/braco-cavaco.jsx';

class DicionarioAcordes extends Component {
  constructor(props){
    super(props);

    this.state = {
      notasAcorde: []
    }

    //this.montarAcordes = this.montarAcordes.bind(this);
  }

  montarAcorde(array){
    this.setState({notasAcorde: array})
  }

  render(){
    return (
      <React.Fragment>
        <h1>--</h1>
        <BracoCavaco acorde={this.state.notasAcorde}/>

        <button onClick={()=>{this.montarAcorde([42, 30, 21, 12])}}>Criar C Maior</button>
        <button onClick={()=>{this.montarAcorde([44, 32, 23, 14])}}>Criar D Maior</button>

        {/*<button onClick={()=>{this.playAcorde()}}>Tocar Acorde</button>
        <button onClick={()=>{this.montarAcorde([44, 32, 23, 14])}}>Criar D Maior</button>*/}
      </React.Fragment>
    )
  }
}

export default DicionarioAcordes;