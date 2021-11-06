import "./App.css";
import { Header } from "./Header/Header";
import { Presentation } from "./Presentation/Presentation";
import { Design } from "./Design/Design";
import { Products } from "./Products/Products";
import { Office } from "./Office/Office";
import { Hardway } from "./Hardway/Hardway";
import { Meaningful } from "./Meaningful/Meaningful";
import { Inspires } from "./Inspires/Inspires";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Design />
      <Products />
      <Office />
      <Hardway />
      <Meaningful />
      <Inspires />
      <Footer />
    </div>
  );
}

export default App;
