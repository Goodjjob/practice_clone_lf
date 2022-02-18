import React from "react";
import { useTable, Column } from 'react-table'
import {Collapse} from 'react-collapse';

interface Props {
  columns: Array<Column<object>>;
  data: Array<object>;
  collapseRowIndexStart: number;
  collapseRowIndexEnd: number;
  isOpened: boolean;
  defaultColumn?: object;
}

const Row = (row: any) => { return (
  <tr {...row.getRowProps()}>
    {row.cells.map( (cell: any) => (
      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
    ))}
  </tr>
)}

export default function SomePartCollapseTable(props: Props): JSX.Element {
  const { 
    columns,
    data,
    collapseRowIndexStart,
    collapseRowIndexEnd,
    isOpened 
  } = props;

  const preRows = data.filter( (row, index) => index < collapseRowIndexStart);
  const collapseTargetRows = data.filter( (row, index) => collapseRowIndexStart <= index && index <= collapseRowIndexEnd);
  const postRows = data.filter( (row, index) => collapseRowIndexEnd < index);

  return (
    <table>
      <thead>
        <tr>
          {columns.map( column => <th>{column.Header}</th>)}
        </tr>
      </thead>
      <tbody>
        {preRows.map( row => { return (
          <tr>
            {Object.keys(row).map(colName => {
              const keyTyped = colName as keyof typeof row;
              return <td key={colName}>{row[keyTyped]}</td>
            })}
          </tr>
        )})}
        <Collapse isOpened={isOpened}>
          {collapseTargetRows.map( row => { return (
            <tr>
              {Object.keys(row).map(colName => {
                const keyTyped = colName as keyof typeof row;
                return <td key={colName}>{row[keyTyped]}</td>
              })}
            </tr>
          )})}
        </Collapse>
        {postRows.map( row => { return (
          <tr>
            {Object.keys(row).map(colName => {
              const keyTyped = colName as keyof typeof row;
              return <td key={colName}>{row[keyTyped]}</td>
            })}
          </tr>
        )})}
      </tbody>
    </table>
  );
};