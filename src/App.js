import Header from "./Cmp/Header/Header";
import Footer from "./Cmp/Footer/Footer";
import Homepage from "./Cmp/Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css"
import {
    BrowserRouter as Router,
    Routes,
    Route

} from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css"



const App = ()=>{
  const design = (
    <>
    <Router>
      <Header />
      <div>
      
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="blog" element={<h1>welcome to blog</h1>}/>
          <Route exact path="s-e" element={<h1>welcome to software engineering</h1>}/>
          <Route exact path ="w-e" element={<h1>welcome to web-delopment</h1>}/>
          <Route exact path="robotics" element={<h1>welcome to robotics</h1>}/>
          <Route exact path="contact-us" element={<h1>welcome to contact-us</h1>}/>
          <Route exact path="register" element={<h1>welcome to register</h1>}/>

        </Routes>

    
      </div>
      <Footer/>
      </Router>
    </>
  );
  return design;
}
export default App;