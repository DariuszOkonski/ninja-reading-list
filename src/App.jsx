import React from 'react';
import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
