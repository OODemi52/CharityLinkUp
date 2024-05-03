import Card from "components/card";

const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Notifications
        </h4>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">SUBJECT</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            MESSAGE TEXT
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border  px-3 py-4 shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">SUBJECT</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            MESSAGE TEXT
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">SUBJECT</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            MESSAGE TEXT
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">SUBJECT</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            MESSAGE TEXT
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">SUBJECT</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            MESSAGE TEXT
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">SUBJECT</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            MESSAGE TEXT
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
