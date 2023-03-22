import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

import MainPage from './pages/MainPage';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import FormPage from './pages/FormPage';

class App extends React.Component {
  mainPage = (<MainPage />);

  about = (<About />);

  error = (<ErrorPage />);
  form = (<FormPage />);

  render() {
    return (
      <div>
        <Header name="RoboWorld" />
        <Routes>
          <Route path="/" element={this.mainPage} />
          <Route path="/about" element={this.about} />
          <Route path="/form" element={this.form} />
          <Route path="*" element={this.error} />
        </Routes>
      </div>
    );
  }
}

export default App;
