import React from 'react'

export function AgeComponent({ age }) {
    console.log("AgeComponent renders!!!")
    return (
        <div>
            Age in AgeComponent: {age}
        </div>
    )
}
function doCheck(oldProps, newProps) {
    console.log(oldProps, newProps);
    return true;
}

export default React.memo(AgeComponent, doCheck);