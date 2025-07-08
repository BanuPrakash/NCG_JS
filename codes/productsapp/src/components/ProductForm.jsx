import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { Form, TextField, ButtonGroup, Button } from '@adobe/react-spectrum';
import React from 'react'

export default function ProductForm() {
    let [name, setName] = React.useState('');

    let onSubmit = (e) => {
        e.preventDefault(); // no server side submission
        alert(name);
        // axios call
    };

    return (
        <Provider theme={defaultTheme}>
            <Form onSubmit={onSubmit} maxWidth="size-3000">
                <TextField label="Name" value={name} onChange={setName} />
                <div>You entered: {name}</div>
                <ButtonGroup>
                    <Button type="submit" variant="primary">Submit</Button>
                    <Button type="reset" variant="secondary">Reset</Button>
                </ButtonGroup>
            </Form>
        </Provider>
    );

}
