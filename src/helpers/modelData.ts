import { appFiles, FileObject } from './appFiles';

export type ModifiedTreeShape = FileObject[];

const getParentOfNode = (path: string[], parent: FileObject) => {
  let subParent = parent;
  for (let i = 1; i < path.length - 1; i++) {
    //find next level parent from parent.children by name
    // it will exist so not a worry
    subParent = subParent.children?.find(
      (child) => child.name === path[i]
    ) as FileObject;
  }

  return subParent;
};

const addChildToExistingNode = (
  fileData: FileObject,
  parent: FileObject,
  path: string[]
) => {
  const subParent = getParentOfNode(path, parent);

  if (!subParent.children) {
    subParent.children = [];
  }

  subParent.children.push({ ...fileData });
};

export const generateTreeStructure = (): ModifiedTreeShape => {
  console.log('Initial line of generate tree');
  const tree: ModifiedTreeShape = [];
  // so we can store where a top level directory is in the tree array
  const addedKeys: { [key: string]: number } = {};

  for (const fileName of Object.keys(appFiles)) {
    const fileData = appFiles[fileName];
    const path = fileData.fullPath.split('/');

    if (path.length === 1) {
      tree.push({ ...fileData });
      addedKeys[fileData.name] = tree.length - 1;
    } else {
      let currentDir = path[0];
      let topLevelParent = tree[addedKeys[currentDir]];
      addChildToExistingNode(fileData, topLevelParent, path);
    }
  }

  return tree;
};
