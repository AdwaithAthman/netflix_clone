import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {ORIGINALS, ACTION, ANIMATION, THRILLER, DRAMA} from './urls';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Banner/>
      <RowPost title='Netflix Originals' url={ORIGINALS}/>
      <RowPost title='Action Movies' url={ACTION} isSmall/>
      <RowPost title='Animation Movies' url={ANIMATION} isSmall/>
      <RowPost title='Drama Movies' url={DRAMA} isSmall/>
      <RowPost title='Thriller Movies' url={THRILLER} isSmall/>
    </div>
  )
}

export default App