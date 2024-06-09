import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import SearchBook from './components/SearchBook';
import DeleteBooks from './components/DeleteBooks';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddBooks />} />
        <Route path='/search' element={<SearchBook />} />
        <Route path='/delete' element={<DeleteBooks />} />
        <Route path='/viewAll' element={<ViewAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
