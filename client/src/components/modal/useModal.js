import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [id, setId] = useState(null);
  
  function toggle() {
    setIsShowing(!isShowing);

  }

  return {
    isShowing,
    toggle,
    id,
  }
};

export default useModal;