import { useState, useEffect } from "react";

const useInput = (initialValue, regExp) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (!regExp.test(value)) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [regExp, value]);

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  return { value, onChange, valid };
};

export default useInput;
