import React, {useRef} from 'react'

export default function Overall({ groupId, overall, setOverallValue }) {
    const minOverallRef = useRef();
    const maxOverallRef = useRef();

    function handleOverallMinChange(event) {
        setOverallValue(groupId, "min", minOverallRef.current.value);
    }

    function handleOverallMaxChange(event) {
        setOverallValue(groupId, "max", maxOverallRef.current.value);
    }

    return (
        <div>
            <label for={"group-" + groupId + "-overall-min"}>Minimum OVR:</label>
            <input ref={minOverallRef} onChange={handleOverallMinChange} type="number" id={"group-" + groupId + "-overall-min"} min="80" max="99" value={overall.min}/>
            <label for={"group-" + groupId + "-overall-max"}>Maximum OVR:</label>
            <input ref={maxOverallRef} onChange={handleOverallMaxChange} type="number" id={"group-" + groupId + "-overall-max"} min="80" max="99" value={overall.max}/>
        </div>
    )
}