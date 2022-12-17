import "./App.css";
import React, { createContext, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./component/layout/Container";
import Header from "./component/layout/Header";
import BlogList from "./component/page/blog/BlogList";
import BlogWrite from "./component/page/blog/BlogWrite";
import BlogPost from "./component/page/blog/BlogPost";
import Login from "./component/page/login/Login";
import Join from "./component/page/join/Join";
import LoginInfo from "./component/layout/LoginInfo";

const initialState = {
  memberData: [],
  login: false,
};
export const MemberContext = createContext({
  memberData: [],
  login: false,
  dispatch: () => {},
});

export const ADD_MEMBER = "ADD_MEMBER";
export const SET_LOGIN = "SET_LOGIN";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MEMBER: {
      const memberData = action.memberData;
      return {
        ...state,
        memberData,
      };
    }
    case SET_LOGIN: {
      const login = action.login;
      return {
        login,
      };
    }

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("최상단", state.memberData);
  return (
    <MemberContext.Provider
      value={{ memberData: state.memberData, login: state.login, dispatch }}
    >
      <Header>소플의 미니 블로그</Header>
      <Container>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="blogWrite" element={<BlogWrite />} />
          <Route path="blogPost/:post" element={<BlogPost />} />
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
        </Routes>
      </Container>
    </MemberContext.Provider>
  );
}

export default App;
