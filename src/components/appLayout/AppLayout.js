import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Profiles from '../profiles/Profiles';

const AppLayout = () => (
  <div>
    <Navbar />
    <Profiles />
    <Footer />
  </div>
);

export default AppLayout;
