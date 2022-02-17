import "./MyPage.scss";
import Header from "./Header";
import LeftNav from "./LeftNav";
import Contents from "./Contents";
import Footer from "./Footer";

export default function MyPage() {
  return (
    <div className="container">
      <Header/>
      <div className="centerLayout">
        <LeftNav/>
        <Contents/>        
      </div>
      <Footer/>
    </div>
  );
}