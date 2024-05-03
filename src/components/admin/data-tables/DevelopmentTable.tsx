import React from 'react';
import CardMenu from 'components/card/CardMenu';
import { DiApple } from 'react-icons/di';
import { DiAndroid } from 'react-icons/di';
import { DiWindows } from 'react-icons/di';
import Card from 'components/card';
import Progress from 'components/progress';
import { createColumnHelper, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';

type RowObj = {
  name: string;
  tech: any;
  date: string;
  progress: number;
};

function CheckTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('tech', {
      id: 'tech',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">TECH</p>
      ),
      cell: (info: any) => (
        <div className="flex items-center gap-2">
          {info.getValue().map((item: string, key: number) => {
            if (item === 'apple') {
              return (
                <div
                  key={key}
                  className="text-[22px] text-gray-600 dark:text-white"
                >
                  <DiApple />
                </div>
              );
            } else if (item === 'android') {
              return (
                <div
                  key={key}
                  className="text-[21px] text-gray-600 dark:text-white"
                >
                  <DiAndroid />
                </div>
              );
            } else if (item === 'windows') {
              return (
                <div
                  key={key}
                  className="text-xl text-gray-600 dark:text-white"
                >
                  <DiWindows />
                </div>
              );
            } else return null;
          })}
        </div>
      ),
    }),
    columnHelper.accessor('progress', {
      id: 'progress',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PROGRESS
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('progress', {
      id: 'quantity',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          QUANTITY
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}%
          </p>
          <Progress width="w-[68px]" value={info.getValue()} />
        </div>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={'w-full h-full sm:overflow-auto px-6'}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Generate Report
        </div>

        <button>
          <CardMenu />
        </button>
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
      <h1 className="text-brandColor font-menlo font-black mr-auto hover:cursor-pointer">
          Charity LinkUp
      </h1>
      <hr />
          <br />
          <br />
          <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Total Clicks
          </h3>
          <br />
          <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Total Views
          </h3>
          <br />
          <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Total Users
          </h3>
          <br />
      </div>
    </Card>
  );
}

export default CheckTable;
const columnHelper = createColumnHelper<RowObj>();
