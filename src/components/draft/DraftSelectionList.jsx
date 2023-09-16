import React from 'react'
import PlayerGroup from './PlayerGroup'
//import '../styles/OverallGroupList.css';

export default function DraftSelectionList({ playerGroups, handleTogglePlayer }) {
    return (
        <div class="player-group-list">
            {playerGroups.map(playerGroup => {
                return <PlayerGroup key={playerGroup.id} groupId={playerGroup.id} playerGroup={playerGroup} handleTogglePlayer={handleTogglePlayer} />
            })}
        </div>
    )
}