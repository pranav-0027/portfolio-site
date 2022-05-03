import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout/layout.component';


const App = () => {
  return (
   <Routes>
     <Route path='/' element={<Layout />} />
   </Routes>
  );
}

export default App;
