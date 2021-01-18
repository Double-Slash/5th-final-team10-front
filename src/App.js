import { BrowserRouter,Route} from "react-router-dom";
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyPage from './pages/MyPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact={true} component={MainPage}></Route>
        <Route path="/mypage" exact={true} component={MyPage}></Route>
        <Route path="/signin" exact={true} component={LoginPage}></Route>
        <Route path="/signup" exact={true} component={RegisterPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

