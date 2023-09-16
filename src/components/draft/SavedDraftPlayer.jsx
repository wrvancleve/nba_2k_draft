import React from 'react'
import '../../styles/DraftPlayer.css';

export default function SavedDraftPlayer({ player }) {
    let playerCardClasses = "player-card"

    return (
        <div className={playerCardClasses}>
            <p>
                <span className="info">Player:</span>
                <span>{player.firstName} {player.lastName}</span>
            </p>
            <p>
                <span className="info">Overall:</span>
                <span>{player.overall}</span>
                <span className="info">Position:</span>
                <span>{player.positions.join("/")}</span>
            </p>
            <p>
                <span className="info">Team:</span>
                <span>{player.team}</span>
            </p>
        </div>
    )
}