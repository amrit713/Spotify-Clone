import {
    SET_PLAYLISTS,
    SET_TOKEN,SET_USER,
    DISCOVER_WEEKLY,
    SET_PLAYING,
    SET_ITEM,
    SET_CURRENT_PLAYLIST,
    SET_TRACKS,
    SET_TRACK,
} from "./constant"

export const setUser=(user)=>(dispatch)=>{
    dispatch({
        type:SET_USER,
        user: user
    })
}

export const setPlaylists =(playlists) =>dispatch=>{
    dispatch({
        type: SET_PLAYLISTS,
        playlists:playlists
    })

}

export const setToken = (token) =>dispatch =>{
    dispatch({
        type:SET_TOKEN,
        token:token
    })
}

export  const discoverWeekly=(response) =>dispatch=>{

    dispatch({
        type:DISCOVER_WEEKLY,
        discover_weekly: response
    })
}



export  const setCurrentPlaylist = (id) =>dispatch=>{

    dispatch({
        type:SET_CURRENT_PLAYLIST,
        id: id
    })
}


export  const setTracks = (response) =>dispatch=>{

    dispatch({
        type:SET_TRACKS,
        tracks: response
    })
}


export const setTrack=(track) =>dispatch=>{
    dispatch({
        type:SET_TRACK,
        track:track
    })
}





