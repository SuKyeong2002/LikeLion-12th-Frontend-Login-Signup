// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
  height: 100vh;
`;

const Nav = styled.nav`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 18px;
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 80px; /* 네비게이션의 높이만큼 여백 추가 */
  display: flex;
  justify-content: center;
  width: 100%;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Nav>
          <NavLink to="/login">로그인</NavLink>
          {' | '}
          <NavLink to="/register">회원가입</NavLink>
        </Nav>
        <ContentWrapper>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </ContentWrapper>
      </AppContainer>
    </Router>
  );
};

export default App;
