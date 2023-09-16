import React from 'react'
import Overall from './Overall'

export default function OverallGroupList({ overalls, setOverallValue }) {
    return (
        <div>
            {overalls.map(overall => {
                return <Overall key={overall.id} groupId={overall.id} overall={overall} setOverallValue={setOverallValue} />
            })}
        </div>
    )
}