import "./App.css";
import NavbarV2 from "./components/Navbar/NavbarV2";
import TopPageContent from "./components/HomePage/TopPageContent";
import DownPageContent from "./components/HomePage/DownPageContent";
import Footer from "./components/HomePage/Footer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarV2 />
        <TopPageContent />
        <DownPageContent />
        <Footer />
      </div>
    );
  }
}

export default App;
