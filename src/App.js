
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login  from "./login";
import Navbar from "./navbar"
import Animation from "./animation"
 
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/animation' element={<Animation/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
