import React from "react";
import './index.css';
import Header from './Header.js';
import GameForm from './GameForm.js';


const WelcomePage = (props) => {
    const {onChange, onSubmit, userData} = props;

    return (       
        <div className="WelcomePage">
            <Header />
            <GameForm onChange={onChange} onSubmit={onSubmit} userData={userData} />
        </div>
    )
}

export default WelcomePage
