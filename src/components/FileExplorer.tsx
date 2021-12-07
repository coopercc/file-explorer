import React, { useMemo } from 'react';
import { flatten, generateTreeStructure } from '../helpers/modelData';
import './FileExplorer.css';
import { FileObject, Files } from '../helpers/appFiles';
import { RecursiveFileTree } from './RecursiveFileTree';
import { useKeyPress } from '../helpers/useKeyPress';

interface Props {
  files: Files;
  selected: FileObject['fullPath'];
  onSelect: (selected: FileObject['fullPath']) => void;
}

// Top level component for file tree
export const FileExplorer = ({ files, selected, onSelect }: Props) => {
  const fileTree = useMemo(() => generateTreeStructure(files), [files]);
  const selectableFiles = useMemo(() => flatten(fileTree), [fileTree]);

  const handleKeyPress = (direction: 1 | -1) => {
    //check we have a selected value
    if (selected) {
      // need some sort of array of all the object values
      const selectedIndex = selectableFiles.findIndex(
        (file) => file.fullPath === selected
      );
      if (
        (direction === 1 && selectedIndex < selectableFiles.length - 1) ||
        (direction === -1 && selectedIndex > 0)
      ) {
        onSelect(selectableFiles[selectedIndex + direction].fullPath);
      }
    }
  };

  useKeyPress('ArrowDown', () => handleKeyPress(1));
  useKeyPress('ArrowUp', () => handleKeyPress(-1));

  return (
    <div className="file-explorer">
      <RecursiveFileTree
        fileTree={fileTree}
        selected={selected}
        onSelect={onSelect}
      />
    </div>
  );
};
