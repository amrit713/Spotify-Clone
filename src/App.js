import React,{useEffect} from "react"
import './App.css';
import Login from "./components/Login"
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./components/Player";
import {setUser,setPlaylists, setToken,discoverWeekly} from "./services/action"
import {useDispatch, useSelector} from "react-redux"




const spotify = new SpotifyWebApi();

function App() {

  const dispatch =useDispatch()

  
  const token = useSelector(state=> state.reducer.token)
  
  



  

 
 
  

  //run code based on given condition

  useEffect(()=>{
    const hash = getTokenFromUrl() // it return the object
    
    window.location.hash= "";
    const  _token = hash.access_token;

   

    if(_token){

      dispatch(setToken(_token))


      
      spotify.setAccessToken(_token);// given access token to the spotify
      
      spotify.getMe().then((user) =>{
        dispatch(setUser(user))
        console.log(user)
       
       
        

      })   //it return the promise
    spotify.getUserPlaylists().then((playlists)=>{
      dispatch(setPlaylists(playlists))
      
    })
   

    spotify.getPlaylist("37i9dQZEVXcHeAA4XAgi7B").then(response=>{
        dispatch(discoverWeekly(response))
    })

    }

    

    
    
    
    
  },[])

  return (
    <div className="app">
      {
        token ?(
          <Player spotify={spotify} />
        ) : <Login/>
      }
    
    </div>
  );
}

export default App;
