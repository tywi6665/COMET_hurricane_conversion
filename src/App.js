import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './Components/Container';
import Interaction_wrapper from './Components/Interaction/Interaction_wrapper';
import './App.scss';

function App() {
  return (

    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Container>
          <Interaction_wrapper />
        </Container>
      </div>
    </DndProvider>
    
  );
}

export default App;
