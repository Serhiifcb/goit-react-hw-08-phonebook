import { Outlet } from 'react-router-dom';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import ResponsiveAppBar from './AppBarResponsive/AppBarResponsive';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <ResponsiveAppBar/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

