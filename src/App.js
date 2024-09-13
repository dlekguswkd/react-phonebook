import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './views/List';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* 어디부터 어디까지가 여기다 하는 곳 (여러 페이지인척하지만 사실은 한페이지에 쫘라락) */}
          <Route path='/list' element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
