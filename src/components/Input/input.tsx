import React from "react";
import "./input.scss";

type inputProps = {
  name: string;
  type: string;
  id: string;
  label: string;
};

export const Input = (props: inputProps): React.ReactElement => {
  return <input name={props.name} id={props.id} type={props.type} />;
};
