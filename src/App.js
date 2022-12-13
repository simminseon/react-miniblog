import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./component/layout/Container";
import Header from "./component/layout/Header";
import BlogList from "./component/page/blog/BlogList";
import BlogWrite from "./component/page/blog/BlogWrite";
import BlogPost from "./component/page/blog/BlogPost";
import Login from "./component/page/login/Login";
import Join from "./component/page/join/Join";

function App() {
  return (
    <>
      <Header>소플의 미니 블로그</Header>
      <Container>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="blogWrite" element={<BlogWrite />} />
            <Route path="blogPost/:post" element={<BlogPost />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        {/* <Login /> */}
        <Join />
      </Container>
    </>
  );
}

export default App;
