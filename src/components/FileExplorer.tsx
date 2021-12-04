import React from 'react';
import { ModifiedTreeShape } from '../helpers/modelData';
import { Folder } from './Folder';
import { File } from './File';
import './Tree.css';

interface Props {
  treeData: ModifiedTreeShape;
}

export const FileExplorer = ({ treeData }: Props) => {
  return (
    <div className="file-explorer">
      {treeData.map((item) => {
        if (item.type === 'file') {
          return <File name={item.name} />;
        } else {
          return (
            <Folder name={item.name}>
              {item.children ? <FileExplorer treeData={item.children} /> : null}
            </Folder>
          );
        }
      })}
    </div>
  );
};
