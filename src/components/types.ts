import { FileObject } from '../helpers/appFiles';

export type UpdateSelectableFiles = (
  directory: FileObject['fullPath'],
  isClosed: boolean
) => void;
