import React from 'react';
import { ModifiedTreeShape } from '../helpers/modelData';
import { Folder } from './Folder';
import { File } from './File';

interface Props {
  treeData: ModifiedTreeShape;
}

export const Tree = ({ treeData }: Props) => {
  return (
    <div>
      {treeData.map((item) => {
        if (item.type === 'file') {
          return <File name={item.name} />;
        } else {
          return (
            <Folder name={item.name}>
              {item.children ? <Tree treeData={item.children} /> : null}
            </Folder>
          );
        }
      })}
    </div>
  );
};
