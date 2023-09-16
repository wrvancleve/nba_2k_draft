import React from 'react'
import PlayerGroup from './PlayerGroup'

export default function DraftBoard({ overallGroups, handleTogglePlayer }) {
    return (
        <div class="player-group-list">
            {overallGroups.map((overallGroup, id) => {
                return <PlayerGroup key={id} overallGroupId={id} overallGroup={overallGroup} handleTogglePlayer={handleTogglePlayer} />
            })}
        </div>
    )
}