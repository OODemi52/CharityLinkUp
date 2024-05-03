import React from 'react';
import { MdBarChart, MdOutlineEditNote, MdEditDocument } from 'react-icons/md';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <MdBarChart className="h-6 w-6" />,
  },
  {
    name: 'Content Management',
    layout: '/admin',
    path: 'content-management',
    icon: <MdOutlineEditNote className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: 'Generate Reports',
    layout: '/admin',
    icon: <MdEditDocument className="h-6 w-6" />,
    path: 'data-tables',
    secondary: true,
  },
];
export default routes;
