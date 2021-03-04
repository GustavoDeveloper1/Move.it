import { useState } from 'react';
import { ChallengesProvider } from '../Contexts/ChallengesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {


  return (
      <Component {...pageProps} />
  )
}

export default MyApp
