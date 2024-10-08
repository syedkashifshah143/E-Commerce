import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Slider from './SideBar';
import GetAllUser from './GetAllUser';
import AddNewUser from './AddNewUser';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <Slider className="h-full" />
      <div className="flex-grow">
        <Routes>
          <Route path='users' element={<GetAllUser />} />
          <Route path='newuser' element={<AddNewUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
