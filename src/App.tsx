import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Drift from './pages/Drift';
import TimeAttack from './pages/TimeAttack';
import Forza from './pages/Forza';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Menu />
      </header>

      <main className="app__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drift" element={<Drift />} />
          <Route path="/timeattack" element={<TimeAttack />} />
          <Route path="/forza" element={<Forza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}