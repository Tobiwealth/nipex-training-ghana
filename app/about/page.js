import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      About us
      <Link href='/service'>
        go to service
      </Link>
    </div>
  )
}

export default AboutPage
