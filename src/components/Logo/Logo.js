import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: '150px', width: '150px' }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: '5px' }} src={brain} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
