import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./views/homePage/homePage"

const Wraper = styled.div`
  width: 100vw;
  min-height:100vh;
  display: flex;
  flex-direction:column;
  align-items:center;
  background:var(--background);
`
function App() {
  return (
    <BrowserRouter>
      <Wraper>
        <Routes>
          <Route path={'/'} element={<HomePage/>}></Route>
        </Routes>
      </Wraper>
    </BrowserRouter>
  );
}

export default App;
