/*
 * Tone Button
 * Button for tone items
 * @props
 */

import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msisdn: "",
      userToken: "",
      isPlaying: false,
      player: "",
      rate: 1.0
    };

    this.loadPlayer = this.loadPlayer.bind(this);
    this.destroyPlayer = this.destroyPlayer.bind(this);
  }

  componentDidMount(){
    if(typeof(this.props.somUrl) !== "number"){ 
      this.loadPlayer(this.props.somUrl, this.props.setRate, this.props.setTime);
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.somUrl)
    if(typeof(nextProps.somUrl) !== "number"){ 
      this.loadPlayer(nextProps.somUrl, nextProps.setRate, nextProps.setTime);
    }
  }

  loadPlayer(somUrl, setRate, setTime){
    if(this.player && this.player.play){

      this.setState({ isPlaying: true});

      if(somUrl !== this.player.src){
        this.player.src = somUrl;
      }
      
      //this.player.playbackRate = setRate ? setRate : 1;
      let self = this;
      if(self.player){
        setTimeout(function() {
          if(typeof(self.props.callbackPlay) == 'function'){
            self.props.callbackPlay(somUrl);
          }
          self.player.play();
        }, setTime);
      }
    }
  }

  destroyPlayer(e){
    //const eventType = e.type;
    if(this.player){
      this.setState({
        isPlaying: false
      });
      
      this.player.pause();
      this.player.currentTime = 0;
    }
  }

  render() {
    let iconClass = null;
    let handleClick = null;
    let label = null;
    let gaClass = null;

    if(this.state.isPlaying) {
      iconClass = "icon-stop";
      gaClass = "ga-stop";
      label = 'stop';
      handleClick = this.destroyPlayer;
    } else {
      iconClass = "icon-play";
      gaClass = "ga-play";
      label = 'play';
      handleClick = this.loadPlayer;
    }

    return (
      <div>
        <div ref="updated" className={"btn-tone btn-tone-play " + gaClass} onClick={handleClick}>
          <i className={iconClass}></i>
          {label}
        </div>
        <audio className="hidden" ref={c => this.player = c} onEnded={this.destroyPlayer} />        
      </div>
    );
  }
}

export default Player