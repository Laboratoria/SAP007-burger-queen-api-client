import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import styled from 'styled-components'

const FirstDiv = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  background-color: black;
`



function firstPage () {
    return (
        <FirstDiv>
            <h1>teste</h1>
        </FirstDiv>
    )
};

export default firstPage;


