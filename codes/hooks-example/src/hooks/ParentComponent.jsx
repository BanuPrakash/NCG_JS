import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import NameComponent from './NameComponent';
import AgeComponent from './AgeComponent';

export default function ParentComponent() {
    let [name, setName] = useState('');
    let [age, setAge] = useState(18);
    // function updateTask() {
    //     age = age + 1;
    // }
    console.log("Parent renders!!!")
    return (
        <div>
            {/* Name: {name} <br />
            Age: {age} <br /> */}
            <NameComponent name={name}/> <br />
            <AgeComponent age={age} /> <br />
            <button type='button' onClick={() => setName(faker.internet.username())}>Change Name</button>
            <button type='button' onClick={() => setAge(age + 1)}>Change Age</button>
        </div>
    )
}
