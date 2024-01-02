import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";
import Footer from "./components/footer/Footer";
import banner_women from './components/Assets/banner_women.png'
import banner_men from './components/Assets/banner_mens.png'
import banner_kids from './components/Assets/banner_kids.png'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestion";
import ThankYouPage from "./pages/ThankYou";
import SearchResultPage from "./pages/SearchResults";
import NotFoundPage from "./pages/404";
import ContactUsPage from "./pages/Contacts";
import BlogPage from "./pages/Blog";
import ReviewPage from "./pages/Review";
import CheckoutPage from "./pages/Checkout";

export default function App() {
  return (
    <>
  

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />

          <Route path="/men" element={<ShopCategory banner={banner_men} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={banner_women} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
          {/* <Route path="/products" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route> */}
           <Route path="/products/:productId" element={<Products />} />
       
        <Route path="/cart" element={<Cart />}/>
        <Route path="/registration" element={<Registration />}/>

        <Route path="/privacypolicy" element={<PrivacyPolicy />}/>

        <Route path="/questions" element={<FrequentlyAskedQuestions />}/>
        <Route path="/thankyou" element={<ThankYouPage />}/>
        <Route path="/searchresults" element={<SearchResultPage />}/>
        <Route path="/contactus" element={<ContactUsPage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/reviews" element={<ReviewPage />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
        <Route path="*" element={<NotFoundPage />}/>

        </Routes>
<Footer />
      </BrowserRouter>
    </>
  );
}
