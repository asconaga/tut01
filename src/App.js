import './index.css';
import Header from './Header';
import Footer from './Footer'

import Main from './Main'
import { useState } from 'react';

function App() {

  const [  message, setMessage ]  = useState("Dave");

  return (
    <div className="App">
       <Header title="Animales" />
       <Main />
       <p>{message}</p>
       <Footer />
    </div>
  );
}

export default App;
