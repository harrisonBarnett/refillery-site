import React from 'react';
import Logo from '../static/assets/logo-outline.png'

const Splash = () => {
    return (
        <div className='splash'>
            <div className='splash-title-container'>
                <h1>Wild Indigo Refillery</h1>
                <h2>A Sustainable Market</h2>
            </div>

            <img className='splash-logo' src={Logo}></img>

            <button className='splash-enter-btn'>Enter</button>

            <div className='splash-footer'>
                <p>Piedmont, SC</p>
                <p>123.456.7890</p>
            </div>
        </div>
    );
};

export default Splash;