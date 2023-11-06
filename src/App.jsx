import "./App.css";
import Nev from "./components/Nev";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MidNev from "./components/MidNev";
import BottumMenu from "./components/BottumMenu";
import CartPage from "./pages/cart/CartPage";
import DetailsPage from "./pages/details/DetailsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <Nev />
          <MidNev/>
          <BottumMenu/>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage/>} />

            <Route>
              <Route path="/details/:id" element={<DetailsPage/>} />
            </Route>
          </Routes>

          <Footer/>
       
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
