import React from 'react';
import Link from 'next/link';

const HomePage = () => (
  <>
    <div>HomePage</div>
    <Link 
      href={{
        pathname: '/cairns',
        query: {
          originCode: 'BNE', departureDate: '2020-10-19', returnDate: '2020-10-21', adults: '1', children: '0', infants: '0', leadInRoomTypeId: '2255607',
        },
      }}
      passHref
    >
      <a>Link</a>
    </Link>
  </>
);

export default HomePage;
