import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid;
  border-color: #dadada;
`;

const TableRow = styled.tr`
  border-top: 1px solid;
  border-color: #dadada;
`;

const TableData = styled.td`
  height: 50px;
  padding: 8px 16px;
`;

const TableHead = styled.th`
  height: 50px;
  padding: 0 16px;
  font-weight: 700;
  text-align: left;
`;

type TableProps = {
  columns: Array<any>;
  data: Array<any>;
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((header) => (
            <TableHead key={header.accessor}>{header.Header}</TableHead>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableData>{row.name}</TableData>
            <TableData>{row.position}</TableData>
            <TableData>{row.office}</TableData>
            <TableData>{row.extn}</TableData>
            <TableData>{row.startDate}</TableData>
            <TableData>{row.salary}</TableData>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
