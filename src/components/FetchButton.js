import React from "react";

const FetchButton = (props) => {
    return (
        <button className="fetch-button" onClick={props.fetch}>Fetch row</button>
    )
}

export default FetchButton