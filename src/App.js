import "./App.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom"
import Contact from "./Componants/contact/Contact";
import Home from "./Componants/home/Home";
import Service from "./Componants/service/Service";
import WebDevelopment from "./Componants/service/web/WebDevelopment";
import Mobile from "./Componants/service/app/Mobile";
import Header from "./Componants/header/Header";
import Footer from "./Componants/footer/Footer";
import Software from "./Componants/service/software/Software";
import Ui from "./Componants/service/ui/Ui";
import DataAnalytics from "./Componants/service/data-analytics/DataAnalytics";

function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/dataanalytics" element={<DataAnalytics />} />
      <Route path="/software" element={<Software />} />
      <Route path="/ui" element={<Ui />} />
      



    </Routes>

    <Footer />

    </BrowserRouter>
    
    </>
  );
}

export default App;
