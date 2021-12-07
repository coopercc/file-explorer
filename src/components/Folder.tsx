import React, { useEffect, useState } from 'react';
import { FileObject } from '../helpers/appFiles';
import { File } from './File';

interface Props {
  directory: FileObject;
  selected: FileObject['fullPath'];
  onSelect: (directory: FileObject['fullPath']) => void;
  children: React.ReactNode;
}

export const Folder = ({ directory, selected, onSelect, children }: Props) => {
  const childSelected =
    selected.startsWith(directory.fullPath) && directory.fullPath !== selected;
  const [showChildren, setShowChildren] = useState(childSelected);

  useEffect(() => {
    if (!showChildren && childSelected) {
      setShowChildren(true);
    }
  }, [childSelected, showChildren]);

  const selectFile = () => {
    const newShowChildren = !showChildren;
    setShowChildren(newShowChildren);
    if (!newShowChildren && childSelected) {
      onSelect(directory.fullPath);
    }
  };

  return (
    <div key={directory.name}>
      <File
        isSelected={selected === directory.fullPath}
        name={`${showChildren ? '-' : '+'} ${directory.name}`}
        select={selectFile}
      />
      {showChildren && <div className="folder-contents">{children}</div>}
    </div>
  );
};
