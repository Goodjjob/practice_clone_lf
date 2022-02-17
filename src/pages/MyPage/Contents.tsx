import "./Contents.scss"
import OrderHistory from "./orderHistory/OrderHistory";

export default function Contents(): JSX.Element {
  return (
    <div className="contents">
      <OrderHistory/>
    </div>
  );
}