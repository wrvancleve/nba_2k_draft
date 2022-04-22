import React from 'react'
import styled from 'styled-components'
import SavedDraft from './SavedDraft'

const StyledDiv = styled.div`
    margin: 3vh 0;
`

export default function SavedDraftList({ savedDrafts }) {
    return (
        <StyledDiv>
            {savedDrafts.map((savedDraft, savedDraftId) => {
                return <SavedDraft key={savedDraftId} savedDraft={savedDraft} />
            })}
        </StyledDiv>
    )
}