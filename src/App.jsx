import { useState } from 'react';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import Schedule from '@/components/Schedule.jsx';
import Hosts from '@/components/Hosts.jsx';
import Buzon from '@/components/Buzon.jsx';
import Contact from '@/components/Contact.jsx';
import Player from '@/components/Player.jsx';
import FloatingSocial  from '@/components/FloatingSocial.jsx';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Header />
      <Hero isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Schedule />
      <Hosts />
      <Buzon />
      <Contact />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <FloatingSocial />
    </>
  );
}

export default App;
