import React, { Component } from "react";

import Player from './player';

class BracoCavaco extends Component {
  constructor(props){
    super(props);
    this.state = {
      casas: [0,1,2,3,4,5,6,7,8,9,10,11,12],
      cordas: [1,2,3,4],
      nota: '',
      somUrl: null,
      notasPrimeiraCorda: ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
      notasSegundaCorda: ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
      notasTerceiraCorda: ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"]
    }
    this.handleClick = this.handleClick.bind(this);
    this.printNota = this.printNota.bind(this);
    this.printBullet = this.printBullet.bind(this);
  }
  
  handleClick(e, _casa, _corda, _tablatura){
    let corda = _corda;
    let casa = _casa;
    let tablatura = _tablatura;
    let notasDaCorda = this.getNota(corda);

    console.log('casa: ' + casa + ' corda: ' + corda);
    console.log('Notas da corda: ' + notasDaCorda);

    this.setState({nota: notasDaCorda[casa], somUrl: process.env.PUBLIC_URL+'/audios/'+tablatura+'.mp3'})
  }

  getNota(_corda){
    var corda = "corda_" + _corda;

    switch(corda){
      case "corda_2":
        return this.state.notasSegundaCorda
      case "corda_3":
        return this.state.notasTerceiraCorda
      default:
        return this.state.notasPrimeiraCorda
    }
  }

  printNota(_corda, _casa){
    let notasDaCorda = this.getNota(_corda);
    return notasDaCorda[_casa]
  }

  printBullet(numberCorda){
    let acorde = [];//[44,32,23,14]; //[42, 21, 12];
    let corda = parseInt(numberCorda);
    let bullet = false;

    acorde.forEach((item)=>{
      if(item === corda){
        bullet = true
      }
    })

    return bullet
  }

  render(){
    return(
      <section className="cavaco">
        <div id="nota">NOTA {this.state.nota}</div>
        {/*<img src={process.env.PUBLIC_URL + '/teste.png'} />*/}
        <Player somUrl={this.state.somUrl}/>
        <div className="braco">
          {this.state.casas.map((item, indexCasa)=>{
            let casa = indexCasa;
            return (
              <div className={casa===0 ? "casa inicial" : "casa"} key={casa}>
                {this.state.cordas.map((itemCorda, indexCorda)=>{
                  let corda = Math.abs(indexCorda-4);
                  let tablatura = corda +''+ casa;

                  return (
                  <div className="corda" key={indexCorda}
                    data-tablatura={tablatura}
                    data-corda={corda}
                    data-nota={this.printNota(corda, casa)}
                    onClick={(e)=>{this.handleClick(e, casa, corda, tablatura)}}>

                      {this.printBullet(tablatura) &&
                        <div className="bullet"></div>
                      }
                      
                  </div>)
                })}
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default BracoCavaco;