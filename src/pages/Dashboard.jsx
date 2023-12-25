import React, { useState } from 'react';
import ComponentWrapper from '../components/shared/Wrappers/ComponentWrapper';
import LeftNavigation from '../components/shared/LeftNavigation/LeftNavigation';
import Dashboard from '../components/dashboard/Dashboard/Dashboard';

const DashboardPage = () => {
  return (
    <ComponentWrapper>
      <div className='w-full grid min-h-screen grid-cols-[274px,1fr] justify-start'>
        {/* left navigation ============>  */}
        <LeftNavigation />
        {/* right portion ===========>  */}
        <div className='rightPor bg-black-off/5 h-full pt-14 px-14'>
          {/* main dashboard =====>  */}
          <Dashboard />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DashboardPage;
