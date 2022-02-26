import Home from "./views/HomePage/Home";
import RestaurantDetails from "./views/RestaurantDetails/RestaurantDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:name" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
