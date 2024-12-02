
import Jobs from './jobs';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Jobdescription from './jobdescription';
import Register from './register';
import Login from './login';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/jobs" element={<Jobs/>}></Route>
        <Route exact path="/job/:id" element={<Jobdescription/>}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
