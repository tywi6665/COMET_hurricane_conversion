import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import Container from './Container';
import Interaction_wrapper from './Interaction_wrapper';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <Interaction_wrapper />
      </Container>
    </div>
  );
}

export default App;
