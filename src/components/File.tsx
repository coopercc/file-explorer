import React from 'react';

interface Props {
  name: string;
  isSelected: boolean;
}

export const File = ({ name, isSelected }: Props) => {
  return (
    <div key={name} className={isSelected ? 'selected-file' : ''}>
      {name}
    </div>
  );
};
