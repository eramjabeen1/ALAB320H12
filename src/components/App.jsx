import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Footer from "./Footer";
import "../style.css";
import brooklyn from "../../images/brooklyn.jpg";
import vogue from "../../images/vogue.jpg";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Article
        title="On the Street in Brooklyn"
        image={brooklyn}
        date="11/12/20"
        text="Cray ipsum, dolor sit amet consectetur adipisicing elit..."
      />
      <Article
        title="Vintage in Vogue"
        image={vogue}
        date="11/11/20"
        text="Selfies sunt, dolor sit amet consectetur adipisicing elit..."
      />
      <Footer />
    </>
  );
}

export default App;
