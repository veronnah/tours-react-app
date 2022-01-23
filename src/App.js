import "./App.css";

import { Route, Routes } from "react-router-dom";

import AllToursPage from "./pages/AllTours";
import NewTourPage from "./pages/NewTour";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/layout";
import { AboutUsPage } from "./pages/AboutUs";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllToursPage />} />
        <Route path="/new-tour" element={<NewTourPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;