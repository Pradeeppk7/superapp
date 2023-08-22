import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from "./pages/Category";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
