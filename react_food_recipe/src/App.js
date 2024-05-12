
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar'
import Favorites from './pages/favorites/Favorites'
import Details from './pages/details/Details'

//npm i react-router-dom
//리액트 라우터를 사용하려면 index.js에서
//App 컴포넌트를 <BrowserRouter></BrowserRouter>로 감싸준다.

function App() {
  return (
    <div className='base-container'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />

      {/* 쿼리 파라미터(아이템 상세페이지별 동적으로 url을 설정하는 페이지) */}
      {/* 하는방법 --> /:id    */}
      <Route path='/detail/:id' element={<Details />} />
      
    </Routes>
    </div>
  )
}

export default App;
