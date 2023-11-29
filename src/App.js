import './App.css';
import React, { useState } from 'react';
// Components
import Listings from './components/Listings'; // Adjust the path accordingly
import Potentials from './components/Potentials'; // Adjust the path accordingly
import Occupieds from './components/Occupieds'; // Adjust the path accordingly
import Cashflows from './components/Cashflows'; 

// Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignHanging, faHouse, faHouseUser, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSignHanging, faHouse, faHouseUser, faCommentsDollar);


function App() {
  const [activeComponent, setActiveComponent] = useState('');

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className="grid-container">
      <div className={`icon listings ${activeComponent === 'listings' ? 'active' : ''}`} onClick={() => handleComponentChange('listings')}>
        {activeComponent === 'listings' && <Listings />}
        <FontAwesomeIcon
          icon={faSignHanging}
          style={{ color: "#00c28d", width: "15%", height: "15%", padding: "20px" }}
        />
        <label>My Listings</label>
      </div>

      <div className={`icon potentials ${activeComponent === 'potentials' ? 'active' : ''}`} onClick={() => handleComponentChange('potentials')}>
        {activeComponent === 'potentials' && <Potentials />}
        <FontAwesomeIcon
          icon={faHouse}
          style={{ color: "#5284dc", width: "15%", height: "15%", padding: "20px" }}
        />
        <label>Potential Acquisitions</label>
      </div>

      <div className={`icon occupieds ${activeComponent === 'occupieds' ? 'active' : ''}`} onClick={() => handleComponentChange('occupieds')}>
        {activeComponent === 'occupieds' && <Occupieds />}
        <FontAwesomeIcon
          icon={faHouseUser}
          style={{ color: "#da9429", width: "15%", height: "15%", padding: "20px" }}
        />
        <label>Property Management</label>
      </div>

      <div className={`icon cashflows ${activeComponent === 'cashflows' ? 'active' : ''}`} onClick={() => handleComponentChange('cashflows')}>
        {activeComponent === 'cashflows' && <Cashflows />}
        <FontAwesomeIcon
          icon={faCommentsDollar}
          style={{ color: "#dc240d", width: "15%", height: "15%", padding: "20px" }}
        />
        <label>Cashflow</label>
      </div>
    </div>
  );
}

export default App;