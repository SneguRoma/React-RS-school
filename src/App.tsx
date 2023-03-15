import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';

class App extends React.Component {
  mainPage = (<MainPage />);

  error = (<ErrorPage />);

  render() {
    return (
      <div>
        <Header name="hui" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={this.mainPage} />
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
