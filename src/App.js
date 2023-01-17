import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmpListing from './crud/EmpListing';
import EmpCreate from './crud/EmpCreate';
import EmpDetails from './crud/EmpDetails';
import EmpEdit from './crud/EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing/>}></Route>
          <Route path='/employee/create' element={<EmpCreate/>}></Route>
          <Route path='/employee/detail/:id' element={<EmpDetails/>}></Route>
          <Route path='/employee/edit/:id' element={<EmpEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;