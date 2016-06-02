import React, { PropTypes } from 'react';

function App(props) {

  return (
    <div className="container">
      <div className="header">
        <img src="https://uc.uxpin.com/files/43189/48881/currys_logo.png" />
      </div>
      {props.main}
    </div>
  );

}

App.propTypes = {
  main: PropTypes.element
};

export default App;
