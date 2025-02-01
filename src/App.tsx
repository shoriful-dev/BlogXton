import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayouts from './components/RootLayouts';
import Topic from './pages/Topic';
import Post from './pages/Post';
import Feature from './pages/Feature';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import Error from './pages/Error';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootLayouts/>}>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/topic' element={<Topic/>} />
          <Route path='/post' element={<Post/>} />
          <Route path='/feature' element={<Feature/>} />
          <Route path='/pages' element={<Pages/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
