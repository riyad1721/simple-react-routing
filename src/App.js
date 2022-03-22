
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
