import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TopPageContent from "./components/HomePage/TopPageContent";
import DownPageContent from "./components/HomePage/DownPageContent";
import Footer from "./components/HomePage/Footer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TopPageContent />
        <DownPageContent />
        <Footer />
      </div>
    );
  }
}

export default App;
