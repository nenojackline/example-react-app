import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="banner">
      <Navbar />
      <Section />
      <Footer />
    </div>
  );
}
