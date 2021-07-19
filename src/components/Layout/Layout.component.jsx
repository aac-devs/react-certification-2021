import React from 'react';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <React.Fragment>
      <main className="container">{children}</main>;
    </React.Fragment>
  );
}

export default Layout;
