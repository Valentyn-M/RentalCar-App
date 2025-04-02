import { Suspense } from 'react';
import AppBar from './AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <AppBar />
      </header>
      <main className="main">
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
