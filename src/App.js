
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './Main/Main';
import SignupFinal from './User/SignupFinal';
import MyFeed from './Main/MyFeed';
import Write from './Main/Write';
import Like from './Main/Like';
import MyPage from './User/MyPage';
import Calendar from './Main/Calendar';
import SigninFinal from './User/SigninFinal';
import Logout from './User/Logout';
import FindEmail from './User/FindEmail';
<<<<<<< HEAD
import Profile from "./User/Profile";
import Auth from './User/Auth';
=======
import FindPassword from './User/FindPassword';
>>>>>>> 63bb5bad1cc73f50c64779182b59389a625f65dd

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main></Main>}></Route> */}
          <Route path="/" element={<Main />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/myfeed" element={<MyFeed />}></Route>
          <Route path="/like" element={<Like />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/users/signup" element={<SignupFinal />}></Route>
          <Route path="/users/signin" element={<SigninFinal />}></Route>
          <Route path="/users/logout" element={<Logout />}></Route>
          {/* <Route path="/oauth/kakao" element={<Main />}></Route> */}
          <Route path="/users/findEmail" element={<FindEmail />}></Route>
<<<<<<< HEAD
          {/* <Route path="/oauth/kakao"><Auth /></Route>
          <Route path="/profile"><Profile /></Route> */}
=======
          <Route path="/users/findPassword" element={<FindPassword />}></Route>
>>>>>>> 63bb5bad1cc73f50c64779182b59389a625f65dd
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
