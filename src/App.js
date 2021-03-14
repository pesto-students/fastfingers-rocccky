import React, { useState } from "react";
import './App.css';
import GamePage from "./components/GamePage";
import WelcomePage from './components/WelcomePage'

function App() {
  const [startGame, setStartGame] = useState(false);
  const [userData, setUserData] = useState({name: "", difficultyLevel: ""});

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    setStartGame(true);
  }

  let page = startGame ? (<GamePage userData={userData} />) : (<WelcomePage onChange={onChange} onSubmit={onSubmit} userData={userData} />)
  return (
    <div className="App">
      {page}
    </div>
  )
}

export default App;