import React, { useState } from "react";
import "./style.scss";
import { useUser } from "./userUsers";

interface UserProps {
  id: string;
}

export default function IdComp(props: UserProps): JSX.Element {
  const { data, error, isFetching } = useUser(props.id);

  return (
    <div className="child">
      {data && 
        <>
          <h1>ID: {data.id}</h1>
        </>
      }
    </div>
  )
}