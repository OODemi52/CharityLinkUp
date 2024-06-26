import { MdModeEditOutline } from 'react-icons/md';
import image1 from '/public/img/profile/image1.png';
import image2 from '/public/img/profile/image2.png';
import image3 from '/public/img/profile/image3.png';
import Card from 'components/card';
import Image from 'next/image';

const Project = () => {
  return (
    <Card extra={'w-full p-4 h-full'}>
      <div className="mb-8 w-full">
        <p className="text-xl font-bold text-navy-700 dark:text-white">
          Uploaded Content
        </p>
        CONTENT WILL BE MAPPED HERE
      </div>
      {/* Project 1 */}
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <Image
              width="2"
              height="20"
              className="h-[83px] w-[83px] rounded-lg"
              src={image1}
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              CHARITY 1
            </p>
            <p className="mt-2 text-sm text-gray-600">
            CAUSE 1 | Uploaded:
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>
      {/* Project 1 */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <Image
              width="2"
              height="20"
              className="h-[83px] w-[83px] rounded-lg"
              src={image3}
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              CHARITY 2
            </p>
            <p className="mt-2 text-sm text-gray-600">
            CAUSE 2 | Uploaded:
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>
      {/* Project 1 */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <Image
              width="2"
              height="20"
              className="h-[83px] w-[83px] rounded-lg"
              src={image2}
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              CHARITY 3
            </p>
            <p className="mt-2 text-sm text-gray-600">
              CAUSE 3 | Uploaded: 
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>
    </Card>
  );
};

export default Project;
