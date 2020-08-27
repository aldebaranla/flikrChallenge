import React from 'react';

/* styles */
import './assets/css/App.css';


//import components
import Header from './components/Header.js';
import FeedPhotos from './components/FeedPhotos';
import Footer from './components/Footer';

/* One load page. */
function App() {

  return (
    <div className="App">
      <Header/>
      <main role="main">
        <FeedPhotos/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
