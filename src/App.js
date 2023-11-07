import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./Components/Search/Search";
import MovieDetail from "./Components/MovieDetails/MovieDetails";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route  path="/search" element={<Search />} />
    <Route  path="/moviedetails/:id" element={<MovieDetail />} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
