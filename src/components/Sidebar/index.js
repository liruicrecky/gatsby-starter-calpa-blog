import React from 'react';
// import LazyLoad from 'react-lazyload';

import PropTypes from 'prop-types';

import './index.scss';

const Sidebar = ({ post }) => (
  <header className={`intro-header col-lg-2 col-xs-12 order-lg-1 ${post === true ? 'order-11' : 'order-1'}`} >
    <div className="site-heading text-center">
      <div className="about-me">
        <img
          className="avatar"
          src="https://calpa.me/img/profile.png"
          alt="Calpa"
        />
        <h4>Calpa</h4>
        <p>夢裡不覺秋已深</p>
        <p>餘情豈是為他人</p>
      </div>
    </div>
  </header>
);

Sidebar.propTypes = {
  post: PropTypes.bool,
};

Sidebar.defaultProps = {
  post: false,
};

export default Sidebar;