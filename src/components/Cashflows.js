import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Cashflows() {
  return (
    <Link to="/cashflows">
      <FontAwesomeIcon icon={faCoffee} />
    </Link>
  );
}

export default Cashflows;