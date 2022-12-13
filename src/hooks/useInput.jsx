import React from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};
