'use client';

import { PropsWithChildren, useState } from 'react';
import React, { useEffect} from 'react';
import { isWindowAvailable } from 'utils/navigation';
import RootLayout from 'app/layout';

export default function AuthLayout({ children }) {

  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  return (
    <RootLayout>
      <div className="relative float-right h-full min-h-screen w-full dark:!bg-navy-900">
        <main className={`mx-auto min-h-screen`}>
          {children}
        </main>
      </div>
    </RootLayout>
  );
}
