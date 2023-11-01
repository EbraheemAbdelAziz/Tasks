import { Outlet } from "react-router-dom";
import Header from "./shared/Header.js";
import Footer from "./shared/Footer.js";


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
