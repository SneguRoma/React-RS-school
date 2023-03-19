import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

import MainPage from './pages/MainPage';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';

class App extends React.Component {
  mainPage = (<MainPage />);

  about = (<About />);

  error = (<ErrorPage />);

  render() {
    return (
      <div>
        <Header name="RoboWorld" />
        <Routes>
          <Route path="/" element={this.mainPage} />
          <Route path="/about" element={this.about} />
          <Route path="*" element={this.error} />
        </Routes>
      </div>
    );
  }
}

export default App;
