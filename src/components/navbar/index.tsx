import React from 'react';
import Dropdown from 'components/dropdown';
import { FiAlignJustify } from 'react-icons/fi';
import NavLink from 'components/link/NavLink';
import { BsArrowBarUp } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import avatar from '/public/img/avatars/default.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
  [x: string]: any;
}) => {
  const { onOpenSidenav, brandText, mini, hovered } = props;
  const [darkmode, setDarkmode] = React.useState(
    document.body.classList.contains('dark'),
  );
  const [userDetails, setUserDetails] = useState({
    userid: '',
    name: '',
    email: '',
    password: '',
    imageurl: '',
    role: '',
    createdAt: new Date(),
  });

  const handleLogout = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    localStorage.removeItem('accessToken');
    window.location.href = '/auth/sign-in';
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const fetchUserDetails = async () => {
      try {
        const response = await fetch('/api/getUser', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const userDetails = await response.json();
          setUserDetails(userDetails);
          console.log('User details set!');
        } else {
          const error = await response.json();
          console.error('Error fetching user details:', error);
          alert('Error fetching user details! Please try again.');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        alert('Error fetching user details! Please try again.');
      }
    };

    if (accessToken) {
      fetchUserDetails();
    }

  }, []);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Dashboard
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {' '}
              /{' '}
            </span>
          </a>
          <NavLink
            className="text-xs font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href="#"
          >
            {brandText}
          </NavLink>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <NavLink
            href="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </NavLink>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] sm:w-[200px] lg:w-[200px] items-center justify-around gap-4 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[200px] md:gap-1 xl:w-[150px]">
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>

        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
        >
          <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Notifications
              </p>
            </div>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                  Filler Notification Text
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                  Filler Notification Text
                </p>
              </div>
            </button>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                  Filler Notification Text
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                  Filler Notification Text
                </p>
              </div>
            </button>
          </div>
        </Dropdown>

        <Dropdown
          button={
            <Image
              width="2"
              height="20"
              className="h-10 w-10 rounded-full"
              src={userDetails.imageurl ? userDetails.imageurl :avatar}
              alt="Avatar"
            />
          }
          classNames={'py-2 top-8 -left-[180px] w-max'}
        >
          <div className="flex h-32 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
            <div className="ml-4 mt-3">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  👋 Hey, {userDetails.name.split(' ')[0]}
                </p>
              </div>
            </div>
            <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

            <div className="ml-4 mt-3 flex flex-col">
              <a
                href="/admin/profile"
                className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
              >
                Profile
              </a>
              <a
                href="" 
                className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                onClick={handleLogout}
              >
                Log Out
              </a>
            </div>
          </div>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
