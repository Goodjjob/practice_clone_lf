import "./Contents.scss"
import OrderHistory from "./orderHistory/OrderHistory";
import { Route } from "react-router-dom";

export default function Contents(): JSX.Element {
  return (
    <div className="contents">
      <Route />
      <OrderHistory/>
    </div>
  );
}