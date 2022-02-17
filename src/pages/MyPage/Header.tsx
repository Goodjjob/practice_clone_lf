import { Link } from ".";
import "./Header.scss"


const myInfoLinks: Link[] = [
  {
    id: 'review',
    url: 'myPage/getReviewList',
    component: [
      <span>구매후기</span>,
      <span><em>10</em>개</span>
    ],
  },
  {
    id: 'coupon',
    url: 'myPage/getCouponList',
    component: [
      <span>쿠폰</span>,
      <span><em>3</em>장</span>
    ],
  },
  {
    id: 'firstPoint',
    url: 'myPage/getFirstPointList',
    component: [
      <span>e기프트 마일리지</span>,
      <span><em>5</em>M</span>
    ],
  },
  {
    id: 'myGiftCard',
    url: 'myPage/getMyGiftCardList',
    component: [
      <span>모바일상품권</span>,
      <span><em>2</em>매</span>
    ],
  },
  {
    id: 'lfPay',
    url: 'https://www.lfmall.co.kr/order.do?cmd=getLfpayIframe',
    component: [
      <div className="lf-logo">
        <img src="https://img.lfmall.co.kr/file/WAS/apps/2021/image/mweb/lfpay/logo-l-fpay2x.png" alt="Lfpay"/>
      </div>,
      <span>가입하기</span>
    ],
  }
];

export default function Header(): JSX.Element {
  const user = {
    name: "정동하",
    grade: {
      name: "Red",
      disc: ""
    }
  }
  return (
    <div className="header">
      <div className="myPageTitle">
        <div className="titleTypo">마이페이지</div>
      </div>
      <div className="summaryInfoBox">
        <div className="userBox">
          <em>{user.name}</em>
          <div className="gradeBadge">{user.grade.name}</div>
          {/*TODO: Route*/}
          <div className="gradeBenefitBadge">등급혜택보기</div>
        </div>
        <div className="infoList">
          {/* <MyInfoLinkCard/> */}
          {myInfoLinks.map( (link: Link) => {
            return (
              /*TODO: Route*/
              <li className="myInfoLink" key={link.id}>
                {link.component.map( (child, index) => {
                  return child;
                })}
              </li>
            )
          })}
        </div>
      </div>
    </div>
  );
}
