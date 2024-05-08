import Header from './components/Layout/Header/Header.jsx'
import Footer from "./components/Layout/Footer/Footer.jsx";
import Policy from './components/Layout/Policy/Policy.jsx';
import Slider from './components/Layout/Slider/Slider.jsx';
import Categories from './components/Layout/Categories/Categories.jsx';
import Products from './components/Products/Products.jsx';
import './App.css'
import Campaigns from './components/Campaigns/Campaigns.jsx';



function App() {

  return (
    <div>
        <Header/>
        <Slider/>
        <Categories/>
        <Products/>
        <Campaigns/>
        <Policy/>
        <Footer/>
    </div>
  )
}

export default App
