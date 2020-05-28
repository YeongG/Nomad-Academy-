import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    background-color:black;
  }
`;

const Global = () => {
  return (
    <>
      <GlobalStyle/>
    </>
  )
}
 
export default Global;
