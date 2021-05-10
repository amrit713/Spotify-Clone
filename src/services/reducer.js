import {SET_PLAYLISTS,
    SET_USER, SET_TOKEN,
     DISCOVER_WEEKLY,
     SET_CURRENT_PLAYLIST,
     SET_TRACKS,
     SET_TRACK
    } from "./constant"

const initialState = {
    user :null,
    playlists:[],
   current_playlist: null,
    token: null, 
    tracks:null,
    track:null,
     // token:"QAWnydCcTvY4eT93J15qFGuyMRbjnlR1g1zCDd3ziHW9iG9fvsrWFMHZRaGeCLrXNvXIlaR7QXtqQBmfVbbO_ZoKC5jIOK6jhXrJ7FSrVzOvlsbA7EKfCPKJYW0t-oqtaU9TU8vtmm4DQhD2ZvpD0hNFiFr0QIOZrsEIai-lXq3cCEoVMOK",


}

export const reducer = (state= initialState, action)=>{
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user:action.user
            }

        case SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists
            }
        
        case SET_TOKEN:
            return {
                ...state, 
                token: action.token
            }
        
        case DISCOVER_WEEKLY:
            return{
                ...state,
                discover_weekly : action.discover_weekly
            }
        
           

            

            case SET_CURRENT_PLAYLIST:
                let currentPlaylist = null;

                state.playlists.items.forEach(playlist=>{
                    if(playlist.id === action.id){
                        currentPlaylist = playlist
                    }
                    
                })

                return{
                    ...state,
                    current_playlist: currentPlaylist
                    
                }
            
            case SET_TRACK:
                
                return{
                    ...state,
                    track:action.track
                }

            case SET_TRACKS:
                
                return{
                        ...state,
                        tracks:action.tracks
                }

            default:
                return state

    }
}