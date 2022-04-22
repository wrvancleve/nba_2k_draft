import React from 'react'
import DraftPlayer from './DraftPlayer'
import '../../styles/PlayerGroup.css';

export default function PlayerGroup({ overallGroupId, overallGroup, handleTogglePlayer }) {
    return (
        <div class="player-group">
            {overallGroup.map((player, positionGroupId) => {
                return <DraftPlayer key={positionGroupId} overallGroupId={overallGroupId} positionGroupId={positionGroupId} player={player} handleTogglePlayer={handleTogglePlayer} />
            })}
        </div>
    )
}