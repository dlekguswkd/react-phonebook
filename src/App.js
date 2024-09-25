import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List.jsx';
import WriteForm from './pages/WriteForm';
import EditForm from './pages/EditForm';
import List2 from './pages/List2.jsx';
import List3 from './pages/List3.jsx';
import ItemPerson from './pages/ItemPerson.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* 어디부터 어디까지가 여기다 하는 곳 (여러 페이지인척하지만 사실은 한페이지에 쫘라락) */}
          <Route path='/' element={<List />} />
          <Route path='/writeform' element={<WriteForm />} />
          <Route path='/editform/:no' element={<EditForm />} />
          <Route path='/list2' element={<List2 />} />
          <Route path='/list3' element={<List3 />} />
          <Route path='/itemperson' element={<ItemPerson />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
