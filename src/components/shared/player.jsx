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
      player: ""
    };

    this.loadPlayer = this.loadPlayer.bind(this);
    this.destroyPlayer = this.destroyPlayer.bind(this);
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.somUrl)
    this.loadPlayer(nextProps.somUrl);
  }

  loadPlayer(somUrl){
    if(this.player && this.player.play){

      this.setState({ isPlaying: true });

      if(somUrl !== this.player.src){
        this.player.src = somUrl;
      }
      this.player.play();

      window.addEventListener('stopOtherPlayer', this.destroyPlayer);
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

    window.removeEventListener('stopOtherPlayer', this.destroyPlayer);
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