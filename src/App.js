import React from 'react';
import styled, { createGlobalStyle} from 'styled-components';
import AddNumberRoot from './containers/AddNumberRoot';

const DisplayNumber = () => {
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value="0" readOnly></input>
    </div>
  )
};

const DisplayNumberRoot = () => {
  return (
    <div>
      <h1>Add Number Root</h1>
      <DisplayNumber></DisplayNumber>
    </div>
  )
};

function App() {
  return (
      
      <React.Fragment>
        <GlobalStyle />
        <div className="App">
          <h1>Root</h1>
          <AddNumberRoot></AddNumberRoot>
          <DisplayNumberRoot></DisplayNumberRoot>
        </div>
      </React.Fragment>
              
    
  );
}

const GlobalStyle = createGlobalStyle`
  div {
    border: 5px solid #764abc;
    margin: 10px;
    color: #764abc;
    padding: 10px;
  }
`

export default App;
