import React, { useState } from 'react';
import ComponentWrapper from '../components/shared/Wrappers/ComponentWrapper';
import LeftNavigation from '../components/shared/LeftNavigation/LeftNavigation';
import SmallScreenLeftNavigation from '../components/shared/LeftNavigation/SmallScreenLeftNavigation';
import Dashboard from '../components/dashboard/Dashboard/Dashboard';
import Fleet from '../components/dashboard/Fleet/Fleet';
import Cards from '../components/dashboard/Cards/Cards';

const DashboardPage = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  return (
    <div className='w-full'>
      <div className='w-full grid min-h-screen grid-cols-1 lg:grid-cols-[300px,calc(100%-300px)] justify-start '>
        {/* left navigation ============>  */}
        <LeftNavigation
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        {/* right portion ===========>  */}
        <div className='rightPor bg-black-off/5 h-full'>
          <SmallScreenLeftNavigation
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <div className=''>
            {/* main dashboard =====>  */}
            {selectedOption === 'dashboard' && <Dashboard />}
            {selectedOption === 'Fleet' && <Fleet />}
            {selectedOption === 'Cards' && <Cards />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
