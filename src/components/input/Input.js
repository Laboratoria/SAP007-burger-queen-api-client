import React from 'react';
import {Container, Label, InputStyle} from './InputStyle';

const Input = ({label, id, ...props}) => {

    return (
        <Container>
            <Label htmlFor={id}>{label}</Label>
            <InputStyle id={id} {...props}/>
        </Container>
    )
}

export default Input
