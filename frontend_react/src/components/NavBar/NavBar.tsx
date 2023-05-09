import React from 'react'
import { images } from '../../constants'
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <div>
                <img src={images.logo} alt="logo" />
            </div>
            <ul>
                {['home','about', 'work', 'skills', 'contact']}
            </ul>
        </nav>
        
    )
}

export default NavBar