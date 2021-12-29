import React from 'react';
import './homepage.scss'

const HomePage =()=>{
    return(
        <div className='homepage'>
        <div className='directory-menu'>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">TREE</h1>
                    <span className="subtitle">CHOOSE NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SHRUB</h1>
                    <span className="subtitle">CHOOSE NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">PERENNIALS</h1>
                    <span className="subtitle">CHOOSE NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">GROUND COVER</h1>
                    <span className="subtitle">CHOOSE NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">INDOOR</h1>
                    <span className="subtitle">CHOOSE NOW</span>
                </div>
            </div>
        </div>
    </div>
    )
   
}

export default HomePage;
