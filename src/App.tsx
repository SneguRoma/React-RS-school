import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import FormPage from './pages/FormPage';

const App = () => {
  const mainPage = <MainPage />;
  const about = <About />;
  const error = <ErrorPage />;
  const form = <FormPage className="form-page" />;

  return (
    <div>
      <Header name="RoboWorld" />
      <Routes>
        <Route path="/" element={mainPage} />
        <Route path="/about" element={about} />
        <Route path="/form" element={form} />
        <Route path="*" element={error} />
      </Routes>
    </div>
  );
};

export default App;
