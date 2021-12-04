import React, { useState } from 'react';

interface Props {
  name: string;
  children: React.ReactNode;
}

export const Folder = ({ name, children }: Props) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div>
      <div onClick={() => setShowChildren(!showChildren)}>
        {}
        {name}
      </div>
      <div>{children}</div>
    </div>
  );
};
