import "./app.css";
import { Layout } from "antd";
import AppHeader from "./components/AppHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Feature from "./components/Feature";
import How from "./components/How";
import Faq from "./components/Faq";
import AppFooter from "./components/AppFooter";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content>
        <div className="container">
          <Hero />
          <About />
          <Feature />
        </div>
        <How />
        <div className="container">
          <Faq />
          <Pricing />
          <Contact />
        </div>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
