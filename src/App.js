import React from 'react';
import './App.sass';

function App() {
  return (
    <div className="container">
      <section className="wideContainer">
        <h6>Customer Base</h6>
      </section>
      <section className="wideContainer">
        <h6>New vs. returning customers</h6>
      </section>
      <section className="narrowContainer">
        <h6>New customers</h6>
      </section>
      <section className="narrowContainer">
        <h6>Returning customers</h6>
      </section>
      <section className="narrowContainer">
        <h6>Re-order percentage</h6>
      </section>
      <section className="narrowContainer">
        <h6>Wolt rating</h6>
      </section>
    </div>
  );
}

export default App;
