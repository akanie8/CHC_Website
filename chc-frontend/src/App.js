import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import {Home} from './screens';

function App() {
  return (
      <Router>

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

      </Router>
  );
}

export default App;
