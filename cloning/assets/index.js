import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"
import {AutoPause} from "./plugins/AutoPause.js"

  const video = document.querySelector('video');
  const player = new MediaPlayer({ 
    el: video,plugins:[
    new AutoPlay(),
    new AutoPause()
  ] });
  
  const button = document.querySelector('#play');
  button.onclick = () => player.togglePlay();

  const buttonMute=document.querySelector("#mute")
  buttonMute.onclick=()=>player.toggleMute()