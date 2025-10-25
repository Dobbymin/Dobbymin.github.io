import { useState } from 'react';

export const useTabSelection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectTab = (index: number) => {
    setSelectedIndex(index);
  };

  return {
    selectedIndex,
    selectTab,
  };
};
