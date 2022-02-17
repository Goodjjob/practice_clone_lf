import React from "react";
import { Card } from "./index";

export default function MyInfoCard(): JSX.Element {
  const handleClick = () => {
    
  }
  return (
    <Card className="myInfoLink" onClick={handleClick}>
      <span className="myInfoLink">bb</span>
      <span><em>bbb</em>개</span>
    </Card>
  );
};