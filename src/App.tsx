import React from 'react';
import './assets/normalize.css';
import './assets/flexboxgrid.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import CharactersPage from './Pages/Characters/CharactersPage';
import EpisodesPage from './Pages/Episodes/EpisodesPage';
import LocationsPage from './Pages/Locations/LocationsPage';
import Error404Page from './Pages/404/Error404Page';
import Header from './components/Header/Header';

const App = () => (
  <Router>
    <Header />

    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/404" element={<Error404Page />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>
);

export default App;
