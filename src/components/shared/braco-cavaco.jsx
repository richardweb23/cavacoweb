import React, { Component } from "react";

import Player from './player';

class BracoCavaco extends Component {
  constructor(props){
    super(props);
    this.state = {
      casas: [0,1,2,3,4,5,6,7,8,9,10,11,12],
      cordas: [1,2,3,4],
      nota: '',
      notas: [],
      somUrl: null,
      mute: true,
      notasAcorde: [],
      notasPrimeiraCorda: ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
      notasSegundaCorda:  ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
      notasTerceiraCorda: ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"]
    }
    this.handleClick = this.handleClick.bind(this);
    this.printNota = this.printNota.bind(this);
    this.printBullet = this.printBullet.bind(this);
  }

  componentDidMount(){

  }
  
  componentWillReceiveProps(nextProps){
    this.setState({notasAcorde: nextProps.acorde});
  }

  handleClick(e, _casa, _corda, _tablatura){
    const urlBase = process.env.PUBLIC_URL;
    let corda = _corda;
    let casa = _casa;
    let tablatura = _tablatura;
    let notasDaCorda = this.getNota(corda);

    console.log('casa: ' + casa + ' corda: ' + corda);
    console.log('Notas da corda: ' + notasDaCorda);
    this.setState({nota: notasDaCorda[casa], mute: false,  notas: [urlBase+'/audios/corda-'+corda+'/'+tablatura+'.mp3']})
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
    let acorde = this.state.notasAcorde;//[44,32,23,14]; //[42, 21, 12];

    let corda = parseInt(numberCorda);
    let bullet = false;

    if(acorde.length > 0 ){
      acorde.forEach((item)=>{
        if(item === corda){
          bullet = true
        }
      })
    }
    
    return bullet
  }

  playAcorde(){
    const urlBase = process.env.PUBLIC_URL;
    let notas = [];
    let notasAcorde = this.state.notasAcorde.length ? this.state.notasAcorde : [40,30,20,10];
    
    notasAcorde.map((item,index) => {
      let folder = item;
      folder = folder.toString();
      folder = folder[0]

      notas.push(urlBase+'/audios/corda-'+folder+'/'+item+'.mp3');
    })
    this.setState({ mute: false, notas: notas})
  }

  callbackPlay(_path){
    let path = _path.split('/')[3];
    path = path.split('.')[0];
    path = path[0]

    console.log(path);
  }

  render(){
    let renderPlayer;
    
    if(this.state.notas.length && !this.state.mute){
      renderPlayer = this.state.notas.map((item, index)=>{
        return (
          <React.Fragment>
            <Player somUrl={item} setTime={(index*500)} setRate={index} key={index} callbackPlay={this.callbackPlay}/>
          </React.Fragment>
        )
      });
    }

    return(
      <section className="cavaco">
        <div id="nota">NOTA {this.state.nota}</div>
        
        <div className="braco">
          {this.state.casas.map((item, indexCasa)=>{
            let casa = indexCasa;
            return (
              <div className={casa===0 ? "casa inicial" : "casa"} key={casa} data-casa={casa}>
                {this.state.cordas.map((itemCorda, indexCorda)=>{
                  let corda = Math.abs(indexCorda-4);
                  let tablatura = corda +''+ casa;

                  return (
                  <div className="corda" key={indexCorda}
                    data-tablatura={tablatura}
                    id={tablatura}
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
          
        <button onClick={()=>{this.playAcorde()}}>Tocar</button>
        {renderPlayer}
      </section>
    )
  }
}

export default BracoCavaco;