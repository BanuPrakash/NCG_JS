import React, { useCallback, useState } from 'react'
import { faker } from '@faker-js/faker';
import NameComponent from './NameComponent';
import AgeComponent from './AgeComponent';

export default function ParentComponent() {
    let [name, setName] = useState('');
    let [age, setAge] = useState(18);

    let updateName = useCallback(() => {
        setName(faker.internet.username())
    }, []);

    let updateAge = useCallback(() => {
        setAge(age + 1)
    }, [age]);

    //memozed fn def is  setAge(18 + 1) ==> setAge(19)

    console.log("Parent renders!!!")
    return (
        <div>
            {/* Name: {name} <br />
            Age: {age} <br /> */}
            <NameComponent name={name} updateName={updateName} /> <br />
            <AgeComponent age={age} updateAge={updateAge} /> <br />
        </div>
    )
}
