import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Time from "./Pages/Time";

function App() {
  return (
    <BrowserRouter>

      <div className="page">

        <Header />

        <main className="content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/time" element={<Time />} />
          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;