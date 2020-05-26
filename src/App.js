import React from 'react';
import { useDrag } from 'react-dnd';
import Container from './Container';
import Low_pressure from './Low_pressure';
import High_pressure from './High_pressure';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <Low_pressure />
        <High_pressure />
      </Container>
    </div>
  );
}

export default App;
