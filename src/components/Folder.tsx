import React, { useState } from 'react';
import './Folder.css';

interface Props {
  name: string;
  children: React.ReactNode;
}

export const Folder = ({ name, children }: Props) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div key={name}>
      <div onClick={() => setShowChildren(!showChildren)}>
        {showChildren ? '-' : '+'}&nbsp;{name}
      </div>
      {showChildren && <div className="folderContents">{children}</div>}
    </div>
  );
};
