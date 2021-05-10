import React, { useState } from 'react'
import "./songRow.css"
import {setTrack} from "../services/action"
import {setAudio, setPlayingSound} from "../services/soundAction"
import { useDispatch, useSelector} from "react-redux"

function SongRow({track}) {

    const playing = useSelector(state=>state.sound.playing)
    const repeat = useSelector(state=>state.sound.repeat)
   const [active,setActive] = useState(false)

    const dispatch = useDispatch()
    
   

   

    const changeTrack =(e,track)=>{
        dispatch(setTrack(track))

        setActive(!active)
        
        let wasPlaying = playing;
        dispatch(setPlayingSound(false))

        let audio = new Audio(track.preview_url)
        audio.loop = repeat;

        dispatch(setAudio(audio))

        if(wasPlaying) {
            dispatch(setPlayingSound(true))
        }
        document.title = `${track.name} .${track.artists.map(artist=>artist.name).join(" , ")}`
    }

    console.log(active)
    return (
        <div className="songRow" onClick={e => changeTrack(e,track)}  >
            <img className="songRow_album" src={track.album.images[0].url} alt=""/>
            <div className="songRow_info">
                <h1>{track.name}</h1>
                <p>
                     
                    {track.artists.map(artist => `${artist.name} `)}
                    
                    {track.album.name}
                </p>

            </div>
            
        </div>
    )
}

export default SongRow
