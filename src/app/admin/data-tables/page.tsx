'use client';

import tableDataDevelopment from 'variables/data-tables/tableDataDevelopment';
import DevelopmentTable from 'components/admin/data-tables/DevelopmentTable';

const Tables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable tableData={tableDataDevelopment} />
      </div>
    </div>
  );
};

export default Tables;
