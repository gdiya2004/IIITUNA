import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "../src/pages/Home"
import {About} from "../src/pages/About"
import {Contact} from "../src/pages/Contact"
import {Register} from "../src/pages/Register"
import {Service} from "../src/pages/Service"
import {Login} from "../src/pages/Login"
import {NavBar} from "../src/components/NavBar"
import {Error} from "../src/pages/Error"
import {Footer} from "../src/components/Footer"
import { Logout } from "./pages/Logout"
import { useEffect } from "react";
import { Cart } from "./components/cart"
import { AdminLayout } from "./components/layouts/Admin-Layout"
import {AdminContacts} from "../src/components/AdminContacts"
import {AdminUsers} from "../src/components/AdminUsers"
// import {slides} from "./data/carouselData.json"
// import { Carousel } from "./components/Carousel"
import SingleProduct from "./pages/singleProduct"
import { ProPRegister } from "./pages/ProRegistrater"
export const App=()=>{
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/YOUR_UNIQUE_TIDIO_CODE.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return(
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="*" element={<Error/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
    <Route path="/provider" element={<ProPRegister/>}/>
    <Route path="/admin" element={<AdminLayout/>}>
      <Route path="users" element={<AdminUsers/>}/>
      <Route path="contact" element={<AdminContacts/>}/>
    </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}