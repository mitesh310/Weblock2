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
import Graphic from "./Componants/service/graphic/Graphic";
import Marketing from "./Componants/service/marketing/Marketing";
import Aboutus from "./Componants/about/Aboutus";
import Angular from "./Componants/technology/angular/Angular"
import New from "./Componants/technology/react/New";


function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/dataanalytics" element={<DataAnalytics />} />
      <Route path="/software" element={<Software />} />
      <Route path="/ui" element={<Ui />} />
      <Route path="/graphics" element={<Graphic />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/angularjs" element={<Angular />} />
      <Route path="/react" element={<New />} />


      



    </Routes>

    <Footer />

    </BrowserRouter>
    
    </>
  );
}

export default App;
