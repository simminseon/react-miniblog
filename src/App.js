import "./App.css";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./component/layout/Container";
import Header from "./component/layout/Header";
import BlogList from "./component/page/blog/BlogList";
import BlogWrite from "./component/page/blog/BlogWrite";
import BlogPost from "./component/page/blog/BlogPost";
import Login from "./component/page/login/Login";
import Join from "./component/page/join/Join";

const initialState = {
  memberData: [],
  user: {},
  login: false,
};

export const MemberContext = createContext({
  memberData: [],
  user: {},
  login: false,
  dispatch: () => {},
});

export const ADD_MEMBER = "ADD_MEMBER";
export const SET_USER = "SET_USER";
export const SET_LOGIN = "SET_LOGIN";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MEMBER: {
      const memberData = action.memberData;
      localStorage.setItem("memberData", JSON.stringify(memberData));

      return {
        ...state,
        memberData,
      };
    }
    case SET_USER: {
      const user = action.user;
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        user,
      };
    }
    case SET_LOGIN: {
      const login = action.login;
      if (!login) {
        localStorage.removeItem("user");
      }
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
  const [memberData, setMemberData] = useState([]);
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const localStorageMemberData = localStorage.getItem("memberData");
    if (localStorageMemberData === null) {
      setMemberData([]);
    } else {
      const parseMemberData = JSON.parse(localStorageMemberData);
      setMemberData(parseMemberData);
    }

    const localStorageUserData = localStorage.getItem("user");
    if (localStorageUserData === null) {
      setUser({});
    } else {
      const parseUserData = JSON.parse(localStorageUserData);
      setUser(parseUserData);
    }

    setLogin(state.login);
  }, [state.memberData, state.user, state.login]);
  console.log("멤버정보: ", memberData);
  console.log("로그인: ", login);
  console.log("로그인 유저: ", user);
  return (
    <MemberContext.Provider
      value={{
        memberData: memberData,
        user: user,
        login: login,
        dispatch,
      }}
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
