import React, { useMemo } from 'react';
import { generateTreeStructure } from '../helpers/modelData';
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
  useKeyPress('ArrowDown', () => {
    //check we have a selected value
    if (selected) {
      // need some sort of array of all the object values
      console.log('Selected is', selected);
      //get "next" value
    }
  });
  useKeyPress('ArrowUp', () => {});

  return (
    <div className="file-explorer">
      <FileTree fileTree={fileTree} selected={selected} onSelect={onSelect} />
    </div>
  );
};
