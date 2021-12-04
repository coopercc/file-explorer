import { appFiles, FileObject } from './appFiles';

export type ModifiedTreeShape = FileObject[];

const addChildToExistingNode = (
  fileData: FileObject,
  parent: FileObject,
  path: string[]
) => {
  //need to nest down structure until we get to the file name
  for (let i = 1; i < path.length - 1; i++) {
    //find next level parent from parent.children by name
    // it will exist so not a worry
    parent = parent.children?.find(
      (child) => child.name === path[i]
    ) as FileObject;
  }

  if (!parent.children) {
    parent.children = [];
  }

  parent.children.push(fileData);
};

export const generateTreeStructure = (): ModifiedTreeShape => {
  const tree: ModifiedTreeShape = [];
  // so we can store where a top level directory is in the tree array
  const addedKeys: { [key: string]: number } = {};

  for (const data of Object.keys(appFiles)) {
    const fileData = appFiles[data];
    const path = fileData.fullPath.split('/');

    if (path.length === 1) {
      tree.push(fileData);
      addedKeys[fileData.name] = tree.length - 1;
    } else {
      let currentDir = path[0];
      let parent = tree[addedKeys[currentDir]];
      addChildToExistingNode(fileData, parent, path);
    }
  }

  return tree;
};
