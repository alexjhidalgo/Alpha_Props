import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

// Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignHanging, faHouse, faHouseUser, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSignHanging, faHouse, faHouseUser, faCommentsDollar);

const Header = () => {
  return (
    <header>
      <Link to="/home">
        <h1>Jabe Property Management</h1>
      </Link>
      <nav>
        <ul>
            <li>
              <Link to="/listings">
                <div class="icons">
                  <FontAwesomeIcon
                  icon={faSignHanging}
                  style={{ color: "#00c28d", width: "15%", height: "15%", padding: "10px" }}
                  />
                  <label>My Listings</label>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/potentials">
                  <div class="icons">
                  <FontAwesomeIcon
                  icon={faHouse}
                  style={{ color: "#5284dc", width: "15%", height: "15%", padding: "10px" }}
                  />
                      <label>Potential Acquisitions</label>
                </div>
              </Link>
            </li>
            <li>
            <Link to="/occupieds">
                <div class="icons">
                  <FontAwesomeIcon
                  icon={faHouseUser}
                  style={{ color: "#da9429", width: "15%", height: "15%", padding: "10px" }}
                  />
                  <label>Property Management</label>
                </div>
            </Link>15
            </li>
            <li>
            <Link to="/cashflows">
                <div class="icons">
                  <FontAwesomeIcon
                  icon={faCommentsDollar}
                  style={{ color: "#dc240d", width: "15%", height: "15%", padding: "10px" }}
                  />
                  <label>Cashflow</label>
                </div>
            </Link>
            </li>
            
          {/* <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;