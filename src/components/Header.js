import React from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import {useSelector} from "react-redux"

function Header({spotify}) {

    const user = useSelector(state=> state.reducer.user)
    console.log("user", user)
    
    return (
        <div className="header">
            <div className="header_left">
            <SearchIcon />
                <input placeholder="Search for Artists,Songs" type="text"/>
            </div>

            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt="Amrit"/>
                <h4>{user?.display_name}</h4>

            </div>
        </div>
    )
}

export default Header
