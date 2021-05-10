import React from 'react'
import "./sidebar.css"

import SidebarOption from "./SiderbarOption"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useSelector} from "react-redux"


function Sidebar({spotify}) {
    const playlists = useSelector(state=> state.reducer.playlists)
    console.log(playlists)

    

   

    
    return (
        <div className="sidebar">
           <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
           <SidebarOption  title="Home" Icon={HomeOutlinedIcon}/>
           <SidebarOption  title="Serach" Icon={SearchIcon}/>
           <SidebarOption  title="Your Library" Icon={LibraryMusicIcon}/>

           <br/>
           <strong className="sidebar_title">PLAYLISTS</strong>
           <hr/>

            {
                playlists?.items?.map(playlist =>(
                    <SidebarOption key={playlist.id} spotify={spotify} id={playlist.id} title={playlist.name}/>
                ))
            }

        </div>
    )
}

export default Sidebar
