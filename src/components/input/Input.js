import React from 'react';
import {Container, Label, StyleInput} from './InputStyle';

const Input = ({label, id, ...props}) => {

    return (
        <Container>
            <Label htmlFor={id}>{label}</Label>
            <StyleInput id={id} {...props}/>
        </Container>
    )
}

export default Input
