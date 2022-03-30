import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { OperationSum } from "./pages/Operation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="oparation" element={<OperationSum />} />
      </Routes>
    </div>
  );
}

export default App;
