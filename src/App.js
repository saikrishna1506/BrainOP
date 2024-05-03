import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm';
import PostList from './components/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        
        <Route exact path="/signup" element={<SignupForm/>}/>
        <Route exact path="/posts" element={<PostList />} /> 
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
