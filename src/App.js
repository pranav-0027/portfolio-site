import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.component';
import Home from './components/home/home.component';
import Contact from './components/contact/contact.component';
import About from './components/about/about.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
