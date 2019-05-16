import React from 'react';
import PropTypes from 'prop-types';

export default Sidebar({ children }) {
    return (
        <nav>
            {children}
        </nav>
    );
}

Sidebar.propTypes = {
    children: PropTypes.node
}