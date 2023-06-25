
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Contect from './component/Contect';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


let name="Adil";
let fb="https://www.facebook.com/begaadil555";
let Whatapp="https://wa.me/+918449827867";
let twitter="https://twitter.com/Aadilbeg7";
let ig="https://www.instagram.com/beg_adil";
let tl="/";

function App(){
return(
    <>
    <Router>
    <div>
       
   <Navbar Title= {name} fb={fb} Whatapp={Whatapp} twitter={twitter} ig={ig} tl={tl}/>
   <br/>
  
   

        <Routes>
          
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/Contect" element={<Contect/>}/>
          
          
        </Routes>
        

</div>
</Router>
</>
);
  
}
export default App;