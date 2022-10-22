import MediaPlayer from "../../MediaPlayer";
import Ads, {Ad} from "./Ads";

class AdsPlugin{
    private ads:Ads;
    private player:MediaPlayer
    private media:HTMLMediaElement
    private currentAd:Ad

    constructor(){
        this.ads=Ads.getInstance()
        this.handleTimeUpdate=this.handleTimeUpdate.bind(this)
    }
    run(player:MediaPlayer){
        this.player=player
        this.media=this.player.media
        this.media.addEventListener("timeupdate",this.handleTimeUpdate)
    }

    private handleTimeUpdate(){
        const currentTiem=Math.floor(this.media.currentTime)
        if(currentTiem%30===0){
            this.renderAd()
        }
    }

    private renderAd(){
        if(this.currentAd){
            return
        }
        const ad=this.ads.getAd();
        this.currentAd=ad as Ad
        console.log(this.currentAd)
    }
}

export default AdsPlugin