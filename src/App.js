import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CallToAction from "./components/CallToAction";
import Homepage from "./components/Homepage";
import Specials from "./components/Specials";
import CustomersSay from "./components/CustomersSay";
import Chicago from "./components/Chicago";
import BookingPage from "./components/BookingPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <CallToAction />
      <Homepage />
      <Specials />
      <CustomersSay />
      <Chicago />
      <BookingPage />
      <Routes>
        <Route path="/call-to-action" element={<CallToAction />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/testimonials" element={<CustomersSay />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
