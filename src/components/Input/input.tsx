import React from "react";
import "./input.scss";

type inputProps = {
  name: string;
};

export const Input = (props: inputProps) => {
  return (
    
      <input type="text" name={props.name} id="username" />
  );
};
