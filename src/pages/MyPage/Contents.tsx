import "./Contents.scss"
import OrderHistory from "./orderHistory/OrderHistory";
import { Router} from "react-router-dom";

export default function Contents(): JSX.Element {
  return (
    <div className="contents">
      {/* <Router location={""} navigator={undefined}>

      </Router> */}
      <OrderHistory/>
    </div>
  );
}