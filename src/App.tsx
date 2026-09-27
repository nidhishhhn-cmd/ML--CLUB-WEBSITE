import { useState } from 'react';
import './index.css';
import IntroLoader from './components/IntroLoader';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Team from './components/Team';

export default function App() {
  const [introDismissed, setIntroDismissed] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {!introDismissed && (
        <IntroLoader onComplete={() => setIntroDismissed(true)} />
      )}
      <Hero />
      <Modules />
      <Team />
    </div>
  );
}

