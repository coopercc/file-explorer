import React from 'react';
import { ModifiedTreeShape } from '../helpers/modelData';
import { Folder } from './Folder';
import { File } from './File';
import { FileObject } from '../helpers/appFiles';
import { UpdateSelectableFiles } from './types';

interface Props {
  fileTree: ModifiedTreeShape;
  selected: string;
  onSelect: (selected: FileObject['fullPath']) => void;
  updateSelectableFileTree: UpdateSelectableFiles;
}

export const FileTree = ({
  fileTree,
  selected,
  onSelect,
  updateSelectableFileTree,
}: Props) => {
  return (
    <>
      {fileTree.map((item) => {
        if (item.type === 'file') {
          return (
            <File
              name={item.name}
              isSelected={item.fullPath === selected}
              select={() => onSelect(item.fullPath)}
            />
          );
        } else {
          return (
            <Folder
              updateSelectableFileTree={updateSelectableFileTree}
              directory={item}
              selected={selected}
              onSelect={onSelect}
            >
              {item.children ? (
                <FileTree
                  fileTree={item.children}
                  selected={selected}
                  onSelect={onSelect}
                  updateSelectableFileTree={updateSelectableFileTree}
                />
              ) : null}
            </Folder>
          );
        }
      })}
    </>
  );
};
