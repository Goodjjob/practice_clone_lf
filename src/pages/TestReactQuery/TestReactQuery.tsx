import React, { useState } from "react";
import IdComp from "./IdComp";
import NameComp from "./NameComp";
import Selector from "./Selector";
import "./style.scss";
import { useUser } from "./userUsers";

interface UserProps {
  id: string;
}

/**
 * React Query Test
 * 
 * - Custom hook
 * - 여러 컴포넌트에서 동일 키값 query 시 cache 여부 테스트 
*/
export default function TestReactQuery(props: UserProps): JSX.Element {
  const [ userId, setUserId ] = useState<string>(props.id);
  const { data, error, isFetching } = useUser(userId);

  return (
    <div className="parent">
      <div className="child">
        {data && 
          <>
            <h1>ID: {data.id}</h1>
          </>
        }
      </div>  
      <IdComp id={userId}></IdComp>
      <NameComp id={userId}></NameComp>
      <Selector set={(value: string) => setUserId(value)}></Selector>
    </div>
  )
}