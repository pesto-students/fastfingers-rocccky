import React, { useState } from "react";
import './index.css';
import GetWord from './GetWord.js';

const CONFIG_LEVEL = {
    "Easy" : 1,
    "Medium" : 1.5,
    "Hard" : 2
}
const CONGIF_FACTOR = 0.01;

const GamePage = (props) => {
    const {userData} = props;
    const name = userData.name;
    const difficultyLevel = userData.difficultyLevel;

    const [gameLevel, setGameLevel] = useState((CONFIG_LEVEL[difficultyLevel]));
    const [gameWord, setGameWord] = useState(GetWord({level: gameLevel}));
    const [typedWord, setTypedWord] = useState("");

    
    const changeWord = () => { 
        let newGameLevel = gameLevel + CONGIF_FACTOR;
        setGameLevel(newGameLevel); 
        const newWord = GetWord({level: gameLevel});
        setGameWord(newWord);
        setTypedWord("");
    };

    const handleTextChange = (e) => {
        
        if (gameWord === e.target.value) {
            changeWord();
        } else {
            setTypedWord(e.target.value);
        }
      };
    
    const gameWordChars = gameWord.split("");
    const typedWordChars = typedWord.split("");

    return (
        <div className="gamePage">
            <h1>Hi {name}! Let's play game of {difficultyLevel} level</h1>
            <div className="currentWord">
                <h1>{gameWordChars.map((char, i) =>{
                    let color;
                    if(i < typedWord.length){
                        if(char === typedWordChars[i]){
                            color = "green"
                        }else{
                            color = "blue"
                        }
                    }
                    return(<span key={i} style={{color: color}}>{char}</span>)
                })}</h1>
                <input
                type="text"
                name="typedWord"
                autoComplete="off"
                value={typedWord}
                onChange={handleTextChange}
                autoFocus={true}
                />
            </div>
        </div>
    );
}

export default GamePage
