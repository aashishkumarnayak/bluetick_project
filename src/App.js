// App.js

import React from 'react';
import HeroSection from './components/HeroSection.js';
import WhatWeOffer from './components/WhatWeOffer.js';
import Blogs from './components/Blogs.js';
import LetsConnect from './components/LetsConnect.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeOffer />
      <Blogs />
      <LetsConnect />
      <Footer />
    </div>
  );
};

export default App;
