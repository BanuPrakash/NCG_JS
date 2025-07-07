import React, { useEffect, useState } from 'react'

export default function UserDetailsComponent({ id }) {
    let [user, setUser] = useState();

    // similar to componentDidUpdate
    // called whenever id changes

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [id]);

    // no dependency --> componentDidUpdate
    useEffect(() => {
        // console.log("componentDidUpdate called!!!")
    });

    return (
        <div>
            {
                user && (<div>
                    {user.company.name} <br />
                    {user.phone} <br />

                </div>)
            }
        </div>
    )
}
