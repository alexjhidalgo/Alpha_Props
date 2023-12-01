import React from 'react';

function Markets() {
  return (
    <div className="full-page">
      <header>
        <h1>Market Trends</h1>
        <p>Maintains database information about the following trends</p>
      </header>
      <div 
        className="content"
        style={{color:"white"}}
        >
        <ul>
          <li>Homes being bought</li>
          <li>Homes being rented</li>
          <li>Property management companies in regions of interest (competition)</li>
        </ul>
      </div>
    </div>
  );
}

export default Markets;
