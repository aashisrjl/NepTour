import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
} from "react-router-dom";
import Contact from "../Pages/Contact";
import Layout from "../Layout/Layout";
import Attraction from "../Pages/Attraction";
import Guide from "../Pages/Guide";
import AttractionDetail from "../Pages/AttractionDetail";
import Home from "../Pages/Home";
import LoginSignup from "../Pages/LoginSignup";
import Community from "../Pages/Community";

export const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element=<Layout />>
         <Route index element={<Home />} />
         <Route path="contact" element={<Contact />} />
         <Route path="attraction" element={<Attraction />} />
         <Route path="detail" element={<AttractionDetail />} />
         <Route path="guides" element={<Guide />} />
         <Route path="community" element={<Community />} />
      </Route>
   )
);
