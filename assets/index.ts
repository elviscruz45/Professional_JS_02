import MediaPlayer from "./MediaPlayer"
import AutoPlay from "./plugins/AutoPlay"
import {AutoPause} from "./plugins/AutoPause"

const video = document.querySelector('video');
const player = new MediaPlayer({ 
  el: video,plugins:[
  new AutoPlay(),
  new AutoPause()
] });

const button:HTMLElement = document.querySelector('#play') as HTMLElement;
button.onclick = () => player.togglePlay();

const buttonMute:HTMLElement=document.querySelector("#mute") as HTMLElement
buttonMute.onclick=()=>player.toggleMute()

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("/sw.js").catch(error=>{
    console.log(error.message)
  })
}

