import React from 'react'
import "./body.css"

import Header from "./Header"
import SongRow from "./SongRow"
import {useSelector, useDispatch} from "react-redux"
import {setPlayingSound, setVolume} from "../services/soundAction"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';



function Body({spotify}) {
const discover_weekly = useSelector(state=>state.reducer.discover_weekly)

 const tracks = useSelector(state=>state.reducer.tracks)
 const track = useSelector(state=>state.reducer.track)
 const current_playlist = useSelector(state=> state.reducer.current_playlist)
 const volume = useSelector(state=> state.sound.volume)
 const playing = useSelector(state => state.sound.playing)


 const dispatch = useDispatch()
 
 const startPlaying = () =>{
     
     dispatch(setPlayingSound(true))
     dispatch(setVolume(volume/100))
 }

 const stopPlaying =() =>{
     dispatch(setPlayingSound(false))
 }








    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body_info">
                <img src={current_playlist?current_playlist.images[0].url: discover_weekly?.images[0]?.url} alt=""/>
                <div className="body_infoText">
               <strong>PLAYLIST</strong>
                    <h2>{ current_playlist?current_playlist.name: discover_weekly?.name}</h2>
                    <p>{current_playlist?current_playlist.description: discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
            <div className="body_icons">
            {
                playing ?  (<PauseCircleFilledIcon className="body_shuffle" style={{color:"#1DB954"}} 
                onClick={track ? stopPlaying : null} />)
                :(<PlayCircleFilledIcon className="body_shuffle" style={{color:"#1DB954"}} 
                 onClick ={track ? startPlaying : null}/> )

            }
                
                <FavoriteIcon fontSize="large" />
                <MoreHorizIcon fontSize="large" />

            </div>
            
           
           {
               tracks ? tracks.items.map(item=>(
                <SongRow track={item.track}  key={item.track.id} track ={item.track}/>
               )): discover_weekly?.tracks.items.map(item=>(
                <SongRow track={item.track} key={item.track.id} track ={item.track}/>
               ))
           }
            {/* {tracks?.items.map(item=>(

               <SongRow track={item.track} key={item.track.id} track ={item.track}/>
            ))} */}

            </div>
        </div>
    )
}

export default Body
