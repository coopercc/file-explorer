import React, { useEffect, useState } from 'react';
import { FileObject } from '../helpers/appFiles';

interface Props {
  directory: FileObject;
  selected: FileObject['fullPath'];
  children: React.ReactNode;
}

export const Folder = ({ directory, selected, children }: Props) => {
  // TODO: Calculate if fullName is the prefix of the selected file
  const [showChildren, setShowChildren] = useState(
    selected.startsWith(directory.fullPath)
  );

  useEffect(() => {
    if (!showChildren && selected.startsWith(directory.fullPath)) {
      setShowChildren(true);
    }
  }, [directory.fullPath, selected, showChildren]);

  return (
    <div key={directory.name}>
      <div onClick={() => setShowChildren(!showChildren)}>
        {showChildren ? '-' : '+'}&nbsp;{directory.name}
      </div>
      {showChildren && <div className="folder-contents">{children}</div>}
    </div>
  );
};
