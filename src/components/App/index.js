// == Import : npm
import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Footer />
  </div>
);

// == Export
export default App;
