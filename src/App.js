import logo from './logo.svg';
import './App.css';
import TextRecepticle from './Components/TextRecepticle';

import TheButtons from './Components/TheButtons';
import TheColorButtons from './Components/TheColorButtons';
// import React, { useState } from 'react';

const styleObj = {
  fontSize: 20,
  color: "#4a54f1",
  textAlign: "center",
  paddingTop: "100px",
}

function App() {
  return (
    <div className='App'>
      <TheButtons  />
      <TextRecepticle style={{color:"blue"}}/>
      <TheColorButtons class="buttonsStyle"/>
      <p style={{color:"red"}} >Text test area for styles </p>
      <p style={styleObj}>Second test area for text </p>
      
    </div>
  )
}
console.log(TextRecepticle())
export default App



