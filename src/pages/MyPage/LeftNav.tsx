import { ReactElement } from "react";
import "./LeftNav.scss"
import { Group, Link } from ".";

const navGroup: Group<Link>[] = [
  {
    id: 'orderList',
    name: '쇼핑내역',
    children: [
      {
        id: '주문/배송 내역',
        url: '',
        component: [
          <div></div>
        ]
      },
      {
        id: '취소/반품/교환 신청',
        url: '',
        component: [
          <div></div>
        ]
      },
      {
        id: '재결제 대기',
        url: '',
        component: [
          <div></div>
        ]
      },
      {
        id: '디지털식사권 주문내역',
        url: '',
        component: [
          <div></div>
        ]
      },
      {
        id: '방문예약내역 전체보기',
        url: '',
        component: [
          <div></div>
        ]
      },
    ]
  },
  {
    id: 'myBenefit',
    name: '나의혜택',
    children: [
      {
        id: '쿠폰 조회',
        url: '',
        component: [
          <div></div>
        ]
      },
      {
        id: '쿠폰 등록',
        url: '',
        component: [
          <div></div>
        ]
      },
      {
        id: 'e기프트 마일리지 조회',
        url: '',
        component: [
          <div></div>
        ]
      },
      {
        id: '마일리지 조회',
        url: '',
        component: [
          <div></div>
        ]
      },
      {
        id: '모바일상품권 조회',
        url: '',
        component: [
          <div></div>
        ]
      },
      {
        id: 'LFpay',
        url: '',
        component: [
          <div></div>
        ]
      },
    ]
  },
];
export default function LeftNav(): ReactElement {
  return (
    <div className="leftNav">
      {navGroup.map( (group: Group<Link>) => {
        return (
          <dl className="leftNavGroup">
            <dt className="groupLabel" key={group.id}>{group.name}</dt>
            {group.children.map( (link: Link) => {
              return <dd className="navLabel" key={link.id}>{link.id}</dd>
            })}
          </dl>
        )
      })}
    </div>
  );
}
