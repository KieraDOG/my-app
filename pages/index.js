import React from 'react';
import Link from 'next/link';

const HomePage = () => (
  <>
    <div>HomePage</div>
    <Link 
      href={{
        pathname: '/destinations/cairns',
      }}
      passHref
    >
      <a>Link</a>
    </Link>
  </>
);

export default HomePage;
