import DayList from './components/DayList';
import Header from './components/Header';
import Day from './components/Day';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<DayList/>}></Route>
        <Route path="/day/:day" element={<Day />}></Route>
        <Route path="*" element={<EmptyPage/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
