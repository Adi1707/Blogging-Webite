import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import notFound from './notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:idOfBlog" element={<BlogDetails />}/>
            <Route exact path="*" element={<notFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
