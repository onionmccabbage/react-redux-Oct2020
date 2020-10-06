import { useState } from 'react';

const useToggle = () => {
  const [ status, setStatus ] = useState(false);

  const handleStatusChange = () => setStatus(!status);

  return {
    status,
    handleStatusChange,
  };
};

export default useToggle;