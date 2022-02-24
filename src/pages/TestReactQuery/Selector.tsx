import React, { useState } from "react";
import "./style.scss";
import { useUser } from "./userUsers";

interface SelectorProps {
  set: Function;
}
export default function Selector(props: SelectorProps): JSX.Element {
  return (
    <div className="">
      <button onClick={() => { props.set('1') }}>user 1</button>
      <button onClick={() => { props.set('2') }}>user 2</button>
    </div>
  )
}