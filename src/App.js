import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./component/layout/Container";
import Header from "./component/layout/Header";
import BlogList from "./component/page/BlogList";
import BlogWrite from "./component/page/BlogWrite";
import BlogPost from "./component/page/BlogPost";

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
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
