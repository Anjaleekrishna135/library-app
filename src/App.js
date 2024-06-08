import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import SearchBook from './components/SearchBook';
import DeleteBooks from './components/DeleteBooks';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddBooks />
      <SearchBook />
      <DeleteBooks />
      <ViewAll />

    </div>
  );
}

export default App;
