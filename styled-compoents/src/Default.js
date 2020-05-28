import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius:50px;
  padding:5px;
  min-width:120px;
  color:white;
  font-weight:600;
  cursor: pointer;
  background-color:${props => props.background || "red"};
  &:active {
    outline:none;
  }
`;

const Container = styled.div`
  width:100vw;
  height:100vh;
`;

const Default = () => {
  return (
    <Container>
      <Button>This is Button</Button>
    </Container>
  )
}

export default Default;
