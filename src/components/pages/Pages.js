import React, { Fragment } from 'react';

import Home from './Home/Home';
import ImmServices from './ImmigrationServices/ImmServices';
import Trainings from './Trainings/Trainings';
import Support from './Support/Support';
import Blog from './Blog/Blog';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';

const pages = () => {
  return (
    <Fragment>
      <Home />
      <ImmServices />
      <Trainings />
      <Support />
      <Blog />
      <About />
      <ContactUs />
    </Fragment>
  );
};

export default pages;