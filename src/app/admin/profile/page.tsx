'use client';

import Banner from 'components/admin/profile/Banner';
import General from 'components/admin/profile/General';
import Project from 'components/admin/profile/Project';
import Card from 'components/card';
import { useState } from 'react';



const ProfileOverview = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDeleteAccount = () => {
      setShowConfirmation(true);
    };

    const handleConfirmDelete = () => {
      // Perform delete account logic here
      setShowConfirmation(false);
    };

    const handleCancelDelete = () => {
      setShowConfirmation(false);
    };

    return (
      <div className="flex w-full flex-col gap-5 lg:gap-5">
        <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
          <div className="col-span-12 lg:!mb-0">
            <Banner />
          </div>
        </div>

        <div className="mb-4 grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:mb-0 3xl:col-span-8">
            <Project />
          </div>

          <div className="col-span-12 lg:col-span-4 lg:mb-0 3xl:!col-span-4">
            <General />
          </div>
        </div>
        <Card classname="justify-center" extra={'w-full p-4 h-full'}>
          {showConfirmation ? (
            <div>
              <p className="text-red-600 font-semibold text-3xl">Are you sure you want to delete your account? This process cannot be undone and you will lose all of your information!</p>
              <br />
              <button className="bg-red-500 text-white rounded-full py-2 px-4" onClick={handleConfirmDelete}>
                Confirm
              </button>
              {'                '}
              <button className="bg-gray-500 text-white rounded-full py-2 px-4" onClick={handleCancelDelete}>
                Cancel
              </button>
            </div>
          ) : (
            <button className="bg-red-500 text-white rounded-full py-2 px-4" onClick={handleDeleteAccount}>
              DELETE ACCOUNT
            </button>
          )}
        </Card>
      </div>
    );
};

export default ProfileOverview;
