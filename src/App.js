import "./App.css";
import React, { createContext, useReducer } from "react";
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
};
export const MemberContext = createContext({
  memberData: [],
  dispatch: () => {},
});

export const ADD_MEMBER = "ADD_MEMBER";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MEMBER: {
      // const memberData = [
      //   {
      //     id: action.id,
      //     password: action.password,
      //     email: action.email,
      //   },
      // ];
      const memberData = action.memberData;
      return {
        ...state,
        memberData,
      };
    }

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.memberData);
  return (
    <MemberContext.Provider value={{ memberData: state.memberData, dispatch }}>
      <Header>소플의 미니 블로그</Header>
      <Container>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {/* <Route path="/" element={<BlogList />} /> */}
            <Route path="blogWrite" element={<BlogWrite />} />
            <Route path="blogPost/:post" element={<BlogPost />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        {/* <Login /> */}
        <Join />
      </Container>
    </MemberContext.Provider>
  );
}

export default App;
