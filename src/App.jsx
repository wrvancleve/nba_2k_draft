import React, { useState, useRef, useEffect } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import Draft from './components/draft/Draft'
import Setup from './components/setup/Setup'

import './styles/App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [isDrafting, setIsDrafting] = useState(false);
  
  let [overallSets, setOverallSets] = useState(null);
  let [positionSets, setPositionSets] = useState(null);
  let [playerVersions, setPlayerVersions] = useState(null);
  let [randomWeightValue, setRandomWeightValue] = useState(null);

  function startDraft(newOverallSets, newPositionSets, newPlayerVersions, newRandomWeightValue) {
    setOverallSets(newOverallSets);
    setPositionSets(newPositionSets);
    setPlayerVersions(newPlayerVersions);
    setRandomWeightValue(newRandomWeightValue);
    setIsDrafting(true);
  }

  /*
  const [playerList, setPlayerList] = useState(JSON.parse(localStorage.getItem("nba_player_creator.players") || "[]"));
  const [selectedPlayerId, setSelectedPlayerId] = useState(undefined);
  
  const playerData = selectedPlayerId ? getPlayerData(selectedPlayerId) : undefined;

  function clearSelectedPlayerId() {
    setSelectedPlayerId(undefined);
  }

  function savePlayer(playerId, player) {
    localStorage.setItem("nba_player_creator." + playerId, player);
    if (!playerList.includes(playerId)) {
      setPlayerList([...playerList, playerId]);
    }
  }

  function deletePlayer(playerId) {
    const newPlayerList = [...playerList];
    localStorage.removeItem("nba_player_creator." + playerId);
    const playerIndex = newPlayerList.indexOf(playerId);
    if (playerIndex > -1) {
      newPlayerList.splice(playerIndex, 1);
    }
    setPlayerList(newPlayerList);
  }

  useEffect(() => {
    localStorage.setItem("nba_player_creator.players", JSON.stringify(playerList));
  }, [playerList]);
  */

  return (
    <>
      <div className='bg'></div>
      {
        isDrafting 
          ? <Draft overallSets={overallSets} positionSets={positionSets} playerVersions={playerVersions} randomWeightValue={randomWeightValue} />
          : <Setup startDraft={startDraft} />
      }
    </>
  )
}

export default App
