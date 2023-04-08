import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="right">
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
