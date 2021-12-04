import React from 'react';

interface Props {
  name: string;
}

export const File = ({ name }: Props) => {
  return <div>{name}</div>;
};
