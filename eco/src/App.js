import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posting from "./pages/Posting";

//라우트 v6 문법 사용!
//Switch ->Routes
//component -> element
//usehistory -> useNavigate

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/posting" element={<Posting />}></Route>
        </Routes>
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  /* width: 1000px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  background-color: aliceblue;
`;
export default App;
