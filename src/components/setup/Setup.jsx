import React, { useState, useRef, useEffect } from 'react'
import PositionGroupList from './PositionGroupList'
import OverallGroupList from './OverallGroupList'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

import ButtonSelectionGroup from '../ButtonSelectionGroup'

const ButtonSelectionDiv = styled.div`
    padding: 5px;
`

const ButtonSelectionLabel = styled.label`
    padding-right: 12px;
    padding-left: 12px;
`

const POSITION_GROUPS_LOCAL_STORAGE_KEY = "nba_draft.positionGroups"
const OVERALL_GROUPS_LOCAL_STORAGE_KEY = "nba_draft.overallGroups"
const PLAYER_VERSIONS_LOCAL_STORAGE_KEY = "nba_draft.playerVersions"
const RANDOM_WEIGHT_LOCAL_STORAGE_KEY = "nba_draft.randomWeight"

const StyledDiv = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
`

export default function Setup({startDraft}) {
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [positionGroups, setPositionGroups] = useState([])
    const [overallGroups, setOverallGroups] = useState([])
    const [selectedPlayerVersionIndex, setSelectedPlayerVersionIndex] = useState(1);
    const [randomWeightValue, setRandomWeightValue] = useState(1);

    const randomWeightRef = useRef();

    const possiblePlayerVersions = ["All", "Best"];

    useEffect(() => {
        const storedPositionGroups = JSON.parse(localStorage.getItem(POSITION_GROUPS_LOCAL_STORAGE_KEY))
        if (storedPositionGroups) {
            setPositionGroups(storedPositionGroups);
        }
        const storedOverallGroups = JSON.parse(localStorage.getItem(OVERALL_GROUPS_LOCAL_STORAGE_KEY))
        if (storedOverallGroups) {
            setOverallGroups(storedOverallGroups);
        }
        const storedPlayerVersions = JSON.parse(localStorage.getItem(PLAYER_VERSIONS_LOCAL_STORAGE_KEY));
        if (storedPlayerVersions) {
            setSelectedPlayerVersionIndex(possiblePlayerVersions.indexOf(storedPlayerVersions));
        }
        const storedRandomWeightValue = JSON.parse(localStorage.getItem(RANDOM_WEIGHT_LOCAL_STORAGE_KEY)) || 1;
        setRandomWeightValue(storedRandomWeightValue);
        setIsInitialLoad(false);
    }, [])

    useEffect(() => {
        if (!isInitialLoad) {
            localStorage.setItem(POSITION_GROUPS_LOCAL_STORAGE_KEY, JSON.stringify(positionGroups))
            localStorage.setItem(OVERALL_GROUPS_LOCAL_STORAGE_KEY, JSON.stringify(overallGroups))
            localStorage.setItem(PLAYER_VERSIONS_LOCAL_STORAGE_KEY, JSON.stringify(possiblePlayerVersions[selectedPlayerVersionIndex]))
            localStorage.setItem(RANDOM_WEIGHT_LOCAL_STORAGE_KEY, JSON.stringify(randomWeightValue))
        }
    }, [positionGroups, overallGroups, randomWeightValue, selectedPlayerVersionIndex]);

    function createNewPositionGroup() {
        const positionPointGuard = {id: uuidv4(), name: "PG", selected: false};
        const positionShootingGuard = {id: uuidv4(), name: "SG", selected: false};
        const positionSmallForward = {id: uuidv4(), name: "SF", selected: false};
        const positionPowerForward = {id: uuidv4(), name: "PF", selected: false};
        const positionCenter = {id: uuidv4(), name: "C", selected: false};
        const positions = [
            positionPointGuard,
            positionShootingGuard,
            positionSmallForward,
            positionPowerForward,
            positionCenter
        ];
        return {id: uuidv4(), positions: positions};
    }

    function createNewOverallGroup() {
        return {id: uuidv4(), min: 80, max: 99};
    }

    function handleAddPositionGroup(event) {
        setPositionGroups(prevPositionGroups => {
            return [...prevPositionGroups, createNewPositionGroup()];
        });
    }

    function handleAddOverallGroup(event) {
        setOverallGroups(prevOverallGroups => {
            return [...prevOverallGroups, createNewOverallGroup()];
        });
    }

    function handleRemovePositionGroup(event) {
        setPositionGroups(prevPositionGroups => {
            return [...prevPositionGroups.slice(0, -1)];
        })
    }

    function handleRemoveOverallGroup(event) {
        setOverallGroups(prevOverallGroups => {
            return [...prevOverallGroups.slice(0, -1)];
        })
    }

    function togglePosition(groupId, positionId) {
        const newPositionGroups = [...positionGroups];
        const group = newPositionGroups.find(group => group.id === groupId);
        const position = group.positions.find(position => position.id === positionId);
        position.selected = !position.selected;
        setPositionGroups(newPositionGroups);
    }

    function setOverallValue(groupId, overallType, newValue) {
        const newOverallGroups = [...overallGroups];
        const overall = newOverallGroups.find(overall => overall.id === groupId);
        if (overallType) {
            overall[overallType] = Number(newValue);
            setOverallGroups(newOverallGroups);
        }
    }

    function handleStartDraftClick() {
        const overallSets = [];
        overallGroups.forEach(overallGroup => {
            const overallSet = new Set();
            for (var i = overallGroup.min; i <= overallGroup.max; i++) {
                overallSet.add(i);
            }
            overallSets.push(overallSet);
        })
        const positionSets = [];
        positionGroups.forEach(positionGroup => {
            const positionSet = new Set();
            positionGroup.positions.forEach(position => {
                if (position.selected) {
                    positionSet.add(position.name);
                }
            });
            positionSets.push(positionSet);
        });
        
        startDraft(overallSets, positionSets, possiblePlayerVersions[selectedPlayerVersionIndex], randomWeightValue);
    }

    function handleRandomWeightChange(event) {
        setRandomWeightValue(Number(randomWeightRef.current.value));
    }

    return (
        <div className="center-flex-column">
            <StyledDiv>
                <StyledDiv>
                    <fieldset className="center-flex-column">
                        <legend>
                            <button onClick={handleAddPositionGroup}>+</button>
                            <span>Position Groups</span>
                            <button onClick={handleRemovePositionGroup}>-</button>
                        </legend>
                        <PositionGroupList groups={positionGroups} togglePosition={togglePosition} />
                    </fieldset>
                </StyledDiv>
                <StyledDiv>
                    <fieldset className="center-flex-column">
                        <legend>
                            <button onClick={handleAddOverallGroup}>+</button>
                            <span>Overall Groups</span>
                            <button onClick={handleRemoveOverallGroup}>-</button>
                        </legend>
                        <OverallGroupList overalls={overallGroups} setOverallValue={setOverallValue} />
                    </fieldset>
                </StyledDiv>
            </StyledDiv>
            <ButtonSelectionDiv>
                <ButtonSelectionLabel>Player Versions:</ButtonSelectionLabel>
                <ButtonSelectionGroup label="Player Versions" possibleValues={possiblePlayerVersions} selectedIndex={selectedPlayerVersionIndex} onChange={setSelectedPlayerVersionIndex} />
            </ButtonSelectionDiv>
            <StyledDiv>
                <label for={"random-weight-value"}>Random Weight Value:</label>
                <input ref={randomWeightRef} onChange={handleRandomWeightChange} type="number" id={"random-weight-value"} min="1" max="50" value={randomWeightValue}/>
            </StyledDiv>
            <button onClick={handleStartDraftClick}>Start Draft</button>
        </div>
    )
}