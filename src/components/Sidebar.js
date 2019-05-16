import React from 'react';
import PropTypes from 'prop-types';
import Styles from './main.css';

export default function Sidebar({ children }) {
  return (
    <nav className={Styles.sidebar}>
      {children}
    </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};
