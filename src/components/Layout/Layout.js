import React, { Fragment } from 'react';

import Header from '../uisections/Header/Header';
import Footer from '../uisections/Footer/Footer';
import Pages from '../pages/Pages';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Pages />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
