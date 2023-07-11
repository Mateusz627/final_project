import './App.css'
import CustomAppBar from "./components/AppBar.jsx";
import ControlledCarousel from "./components/Slider.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <>
        <CustomAppBar />
        <ControlledCarousel/>

        <div className="products-heading">
            <h2>Best Selling Products</h2>
            <p>Speakers of many variations</p>
        </div>


        Footer
    </>
  )
}

export default App
