import React from 'react';

import Page from '../../../HOC/Page';
import bgImage from '../../../images/home_bg.jpg';
import Link from '../../uisections/Link/Link';

const home = () => {
  return (
    <Page id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>Control the Chaos of Hybrid IT Infrastructure.</h1>
            <h2 className='sub-title mb-4'>
            Digital operations management, from discovery to resolution, powered by AIOps.
            </h2>
            <Link target='about' classes='btn btn-primary rounded-0 mr-2'>
              Learn More
            </Link>
            <Link target='contact' classes='btn btn-light text-dark rounded-0'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default home;
