import React from 'react';
import Typed from 'react-typed';

function Typing() {
  return (
    <Typed
      strings={['About me', 'Have fun to chill out here', 'Welcom back!']}
      typeSpeed={60}
      backSpeed={30}
      loop
    />
  );
}

export default Typing;
