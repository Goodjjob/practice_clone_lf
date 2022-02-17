import { useMemo } from "react";
import { ReactTable } from "../../../components/table";
import makeData from "./makeData";
import "./OrderHistory.scss";

/**
 * 
 * @returns 
 */
export default function OrderHistory(): JSX.Element {
  const defaultColumn = useMemo(
    () => ({
      width: 90,
    }),
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: '일자/주문번호',
        accessor: 'orderDayNumber',
        width: 50,
      },
      {
        Header: '주문상품정보',
        accessor: 'product'
      },
      {
        Header: '결제금액',
        accessor: 'price'
      },
      {
        Header: '진행상태',
        accessor: 'state'
      },
      {
        Header: '비고',
        accessor: 'etc'
      },
    ],
    []
  );

  const data = useMemo(() => makeData(10), []);

  return (
    
    <ReactTable
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
    ></ReactTable>
  );
} 