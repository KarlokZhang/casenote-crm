import React from 'react';

import Table from '../../components/Table';
import { sampleData, columns } from '../../components/Table/sampleTableData';

const DashboardPage: React.FC = () => {
  return (
    <>
      <h4>Dashboard Page</h4>
      <Table columns={columns} data={sampleData} />
    </>
  );
};

export default DashboardPage;
