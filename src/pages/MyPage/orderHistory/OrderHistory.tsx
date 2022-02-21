import { ChangeEventHandler, InputHTMLAttributes, useMemo, useState } from "react";
import "./OrderHistory.scss";
import { ReactTable } from "../../../components/table";
import makeData from "./makeData";
import {Collapse} from 'react-collapse';
import SomePartCollapseTable from "../../../components/table/SomePartCollapseTable";
import LabeledCheckBox from "../../../components/checkbox/LabeledCheckBox";

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

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isOpened2, setIsOpened2] = useState<boolean>(false);

  const handleTable1Checked = (value: any) => {
    setIsOpened(value);
  };
  const handleTable2Checked = (value: any) => {
    setIsOpened2(value);
  };
  
  return (
    <>
      <LabeledCheckBox
       labelClassName="label"
       inputClassName="input"
       label="open table"
       checked={isOpened}
       onChange={handleTable1Checked}/>

      <LabeledCheckBox
        labelClassName="label"
        inputClassName="input"
        label="open table2"
        checked={isOpened2}
        onChange={handleTable2Checked}/>

      <Collapse isOpened={isOpened} initialStyle={{height: 100, overflow: 'initial'}}>
        <ReactTable
          columns={columns}
          data={data}
          defaultColumn={defaultColumn}
        ></ReactTable>
      </Collapse>
      <br/>
      <br/>
      <br/>
      <SomePartCollapseTable
        columns={columns}
        data={data}
        isOpened={isOpened2}
        collapseRowIndexStart={Math.floor(data.length*0.3)}
        collapseRowIndexEnd={Math.floor(data.length*0.6)}
        defaultColumn={defaultColumn}
      ></SomePartCollapseTable>
    </>
  );
} 