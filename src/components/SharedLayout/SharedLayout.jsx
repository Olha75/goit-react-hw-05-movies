import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from 'components/MainMenu/MainMenu';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <MainMenu />
      <Suspense fallback={Loader}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
