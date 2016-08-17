import React from 'react';

function App({ children }) {
  return (
    <div>
      {children}
    </div>
    );
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
