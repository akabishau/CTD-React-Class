import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';
import { Routes, Route } from 'react-router-dom';
import { TodoProvider } from './contexts/TodoContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="base-container">
          <Routes>
            {/* TODO: get path from config */}
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
