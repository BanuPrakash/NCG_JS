import React from 'react'

export function AgeComponent({ age, updateAge }) {
    console.log("AgeComponent renders!!!")
    return (
        <div>
            Age in AgeComponent: {age} <br />
            <button type='button' onClick={updateAge}>Update Age</button>
        </div>
    )
}
// function doCheck(oldProps, newProps) {
//     console.log(oldProps, newProps);
//     return true;
// }

export default React.memo(AgeComponent);

