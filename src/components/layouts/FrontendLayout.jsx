import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const FrontendLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default FrontendLayout;
