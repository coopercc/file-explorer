import React from 'react';

interface Props {
  name: string;
  isSelected: boolean;
  select: () => void;
}

export const File = ({ name, isSelected, select }: Props) => {
  return (
    <div
      onClick={select}
      key={name}
      className={isSelected ? 'selected-file' : ''}
    >
      {name}
    </div>
  );
};
