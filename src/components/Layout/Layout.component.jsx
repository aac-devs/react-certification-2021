import React from 'react';

import Header from '../Header';
import './Layout.styles.css';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main className="container">{children}</main>
    </React.Fragment>
  );
}

export default Layout;
