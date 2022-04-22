import React from 'react'
import SavedDraftPlayer from './SavedDraftPlayer';
import '../../styles/PlayerGroup.css';
import styled from 'styled-components';

const StyledHeader = styled.h2`
    color: hsla(0,0%,100%,.87);
    margin-right: 12px;
`

export default function SavedDraft({ savedDraft }) {
    return (
        <div class="player-group">
            <StyledHeader>{savedDraft.name}:</StyledHeader>
            {savedDraft.players.map((player, positionGroupId) => {
                return <SavedDraftPlayer key={positionGroupId} player={player} />
            })}
        </div>
    )
}