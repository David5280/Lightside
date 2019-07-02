import React, { Component } from 'react';

const Aside = ({ openingCrawl }) => {
  return (
    <aside>
      <p className='aside-opening-crawl'>{openingCrawl}</p>
    </aside>
  )
}

export default Aside;
