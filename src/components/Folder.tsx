import React, { useEffect, useState } from 'react';
import { FileObject } from '../helpers/appFiles';
import { File } from './File';

interface Props {
  directory: FileObject;
  selected: FileObject['fullPath'];
  children: React.ReactNode;
}

export const Folder = ({ directory, selected, children }: Props) => {
  const childSelected = selected.startsWith(directory.fullPath);
  const [showChildren, setShowChildren] = useState(childSelected);

  useEffect(() => {
    if (!showChildren && childSelected) {
      setShowChildren(true);
    }
  }, [childSelected, showChildren]);

  return (
    <div key={directory.name}>
      <File
        isSelected={selected === directory.fullPath}
        name={`${showChildren ? '-' : '+'} ${directory.name}`}
        // Don't allow collapsing of directory if child is selected
        select={() => !childSelected && setShowChildren(!showChildren)}
      />
      {showChildren && <div className="folder-contents">{children}</div>}
    </div>
  );
};
