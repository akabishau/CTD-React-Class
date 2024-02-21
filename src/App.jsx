import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <div className="base-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
