import React from 'react';
import './App.css';
import { generateTreeStructure } from './helpers/modelData';
import { FileExplorer } from './components/FileExplorer';

function App() {
  const tree = generateTreeStructure();
  return (
    <div className="App">
      <FileExplorer treeData={tree} />
    </div>
  );
}

export default App;
