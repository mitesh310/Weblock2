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
import Angular from "./Componants/technology/frontend/Angular"
import New from "./Componants/technology/frontend/New";
import Vuejs from "./Componants/technology/frontend/Vuejs";
import Html from "./Componants/technology/frontend/Html";
import Node from "./Componants/technology/backend/Node";
import Laravel from "./Componants/technology/backend/Laravel";
import Socialmedia from "./Componants/technology/socialmedia/Socialmedia";
import DevOpsConsulting from "./Componants/technology/devops/DevOpsConsulting";
import DevOpsImplementation from "./Componants/technology/devops/DevOpsImplementation";
import DevOpsAutomation from "./Componants/technology/devops/DevOpsAutomation";
import Flutter from "./Componants/technology/mobile/Flutter";
import Net from "./Componants/technology/backend/Net";
import Phython from "./Componants/technology/backend/Phython";
import Java from "./Componants/technology/backend/Java";
import Spring from "./Componants/technology/backend/Spring";
import Rdev from "./Componants/technology/backend/Rdev";
import Django from "./Componants/technology/backend/Django";
import Manual from "./Componants/technology/qa/Manual";
import Automation from "./Componants/technology/qa/Automation";
import Aws from "./Componants/technology/cloud/Aws";
import Azure from "./Componants/technology/cloud/Azure";
import Gcp from "./Componants/technology/cloud/Gcp";
import Android from "./Componants/technology/mobile/Android";
import Native from "./Componants/technology/mobile/Native";
import Ios from "./Componants/technology/mobile/Ios";
import Javascript from "./Componants/technology/frontend/Javascript";


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
      <Route path="/vue" element={<Vuejs />} />
      <Route path="/html" element={<Html />} />
      <Route path="/node" element={<Node />} />
      <Route path="/laravel" element={<Laravel />} />
      <Route path="/socialmedia" element={<Socialmedia />} />
      <Route path="/devopsconsulting" element={<DevOpsConsulting />} />
      <Route path="/devopsimplementation" element={<DevOpsImplementation />} />
      <Route path="/devopsautomation" element={<DevOpsAutomation />} />
      <Route path="/flutter" element={<Flutter />} />
      <Route path="/net" element={<Net />} />
      <Route path="/python" element={<Phython />} />
      <Route path="/java" element={<Java />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="/automation" element={<Automation />} />
      <Route path="/aws" element={<Aws />} />
      <Route path="/azure" element={<Azure />} />
      <Route path="/gcp" element={<Gcp />} />
      <Route path="/android" element={<Android />} />
      <Route path="/native" element={<Native />} />
      <Route path="/ios" element={< Ios/>} />
      <Route path="/javascript" element={< Javascript/>} />
      <Route path="/spring" element={< Spring/>} />
      <Route path="/rdev" element={< Rdev/>} />
      <Route path="/django" element={< Django/>} />





      



    </Routes>

    <Footer />

    </BrowserRouter>
    
    </>
  );
}

export default App;
