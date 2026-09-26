import './index.css';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Team from './components/Team';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <Hero />
      <Modules />
      <Team />
    </div>
  );
}
