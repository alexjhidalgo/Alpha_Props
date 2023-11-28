import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Occupieds() {
  return (
    <Link to="/property-management">
      <FontAwesomeIcon icon={faCoffee} />
    </Link>
  );
}

export default Occupieds;