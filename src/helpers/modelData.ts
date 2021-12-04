import { appFiles, FileObject } from './appFiles';

export type ModifiedTreeShape = FileObject[];

export function generateTreeStructure(): ModifiedTreeShape {
  const resp: ModifiedTreeShape = [];
  const addedKeys: { [key: string]: number } = {};

  for (const data of Object.keys(appFiles)) {
    const fileData = appFiles[data];
    const path = fileData.fullPath.split('/');
    if (path.length === 1) {
      resp.push(fileData);
      addedKeys[fileData.name] = resp.length - 1;
    } else {
      let currentDir = path[0];
      let parent = resp[addedKeys[currentDir]];

      for (let i = 1; i < path.length - 1; i++) {
        //find parent from parent.children by name
        parent = parent.children?.find(
          (child) => child.name === path[i]
        ) as FileObject;
      }

      if (!parent.children) {
        parent.children = [];
      }

      parent.children.push(fileData);
    }
  }

  return resp;
}
