import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/context'

export default function Navbar() {

  //react redux 사용법
  //context 폴더에서 createContext()를 만든걸 useContext()로 사용할 수 있다.
  const {searchParam, setSearchParam, hSubmit} = useContext(GlobalContext);
  console.log("searchParam :", searchParam)

  return (
    <nav className='nav-flex-container'>
      <h2 className='nav-logo'>
        <Link to={'/'}>음식 레시피 앱</Link>
      </h2>
      <form onSubmit={hSubmit}>
        <label htmlFor="search"></label>
        <input id='search' type="text" name='search' placeholder='재료명을 입력하세요' 
        className='nav-search-input' value={searchParam} 
        onChange={(e)=>setSearchParam(e.target.value)}/>
      </form>
      <ul className='nav-link-ul'>
        <li><NavLink to={'/'} className={'nav-link-li'}>홈페이지</NavLink></li>
        <li><NavLink to={'/favorites'} className={'nav-link-li'}>즐겨찾기</NavLink></li>
      </ul>
    </nav>
  )
}
