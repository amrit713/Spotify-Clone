import React from 'react'
import "./footer.css"
import {useDispatch, useSelector} from 'react-redux'

import{
  setAudio,
  setPlayingSound,
  setRepeat,
  setShuffle,
  setVolume,
 
} from "../services/soundAction"

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { setTrack } from '../services/action';






function Footer({spotify}) {

  

  const track = useSelector(state=>state.reducer.track)
  const tracks = useSelector(state=>state.reducer.tracks)

  const playing = useSelector(state=> state.sound.playing)
  const audio = useSelector(state=>state.sound.audio)
  const volume = useSelector(state=>state.sound.volume)
  const repeat = useSelector(state=>state.sound.repeat)
  const shuffle = useSelector(state=>state.sound.shuffle)
   

  
 const dispatch = useDispatch()

  const startPlaying =() =>{
    
    dispatch(setPlayingSound(true))
    dispatch(setVolume(volume/100))
  }

  const stopPlaying =() =>{
   
    dispatch(setPlayingSound(false))
  }


 
   

  const repeatHandler =() =>{
    if(!repeat && shuffle){
      shuffleHandler();
    }
    dispatch(setRepeat(!repeat))

  }

  const shuffleHandler =()=>{
    if(!shuffle && repeat){
      repeatHandler()
    }

    dispatch(setShuffle(!shuffle))
  }

  const handleChange= (e , value) =>{
    dispatch(setVolume(value/100))
  }

  // console.log(tracks?.items[Math.floor(Math.random()*8)].track.preview_url)

  if(audio){
    audio.onended =() =>{
      if(shuffle){
        while(true){
          let randomTrackNumber = Math.floor(Math.random() * tracks.items.length);
          let randomTrack = tracks.items[randomTrackNumber].track;

          if(track !== randomTrack){
            dispatch(setTrack(randomTrack))
           
            let wasPlaying= playing;
           dispatch(setPlayingSound(false))
           
           let audio = new Audio(randomTrackNumber.preview_url)
           audio.loop = repeat;
           dispatch(setAudio(audio))

           if(wasPlaying){
             dispatch(setPlayingSound(true))

           }
           document.title =`${randomTrack.name} . ${randomTrack.artists.map(artist=>artist.name).join(",")}`
           break;
            
          }
          
        }
      }
      if(!shuffle &&!repeat){
        dispatch(setPlayingSound(false))
      }
    }
  }
 

  



  
  

    return (
        <div className="footer">
          <div className="footer_left">
          
          <img className="footer_albumLogo" src={track? track.album.images[0].url:""} alt=""/>
          <div className="footer_songInfo">
            <h4>{track ? track.name:"No song selected"}</h4>
            <p>{track ? track.artists.map(artist=>artist.name).join(", "):null}</p>
          </div>
          </div>

          <div className="footer_center">
           <ShuffleIcon className={shuffle ? "footer_green":"footer_icon"} onClick={track? shuffleHandler: null}/>
           <SkipPreviousIcon className="footer_icon"/>
           {
              playing ?
              (
                <PauseCircleFilledIcon onClick={track ? stopPlaying :null}  
                fontSize="large" className="footer_icon"/>
              )
              :(
              <PlayCircleOutlineIcon fontSize="large" className="footer_icon"
              onClick ={track? startPlaying:null}/>
             )
             
            
           }
           
            
           
           <SkipNextIcon className="footer_icon"/>
           <RepeatIcon className={repeat?"footer_green": "footer_icon"} onClick={track ? repeatHandler:null}/>
           
          </div>

          <div className="footer_right">
          <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider style={{color:"#1DB954"}} valueLabelDisplay="off"
          onChange={handleChange}
           aria-labelledby="continuous-slider"
           min={0}
           max={100}
            />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      
     

          </div>
        </div>
    )
}

export default Footer
