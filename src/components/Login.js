import React from 'react'
import "./login.css"
import {loginUrl} from "../spotify"

function Login() {
    return (
        <div className="login">
            <img src="https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logotipo.jpg" />

            
            <a href={loginUrl}> LOGIN WITH SPOTIFY </a>
        </div>
    )
}

export default Login
