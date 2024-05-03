import avatar from '/public/img/avatars/default.png';
import banner from '/public/img/profile/banner.png';
import Card from 'components/card';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface UserDetails {
    userid: string;
    name: string;
    email: string;
    password: string;
    imageurl: string;
    role: string;
    createdAt: Date;
}

const Banner = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    userid: '',
    name: '',
    email: '',
    password: '',
    imageurl: '',
    role: '',
    createdAt: new Date(),
  });

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
    <Card extra={'items-center w-full h-full p-[16px] bg-cover'}>
      <h1 className="text-4xl font-semibold text-navy-700 dark:text-white my-4">Profile</h1>
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <Image
            width="2"
            height="20"
            className="h-full w-full rounded-full"
            src={ userDetails.imageurl ? userDetails.imageurl : avatar }
            alt=""
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          { userDetails.name }
        </h4>
        <h5 className="text-base font-normal text-gray-600">ROLE: { userDetails.role.toUpperCase() }</h5>
      </div>
      <div className="flex flex-col items-center mt-8 border-t border-gray-100 w-full" ></div>
        <h6 className="text-xs font-bold text-navy-700 dark:text-white mt-10">
          User Since: { new Date(userDetails.createdAt).toLocaleDateString('en-US') }
        </h6>
    </Card>
  );
};

export default Banner;
