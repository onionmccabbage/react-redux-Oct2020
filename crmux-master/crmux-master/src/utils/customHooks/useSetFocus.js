import { useEffect } from "react";

export function useSetFocus(inputRef) {
  useEffect(() => {
    const input = inputRef.current;
    input.focus();
  }, []);
}