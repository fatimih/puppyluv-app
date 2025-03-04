import React from 'react';
import { Outlet } from 'react-router-dom';  // Add this import
import Header from '../../nav/Header';

function Layout({ children }) {
  return (
    <div className="site-wrapper" style={{ width: '100%', minWidth: '800px' }}>
      <div className="home-container" style={{ width: '100%', minWidth: '800px' }}>
        <div className="content-wrapper" style={{ width: '800px', minWidth: '800px' }}>
          <Header />
          <Outlet />  {/* This will render the page content */}
        </div>
      </div>
    </div>
  );
}

export default Layout;