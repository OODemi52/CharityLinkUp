//@ts-nocheck
import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id={'root'}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
