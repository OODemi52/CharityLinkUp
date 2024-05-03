import { MdFileUpload } from "react-icons/md";
import Card from "components/card";

const Upload = () => {
  return (
    <Card className="grid h-full w-full grid-cols-12 gap-3 rounded-[20px] bg-clip-border p-2.5 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-12">
      <div className="col-span-12 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-12">
        <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
          <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
          <h4 className="text-xl font-bold text-brand-500 dark:text-white">
            Upload Image
          </h4>
          <p className="mt-2 text-sm font-medium text-gray-600">
            PNG and JPG files are allowed
          </p>
        </button>
      </div>
    </Card>
  );
};

export default Upload;
