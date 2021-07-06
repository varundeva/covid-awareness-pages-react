import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Precautions from "./components/precautions/Precautions";
import Symptoms from "./components/symptoms/Symptoms";
import Contact from "./components/contact/Contact";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/precautions" component={Precautions} />
        <Route exact path="/symptoms" component={Symptoms} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
