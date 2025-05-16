import AboutUs from "./components/aboutUs";

import Header from "./components/header";
import Location from "./components/location";
import Products from "./components/products";
import Social from "./components/social";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="scroll-smooth overflow-auto">
      <Header />
      <Location />
      <Products />
      <Social />
      <AboutUs />
      <Testimonials />
    </div>
  );
}
