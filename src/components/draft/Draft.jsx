import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import DraftBoard from './DraftBoard'
import SavedDraftList from './SavedDraftList';

import PlayerCollection from '../../models/player_collection';

const FlexColumnDiv = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FlexRowDiv = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const SpacedButton = styled.button`
    margin: 0 0.5vw;
`

const playerCollection = new PlayerCollection();

export default function Draft({overallSets, positionSets, playerVersions, randomWeightValue}) {
    const saveNameInputRef = useRef();

    const [playerGroups, setPlayerGroups] = useState([]);

    const [savedDrafts, setSavedDrafts] = useState([]);
    const [selectedPositionGroups, setSelectedPositionGroups] = useState(new Array(overallSets.length).fill(null));

    const [isSelectingTeam, setIsSelectingTeam] = useState(false);

    const [isDraftSaveDisabled, setDraftSaveDisabled] = useState(true);
    const [draftSaveName, setDraftSaveName] = useState("");

    const [isDraftComplete, setDraftComplete] = useState(false);

    useEffect(() => {
        playerCollection.setPlayerVersions(playerVersions);
        playerCollection.setRandomWeightValue(randomWeightValue);
    }, [])

    useEffect(() => {
        for (let selectedPositionGroup of selectedPositionGroups) {
            if (selectedPositionGroup === null) {
                setDraftSaveDisabled(true);
                return;
            }
        }
        if (draftSaveName) {
            setDraftSaveDisabled(false); 
        } else {
            setDraftSaveDisabled(true); 
        }
    }, [draftSaveName, selectedPositionGroups]);

    function handleTogglePlayer(playerOverallGroupId, playerPositionGroupId) {
        const newSelectedPositionGroups = [...selectedPositionGroups];
        const newPlayerGroups = [...playerGroups];

        const newSelectedPositionGroup = newSelectedPositionGroups[playerOverallGroupId] === playerPositionGroupId ? null : playerPositionGroupId;
        newSelectedPositionGroups[playerOverallGroupId] = newSelectedPositionGroup;
        if (newSelectedPositionGroup !== null) {
            newSelectedPositionGroups.forEach((selectedPositionGroup, overallGroupId) => {
                if (overallGroupId !== playerOverallGroupId && selectedPositionGroup === newSelectedPositionGroup) {
                    newSelectedPositionGroups[overallGroupId] = null;
                }
            })
        }

        newPlayerGroups.forEach((overallGroup, overallGroupId) => {
            const selectedPositionGroupId = newSelectedPositionGroups[overallGroupId];
            overallGroup.forEach((player, positionGroupId) => {
                if (positionGroupId === selectedPositionGroupId) {
                    player.selected = true;
                    player.disabled = false;
                } else {
                    player.selected = false;
                    player.disabled = selectedPositionGroupId !== null || newSelectedPositionGroups.includes(positionGroupId);
                }
            })
        })

        setSelectedPositionGroups(newSelectedPositionGroups);
        setPlayerGroups(newPlayerGroups);
    }

    function handleSaveNameInput() {
        setDraftSaveName(saveNameInputRef.current.value);
    }

    function handleDraftSave() {
        setIsSelectingTeam(false);
        const newSavedDrafts = [...savedDrafts];

        const selectedPlayers = [];
        selectedPositionGroups.forEach((positionGroupId, overallGroupId) => {
            const selectedPlayer = playerGroups[overallGroupId][positionGroupId];
            selectedPlayers.push(selectedPlayer);
            playerCollection.remove(selectedPlayer);
        });

        const newSavedDraft = {name: draftSaveName, players: selectedPlayers};
        newSavedDrafts.push(newSavedDraft);
        setSavedDrafts(newSavedDrafts);

        setSelectedPositionGroups(new Array(overallSets.length).fill(null));
        setDraftSaveName("");
        setPlayerGroups([]);
    }

    function handleStartTeamClick() {
        setIsSelectingTeam(true);
        populateDraftBoard();
    }

    function handleDraftCompleteClick() {
        setDraftComplete(true);
    }

    function handleNewDraftClick() {
        setSavedDrafts([]);
        setDraftComplete(false);
        setIsSelectingTeam(true);
        populateDraftBoard();
    }

    function populateDraftBoard() {
        setPlayerGroups(playerCollection.getRandomByTiers(overallSets, positionSets));
    }

    return (
        <FlexColumnDiv>
            {isDraftComplete
                ? 
                    <>
                        <SavedDraftList savedDrafts={savedDrafts} />
                        <FlexRowDiv>
                            <button onClick={handleNewDraftClick}>New Draft</button>
                        </FlexRowDiv>
                    </>
                : <>
                    {isSelectingTeam
                        ?
                            <>
                                <DraftBoard overallGroups={playerGroups} handleTogglePlayer={handleTogglePlayer} />
                                <FlexRowDiv>
                                    <div>
                                        <label for="selection-name">Name:</label>
                                        <input ref={saveNameInputRef} onInput={handleSaveNameInput} type="text" id="selection-name" value={draftSaveName} />
                                    </div>
                                    <button disabled={isDraftSaveDisabled} onClick={handleDraftSave}>Save Team</button>
                                </FlexRowDiv>
                            </>
                        :
                            <>
                                <FlexRowDiv>
                                    <SpacedButton onClick={handleStartTeamClick}>Start Team</SpacedButton>
                                    <SpacedButton disabled={savedDrafts.length === 0} onClick={handleDraftCompleteClick}>Complete Draft</SpacedButton>
                                </FlexRowDiv>
                            </>
                    }
                </>
            }
        </FlexColumnDiv>
    )
}