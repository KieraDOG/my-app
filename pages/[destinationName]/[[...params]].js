import React from 'react';
import Link from 'next/link';

const DestinationPage = () => (
  <>
    <div>DestinationPage</div>
    <Link 
      href={{
        pathname: '/cairns/properties/413969/package',
        query: {
          originCode: 'BNE', 
          departureDate: '2020-10-19', 
          returnDate: '2020-10-21', 
          adults: '1', 
          children: '0', 
          infants: '0', 
        },
      }}
      passHref
    >
      <a>Link</a>
    </Link>
  </>
);

export default DestinationPage;
