import { useEffect } from 'react';

function useKey(key, action) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    //Cleanup Function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, action]);
}

export default useKey;
