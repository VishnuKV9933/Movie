import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./Components/Search/Search";
import MovieDetail from "./Components/MovieDetails/MovieDetails";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Search />} />
    <Route exact path="/moviedetails/:id" element={<MovieDetail />} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
