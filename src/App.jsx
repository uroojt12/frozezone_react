import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/includes/footer";
import Header from "./components/includes/header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Flavor from "./components/pages/Flavor";
import Catering from "./components/pages/Catering";
import Work from "./components/pages/work";
import Multiform from "./components/pages/Multi_form";
function App() {
  const PageLayout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />{" "}
            <Route exact path="/contact" element={<Contact />} />{" "}
            <Route exact path="/flavor" element={<Flavor />} />{" "}
            <Route exact path="/catering" element={<Catering />} />{" "}
            <Route exact path="/work" element={<Work />} />{" "}
            <Route exact path="/multiform" element={<Multiform />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
