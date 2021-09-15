import { useState } from 'react';

function useToggler(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggleState = (targetState: any) => {
    if (targetState) {
      if (typeof targetState !== 'boolean') {
        throw new Error(`CAN SET BOOLEAN TOGGLE VALUE`);
      }

      setState(targetState);
      return;
    }

    setState((prevState) => !prevState);
  };

  return [state, toggleState];
}

export default useToggler;
