import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import News from "./Pages/News";
import Home from "./Pages/Home";
import Time from "./Pages/Time";
import Tools from "./Pages/Tools";
import Charts from "./Pages/Charts";
import NewsDetail from "./Pages/NewsDetail";
import Guide from "./Pages/Guide";
import Articles from "./Pages/Articles";
import ArticleDetail from "./Pages/ArticleDetail";


function App() {

  return (
    <BrowserRouter>

      <div className="page">

        <Header />

        <main className="content">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route path="/guide" 
            element={<Guide />} 
            />

            <Route
              path="/time"
              element={<Time />}
            />
            <Route path="/news" 
            element={<News />} 
            />

            <Route path="/news/:id"
             element={<NewsDetail />} 
             />

            <Route
              path="/tools"
              element={<Tools />}
            />

            <Route
              path="/charts"
              element={<Charts />}
            />

            <Route path="/articles"
             element={<Articles />} 
             />

             <Route
             path="/articles/:id"
             element={<ArticleDetail />}
             />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}


export default App;