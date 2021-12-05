import React, { useMemo } from 'react';
import { generateTreeStructure } from '../helpers/modelData';
import './FileExplorer.css';
import { FileObject, Files } from '../helpers/appFiles';
import { FileTree } from './FileTree';

interface Props {
  files: Files;
  selected: string;
  onSelect: (selected: FileObject['fullPath']) => void;
}

export const FileExplorer = ({ files, selected, onSelect }: Props) => {
  const fileTree = useMemo(() => generateTreeStructure(files), [files]);

  return (
    <div className="file-explorer">
      <FileTree fileTree={fileTree} selected={selected} onSelect={onSelect} />
    </div>
  );
};
