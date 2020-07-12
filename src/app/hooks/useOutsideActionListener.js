import React from 'react';

export default function useOutsideActionListener(
  ref,
  callBack,
  ignoreElements,
) {
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        !ignoreElements.includes(event.target.id) &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        callBack();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
