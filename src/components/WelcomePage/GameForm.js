import React, { useState } from "react";
import startGameIcon from "../../images/startGameIcon.svg";

const GameForm = (props) => {
    const {onChange, onSubmit, userData} = props;
    const [nameError, setNameError] = useState(false);
    const [levelError, setLevelError] = useState(false);
  
    const nameErrorMessage = <span className="error">Please Enter Your Name</span>
    const levelErrorMessage = <span className="error">Please Select Level</span>

    const localOnChange = (e) => {
        if(e.target.name === "name" && e.target.value === ""){
            setNameError(true);
        }else if(e.target.name === "difficultyLevel" && e.target.value === ""){
            setLevelError(true)
        }else{
            setLevelError(false);
            setNameError(false);
        }
        onChange(e);
    }

    const localOnSubmit = (e) => {
        e.preventDefault();
        if(userData.name === ""){
            setNameError(true);
        }else if(userData.difficultyLevel === ""){
            setLevelError(true)
        }else{
            setLevelError(false);
            setNameError(false);
            onSubmit(e);
        }        
    }

    return (
        <div className="container">
            <div className="form-data">
                <form onSubmit={localOnSubmit}>
                    <div className="form-field">
                        <input
                            type="text"
                            placeholder="TYPE YOUR NAME"
                            name="name"
                            id="name"
                            value={userData.name}
                            //required
                            onChange={localOnChange}
                            autoComplete="off"
                        />
                        {nameError ? nameErrorMessage : ""}
                    </div>
                    <div className="form-field">
                        <select 
                            name="difficultyLevel"
                            placeholder="DIFFICULTY LEVEL" 
                            value={userData.difficultyLevel}
                            //required
                            onChange={localOnChange}                       
                        >
                            <option value="">DIFFICULTY LEVEL</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                        {levelError ? levelErrorMessage : ""}
                    </div>
                    <button className="start-game" type="submit">
                        <img src={startGameIcon} alt="startGameIcon" ></img>
                        START GAME
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GameForm
