import React, { useMemo } from 'react';
import { generateTreeStructure, sortTree } from '../helpers/modelData';
import './FileExplorer.css';
import { FileObject, Files } from '../helpers/appFiles';
import { FileTree } from './FileTree';
import { useKeyPress } from '../helpers/useKeyPress';

interface Props {
  files: Files;
  selected: string;
  onSelect: (selected: FileObject['fullPath']) => void;
}

export const FileExplorer = ({ files, selected, onSelect }: Props) => {
  const fileTree = useMemo(() => generateTreeStructure(files), [files]);
  const fileArray = useMemo(() => {
    return [...Object.values(files)].sort(sortTree);
  }, [fileTree, files]);

  const handleKeyPress = (direction: 1 | -1) => {
    //check we have a selected value
    if (selected) {
      // need some sort of array of all the object values
      console.log('Selected is', selected);
      const selectedIndex = fileArray.findIndex(
        (file) => file.fullPath === selected
      );
      if (selectedIndex < fileArray.length - 1) {
        onSelect(fileArray[selectedIndex + direction].fullPath);
      }
    }
  };

  console.log(
    'FILE ARR',
    fileArray.map((a) => a.fullPath)
  );

  useKeyPress('ArrowDown', () => handleKeyPress(1));
  useKeyPress('ArrowUp', () => handleKeyPress(-1));

  return (
    <div className="file-explorer">
      <FileTree fileTree={fileTree} selected={selected} onSelect={onSelect} />
    </div>
  );
};
