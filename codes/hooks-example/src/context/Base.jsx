import React, { createContext, useState } from 'react'
import First from './First';

const PersonContext = createContext(); // central placeholder of data

export { PersonContext }

export default function Base() {
    let [name, setName] = useState("Roger");
    let [age, setAge] = useState(18);

    return (
        <div>
            Base <br />
            <PersonContext.Provider value={{ name, age }}>
                <First />
            </PersonContext.Provider>
        </div>
    )
}
