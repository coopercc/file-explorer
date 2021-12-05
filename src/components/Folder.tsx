import React, { useState } from 'react';

interface Props {
  name: string;
  children: React.ReactNode;
}

export const Folder = ({ name, children }: Props) => {
  // TODO: Calculate if fullName is the prefix of the selected file
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div key={name}>
      <div onClick={() => setShowChildren(!showChildren)}>
        {showChildren ? '-' : '+'}&nbsp;{name}
      </div>
      {showChildren && <div className="folder-contents">{children}</div>}
    </div>
  );
};
