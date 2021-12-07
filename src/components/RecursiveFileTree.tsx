import React from 'react';
import { ModifiedTreeShape } from '../helpers/modelData';
import { Folder } from './Folder';
import { File } from './File';
import { FileObject } from '../helpers/appFiles';

interface Props {
  fileTree: ModifiedTreeShape;
  selected: string;
  onSelect: (selected: FileObject['fullPath']) => void;
}

export const RecursiveFileTree = ({ fileTree, selected, onSelect }: Props) => {
  return (
    <>
      {fileTree.map((item) =>
        item.type === 'file' ? (
          <File
            name={item.name}
            isSelected={item.fullPath === selected}
            select={() => onSelect(item.fullPath)}
          />
        ) : (
          <Folder directory={item} selected={selected} onSelect={onSelect}>
            {item.children ? (
              <RecursiveFileTree
                fileTree={item.children}
                selected={selected}
                onSelect={onSelect}
              />
            ) : null}
          </Folder>
        )
      )}
    </>
  );
};
