const range = (lens: number) => {
  const arr = [];
  for (let i = 0; i < lens; i++) {
    arr.push(i);
  }
  return arr;
};

const newOrderInfo = () => {
  const statusChance = Math.random();
  const dt = new Date();
  dt.setDate(dt.getDate() - Math.floor(Math.random() * 10));

  return {
    orderDayNumber: dt.toLocaleDateString(),
    product: `Product${Math.floor(Math.random() * 10).toString()}`,
    price: `${Math.floor(Math.random() * 100000).toString()}원`,
    state: '결제완료',
    etc: statusChance > 0.66
      ? "결제완료"
      : statusChance > 0.33
      ? "배송중"
      : "배송완료",
  }
};

export default function makeData(lens: number) {
  const makeDataLevel = (depth = 0) => {
    return range(lens).map((d) => {
      return {
        ...newOrderInfo()
      };
    });
  };

  return makeDataLevel();
}
