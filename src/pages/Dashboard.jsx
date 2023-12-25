import React, { useState } from 'react';
import ComponentWrapper from '../components/shared/Wrappers/ComponentWrapper';
import LeftNavigation from '../components/shared/LeftNavigation/LeftNavigation';

const Dashboard = () => {
  return (
    <ComponentWrapper>
      <div className='w-full grid grid-cols-[274px,1fr] justify-start'>
        {/* left navigation ============>  */}
        <LeftNavigation />
        {/* right portion ===========>  */}
        <div className='rightPor h-screen'></div>
      </div>
    </ComponentWrapper>
  );
};

export default Dashboard;
