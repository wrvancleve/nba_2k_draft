import React from 'react'
import Position from './Position'

export default function PositionGroup({ group, togglePosition }) {
    return (
        <div class="btn-group">
            {group.positions.map(position => {
                return <Position key={position.id} groupId={group.id} position={position} togglePosition={togglePosition} />
            })}
        </div>
    )
}