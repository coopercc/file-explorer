import { KeyboardEvent, useEffect } from 'react';

type KeyHandler = { key: KeyboardEvent['key'] };

export const useKeyPress = function (
  targetKey: KeyboardEvent['key'],
  setSelected: () => void
) {
  const downHandler = ({ key }: KeyHandler) => {
    if (key === targetKey) {
      setSelected();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  });
};
