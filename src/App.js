import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import FormPage from './pages/FormPage';
import Dashboard from './pages/Dashboard';
import Browse from './pages/Browse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/browse" element={<Browse></Browse>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
