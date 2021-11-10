import Home from './home'
import Navbar from './navbar'
import Books from './books'
import Wheather from './wheather'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
   
     <BrowserRouter>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/books" element={<Books />}/>
          <Route path="/wheather" element={<Wheather />}/>
          <Route path="/" exact element={<Home />}/>
        </Routes> 
      </div>
      </BrowserRouter>
   
  );
}

export default App;
     
        
        
       
       
        
        
