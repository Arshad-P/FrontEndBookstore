
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';


function App() {
  return (
    <Router>
        <Navbar/>

      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/books' element={<Books/>}/>
      <Route  path='/addbooks' element={<AddBooks/>}/>
      </Routes>
        <Footer/>
    </Router>
  
  );
}
export default App;
