
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './User/Signup';
import Signin from './User/Signin';
import './App.css';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main></Main>}></Route> */}
          <Route path="/" element={<Main/>}></Route>
          <Route path="/users/signup" element={<Signup/>}></Route>
          <Route path="/users/signin" element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
