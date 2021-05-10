import React from 'react'
import "./sidebarOption.css";
import {setCurrentPlaylist,setTracks} from "../services/action"
import {useDispatch} from "react-redux"

function SiderbarOption({spotify, id,title, Icon}) {

    const  dispatch = useDispatch()

    const changePlayList = (id,e) =>{
        dispatch(setCurrentPlaylist(id))
        
        spotify.getPlaylistTracks(id).then(response=>{
            dispatch(setTracks(response))
        })

    }

    return (
        <div className="sidebarOption">
           {Icon && <Icon className="sidebarOption_icon"/>} 
            {Icon?<h4>{title}</h4>: <p onClick={(e)=>changePlayList(id,e)}>{title}</p>}
            
        </div>
    )
}

export default SiderbarOption
