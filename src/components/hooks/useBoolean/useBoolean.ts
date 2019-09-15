import { useCallback, useMemo, useState } from "react";
import { UseBoolean, UseBooleanActions } from "./useBoolean.interfaces";

/**
 * useBoolean hook
 *
 * @param {mixed} initial
 */

const useBoolean = (initial: boolean): UseBoolean => {
  const [value, setValue] = useState<boolean>(initial);

  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  const actions: UseBooleanActions = useMemo(
    () => ({ setValue, toggle, setTrue, setFalse }),
    [setFalse, setTrue, toggle]
  );

  return useMemo(() => [value, actions], [actions, value]);
};

export { useBoolean };
