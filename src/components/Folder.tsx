import React, { useEffect, useState } from 'react';
import { FileObject } from '../helpers/appFiles';
import { File } from './File';
import { UpdateSelectableFiles } from './types';

interface Props {
  directory: FileObject;
  selected: FileObject['fullPath'];
  onSelect: (file: FileObject['fullPath']) => void;
  updateSelectableFileTree: UpdateSelectableFiles;
  children: React.ReactNode;
}

export const Folder = ({
  directory,
  selected,
  onSelect,
  children,
  updateSelectableFileTree,
}: Props) => {
  const childSelected = selected.startsWith(directory.fullPath);
  const [showChildren, setShowChildren] = useState(childSelected);

  useEffect(() => {
    updateSelectableFileTree(directory.fullPath, !childSelected);
  }, []);

  const selectFile = () => {
    const newShowChildren = !showChildren;
    // updateSelectableFileTree(directory.fullPath, !newShowChildren);
    setShowChildren(!showChildren);
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
