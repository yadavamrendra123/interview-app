import React from 'react'

export default function Header(){
    return(
        <div className='header'>
            <p className='user'>Users</p>
            <img  className='search-icon' src="search.png"/>
            <button className='add-btn'>+ New User</button>
        </div>
    )
}