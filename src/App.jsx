import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Cartoons from "./pages/Cartoons/Cartoons";
import Contact from "./pages/Contact/Contact";
import Poetry from "./pages/Poetry/Poetry";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cartoons" component={Cartoons} />
        <Route path="/poetry" component={Poetry} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
