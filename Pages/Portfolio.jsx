import React, { memo } from 'react';

export default memo(function Portfolio() {
  return (
    // <card numero 1>
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
    >
      <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
    // card numero 2
    
    
  );

});
