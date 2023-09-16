import React from 'react'
import PositionGroup from './PositionGroup'

export default function PositionGroupList({ groups, togglePosition }) {
    return (
        groups.map(group => {
            return <PositionGroup key={group.id} group={group} togglePosition={togglePosition} />
        })
    )
}