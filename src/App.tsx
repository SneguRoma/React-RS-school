import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <BrowserRouter>
          <Header name="hui" />
          <Routes>
            <Route path="/" element={this.mainPage} />
            <Route path="/about" element={this.about} />
            <Route path="*" element={this.error} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        index: true,
        path: 'humor',
        element: <Humor />,
      },
      
      
    ],
  },
]);

const App = () => <RouterProvider router={router} />; */
