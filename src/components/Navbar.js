import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  // Refactored color styles as a single object
  const colors = [
    { name: 'red', hex: '#e65c5c' },
    { name: 'blue', hex: '#6988ec' },
    { name: 'orange', hex: 'orange' },
    { name: 'green', hex: '#51b564' },
    { name: 'pink', hex: 'pink' }
  ];

  const circleStyle = {
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer' // Adding cursor to indicate clickable circles
  };

  const [bg, setBg] = useState('white');

  // Generic function to change background color
  const changeBg = (color) => {
    setBg(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtility</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>

            {/* Refactored color circles, rendering them dynamically */}
            {colors.map((colorObj, index) => (
              <div
                key={index}
                style={{ ...circleStyle, backgroundColor: colorObj.hex }}
                onClick={() => changeBg(colorObj.hex)}
              ></div>
            ))}
            


            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable {props.mode === 'light' ? 'dark' : 'light'} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Title',
  about: 'About'
};
