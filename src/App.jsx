import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import SignIn from './components/SignIn'
import Header from './layouts/header'
import ProductList from './components/ProductList'
import ProductInfo from './components/ProductInfo'
import AddProduct from './components/AddProduct'

/**
 * 라우터 추가 순서
 * 1. 헤더의 항목 생성 - 경로 설정
 * 2. 항목 컴포넌트 생성
 * 3. App.jsx에 임포트하고 경로 설정
 */

function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  //로그인 핸들러
  const handleLogin = (username) => {
    setIsLoggedIn(true); // 로그인 성공시 상태 업데이트
    setUsername(username) //로그인한 사용자ID 저장
  }

  //로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          {/* 헤더 영역 */}
          <Header 
            isLoggedIn = {isLoggedIn}
            username = {username}
            onLogout = {handleLogout}
          />

          {/* 본문 영역 */}
          <div className='contents'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/products' element={<ProductList />} />
              {/* :id -> URL에서 동적으로 변하는 부분을 나타냄 */}
              <Route path='/products/:id' element={<ProductInfo />} />
              <Route path='/add-product' element={<AddProduct />} />
              <Route path='/sign-in' element={<SignIn onLogin = {handleLogin}/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
