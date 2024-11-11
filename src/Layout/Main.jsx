import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-2 lg:px-0">

        <Outlet />

      </div>

      <Footer />
      
    </>
  );
};

export default Main;
