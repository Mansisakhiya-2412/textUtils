//import logo from './logo.svg';
import './App.css';
import About from './componenets/About';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';



let name = "Mansi"
function App() {
  return (
    <>
   
    <Navbar title="TextUtils"  />
    {/* <Navbar /> */}
    <div className="container my-3">
       <TextForm heading = "Enter the text to analyze below"/>

       {/* <About/> */}
    </div>
    

    </>
  );
}

export default App;
