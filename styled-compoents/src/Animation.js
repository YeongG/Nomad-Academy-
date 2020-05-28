import React from 'react';
import styled,{keyframes} from 'styled-components';

const rotation = keyframes`
    0%{
        transform:rotate(0def);
    }
    100%{
        transform:rotate(360deg)
    }
`;

const Square = styled.div`
    width:100px;
    height:100px;
    background-color:black;
    position:absolute;
    top:50%;
    left:50%;
    animation:${rotation} 2s linear infinite;
`;

const Animation = () => {
    return (
        <Square/>
    )
}

export default Animation;