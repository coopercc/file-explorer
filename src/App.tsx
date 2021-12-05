import React, { useState } from 'react';
import './App.css';
import { FileExplorer } from './components/FileExplorer';
import { appFiles } from './helpers/appFiles';

function App() {
  const [selected, setSelected] = useState('');

  console.log('selected: ', selected);

  return (
    <div className="App">
      <FileExplorer
        files={appFiles}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}

export default App;
