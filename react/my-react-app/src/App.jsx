import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import navData from "./lib/navdata";

function App() {
  return (
    <>
      <Header navData={navData} />
      <Footer navData={navData} />
    </>
  );
}

export default App;
