import React, {useState} from 'react'
import '../../styles/Position.css';

export default function Position({ groupId, position, togglePosition }) {
    function handlePositionClick(event) {
        togglePosition(groupId, position.id);
    }

    return (
        <button onClick={handlePositionClick} className={position.selected ? "selected" : null}>{position.name}</button>
    )
}