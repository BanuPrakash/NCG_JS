import React from 'react'

function NameComponent({ name, updateName }) {
    console.log("NameComponent renders!!!")
    return (
        <div>
            Name in NameComponent: {name} <br />
            <button onClick={updateName} type='button'>Update Name</button>
        </div>
    )
}

export default React.memo(NameComponent);

