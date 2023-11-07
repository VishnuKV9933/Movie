import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./Components/Search/Search";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Search />} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
