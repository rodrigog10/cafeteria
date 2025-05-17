import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import Header from "./components/header";
import Location from "./components/location";
import Products from "./components/products";
import Social from "./components/social";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="scroll-smooth overflow-x-hidden">
      <Header />
      <Location />
      <Products />
      <Social />
      <Testimonials />
      <AboutUs />
      <Footer/>
    </div>
  );
}
